import React, { Component, PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';
import NavigatorContainerHOC from './NavigatorContainerHOC';
import * as NavUtil from './NavigatorStateTosser.util';

class NavigatorTosserSceneContainer extends Component {

	constructor(props, context) {
		super(props, context);
		this._exit = this._exit.bind(this);
		this._popRoute = this._popRoute.bind(this);
		this._pushRoute = this._pushRoute.bind(this);
	}

	getContainer() {
		/*switch(this.props.scene) {
		case NavUtil.SCENE_USER_LOGIN_KEY:

		}*/
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