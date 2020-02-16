import React, { Component } from 'react';
import CardList from './CardList';
import SearhBox from './SearhBox';
import './App.css'
import Scroll from './Scroll'



class App extends Component {
	
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
			}
		}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => this.setState({robots: users}))
	}

	onSearhChange = (event) => {
		this.setState({ searchfield: event.target.value})


	}
	render() {

		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})
		return(
			<div>
				<h1 className='tc f1'>Robo Directory</h1>
				<SearhBox searchChange={this.onSearhChange}/>
				
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
			);
	}
}
export default App;