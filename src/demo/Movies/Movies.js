import React, { PureComponent } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import AutoFocusAlert from '../Alert/AutoFocusAlert';
import ReactJson from 'react-json-view';
import { findMovies } from '../../service/movies-service';
import { formatJson } from '../../service/utils';
import './Movies.css';

const max = 10;

class Movies extends PureComponent {


	constructor(props) {
		super(props);
		// item id : props.item 
		this.state = {
			alert : 'What are you looking for?',
			alertVariant : 'info',
			query : '{title:/devil/}'
			
		};
	}

	  handleFormChange = (ev) => {
		  let change = {};
	      change[ev.target.name] = ev.target.value;
		  this.setState(change);
		  // console.log('handleFormChange', change);
	  }

      find = async () => {
		  this.showInfo('Searching...');
		  let data = await findMovies(this.state.query, max);
          this.setState({ data });
		  if(this.state.data.count>=0) {
			let i = this.state.data.count>max? ` Only ${max} results are shown` : '';
		  	showSuccess(`Found ${this.state.data.count} movie(s) 
				${i}`);
		  }
      }


	showError = (err) => {
			this.setState({ alert: err, alertVariant : 'danger'});
	};
	showWarn = (msg) => {
			this.setState({ alert: msg, alertVariant : 'warning' });
	};
	showSuccess = (msg) => {
			this.setState({ alert: msg, alertVariant : 'success', ready : true});
	};
	showInfo = (msg) => {
			this.setState({  alert: msg, alertVariant : 'info' });
	};

    render() {
	    return <div className="px-2" >
			<AutoFocusAlert alert={this.state.alert} alertVariant={this.state.alertVariant} >
			</AutoFocusAlert>
			
				<Form>
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
						<InputGroup.Text id="fieldLabel-query">Query in JSON</InputGroup.Text>
						</InputGroup.Prepend>
						<Form.Control 
							name="query"
							value={this.state.query}
							placeholder="{title:/devil/}"
							onChange={this.handleFormChange}
							aria-describedby="fieldLabel-query"
							/>
					</InputGroup>

					<Button variant="primary"  onClick={this.find} >
						Search
					</Button>
				</Form>


				{this.state.data && this.state.data.movies &&
					<div className="py-2" >
					{ this.state.data.movies.map( (m)=>
						<div className="px-2 py-2"><div className="movie"><div className="px-2 py-2"  >
							<OverlayTrigger trigger="hover" placement="right" overlay={
								  <Popover id={`pop-${m._id}`} >
								    <Popover.Title as="h3">Full plot</Popover.Title>
								    <Popover.Content>
								      {m.fullplot}
								    </Popover.Content>
								  </Popover>
								}>
								<span className="action title">{m.title}</span>
							</OverlayTrigger>
							<div>Cast : {
								m.cast.map( (el, i) =>(
									<>{i>0&& <span>,&nbsp;</span>}
									<span className="action cast" >{el}</span></>
								))
							}</div>
							<div>{
								m.genres.map( (el, i) =>(
									<>{i>0&& <span>,&nbsp;</span>}
									<span className="action genre">{el}</span></>
								))
							}</div>
							{m.poster && 
								<img style={{width:'auto',height:'300px'}} 
									src={m.poster} /> }
						</div></div></div>
						
							
							
					)}</div>
  				}


				{this.state.data && 
					<div className="py-2" >
						<div>Json view</div>
						<ReactJson displayDataTypes={false} src={this.state.data} collapsed />
					</div>
  				}

		</div>
	}
};

export default Movies;