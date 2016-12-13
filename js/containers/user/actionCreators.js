import * as Actions from './actionDefinitions';

export const login = (email, emailVerified) => {
	return {
		type: Actions.LOGIN,
		email, 
		emailVerified
	};
};

export const logout = () => {
	return {
		type: Actions.LOGOUT
	};
};