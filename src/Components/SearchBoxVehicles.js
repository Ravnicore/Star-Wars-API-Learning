import React from 'react';

const SearchBoxVehicles = ({searchVehiclesField, searchVehiclesChange}) => {
	return(
		<div className=''>
			<input 
			className = 'tc pa2 ba b--green bg-lightest-orange'
			type='search' 
			placeholder='Search Vehicle Names'
			onChange={searchVehiclesChange}
			/>
		</div>
	);
}


export default SearchBoxVehicles;