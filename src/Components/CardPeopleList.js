import React from 'react';
import CardPeople from './CardPeople';

const CardPeopleList = ({ people }) =>{
	return(
		<div>
			{
			people.map((person, i) =>{	
				return(
					<CardPeople
					key={i}
					name={people[i].name} 
					gender={people[i].gender}
					/>
				);
			})
			}
		</div>
	);
}

export default CardPeopleList;