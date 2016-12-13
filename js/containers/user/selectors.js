import { createSelector } from 'reselect';

export const getUser = state => state.user || {};

export const getEmail = createSelector([getUser],(user) => {
	return user.email;
});

export const getEmailVerified = createSelector([getUser],(user) => {
	return user.emailVerified;
});

export const getLogged = createSelector([getUser],(user) => {
	return user.logged;
});