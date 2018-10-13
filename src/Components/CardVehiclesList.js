import React from 'react';
import CardVehicles from './CardVehicles';

const CardVehiclesList = ({ vehicles }) =>{
	return(
		<div className='vehiclesCardsContainer'>
			{
			vehicles.map((vehicle, i) =>{	
				return(
					<CardVehicles
					key={i}
					name={vehicles[i].name} 
					model={vehicles[i].model}
					manufacturer={vehicles[i].manufacturer}
					max_atmosphering_speed={vehicles[i].max_atmosphering_speed}
					passengers={vehicles[i].passengers}
					cargo_capacity={vehicles[i].cargo_capacity}
					cost_in_credits={vehicles[i].cost_in_credits}
					/>
				);
			})
			}
		</div>
	);
}

export default CardVehiclesList;