import React from "react";
import { Link } from 'react-router-dom'

export class Map extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillUpdate() {
		console.log("will update..");
		this.setUserLocation();
	}

	componentDidMount() {
		console.log("mounted..", this.map);
		DG.then(() => {
			this.map = DG.map('map').on('click', function (e) {
				console.log('карту, координаты ' + e.latlng.lat + ', ' + e.latlng.lng);
				DG.marker([e.latlng.lat, e.latlng.lng]).addTo(this);
			});
		})
		.then(() => this.setUserLocation());
	}

	setUserLocation() {
		console.log("Map", this.map);
		this.map.locate({
			setView: true,
			watch: true
		}).on('locationfound', function (e) {
			console.log(e);
			DG.marker([e.latitude, e.longitude]).addTo(this).bindPopup('Вы кликнули по мне!');
		}).on('locationerror', function (e) {
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