import * as Actions from './actionDefinitions';

export const login = (emailVerified) => {
	return {
		type: Actions.LOGIN,
		emailVerified
	};
};

export const logout = () => {
	return {
		type: Actions.LOGOUT
	};
};

export const updateEmail = (email) => {
	return {
		type: Actions.UPDATE_EMAIL,
		email
	};
};

export const updatePassword = (password) => {
	return {
		type: Actions.UPDATE_PASSWORD,
		password
	};
};

export const updatePasswordConfirmation = (passwordConfirmation) => {
	return {
		type: Actions.UPDATE_PASSWORD_CONFIRMATION,
		passwordConfirmation
	};
};