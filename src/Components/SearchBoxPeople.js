import React from 'react';

const SearchBoxPeople = ({searchPeopleField, searchPeopleChange}) => {
	return(
		<div className='pa2'>
			<input 
			className = 'pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='Search People Names'
			onChange={searchPeopleChange}
			/>
		</div>
	);
}


export default SearchBoxPeople;