import React from 'react';
import Popup from "reactjs-popup";

const CardPeople = ({ name, gender }) => {
	return (
		<div className='tc black bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='people' src={`http://2.bp.blogspot.com/-HzFJhEY3KtU/Tea7Ku92cpI/AAAAAAAAALw/uBMzwdFi_kA/s1600/1.jpg`} width="50%" />
			<div>
				<h2>{name}</h2>
				<p>Gender: {gender}</p>
			</div>
		</div>
	);
}

export	default CardPeople;
			//<img alt='people' src={`https://swapi.co/api/people/1?size=200x200`} />