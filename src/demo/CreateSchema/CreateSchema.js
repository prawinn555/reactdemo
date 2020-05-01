import React, { PureComponent } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import ReactJson from 'react-json-view';
import { saveItem } from '../../service/data-service';

class CreateSchema extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
		formattedObject : {},
		jsonContent : `{ "value" : "3" }`,
		success : '',
		error : ''
    };
  }

  handleFormChange = (ev) => {
	  let change = {};
      change[ev.target.name] = ev.target.value;
	  this.setState(change);
	  console.log('handleFormChange', change);
  }

  save = async () => {
	try {
	  let obj = this.formatJson();
	  let res = await saveItem({
		id : this.state.id,
		type : 'FORM',
		description : 'Form definition',
		content : JSON.stringify(obj)
	  });
	  console.log('result', res);
	  this.setState( {
		  success : (res.status==='OK')? res.message : null,
		  error : (res.status!=='OK')? res.message : null,
		  formattedObject : obj
	  });
	} catch(err) {
	  console.log(err);
	  this.setState( {
		  success : null,
		  error : 'error ' +err,
	  });
	}
  };

  formatJson = () => {
	  let obj = {};
	  let err = null;
	  try {
		 obj = JSON.parse(this.state.jsonContent);
	  } catch(error) {
		  err = error;
		  obj = {
			  err : (''+err)
		  };
	  }
	  console.log('formatJson', obj);
	  if(err) throw err;
	  return obj;
  };

  render() {
    return (
      <div className="px-2" >

		{ this.state.success &&
			<Alert variant='success' >
				{this.state.success}
			</Alert>
		}
		{ this.state.error &&
			<Alert variant='danger' >
				{this.state.error}
			</Alert>
		}
		<Form>

			<InputGroup className="mb-3">
				<InputGroup.Prepend>
				<InputGroup.Text id="fieldLabel-id">Unique ID</InputGroup.Text>
				</InputGroup.Prepend>
				<Form.Control 
					name="id"
					placeholder="ex. MOVIE_FORM"
					onChange={this.handleFormChange}
					aria-describedby="fieldLabel-id" />
			</InputGroup>

			<Form.Group controlId="jsonContent">
				<Form.Label>Json content</Form.Label>
				<Form.Control as="textarea" row="5"
					name="jsonContent"
					placeholder={ `{ "value" : "3" }` }
					onChange={this.handleFormChange}
					value={this.state.jsonContent}  />
			</Form.Group>

			<Button variant="primary"  onClick={this.save} >
				Save
			</Button>
		</Form>

        <div className="py-2" >
	      <ReactJson displayDataTypes={false} src={this.state.formattedObject} />
		</div>

      </div>
    );
  }
};
export default CreateSchema;