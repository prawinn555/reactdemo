import React, { PureComponent } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import AutoFocusAlert from '../Alert/AutoFocusAlert';
import ReactJson from 'react-json-view';
import { findMovies } from '../../service/movies-service';
import { correctJson, formatJson } from '../../service/utils';
import Movie from './Movie';
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
			search_cast : '',
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
       if(this.state.search_cast.trim()) {
	      query.cast = `/${this.state.search_cast.trim()}/`;
	   }
       if( this.state.search_year.trim() ) {
	      let y = this.state.search_year.trim();
          if(y.startsWith('{')) {
			 query.year = formatJson(correctJson(y));
		  } else {
			 query.year = parseInt(y);
		  }
	   }
       if(this.state.search_query.trim()) {
	      let q = this.state.search_query.trim();
          q = formatJson(correctJson(q));
		  Object.keys(q).forEach( k => query[k] =  q[k] );
	   }
       this.addLabelsToQuery('cast', query);
       this.addLabelsToQuery('genres', query);
	   this.setState({query});
       return query;
     }

    addLabelsToQuery = (attribute, query) => {
	   let labels = this.state.search_labels.filter(l => l.type===attribute);
       if(labels.length===0) return;
       query[attribute] = {
	       $in : labels.map(l => l.value)
	   };
	}


    addLabel = (p) => {
	    // console.log('addLabel', p);
		const v = this.state.search_labels.find(l => l.type===p.type && l.value===p.value);
		if(v) {
			return;
		} else {
			this.setState( {
				search_labels : [...this.state.search_labels, p]
			}, this.find);
		}
    }

    removeLabel = (p) => {
		const v = this.state.search_labels.find(l => l.type===p.type && l.value===p.value);
		if(v) {
			this.setState( {
				search_labels : this.state.search_labels.filter(l =>  !Object.is(l,v)) 
			}, this.find);
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
						<InputGroup.Text id="fieldLabel-title">Title</InputGroup.Text>
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
						<InputGroup.Text id="fieldLabel-cast">Cast</InputGroup.Text>
						</InputGroup.Prepend>
						<Form.Control 
							name="search_cast"
							value={this.state.search_cast}
							placeholder="Ex. tom cruise"
							onChange={this.handleFormChange}
							aria-describedby="fieldLabel-cast"
							/>
					</InputGroup>
										
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
						<InputGroup.Text id="fieldLabel-title">Year</InputGroup.Text>
						</InputGroup.Prepend>
						<Form.Control 
							name="search_year"
							value={this.state.search_year}
							placeholder="Ex. 2014 or { $gt : 2014 } or { $gte : 2014 }"
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
							placeholder="Ex. {directors:/spielberg/}"
							onChange={this.handleFormChange}
							aria-describedby="fieldLabel-query"
							/>
					</InputGroup>
					
					<div className="py-2">
						Labels : {this.state.search_labels.map((l) => 
						  { 
							return <span className="px-2"  key={`T-${l.type}-V-${l.value}`} >
							<Button 
									onClick={()=>this.removeLabel(l)}
									className={`btn-sm`} 
									variant={l.type==='cast'? 'outline-primary' : 'outline-success'} >
									{l.value} <span role="img" aria-label="remove">❎ </span>
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
						<Movie key={m._id} movie={m} addLabel={this.addLabel} />
							
							
					)}</div>
  				}



		</div>
	}
};

export default Movies;