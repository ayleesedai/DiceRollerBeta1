import { StyleSheet } from 'react-native';

// Internal constants
//FONTS ***************************************************************************
const FONT_SIZE_TINY = 8;
const FONT_SIZE_LITTLE = 10;
const FONT_SIZE_NORMAL = 14;
const FONT_SIZE_BIG = 20;

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
		borderRadius: 5,
		marginBottom: 5,
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
		borderRadius: 5,
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

// PageUserLogin
export const pageUserLogin = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#999',
	},
});

// PageUserRegistration
export const pageUserRegistration = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#999',
	},
});

// NAVIGATOR
export const navigatorMain = StyleSheet.create({
	navigatorParent: {
		backgroundColor: 'transparent',
	},
	navigatorCardStack: {
		flex: 1,
	}
});

// TOSSER *************************************************************************
// TosserRootView
export const tosserRootView = StyleSheet.create({
	view: {
		flex: 1,
	},
});

// PageTossing
export const pageTossing = StyleSheet.create({
	containerview: {
		flex: 1,
		flexDirection: 'row',
	},
	animationview: {
		flex: 1,
	},
	diceview: {
		flex: 2,
		flexDirection: 'column',
	},
	dicechoseview: {
		flex: -1,
		flexDirection: 'column',
	},
	howmanydiceview: {
		flex: -1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	textDice: {
		flex: -1,
		color: COLOR_TEXT,
		fontSize: FONT_SIZE_NORMAL,
		fontWeight: 'bold',
		textAlign: 'left',
	},
	textInputDice: {
		flex: 1,
		color: COLOR_TEXT,
		fontSize: FONT_SIZE_NORMAL,
		fontWeight: 'bold',
	},
});

// DieRender
export const dieRender = StyleSheet.create({
	view: {
		backgroundColor: COLOR_BACKGROUND_DIE,
		borderRadius: 5, 
		margin: 5, 
	},
	text: {
		color: COLOR_TEXT_DIE,
		fontSize: FONT_SIZE_BIG,
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
	},
});

// TOOLBAR
// ToolBarButton
export const toolBarButton = StyleSheet.create({
	container: {
		flex: -1,
		backgroundColor: COLOR_BACKGROUND_BUTTON,
		borderRadius: 2,
		paddingLeft: 4,
		paddingRight: 4,
		paddingTop: 2,
		paddingBottom: 2,
		marginLeft: 1,
		marginRight: 1,
	},
	view: {
		flex: -1,
		width: 48,
		alignItems: 'center',
	},
	image: {
		height: 32,
		width: 32,
	},
	text: {
		color: COLOR_TEXT,
		fontSize: FONT_SIZE_TINY,
		textAlign: 'center',
	},
});

export const toolBarButtonExtra = {
	underlayColor: COLOR_BACKGROUND_DIE,
};

// TosserToolBar
export const tosserToolBar = StyleSheet.create({
	view: {
		flex: -1,
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

// EXTRA ********************************************************************************
// ExtraRootView
export const extraRootView = StyleSheet.create({
	view: {
		flex: 1,
	},
});

// ExtraToolBar
export const extraToolBar = StyleSheet.create({
	view: {
		flex: -1,
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	headerView: {
		flex: 1,
	},
	backView: {
		flex: -1,
	},
	header: {
		color: COLOR_TEXT,
		fontSize: FONT_SIZE_BIG,
		textAlign: 'left',
	},
});

// PageCredits
export const pageCredits = StyleSheet.create({
	view: {
		flex: 1,
		marginLeft: 40,
		marginRight: 40,
	},
	text : {
		color: COLOR_TEXT,
		fontSize: FONT_SIZE_LITTLE,
	},
	textHighlighted : {
		color: COLOR_TEXT,
		fontSize: FONT_SIZE_LITTLE,
		fontWeight: 'bold',
		marginLeft: 20,
	},
});

// PageSettings
export const pageSettings = StyleSheet.create({
	view: {
		flex: 1,
		padding: 20,
	},
});

// SettingsSwitch
export const settingsSwitch = StyleSheet.create({
	view: {
		flex: -1,
		flexDirection: 'row',
		marginBottom: 20,
	},
	text: {
		fontSize: FONT_SIZE_NORMAL,
	},
});

// SettingsSliderPercentual
export const settingsSliderPercentual = StyleSheet.create({
	view: {
		flex: -1,
		flexDirection: 'row',
		marginBottom: 20,
	},
	slider: {
		flexGrow: 1,
	},
	text: {
		fontSize: FONT_SIZE_NORMAL,
	},
});
