import React, { PureComponent } from "react";
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import ConfirmModal from '../Modal/ConfirmModal';
import DetailItem   from './DetailItem.js';
import icons from 'glyphicons';
import { findItems, deleteItemById } from '../../service/data-service';
import EditAsRawJson from '../EditRawJson/EditRawJson';
import EditCustomForm from '../DynamicForm/EditCustomForm';

class ListItems extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
		success : 'Please wait...'
	};
	this.refresh('');
  }

  refresh = (msg) => {
	findItems(this.props.filter).then(
		(data) => {
			data = data.sort( (a,b) => a.id.localeCompare(b.id));
			this.setState( {
				data : data,
				success : msg + data.length + ' element(s) found.',
				error : ''
			});
		}, 
		(err) => {
			this.setState( {
				error : 'Error while loading : ' +err
			});
		}
	);
  };


  askConfirmDelete = (itemToDelete) => {
	  console.log('delete item', itemToDelete);
	  this.setState({
		  itemToDelete });
  };

  confirmDelete = async () => {
	let itemToDelete = this.state.itemToDelete;
	this.setState({
		  itemToDelete : null });
	try {
		let res = await deleteItemById(itemToDelete);
		console.log('delete result', res);
		this.refresh('Deleted '+itemToDelete+". ");

	} catch(err) {
		this.setState( {
			error : 'Error while deleting : ' +err
		});
	}
	

  };

  cancelDelete = () => {
	this.setState({
		  itemToDelete : null });
  };


  detailItem = (itemToShow) => {
	  console.log('itemToShow', itemToShow);
	  this.setState({
		  itemToShow });
  };


  editCustomForm = (param) => {
	  this.setState({
		  customFormParam : param });
  };

  editRawJson = (itemToEditAsRawJson) => {
	  this.setState({
		  itemToEditAsRawJson });
  };


  needRefresh = false;

  // find icons in \node_modules\glyphicons\glyphicons.js

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

		<ConfirmModal show={Boolean(this.state.itemToDelete)} 
			handleConfirm={this.confirmDelete} handleClose={this.cancelDelete} >
			<p>
				Do you want to delete the item ID {this.setState.itemToDelete} ?
			</p>
		</ConfirmModal>
  		
		{this.state.itemToShow && 
			<ConfirmModal show={Boolean(this.state.itemToShow)} 
				title={`View Item ID ${this.state.itemToShow}`}
				handleClose={() => { this.setState({itemToShow : null}); }} >
				<DetailItem item={this.state.itemToShow} />
			</ConfirmModal>
		}

		{this.state.itemToEditAsRawJson &&
			<ConfirmModal show={Boolean(this.state.itemToEditAsRawJson)} 
				size="lg"
				title={`Edit item ID ${this.state.itemToEditAsRawJson} (as raw json)`}
				handleClose={() => { 
					if(this.needRefresh) { this.refresh(); this.needRefresh=false; }
					this.setState({itemToEditAsRawJson : null}); }} >
				<EditAsRawJson itemId={this.state.itemToEditAsRawJson} callbackRefresh={()=>{this.needRefresh=true;}} />
			</ConfirmModal>
		}

		{this.state.customFormParam && 
			<ConfirmModal show={Boolean(this.state.customFormParam)} 
				size="xl"
				title={this.state.customFormParam.id? `Edit item ID ${this.state.customFormParam.id}` 
							:  `Create a new object ${this.state.customFormParam.form}`  }
				handleClose={() => { this.setState({customFormParam : null}); }} >
				<EditCustomForm param={this.state.customFormParam} />
			</ConfirmModal>
  		}

		{ this.state.data && 
		<Table striped bordered hover size="sm">
			<thead>
				<tr>
				<th>id</th>
				
				{ !this.props.filter &&
					<th>type</th>
  				}
				<th>description</th>
				<th>Custom form</th>
				<th>Actions</th>
				</tr>
			</thead>
			<tbody>
			{this.state.data.map((item) =>
				<tr key={item.id} >
					<td>{item.id}</td>
					{ !this.props.filter &&
						<th>{item.type}</th>
					}
					<td>{item.description}</td>
					<td>
						{ (item.type==='FORM') &&
							<button onClick={() => this.editCustomForm({form : item.id})} title="new instance"   >
								{icons.plus}
							</button>
						}
						{ (item.type!=='FORM') &&
							<button onClick={() => this.editCustomForm({id : item.id})} title="Edit json form" >
								✨
							</button>
						}
					</td>
					<td >
						<button onClick={() => this.editRawJson(item.id) } title="Edit raw json" >
							{icons.pencil}
						</button>
						<button onClick={() => this.detailItem(item.id)} >
							{icons.magnifyingGlass}
						</button>
						<button onClick={() => this.askConfirmDelete(item.id)} >
							{icons.wastebasket}
						</button>
					</td>
				</tr>
			)}
			</tbody>
		</Table>		
  		}
      </div>
    );
  }
};
export default ListItems;