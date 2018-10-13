import React from 'react';

const SearchBoxPeople = ({searchPeopleField, searchPeopleChange}) => {
	return(
		<div className=''>
			<input 
			className = 'tc pa2 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='Search People Names'
			onChange={searchPeopleChange}
			/>
		</div>
	);
}


export default SearchBoxPeople;