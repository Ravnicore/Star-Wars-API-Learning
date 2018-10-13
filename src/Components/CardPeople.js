import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "../Containers/App.css"

class CardPeople extends Component {
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
  		const { name, gender, height, mass, skin_color, birth_year } = this.props;
  		const closeBtn = <button className="modalCloseX" onClick={this.toggle}>&times;</button>;
		return (		
			<div className='tc black dib br3 pa3 ma2 grow shadow-5 peopleCardContainer' onClick={this.toggle}>
				<img alt='people' src={`http://2.bp.blogspot.com/-HzFJhEY3KtU/Tea7Ku92cpI/AAAAAAAAALw/uBMzwdFi_kA/s1600/1.jpg`} width="50%" />
	    		<div>
					<h1 className='cardPersonTitle'>{name}</h1>
	  			</div>	      		
		      	<Modal isOpen={this.state.modal} toggle={this.toggle} className='modalPeople' backdrop={true} centered={true} >
	          		<ModalHeader className='modalHeaderPeople' toggle={this.toggle} close={closeBtn}>
	          			<div className='modalPeopleTitle'>
	          				{name}
	          			</div>
	          		</ModalHeader>
	          		<ModalBody className='modalBodyPeople'>
	            		<p>Gender:  {gender}</p>
	            		<p>Height:  {height}</p>
	            		<p>Mass:  {mass}</p>
	            		<p>Skin color:  {skin_color}</p>
	            		<p>Birth year:  {birth_year}</p>
	          		</ModalBody>
	          		<ModalFooter className='justify-center modalFooterPeople'>
	            		<Button  color="primary" onClick={this.toggle}>Close</Button>
	          		</ModalFooter>
	        	</Modal>
			</div>
		);
	}
}

export	default CardPeople;