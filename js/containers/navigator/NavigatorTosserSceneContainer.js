import React, { Component, PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';

import NavigatorContainerHOC from './NavigatorContainerHOC';
import * as NavUtil from './NavigatorStateTosser.util';
import LoginContainer from './../user/LoginContainer';
import RegistrationContainer from './../user/RegistrationContainer';
import TosserContainer from './../tosser/TosserContainer';
import SettingsContainer from './../settings/SettingsContainer';
import AchievementsContainer from './../achievements/AchievementsContainer';
import CreditsContainer from './../credits/CreditsContainer';
import CommercialsContainer from './../commercials/CommercialsContainer';
import { 
	selectRouteUser, 
	selectRouteMain, 
	cancelScene, 
	selectSceneRegistration,
	selectSceneAchievements, 
	selectSceneCredits, 
	selectSceneCommercials, 
	selectSceneSettings 
} from './NavigatorStateTosser.util';

class NavigatorTosserSceneContainer extends Component {

	constructor(props, context) {
		super(props, context);
		this._exit = this._exit.bind(this);
		this._navigate = this._navigate.bind(this);
	}

	getContainer() {
		switch(this.props.scene.route.key) {
		case NavUtil.SCENE_USER_LOGIN_KEY:
			return <LoginContainer onLogged={this._navigate(selectRouteMain)} onSelectRegistration={this._navigate(selectSceneRegistration)} />;
		case NavUtil.SCENE_USER_REGISTER_KEY:
			return <RegistrationContainer onLogged={this._navigate(selectRouteMain)} onCancel={this._navigate(cancelScene)} />;
		case NavUtil.SCENE_MAIN_TOSSER_KEY:
			return (
				<TosserContainer 
					onLogout={this._navigate(selectRouteUser)} 
					onSelectAchievements={this._navigate(selectSceneAchievements)} 
					onSelectCredits={this._navigate(selectSceneCredits)} 
					onSelectCommercials={this._navigate(selectSceneCommercials)} 
					onSelectSettings={this._navigate(selectSceneSettings)} />);
		case NavUtil.SCENE_MAIN_SETTINGS_KEY:
			return <SettingsContainer onBack={this._navigate(cancelScene)} />;
		case NavUtil.SCENE_MAIN_ACHIEVEMENTS_KEY:
			return <AchievementsContainer onBack={this._navigate(cancelScene)} />;
		case NavUtil.SCENE_MAIN_CREDITS_KEY:
			return <CreditsContainer onBack={this._navigate(cancelScene)} />;
		case NavUtil.SCENE_MAIN_COMMERCIAL_KEY:
			return <CommercialsContainer onBack={this._navigate(cancelScene)} />;
		}
		return null;
	}

	render() {
		return this.getContainer();
	}

	_navigate(action) {
		return () => this.props.navigate(action());
	}

	_exit() {
		this.props.navigate({ type: 'exit' });
	}
}

NavigatorTosserSceneContainer.propTypes = {
	...NavigationExperimental.PropTypes.SceneRendererProps,
	navigate: PropTypes.func.isRequired,
};

export default NavigatorContainerHOC(NavigatorTosserSceneContainer);