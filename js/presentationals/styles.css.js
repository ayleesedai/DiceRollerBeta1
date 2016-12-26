import { StyleSheet } from 'react-native';

// Internal constants
//FONTS ***************************************************************************
const FONT_SIZE_LITTLE = 15;
const FONT_SIZE_NORMAL = 20;
const FONT_SIZE_BIG = 25;

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
		marginTop: 10
	},
});

// TOOLBAR
// ToolBarButton
export const toolBarButton = StyleSheet.create({
	view: {
		backgroundColor: COLOR_BACKGROUND_BUTTON,
		borderRadius: 2,
		paddingLeft: 4,
		paddingRight: 4,
		paddingTop: 2,
		paddingBottom: 2,
		marginLeft: 1,
		marginRight: 1,
	},
	text: {
		color: COLOR_TEXT,
		fontSize: FONT_SIZE_LITTLE,
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
		fontSize: FONT_SIZE_LITTLE,
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
