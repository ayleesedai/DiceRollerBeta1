import { createSelector } from 'reselect';

export const getTosser = state => state.tosser || {};

export const getDice = createSelector([getTosser],(tosser) => {
	return tosser.dice;
});