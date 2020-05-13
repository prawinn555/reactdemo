import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ReactJson from 'react-json-view';

export default function Movie(props) {

	let m = props.movie;
	const overlay = <Popover id={`pop-${m._id}`} className="popFullPlot" >
			    <Popover.Title as="h3">Full plot</Popover.Title>
			    <Popover.Content>
			      {m.fullplot}
			    </Popover.Content>
			  </Popover>;
	
	
	return  <div className="px-2 py-2"
		key={`movie-${m._id}`}
		><div className="movie"><div className="px-2 py-2"  >
	
		<OverlayTrigger placement="right" overlay={overlay}>
			<span className="action title">{m.title} ({m.year})</span>
		</OverlayTrigger>
		
		<Table className="movieTable">
			<tbody><tr>
			   <td className="poster">
					{m.poster && 
					<img  className="img-fluid" src={m.poster} alt={m.poster} /> }
			   </td>
			   <td className="movieInfo">
						<div>Cast : { m.cast && 
							m.cast.map( (el, i) =>(
								<span key={el}>{i>0&& <span>,&nbsp;</span>}
								<span className="action cast" 
									onClick={()=>props.addLabel({type:'cast',value:el})}>{el}</span></span>
							))
						}</div>
						<div>{m.genres && 
							m.genres.map( (el, i) =>(
								<span key={el}>{i>0&& <span>,&nbsp;</span>}
								<span className="action genre" 
									onClick={()=>props.addLabel({type:'genres',value:el})}>{el}</span></span>
							))
						}</div>
						
						{m.directors && 
						<div>
							Directors : {m.directors.join(', ')}
						</div>
						}
												
						<div>
							{m.countries && m.countries.join(', ')}  {m.languages && `(${m.languages.join(', ')})`}
						</div>
						
						<div className="plot">{m.plot}</div>
						
						<div className="py-2" >
							<OverlayTrigger trigger="click" rootClose placement="bottom" 
							 overlay={
								
								<Popover id={`pop-json-${m._id}`} className="popMovieJson" >
								    <Popover.Title as="h3">Json view</Popover.Title>
								    <Popover.Content>
								      <ReactJson displayDataTypes={false} src={m} />
								    </Popover.Content>
								  </Popover>
								
								
							}>
								<Button variant="light" className="btnMovieJson" >
									🎞️ More data
								</Button>
							</OverlayTrigger>
						</div>
						
				</td>
			</tr></tbody>
		</Table>
		
	
	</div></div></div>;
						
}