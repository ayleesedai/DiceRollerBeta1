// TABS
export const TAB_USER_KEY = 'TAB_USER_KEY';
export const TAB_MAIN_KEY = 'TAB_MAIN_KEY';

// SCENES - USER
export const SCENE_USER_LOGIN_KEY = 'SCENE_USER_LOGIN_KEY';
export const SCENE_USER_REGISTER_KEY = 'SCENE_USER_REGISTER_KEY';

// SCENES - MAIN
export const SCENE_MAIN_TOSSER_KEY = 'SCENE_MAIN_TOSSER_KEY';
export const SCENE_MAIN_SETTINGS_KEY = 'SCENE_MAIN_SETTINGS_KEY';
export const SCENE_MAIN_ACHIEVEMENTS_KEY = 'SCENE_MAIN_ACHIEVEMENTS_KEY';
export const SCENE_MAIN_COMMERCIAL_KEY = 'SCENE_MAIN_COMMERCIAL_KEY';
export const SCENE_MAIN_CREDITS_KEY = 'SCENE_MAIN_CREDITS_KEY';

export function createAppNavigationState() {
	return {
		// Two tabs: user and main
		tabs: {
			index: 0,
			routes: [
				{ key: TAB_USER_KEY },
				{ key: TAB_MAIN_KEY },
			],
		},
		// Scenes for the `user` tab.
		[TAB_USER_KEY]: {
			index: 0,
			routes: [{ key: SCENE_USER_LOGIN_KEY }],
		},
		// Scenes for the `main` tab.
		[TAB_MAIN_KEY]: {
			index: 0,
			routes: [{ key: SCENE_MAIN_TOSSER_KEY }],
		},
	};
}

export const pop = () => {
	return { type: 'pop' };
};

export const exit = () => {
	return { type: 'exit' };
};

export const push = (SCENE_KEY) => {
	const route = { key: SCENE_KEY };
	return { type: 'push', route };
};

export const selectTab = (TAB_KEY) => {
	return {type: 'selectTab', tabKey: TAB_KEY};
};

// Custom action
export const selectRouteUser = () => selectTab(TAB_USER_KEY);
export const selectRouteMain = () => selectTab(TAB_MAIN_KEY);
export const cancelScene = () => pop();
export const selectSceneRegistration = () => push(SCENE_USER_REGISTER_KEY);
export const selectSceneAchievements = () => push(SCENE_MAIN_ACHIEVEMENTS_KEY);
export const selectSceneCredits = () => push(SCENE_MAIN_CREDITS_KEY);
export const selectSceneCommercials = () => push(SCENE_MAIN_COMMERCIAL_KEY);
export const selectSceneSettings = () => push(SCENE_MAIN_SETTINGS_KEY);