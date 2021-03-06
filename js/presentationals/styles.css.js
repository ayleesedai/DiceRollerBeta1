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
const COLOR_TEXT = '#fff';
const COLOR_TEXT_DIE = '#E3F2FD';

// BUTTONS ************************************************************************
// ButtonPlain
export const buttonPlain = StyleSheet.create({
	view: {
		width: 250,
		backgroundColor: COLOR_BACKGROUND_BUTTON,
		borderRadius: 5,
		marginBottom: 5,
		padding: 5,
	},
	text: {
		color: COLOR_TEXT,
		fontSize: FONT_SIZE_NORMAL,
		fontWeight: '500',
		textAlign: 'center',
	},
});

export const buttonPlainExtra = {
	underlayColor: COLOR_BACKGROUND_DIE,
};

// buttonPlainDisabled
export const buttonPlainDisabled = StyleSheet.create({
	view: {
		backgroundColor: COLOR_BACKGROUND_BUTTON_DISABLED,
		borderRadius: 5,
		marginBottom: 5,
		padding: 5,
	},
	text: {
		color: COLOR_TEXT,
		fontSize: FONT_SIZE_NORMAL,
		fontWeight: '500',
		textAlign: 'center',
	},
});

// TEXTS *******************************************************************************
// TextInputPlain
export const textInputPlain = StyleSheet.create({
	textInput: {
		width: 250,
		height: 40,
		backgroundColor: '#fff',
		color: COLOR_TEXT,
		fontSize: FONT_SIZE_NORMAL,
		borderRadius: 5,
		marginBottom: 10,
	},
});

// TextPlain
export const textPlain = StyleSheet.create({
	text: {
		color: COLOR_TEXT,
		fontSize: FONT_SIZE_NORMAL,
		fontWeight: 'bold',
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
		flexDirection: 'row',
	},
});

// COMPONENTS **************************************************************************

// PageUserLogin
export const pageUserLogin = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLOR_BACKGROUND,
	},
});

// PageUserRegistration
export const pageUserRegistration = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLOR_BACKGROUND,
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
		fontSize: 16,
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
		fontSize: 16,
		padding: 10,
		textAlign: 'center',
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
		paddingTop: 5,
		paddingBottom: 5,
		marginRight: 3,
	},
	view: {
		flex: -1,
		width: 48,
		alignItems: 'center',
	},
	image: {
		height: 30,
		width: 30,
	},
	text: {
		color: COLOR_TEXT,
		fontSize: FONT_SIZE_TINY,
		fontWeight: 'bold',
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
		justifyContent: 'center',
	},
	headerView: {
		flex: 1,
	},
	backView: {
		flex: -1,
	},
	header: {
		color: COLOR_TEXT,
		fontSize: 18,
	},
});

// PageSettings
export const pageSettings = StyleSheet.create({
	view: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

// SettingsSwitch
export const settingsSwitch = StyleSheet.create({
	view: {
		flex: -1,
		flexDirection: 'row',
	},
	text: {
		fontSize: FONT_SIZE_NORMAL,
		color: COLOR_TEXT,
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
		color: COLOR_TEXT,
	},
});

// PageCredits
export const pageCredits = StyleSheet.create({
	view: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text : {
		color: COLOR_TEXT,
		fontSize: FONT_SIZE_NORMAL,
		marginBottom: 20,
	},
	textHighlighted : {
		color: COLOR_TEXT,
		fontSize: 16,
		fontWeight: 'bold',
	},
});

// PageEarn

// PageAchievements



