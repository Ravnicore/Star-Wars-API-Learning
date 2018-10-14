import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SandCrawler from '../Images/Sand_crawler.jpg';
import "../Containers/App.css"

class CardVehicles extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		modal: false,
      		backdrop: true
    	};
    	this.toggle = this.toggle.bind(this);
    	this.changeBackdrop = this.changeBackdrop.bind(this);
  	}
  	
  	toggle() {
    	this.setState({
      		modal: !this.state.modal
    	});
  	}

  changeBackdrop(e) {
  	let value = e.target.value;
  	if (value !== 'static') {
      value = JSON.parse(value);
    	}
    this.setState({ backdrop: value });
  }

  	render() {
  		const { name, model, manufacturer, max_atmosphering_speed, passengers, cargo_capacity, cost_in_credits } = this.props;
  		const closeBtn = <button className="modalCloseX" onClick={this.toggle}>&times;</button>;
		return (		
			<div className='black dib br3 pa1 ma1 grow shadow-5 vehicleCard' onClick={this.toggle}>
				<img alt='vehicles' src={SandCrawler} width="50%" />
	    		<div>
					<h1 className='cardVehicleTitle'>{name}</h1>
	  			</div>	      		
		      	<Modal isOpen={this.state.modal} toggle={this.toggle} className='modalVehicles' backdrop={true} centered={true} >
	          		<ModalHeader className='modalHeaderVehicles' toggle={this.toggle} close={closeBtn}>
	          			<div className='modalVehiclesTitle'>
	          				{name}
	          			</div>
	          		</ModalHeader>
	          		<ModalBody className='modalBodyVehicles'>
	            		<p>Model:  {model}</p>
	            		<p>Manufacturer:  {manufacturer}</p>
	            		<p>Max Speed:  {max_atmosphering_speed}</p>
	            		<p>passengers:  {passengers}</p>
	            		<p>cargo_capacity:  {cargo_capacity}</p>
	            		<hr />
	            		<p>Cost (in credits):  {cost_in_credits}</p>
	          		</ModalBody>
	          		<ModalFooter className='justify-center modalFooterVehicles'>
	            		<Button  color="primary" onClick={this.toggle}>Close</Button>
	          		</ModalFooter>
	        	</Modal>
			</div>
		);
	}
}

export	default CardVehicles;