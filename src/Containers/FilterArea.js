import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
import SearchBoxPeople from '../Components/SearchBoxPeople';
import SearchBoxVehicles from '../Components/SearchBoxVehicles';


class FilterArea extends React.Component {

	render() {
		return(
			<div>
				<div className='flex flex-row outline'>
	              <h2 className="sectionTitles w-100">Filter Area</h2>
	            </div>
	            <div className='flex flex-row items-center justify-center filterTextBox'>
	              <p>Person's Name:</p>
	              <SearchBoxPeople searchPeopleChange={this.onSearchPeopleChange}/>
	            </div>
	            <div className='flex flex-row items-center justify-center filterTextBox'>
	              <p>Vehicle's Name:</p>
	              <SearchBoxVehicles searchVehiclesChange={this.onSearchVehiclesChange}/>
	            </div>
            </div>
		)
	}
}


export default FilterArea;