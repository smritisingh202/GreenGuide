import React from 'react';
import './index.css';
import './App.css';




const Card=({name,type,Exposure,Habit,Height,logo,link,id})=>{
	return(
		
			<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 flip-card' >
				<div className='flip-card-inner'>
					<div className='front-face'>
						<img alt='plants' className="photo" src={logo}/>
						<div>
							<h2>{name}</h2>
							<p><b>Type: </b> {type}</p>
							<p><b>Exposure: </b>{Exposure}</p>
							<p><b>Habit: </b>{Habit}</p>
							<p><b>Height: </b>{Height}</p>
							<a href = {link} class="btn btn-outline-success" role="button">View full description</a>
		                </div>
			        </div>
			    </div>
			</div>    
   

		);
}


export default Card;