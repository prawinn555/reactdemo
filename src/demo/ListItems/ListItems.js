import React, { PureComponent } from "react";
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import ConfirmModal from '../Modal/ConfirmModal';
import { findItems, deleteItemById } from '../../service/data-service';

class ListItems extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
	};
	this.refresh('');
  }

  refresh = (msg) =>{
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
						<svg 	onClick={() => this.askConfirmDelete(item.id)}
								className="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
						<path fillRule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clipRule="evenodd"/>
						</svg>
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