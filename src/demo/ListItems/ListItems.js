import React, { PureComponent } from "react";
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import ConfirmModal from '../Modal/ConfirmModal';
import DetailItem   from './DetailItem.js';
import icons from 'glyphicons';
import { findItems, deleteItemById } from '../../service/data-service';

class ListItems extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
	};
	this.refresh('');
  }

  refresh = (msg) => {
	findItems(this.props.filter).then(
		(data) => {
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
			handleconfirm={this.confirmDelete} handlecancel={this.cancelDelete} >
			<p>
				Do you want to delete the item ID {this.setState.itemToDelete} ?
			</p>
		</ConfirmModal>
  		
		<ConfirmModal show={Boolean(this.state.itemToShow)} 
			 title={'Item ID ' + this.state.itemToShow}
			 handlecancel={() => { this.setState({itemToShow : null}); }} >
			<DetailItem item={this.state.itemToShow} />
		</ConfirmModal>

		{ this.state.data && 
		<Table striped bordered hover size="sm">
			<thead>
				<tr>
				<th>id</th>
				
				{ !this.props.filter &&
					<th>type</th>
  				}
				<th>description</th>
				<th></th>
				<th></th>
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
					<td >
						<a href="#" onClick={() => this.detailItem(item.id)} >
							{icons.magnifyingGlass}
						</a>
					</td>
					<td >
						<a href="#" 	onClick={() => this.askConfirmDelete(item.id)} >
							{icons.wastebasket}
						</a>
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