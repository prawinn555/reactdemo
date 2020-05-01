import React, { PureComponent } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import ReactJson from 'react-json-view';
import { findItemById } from '../../service/data-service';

class DetailItem extends PureComponent {
  constructor(props) {
	super(props);
	// item id : props.item 
    this.state = {
		success : '',
		error : ''
	};
	findItemById(props.item).then(
		(data) => {
			if(data.length>0) {
				this.setState( {
					data : data[0],
					error : ''
				});
			} else {
				this.setState( {error : 'Error : not found'});
			}
		}, 
		(err) => {
			this.setState( {error : 'Error while loading : ' +err});
		}
	);
  }


  getFormattedObject = () => {
	  console.log('data', this.state.data);
	  let content = this.state.data.content;
	  try {
		let r = JSON.parse(content);
		if(r && typeof r === 'object') {
			console.log('result', r);
			return r;
		}
	  } catch(err) {
		  console.log(err);
	  }
	  return { "content_non_json" : content };
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
		{ this.state.data && 
			<>
			<div className="container">
				<div className="row">
					Type : {this.state.data.type}
				</div>
				<div className="row">
					Description : {this.state.data.description}
				</div>
			</div>

			<div className="py-2" >
			<ReactJson displayDataTypes={false} src={this.getFormattedObject()} />
			</div>
			</>
  		}
      </div>
    );
  }
};
export default DetailItem;