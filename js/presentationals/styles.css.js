import { StyleSheet } from 'react-native';

// Internal constants
//FONTS ***************************************************************************
const FONT_SIZE_NORMAL = 20;
const FONT_SIZE_DIE = 25;

// COLORS ***********************************************************************
const COLOR_BACKGROUND = '#2196F3';
const COLOR_BACKGROUND_BUTTON = '#01579B';
const COLOR_BACKGROUND_BUTTON_DISABLED = '#888888';
const COLOR_BACKGROUND_DIE = '#0277BD';
const COLOR_TEXT = 'white';
const COLOR_TEXT_DIE = '#E3F2FD';

// BUTTONS ************************************************************************
// ButtonPlain
export const buttonPlain = StyleSheet.create({
	view: {
		backgroundColor: COLOR_BACKGROUND_BUTTON,
		borderRadius: 10,
		marginBottom: 4,
		padding: 5,
	},
	text: {
		color: 'white',
		fontSize: FONT_SIZE_NORMAL,
		fontWeight: '500',
		textAlign: 'center',
	},
});

export const buttonPlainExtra = {
	underlayColor: COLOR_BACKGROUND_DIE,
};

// ButtonPlain
export const buttonPlainDisabled = StyleSheet.create({
	view: {
		backgroundColor: COLOR_BACKGROUND_BUTTON_DISABLED,
		borderRadius: 10,
		marginBottom: 4,
		padding: 5,
	},
	text: {
		color: 'white',
		fontSize: FONT_SIZE_NORMAL,
		fontWeight: '500',
		textAlign: 'center',
	},
});

// TEXTS *******************************************************************************
// TextInputPlain
export const textInputPlain = StyleSheet.create({
	textInput: {
		color: COLOR_TEXT,
		fontSize: FONT_SIZE_NORMAL,
	},
});

// TextPlain
export const textPlain = StyleSheet.create({
	text: {
		color: COLOR_TEXT,
		fontSize: FONT_SIZE_NORMAL,
		fontWeight: 'bold',
		margin: 10,
		textAlign: 'left',
	},
});

// ROOTS *******************************************************************************
// Main root element, the parent of all views
export const rootView = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: COLOR_BACKGROUND,
	},
});

// User root element, the parent of all user views
export const userRootView = StyleSheet.create({
	view: {
		flex: 1,
		marginLeft: 50,
		marginRight: 50,
	},
});

// COMPONENTS **************************************************************************
// PageUserRegistration
export const pageUserRegistration = StyleSheet.create({
	container: {
		flex: 1,
	},
});

// PageUserLogin
export const pageUserLogin = StyleSheet.create({
	container: {
		flex: 1,
	},
});

// PageTossing
export const pageTossing = StyleSheet.create({
	container: {
		flex: 1,
	},
});

// DieRender
export const dieRender = StyleSheet.create({
	view: {
		backgroundColor: COLOR_BACKGROUND_DIE,
		borderRadius: 10, 
		margin: 5, 
	},
	text: {
		color: COLOR_TEXT_DIE,
		fontSize: FONT_SIZE_DIE,
		height: 50,
		marginTop: 10,
		textAlign: 'center',
		width: 60,
	}
});

// DiceRender
export const diceRender = StyleSheet.create({
	view: {
		flex: 1,
		alignItems: 'flex-start',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 10
	},
});
