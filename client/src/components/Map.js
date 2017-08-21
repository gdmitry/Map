import React from "react";
import { Link } from 'react-router-dom'


export class Map extends React.Component {
	constructor(props) {
		super(props);
		 this.state = {
			 points: []
			};
	}

	componentDidMount() {
		console.log("mounted..", this.map);
		DG.then(() => {
			this.map = DG.map('map').on('click', (e) => this.clickHandler(e));
		})
		.then(() => this.setUserLocation())
		.then(() => this.renderMarkers());
	}

	clickHandler(e) {
		let marker = {lat: e.latlng.lat, lng: e.latlng.lng};
		DG.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map);
		this.addMarker(marker);
	}

	addMarker(marker) {
		let copyState = {
			points: this.state.points.slice()
		};
		copyState.points.push(marker);
		this.setState(copyState);
		let stateString = JSON.stringify(copyState);
		localStorage.setItem('state', stateString);
	}

	renderMarkers() {
		let state = JSON.parse(localStorage.getItem('state'));
		state.points.forEach((point) => {
			DG.marker([point.lat, point.lng]).addTo(this.map);
		});
	}

	setUserLocation() {
		this.map.locate({
			setView: true,
			watch: true
		}).on('locationfound', function (e) {
			console.info(e);
			DG.marker([e.latitude, e.longitude]).addTo(this).bindPopup('Вы кликнули по мне!');
		}).on('locationerror', function (e) {
			console.error(e);
			DG.popup()
				.setLatLng(this.getCenter())
				.setContent('Доступ к определению местоположения отключён')
				.openOn(this);
		});
	}

	render() {
		return <div id = "map">			
		</div>;
	}
}