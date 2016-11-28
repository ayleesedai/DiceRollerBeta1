import 'react-native';
import React from 'react';

import { generateDice } from '../js/components/tosser/actionsCreator';
import { GENERATE_DICE } from '../js/components/tosser/actionsDefinition.js';
import tosser from '../js/components/tosser/reducer.js';

it('creates a valid generateDice action', () => {
	const dice = [
		{	type: 'D20' },
		{	type: 'D20' },
		{	type: 'D20' },
	];
	const action = generateDice(dice);
	
	expect(action).not.toBeNull();
	expect(action.type).toBe(GENERATE_DICE);
	expect(action.dice).not.toBeNull();
	expect(action.dice.length).toBe(dice.length);
});

it('creates dice entries into the reducer using generateDice action', () => {
	const dice = [
		{	type: 'D20' },
		{	type: 'D20' },
		{	type: 'D20' },
	];
	const expectedState = { dice };
	const receivedState = tosser(generateDice(dice));
	
	expect(receivedState).not.toBeNull();
	expect(receivedState).toBeDefined();
	expect(receivedState.dice).toBeDefined();
	expect(receivedState.dice.length).toBe(dice.length);
});