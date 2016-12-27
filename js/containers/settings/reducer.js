import {
	SET_SETTINGS_MUSIC, 
	SET_SETTINGS_SOUND, 
	SET_SETTINGS_VIBRATION, 
	SET_SETTINGS_VOLUME, 
} from './actionDefinitions.js';

const initialState = {
	music: true,
	sound: true,
	vibration: true,
	volume: 100,
};

const settings = (state=initialState, action={}) => {
	const { type } = action;
	switch(type) {
	case SET_SETTINGS_MUSIC:
		return { ...state, music: action.music };
	case SET_SETTINGS_SOUND:
		return { ...state, sound: action.sound };
	case SET_SETTINGS_VIBRATION:
		return { ...state, vibration: action.vibration };
	case SET_SETTINGS_VOLUME:
		return { ...state, volume: action.volume };
	default:
		return state;
	}
};

export default settings;
