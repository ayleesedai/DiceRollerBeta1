import 'react-native';

import { 
	setSettingsMusic, 
	setSettingsSound, 
	setSettingsVibration,
	setSettingsVolume,
} from './../js/containers/settings/actionCreators.js';
import { 
	SET_SETTINGS_MUSIC, 
	SET_SETTINGS_SOUND, 
	SET_SETTINGS_VIBRATION, 
	SET_SETTINGS_VOLUME, 
} from './../js/containers/settings/actionDefinitions.js';
import settings from './../js/containers/settings/reducer';

const {it, expect} = global;

const createState = (music, sound, vibration, volume) => {
	return { music, sound, vibration, volume };
};

const createInitialState = () => createState(true, true, true, 100);

it('creates a valid setSettingsMusic action', () => {
	const action = setSettingsMusic(true);
	
	expect(action).not.toBeNull();
	expect(action.type).toBe(SET_SETTINGS_MUSIC);
	expect(action.music).toBe(true);
});

it('creates a valid setSettingsSound action', () => {
	const action = setSettingsSound(true);
	
	expect(action).not.toBeNull();
	expect(action.type).toBe(SET_SETTINGS_SOUND);
	expect(action.sound).toBe(true);
});

it('creates a valid setSettingsVibration action', () => {
	const action = setSettingsVibration(true);
	
	expect(action).not.toBeNull();
	expect(action.type).toBe(SET_SETTINGS_VIBRATION);
	expect(action.vibration).toBe(true);
});

it('creates a valid setSettingsVolume action', () => {
	const action = setSettingsVolume(true);
	
	expect(action).not.toBeNull();
	expect(action.type).toBe(SET_SETTINGS_VOLUME);
	expect(action.volume).toBe(true);
});

it('initializes settings correctly', () => {
	const stateExpected = createInitialState();
	const stateAfter = settings();

	expect(stateAfter).toEqual(stateExpected);	
});

it('changes music value thrice', () => {
	const stateBefore = createState(true, true, true, 100);
	let stateExpected = createState(false, true, true, 100);
	let stateAfter = settings(stateBefore, setSettingsMusic(false));
	expect(stateAfter).toEqual(stateExpected);

	stateExpected = createState(true, true, true, 100);
	stateAfter = settings(stateBefore, setSettingsMusic(true));
	expect(stateAfter).toEqual(stateExpected);	

	stateExpected = createState(false, true, true, 100);
	stateAfter = settings(stateBefore, setSettingsMusic(false));
	expect(stateAfter).toEqual(stateExpected);	
});

it('changes sound value thrice', () => {
	const stateBefore = createState(true, true, true, 100);
	let stateExpected = createState(true, false, true, 100);
	let stateAfter = settings(stateBefore, setSettingsSound(false));
	expect(stateAfter).toEqual(stateExpected);

	stateExpected = createState(true, true, true, 100);
	stateAfter = settings(stateBefore, setSettingsSound(true));
	expect(stateAfter).toEqual(stateExpected);	

	stateExpected = createState(true, false, true, 100);
	stateAfter = settings(stateBefore, setSettingsSound(false));
	expect(stateAfter).toEqual(stateExpected);	
});

it('changes vibration value thrice', () => {
	const stateBefore = createState(true, true, true, 100);
	let stateExpected = createState(true, true, false, 100);
	let stateAfter = settings(stateBefore, setSettingsVibration(false));
	expect(stateAfter).toEqual(stateExpected);

	stateExpected = createState(true, true, true, 100);
	stateAfter = settings(stateBefore, setSettingsVibration(true));
	expect(stateAfter).toEqual(stateExpected);	

	stateExpected = createState(true, true, false, 100);
	stateAfter = settings(stateBefore, setSettingsVibration(false));
	expect(stateAfter).toEqual(stateExpected);	
});

it('changes volume value thrice', () => {
	const stateBefore = createState(true, true, true, 100);
	let stateExpected = createState(true, true, true, 77);
	let stateAfter = settings(stateBefore, setSettingsVolume(77));
	expect(stateAfter).toEqual(stateExpected);

	stateExpected = createState(true, true, true, 100);
	stateAfter = settings(stateBefore, setSettingsVolume(100));
	expect(stateAfter).toEqual(stateExpected);	

	stateExpected = createState(true, true, true, 77);
	stateAfter = settings(stateBefore, setSettingsVolume(77));
	expect(stateAfter).toEqual(stateExpected);	
});
