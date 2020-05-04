import React, { PureComponent } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import ReactJson from 'react-json-view';
import { findItemById, saveItem, formatJson } from '../../service/data-service';
import DynamicFormChild from './DynamicFormChild';
import SchemaForm from './SchemaForm';

class EditCustomForm extends PureComponent {


	constructor(props) {
		super(props);
		// item id : props.item 
		this.state = {
			info : 'Loading...',
		};
		this.idReadOnly = Boolean(props.param.id);

	}

	componentDidMount() {
		// the call 'setState' is available after 'mount.
		if(this.props.param.id) {
			console.log('create an prefield form');
			this.prefillForm(this.props.param.id)
			.then(()=> { 
				this.showSuccess()
			}).catch((e)=> this.showError('Error while loading : '+e));
		} else {
			console.log('create an empty form');
			this.loadForm(this.props.param.form)
			.then((form)=> {
				this.updateMap('type', form.id);
				this.updateMap('id', this.props.param.suggestedId);
				if(this.props.param.initialData) {
				  this.setState({ formattedObject : this.props.param.initialData });
				}
				return this.showSuccess();
			})
			.catch((e)=> this.showError('Error while loading : '+e));
		}
	}

   prefillForm = async (id) => {
		return findItemById(id).then(
				(listResult) => {
					if(listResult.length>0) {
						let item = listResult[0];
						for (let [key, value] of Object.entries(item)) {
							console.log(`${key}: ${value}`);
							this.updateMap(key, value);
						}
						return item;
					} else {
						return Promise.reject(`ID ${id} not found `);
					}
				}
		).then(
			(item) => this.loadForm(item.type)
		);
	};

	loadForm = async (form) => {
		if(form === 'FORM') {
			this.setState({schema : SchemaForm});
			console.log('use SchemaForm', SchemaForm);
			return Promise.resolve({id:'FORM', description:'meta schema', schema : SchemaForm });
		}
		return findItemById(form).then(
				(listResult) => {
					if(listResult.length>0) {
						let item = listResult[0];
						if(item.type!=='FORM') {
							return Promise.reject(`Object ID ${form} must be of type FORM (found ${item.type})`);
						}
						let schema = formatJson(item.content);
						if(!schema || !schema.properties) {
							return Promise.reject(`Form '${form}' has invalide schema (found ${item.content})`);
						}
						this.setState({schema});
						return item;
					} else {
						return Promise.reject(`Form '${form}' not found `);
					}
		});
	};


	showError = (err) => {
			this.setState({ success: null, info: null, warn : null, error : err});
	};

	showWarn = (msg) => {
			this.setState({ success: null, info: null, warn : msg, error : null});
	};

	showSuccess = (success) => {
			this.setState({ success, info: null, warn : null, error : null, ready : true});
			return "OK";
	};

	showInfo = (msg) => {
			this.setState({ success: null, info: msg, warn : null, error : null});
	};

	handleFormChange = (ev) => {
		let change = {};
		change[ev.target.name] = ev.target.value;
		this.setState(change);
		// console.log('handleFormChange', change);
	};

	
    onSubmit = async (data) => {
		try {
			console.log('submit', data);
			this.showInfo('Saving...');
			this.setState({formattedObject : this.transformToSave(data.formData) });
			let content = JSON.stringify(data.formData, null, ' ');
			let res = await saveItem({
				id : this.state.id,
				type : this.state.type,
				description : this.state.description,
				content : content
			});
			console.log('result', res);
			if(res.status==='OK') {
				this.showSuccess(res.message);
			} else {
				this.showError(res.message);
			}
			if(res.status==='OK' && this.props.callbackRefresh) {
				this.props.callbackRefresh();
			}
		} catch(err) {
			console.log(err);
			this.showError('' +err);
		}

	};

	transformToSave = (json) => {
		if(this.state.type!=='FORM') {
			return json;
		}
		// transform 'listFields' to 'properties'
		if(!json.listFields) {
			return json;
		}
		json.type = 'object';
		json.properties = {};
		json.listFields.forEach( (prop, i) => {
			json.properties[prop.fieldName] = prop;
			delete prop.fieldName;
			if(prop.type==='date') {
				prop.type = 'string';
				prop.format = 'date';
			}
		});
		delete json.listFields;
		console.log('transformToSave', json);
		return json
	}

	transformToShow = () => {
		if(this.state.type!=='FORM') {
			return this.state.formattedObject;
		}
		let json = Object.assign({},this.state.formattedObject);
		// transform 'listFields' to 'properties'
		if(!json.properties) {
			return json;
		}
		json.listFields = [];
		Object.getOwnPropertyNames(json.properties).forEach( (v, i) => {
			let prop = json.properties[v];
			prop.fieldName = v;
			if(prop.format==='date') {
				prop.type = 'date';
				delete prop.format;
			}
			json.listFields.push(prop);
		});
		delete json.properties;
		console.log('transformToShow', this.state.formattedObject, json);
		return json
	}

    onError = (e) => {
		this.showWarn(`Problem with a form? 
			${(e && e[0] && e[0].message)? e.message : ''}` );
		console.log('Form error', e);
	};



	updateMap = (k,v) => {
		console.log('updateMap', k, v);
		if(k==='content') {
			this.setState({formattedObject : formatJson(v)});
		} else {
			var chg = {};
			chg[k] = v;
			this.setState( 
				chg
			);
		}
	};


  	render() {

		return ( <div className="px-2" >
			{ this.state.success &&
				<Alert variant='success' >
					{this.state.success}
				</Alert>
			}
			{ this.state.info &&
				<Alert variant='info' >
					{this.state.info}
				</Alert>
			}
			{ this.state.warn &&
				<Alert variant='warning' >
					{this.state.warn}
				</Alert>
			}
			{ this.state.error &&
				<Alert variant='danger' >
					{this.state.error}
				</Alert>
			}
			{ this.state.ready &&
				<>
					<Form>
						<InputGroup className="mb-3">
							<InputGroup.Prepend>
							<InputGroup.Text id="fieldLabel-id">Unique ID</InputGroup.Text>
							</InputGroup.Prepend>
							<Form.Control 
								name="id"
								value={this.state.id}
								placeholder="required"
								onChange={this.handleFormChange}
								aria-describedby="fieldLabel-id"
								disabled={Boolean(this.idReadOnly)}
								/>
						</InputGroup>

						<InputGroup className="mb-3">
							<InputGroup.Prepend> 
							<InputGroup.Text id="fieldLabel-type">Type</InputGroup.Text>
							</InputGroup.Prepend>
							<Form.Control 
								name="type"
								value={this.state.type}
								aria-describedby="fieldLabel-type"
								disabled
								/>
						</InputGroup>

						<InputGroup className="mb-3">
							<InputGroup.Prepend>
							<InputGroup.Text id="fieldLabel-description">Description</InputGroup.Text>
							</InputGroup.Prepend>
							<Form.Control 
								name="description"
								value={this.state.description? this.state.description : ''}
								placeholder="describe your form"
								onChange={this.handleFormChange}
								aria-describedby="fieldLabel-description" />
						</InputGroup>
					</Form>
					<div className="px-2" >
						<DynamicFormChild schema={this.state.schema}
								onSubmit={this.onSubmit}
								onError={this.onError} 
								formData={this.transformToShow()}
								>
						</DynamicFormChild>
					</div>

					
					{this.state.formattedObject && 
						<div className="py-2" >
							<div>View JSON data</div>
							<ReactJson displayDataTypes={false} src={this.state.formattedObject} collapsed="true"/>
						</div>
					}
				</>
			}	
		</div>);
 	}

};
export default EditCustomForm;
