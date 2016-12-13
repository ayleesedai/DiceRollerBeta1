import * as Actions from './actionDefinitions';

const initialState = {
	email: null,
	emailVerified: false,
	logged: false
};

const user = (state=initialState, action={}) => {
	switch(action.type) {
	case Actions.LOGIN:
		return  {
			email: action.email,
			emailVerified: action.emailVerified,
			logged: true
		};
	case Actions.LOGOUT:
		return  {
			email: null,
			emailVerified: false,
			logged: false
		};
	default:
		return state;
	}
};

export default user;