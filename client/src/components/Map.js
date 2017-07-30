import React from "react";
import { Link } from 'react-router-dom'

export class Map extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let map;

		DG.then(() => {
			map = DG.map('map', {
				center: [54.98, 82.89],
				zoom: 13
			});

			map.locate({
				setView: true,
				watch: true
			}).on('locationfound', function (e) {
				DG.marker([e.latitude, e.longitude]).addTo(map).bindPopup('Вы кликнули по мне!');
			}).on('locationerror', function (e) {
				DG.popup()
					.setLatLng(map.getCenter())
					.setContent('Доступ к определению местоположения отключён')
					.openOn(map);
			}).on('click', function (e) {
				console.log('карту, координаты ' + e.latlng.lat + ', ' + e.latlng.lng);
				DG.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
			});
		});
	}

	addMarker() {

	}

	render() {
		return (
			<div>
				<div id="map" style={{ width: '500px', height: '400px' }}></div>
			</div>
		);
	}
}