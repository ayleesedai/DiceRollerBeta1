import 'react-native';

import user from '../js/containers/user/reducer';
import {login, logout, updateEmail, updatePassword, updatePasswordConfirmation} from '../js/containers/user/actionCreators';

const {it, expect} = global;

const createState = (email, password, passwordConfirmation, emailVerified, logged) => {
	return {
		email,
		password,
		passwordConfirmation,
		emailVerified,
		logged
	};
};

const createInitialState = () => createState(null, null, null, false, false);


it('initializes a valid user reducer', () => {
	const state = user();
	
	expect(state.email).toBeNull();
	expect(state.password).toBeNull();
	expect(state.passwordConfirmation).toBeNull();
	expect(state.emailVerified).toBe(false);
	expect(state.logged).toBe(false);
});

it('logs a user in', () => {
	const stateBefore = createState('validmail@gmail.com', 'validpassword', 'validpassword', false, false);
	const stateExpected = createState('validmail@gmail.com', null, null, true, true);
	const stateAfter = user(stateBefore, login(true));

	expect(stateAfter).toEqual(stateExpected);	
});

it('simulates a user logout', () => {
	const stateBefore = createState('validmail@gmail.com', 'validpassword', 'validpassword', true, true);
	const stateExpected = createInitialState();
	const stateAfter = user(stateBefore, logout());

	expect(stateAfter).toEqual(stateExpected);
});

it('updates email data', () => {
	const stateBefore = createState(null, 'validpassword', 'validpassword', false, false);
	const stateExpected = createState('validmail@gmail.com', 'validpassword', 'validpassword', false, false);
	const stateAfter = user(stateBefore, updateEmail('validmail@gmail.com'));

	expect(stateAfter).toEqual(stateExpected);
});

it('updates password data', () => {
	const stateBefore = createState('validmail@gmail.com', null, 'validpassword', false, false);
	const stateExpected = createState('validmail@gmail.com', 'validpassword', 'validpassword', false, false);
	const stateAfter = user(stateBefore, updatePassword('validpassword'));

	expect(stateAfter).toEqual(stateExpected);
});

it('updates passwordConfirmation data', () => {
	const stateBefore = createState('validmail@gmail.com', 'validpassword', null, false, false);
	const stateExpected = createState('validmail@gmail.com', 'validpassword', 'validpassword', false, false);
	const stateAfter = user(stateBefore, updatePasswordConfirmation('validpassword'));

	expect(stateAfter).toEqual(stateExpected);
});