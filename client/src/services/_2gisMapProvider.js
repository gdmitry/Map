import EventEmitter from './EventEmitter';

export default class _2gisMapProvider extends EventEmitter {
   	render(center = [54.98, 82.89], zoom = 13) {
		return DG.then(() => {
			this.map = DG.map('map', {
				center: center,
				zoom: zoom
			}).on('click', (e) => {
				let marker = {lat: e.latlng.lat, lng: e.latlng.lng};
				this.emit('add', marker);
			});
		}).then(() => this.emit('init'));
	}
    
	addMarker(point) {
		DG.marker([point.lat, point.lng])
			.addTo(this.map);
	}

	addMarkerSet(set) {
		set.forEach((point) => {
			DG.marker([point.lat, point.lng]).addTo(this.map);
		});
	}

	setCurrentLocation() {
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

}