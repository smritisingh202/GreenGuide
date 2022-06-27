import React from 'react';
import Card from'./Card';

const Cardlist=({plants})=>{
	return (

		<div className="tc">
			{
				plants.map((user, i)=>{
					return (
						<Card
						key={i}
						id={plants[i].id}
						name={plants[i].name}
						type={plants[i].type}
						Exposure={plants[i].Exposure}
						Habit={plants[i].Habit}
						Height={plants[i].Height}
						logo={plants[i].logo} 
						link={plants[i].link}

					     />
    					);
				})
			}
		</div>
		);
}

export default Cardlist;