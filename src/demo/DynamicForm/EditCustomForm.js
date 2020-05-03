import React, { PureComponent } from "react";
import CustomForm from "@rjsf/core";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import ReactJson from 'react-json-view';
import { findItemById, saveItem, formatJson } from '../../service/data-service';
import DynamicFormChild from './DynamicFormChild';

class EditCustomForm extends PureComponent {

  constructor(props) {
	super(props);
	// item id : props.item 
    this.state = {
		info : 'Loading...',
	};
	this.idReadOnly = Boolean(props.param.id);
		if(props.param.id) {
			this.prefillForm(props.param.id)
			.then(()=> { 
				this.showSuccess()
			}).catch((e)=> this.showError('Error while loading : '+e));
		} else {
			this.loadForm(props.param.form)
			.then((form)=> {
				this.updateMap('type', form.id);
				this.updateMap('id', form.id +'_' + props.param.suggestedId);
				return this.showSuccess();
			})
			.catch((e)=> this.showError('Error while loading : '+e));
		}

		this.vcountRender = 0;
  }

  countRender = () => {
	  this.vcountRender++;
	  return  this.vcountRender;
  }

  showError = (err) => {
		this.setState({ success: null, info: null, error : err});
  }

  showSuccess = (success) => {
		this.setState({ success, info: null, error : null, ready : true});
		return "OK";
  }

  showInfo = (msg) => {
		this.setState({ success: null, info: msg, error : null});
  }

  handleFormChange = (ev) => {
	  let change = {};
      change[ev.target.name] = ev.target.value;
	  this.setState(change);
	  // console.log('handleFormChange', change);
  }

	
    onSubmit = async (data) => {
		try {
			console.log('submit', data);
			this.showInfo('Saving...');
			this.setState({formattedObject : data.formData});
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
			this.showError('Error ' +err);
		}

	}

    onError = (data) => {
		console.error('Form error', data);
	}



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

   prefillForm = (id) => {
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

	loadForm = (form) => {
		return findItemById(form).then(
				(listResult) => {
					if(listResult.length>0) {
						let item = listResult[0];
						if(item.type!=='FORM') {
							return Promise.reject(`Object ID ${form} must be of type FORM (actuel ${item.type})`);
						}
						let schema = formatJson(item.content);
						if(!schema || !schema.properties) {
							return Promise.reject(`Form ID ${form} has invalide schema (actuel ${item.content})`);
						}
						this.setState({schema});
						return item;
					} else {
						return Promise.reject(`Form ID ${form} not found `);
					}
		});
	};

  render() {

	return (
	    <div className="px-2" >
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
								formData={this.state.formattedObject}
								>
						</DynamicFormChild>
					</div>

					
					{this.state.formattedObject && 
						<div className="py-2" >
							<div>Json view</div>
							<ReactJson displayDataTypes={false} src={this.state.formattedObject} />>
						</div>
					}
				</>
			}	
		</div>);
  }

};
export default EditCustomForm;
