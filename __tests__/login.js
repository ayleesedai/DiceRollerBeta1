import 'react-native';

import user from '../js/containers/user/reducer';
import {login, logout} from '../js/containers/user/actionCreators';

const {it, expect} = global;

it('initializes a valid user reducer', () => {
	const state = user();
	
	expect(state.email).toBeNull();
	expect(state.emailVerified).toBe(false);
	expect(state.logged).toBe(false);
});

it('logs a user in', () => {
	const stateExpected = {
		email: 'andrea.briozzo@gmail.com',
		emailVerified: true,
		logged: true
	};
	const stateAfter = user(undefined, login('andrea.briozzo@gmail.com', true));

	expect(stateAfter).toEqual(stateExpected);	
});

it('simulates a user logout', () => {
	const stateBefore = {
		email: 'andrea.briozzo@gmail.com',
		emailVerified: true,
		logged: true
	};
	const stateExpected = {
		email: null,
		emailVerified: false,
		logged: false
	};
	const stateAfter = user(stateBefore, logout());

	expect(stateAfter).toEqual(stateExpected);
});

