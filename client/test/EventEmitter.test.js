import assert from 'assert';
import { expect, should } from "chai";
import EventEmitter from '../src/services/EventEmitter';

describe('EventEmitter', () => {
	let service;
	beforeEach(() => {
		service = new EventEmitter(); 
  	});

	describe('#basic API tests', () => {
		it('should subscribe for events', () => {
			return false;
		});

		it('should unsubscribe for events', () => {

  		});

		it('should subscribe for one event', () => {
			[1,2,3].indexOf(0).should.be.equal(-1);
  		});
		
		it('should emit an event', () => {
			
  		});

		it('should return listeners for a specific event', () => {
			
  		});
	});  
});