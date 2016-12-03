import { GENERATE_DICE } from './actionsDefinition.js';

const initialState = {
	dice: []
};

const tosser = (state=initialState, action={}) => {
	switch(action.type) {
	case GENERATE_DICE: 
		return { dice: action.dice };
	default: 
		return state;
	}
};

export default tosser;