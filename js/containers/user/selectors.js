import { createSelector } from 'reselect';

export const getUser = state => state.user || {};

export const getEmail = createSelector([getUser],(user) => {
	return user.email;
});

export const getPassword = createSelector([getUser],(user) => {
	return user.password;
});

export const getPasswordConfirmation = createSelector([getUser],(user) => {
	return user.passwordConfirmation;
});

export const getEmailVerified = createSelector([getUser],(user) => {
	return user.emailVerified;
});

export const getLogged = createSelector([getUser],(user) => {
	return user.logged;
});

export const isEmailValid = createSelector([getEmail],(email) => {
	return email && (email.length > 0) && (email.indexOf('@') > 0);
});

export const isPasswordValid = createSelector([getPassword],(password) => {
	return password && (password.length > 8);
});

export const isPasswordConfirmationValid = createSelector([getPassword, getPasswordConfirmation, isPasswordValid],(password, passwordConfirmation, passwordValid) => {
	return passwordValid && (password===passwordConfirmation);
});
