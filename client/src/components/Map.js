import React from "react";
import { Link } from 'react-router-dom'
import _2gisMapProvider from '../services/_2gisMapProvider';

export class Map extends React.Component {
	constructor(props) {
		super(props);
		 this.state = {
			 points: []
			};

		this.mapProvider = new _2gisMapProvider();
		this.mapProvider			
			.on('init', () => {console.log('init')})
			.on('add', (marker) => {
				// TODO: Remove this crutch after fixing EventEmitter
				if(!marker) {
					return;
				}
				this.updateState(marker);
				this.mapProvider.addMarker(marker);
				this.saveState();
			});
	}

	componentDidMount() {
		this.mapProvider.render()
		.then(() => this.mapProvider.setCurrentLocation())
		.then(() => this.restoreState())
		.then((state) => this.mapProvider.addMarkerSet(state.points || []))
	}

	updateState(marker) {		
		let copyState = {
			points: this.state.points.slice()
		};
		copyState.points.push(marker);
		this.setState(copyState);
	}

	saveState() {
		let stateString = JSON.stringify(this.state);
		localStorage.setItem('state', stateString);
	}

	restoreState() {
		let state = JSON.parse(localStorage.getItem('state')) || {};
		this.setState(state);
		return state;	
	}	

	render() {
		return <div id = "map"></div>;
	}
}