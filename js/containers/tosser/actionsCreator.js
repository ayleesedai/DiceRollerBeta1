import { GENERATE_DICE } from './actionsDefinition.js';

export const generateDice = (diceInfo=[]) => {
	// FIXME: creare dei tipi di dado e usarli! Per adesso sono tutti D20
	let dice = [];
	diceInfo.forEach((info) => {
		dice.push({
			type: info.type,
			value: Math.floor(Math.random()*20+1)
		});
	});
	return {
		type: GENERATE_DICE,
		dice
	};
};