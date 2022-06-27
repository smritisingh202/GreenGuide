import React,{Component} from 'react';
import Cardlist from './Cardlist';
import {plants} from './plants';
import Searchbar from './Searchbar';
import './App.css';
import Scroll from './Scroll';
	

class App extends Component{
	constructor(){
		super()
		this.state={
			plants:plants,
			searchfield:''
		}
	}

	onSearchChange=(event)=>{
		this.setState({ searchfield: event.target.value })
	}

	render(){
		  

		const filteredplants=this.state.plants.filter(plants=>{
			return plants.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		return(
		<div className='tc'>
			<h1>GreenGuide</h1>
			<h2>Your one stop destination to all plant info that you need!!</h2>
			<Searchbar searchChange={this.onSearchChange}/>>	
			<Scroll>
		 		<Cardlist plants={filteredplants}/>
		 	</Scroll>
		</div>
		);
	}
}

export default App;
