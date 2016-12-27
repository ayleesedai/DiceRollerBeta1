import { 
	SET_SETTINGS_MUSIC, 
	SET_SETTINGS_SOUND, 
	SET_SETTINGS_VIBRATION, 
	SET_SETTINGS_VOLUME, 
} from './actionDefinitions';

export const setSettingsMusic = (music) => {
	return {
		type: SET_SETTINGS_MUSIC,
		music
	};
};

export const setSettingsSound = (sound) => {
	return {
		type: SET_SETTINGS_SOUND,
		sound
	};
};

export const setSettingsVibration = (vibration) => {
	return {
		type: SET_SETTINGS_VIBRATION,
		vibration
	};
};

export const setSettingsVolume = (volume) => {
	return {
		type: SET_SETTINGS_VOLUME,
		volume
	};
};
