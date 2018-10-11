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
					height={people[i].height}
					mass={people[i].mass}
					skin_color={people[i].skin_color}
					birth_year={people[i].birth_year}
					/>
				);
			})
			}
		</div>
	);
}

export default CardPeopleList;