import { StyleSheet } from 'react-native';

// Internal constants
//FONTS
const FONT_SIZE_NORMAL = 20;
// COLORS
const COLOR_BACKGROUND = '#2196f3';
const COLOR_BACKGROUND_BUTTON = '#01579b';
const COLOR_TEXT = 'white';

// ButtonPlain
export const buttonPlain = StyleSheet.create({
	background: {
		padding: 5,
		marginBottom: 1,
		backgroundColor: COLOR_BACKGROUND_BUTTON,
	},
	text: {
		color: 'white',
		fontSize: FONT_SIZE_NORMAL,
		fontWeight: '500',
	},
});

export const buttonPlainExtra = {
	underlayColor: COLOR_BACKGROUND,
};

// TextInputPlain
export const textInputPlain = StyleSheet.create({
	textInput: {
		fontSize: FONT_SIZE_NORMAL,
		color: COLOR_TEXT,
	},
});

// TextPlain
export const textPlain = StyleSheet.create({
	text: {
		fontSize: FONT_SIZE_NORMAL,
		textAlign: 'left',
		margin: 10,
		fontWeight: 'bold',
		color: COLOR_TEXT,
	},
});

// Main root element, the parent of all views
export const rootView = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: COLOR_BACKGROUND,
	},
});

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
		margin: 5, 
		borderRadius: 10, 
		backgroundColor: '#0277bd'
	},
	text: {
		marginTop: 10,
		color: '#e3f2fd',
		fontSize: 25,
		textAlign: 'center',
		width: 60,
		height: 50,
	}
});

// DiceRender
export const diceRender = StyleSheet.create({
	view: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		marginTop: 10
	},
});
