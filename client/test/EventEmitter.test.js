import assert from 'assert';
import { expect, should } from "chai";
import EventEmitter from '../src/services/EventEmitter';
import _ from 'lodash';

describe('EventEmitter', () => {
	let service;
	beforeEach(() => {
		service = new EventEmitter(); 
  	});

	describe('#basic API tests', () => {
		it('should subscribe for events', (done) => {
			service.on('test_event', done);
			service.emit('test_event');
		});

		it('should unsubscribe for events', () => {
			let calback = () => {
				assert.ok(false);
			};
			service.on('test_event', calback);
			service.off('test_event', calback);
			service.emit('test_event');
  		});

		it('should subscribe for one event', () => {

  		});
		
		it('should emit an event', () => {
			
  		});

		it('should return listeners for a specific event', () => {
			
  		});
	});  
});