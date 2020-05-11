import React, { PureComponent } from "react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import AutoFocusAlert from '../Alert/AutoFocusAlert';
import ReactJson from 'react-json-view';
import { findMovies } from '../../service/movies-service';
import { correctJson, formatJson } from '../../service/utils';
import './Movies.css';

const max = 10;

class Movies extends PureComponent {


	constructor(props) {
		super(props);
		// item id : props.item 
		this.state = {
			alert : 'What are you looking for?',
			alertVariant : 'info',
			search_title : '',
			search_year : '',
			search_query : '',
			search_labels : [],
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
		try {
		  let data = await findMovies(JSON.stringify(this.getQuery()), max);
          this.setState({ data });
		  let i = data.count>max? ` Only ${max} results are shown` : '';
          if(data.count>=0) {
			  this.showSuccess(`Found ${data.count} movie(s) 
					${i}`);
		  } else {
			this.showError('Error '+data.message);
		  }
		} catch(e) {
			this.showError('Error '+e);
		}
      }

     getQuery = () => {
	   let query = {};

       if(this.state.search_title.trim()) {
	      query.title = `/${this.state.search_title.trim()}/`;
	   }
       if( this.state.search_year.trim() ) {
	      let y = this.state.search_year.trim();
          if(y.startWith('{')) {
			 query.year = formatJson(correctJson(y));
		  } else {
			 query.year = `/${this.state.search_title}/`;
		  }
	   }
       let moreQuery = [];
       if(this.state.search_query.trim()) {
	      let q = this.state.search_query.trim();
          moreQuery.push(formatJson(correctJson(q)));
	   }
       if(moreQuery.length>0) {
          query.$and =  moreQuery;
       }
	   this.setState({query});
       return query;
     }


    addLabel = (p) => {
	    console.log('addLabel', p);
		const v = this.state.search_labels.find(l => l.type===p.type && l.value===p.value);
		if(v) {
			return;
		} else {
			this.setState( {
				search_labels : new Array(...this.state.search_labels, p)
			});
		}
    }

    removeLabel = (p) => {
		const v = this.state.search_labels.find(l => l.type===p.type && l.value===p.value);
		if(v) {
			this.setState( {
				search_labels : this.state.search_labels.filter(l =>  !Object.is(l,v)) 
			});
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
						<InputGroup.Text id="fieldLabel-title">Title (part of)</InputGroup.Text>
						</InputGroup.Prepend>
						<Form.Control 
							name="search_title"
							value={this.state.search_title}
							placeholder="Ex. devil"
							onChange={this.handleFormChange}
							aria-describedby="fieldLabel-title"
							/>
					</InputGroup>
					
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
						<InputGroup.Text id="fieldLabel-title">Year</InputGroup.Text>
						</InputGroup.Prepend>
						<Form.Control 
							name="search_year"
							value={this.state.search_year}
							placeholder="Ex. 2014 or { $gt : 2014 }"
							onChange={this.handleFormChange}
							aria-describedby="fieldLabel-year"
							/>
					</InputGroup>
					
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
						<InputGroup.Text id="fieldLabel-query">Other query in JSON</InputGroup.Text>
						</InputGroup.Prepend>
						<Form.Control 
							name="search_query"
							value={this.state.search_query}
							placeholder="Ex. {plot :/devil/}"
							onChange={this.handleFormChange}
							aria-describedby="fieldLabel-query"
							/>
					</InputGroup>
					
					<div className="py-2">
						Labels : {this.state.search_labels.map((l) => 
						  { console.log('render label', l);
							return <span className="px-2">
							<Button key={`T-${l.type}-V-${l.value}`} 
									onClick={()=>this.removeLabel(l)}
									className={`btn-sm`} 
									variant={l.type==='cast'? 'outline-primary' : 'outline-success'} >
									{l.value} <span>❎ </span>
							</Button></span>
						  }
						)}
					</div>
					

					<Button variant="primary"  onClick={this.find} >
						Search
					</Button>
				</Form>

				{this.state.query && 
					<div className="py-2" >
						<div>Query</div>
						<ReactJson displayDataTypes={false} src={this.state.query} collapsed />
					</div>
  				}
		

				{this.state.data && this.state.data.movies &&
					<div className="py-2" >
					{ this.state.data.movies.map( (m)=>
						<div className="px-2 py-2"
							key={`movie-${m._id}`}
						><div className="movie"><div className="px-2 py-2"  >
						
							<OverlayTrigger trigger="hover,focus" placement="right" overlay={
								  <Popover id={`pop-${m._id}`} >
								    <Popover.Title as="h3">Full plot</Popover.Title>
								    <Popover.Content>
								      {m.fullplot}
								    </Popover.Content>
								  </Popover>
								}>
								<span className="action title">{m.title} ({m.year})</span>
							</OverlayTrigger>
							
							<Table className="movieTable">
								<tbody><tr>
								   <td className="poster">
										{m.poster && 
										<img style={{width:'auto',height:'300px'}} 
											src={m.poster} /> }
								   </td>
								   <td>
											<div>Cast : {
												m.cast.map( (el, i) =>(
													<span key={el}>{i>0&& <span>,&nbsp;</span>}
													<span className="action cast" 
														onClick={()=>this.addLabel({type:'cast',value:el})}>{el}</span></span>
												))
											}</div>
											<div>{
												m.genres.map( (el, i) =>(
													<span key={el}>{i>0&& <span>,&nbsp;</span>}
													<span className="action genre" 
														onClick={()=>this.addLabel({type:'genres',value:el})}>{el}</span></span>
												))
											}</div>
											<div>{m.plot}</div>
									</td>
								</tr></tbody>
							</Table>
							

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