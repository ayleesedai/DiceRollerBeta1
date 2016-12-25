import React, { Component, PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';
import NavigatorContainerHOC from './NavigatorContainerHOC';
import * as NavUtil from './NavigatorStateTosser.util';
import LoginContainer from './../user/LoginContainer';
import RegistrationContainer from './../user/RegistrationContainer';
import TossingFilterContainer from './../tosser/TossingFilterContainer';

class NavigatorTosserSceneContainer extends Component {

	constructor(props, context) {
		super(props, context);
		this._exit = this._exit.bind(this);
		this._popRoute = this._popRoute.bind(this);
		this._pushRoute = this._pushRoute.bind(this);
	}

	getContainer() {
		switch(this.props.scene.route.key) {
		case NavUtil.SCENE_USER_LOGIN_KEY:
			return <LoginContainer navigate={this.props.navigate} />;
		case NavUtil.SCENE_USER_REGISTER_KEY:
			return <RegistrationContainer navigate={this.props.navigate} />;
		case NavUtil.SCENE_MAIN_TOSSER_KEY:
			return <TossingFilterContainer navigate={this.props.navigate} />;			
		}
		return null;
	}

	render() {
		return this.getContainer();
	}

	_pushRoute() {
		// Just push a route with a new unique key.
		const route = { key: '[' + this.props.scenes.length + ']-' + Date.now() };
		this.props.navigate({ type: 'push', route });
	}

	_popRoute() {
		this.props.navigate({ type: 'pop' });
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