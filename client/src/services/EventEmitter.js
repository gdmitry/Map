export default class EventEmitter { 
	constructor() {
		this.subscriptions = new Map();
	}   

	on(event, listener) {
		var listeners = this.subscriptions.get(event) || [];
		listeners.push(listener);
		this.subscriptions.set(event, listeners);
		return this;
	}

	off(event, listener) {
		let listeners = this.subscriptions.get(event) || [] ;
		listeners = listeners.filter((l) => {
			l !== listener;
		});
		this.subscriptions.set(event, listeners);
		return this;
	}

	once(event, listener) {
		this.on(event, () => {
			listener();
			this.off(event, listener);
		});
		return this;
	}

	emit(event, data) {
		let listeners = this.subscriptions.get(event) || [];
		listeners.forEach((l) => {
			l(data);
		});
		return !!listeners.length;
	}

	listeners(event) {
		return this.subscriptions.get(event) || [];
	}
}