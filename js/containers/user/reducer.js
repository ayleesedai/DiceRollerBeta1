import * as Actions from './actionDefinitions';

const initialState = {
	email: null,
	password: null,
	passwordConfirmation: null,
	emailVerified: false,
	logged: false
};

const user = (state=initialState, action={}) => {
	switch(action.type) {
	case Actions.LOGIN:
		return  {
			email: state.email,
			password: null,
			passwordConfirmation: null,
			emailVerified: action.emailVerified,
			logged: true
		};
	case Actions.LOGOUT:
		return  {
			email: null,
			password: null,
			passwordConfirmation: null,
			emailVerified: false,
			logged: false
		};
	case Actions.UPDATE_EMAIL:
		return {
			...state, 
			email: action.email
		};
	case Actions.UPDATE_PASSWORD:
		return {
			...state, 
			password: action.password
		};
	case Actions.UPDATE_PASSWORD_CONFIRMATION:
		return {
			...state, 
			passwordConfirmation: action.passwordConfirmation
		};
	default:
		return state;
	}
};

export default user;