import { createSelector } from 'reselect';

export const getSettings = state => state.settings || {};

export const getMusic = createSelector([getSettings],(settings) => {
	return settings.music;
});

export const getSound = createSelector([getSettings],(settings) => {
	return settings.sound;
});

export const getVibration = createSelector([getSettings],(settings) => {
	return settings.vibration;
});

export const getVolume = createSelector([getSettings],(settings) => {
	return settings.volume;
});