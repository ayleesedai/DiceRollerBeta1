import React, { Component, PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';

import NavigatorContainerHOC from './NavigatorContainerHOC';
import { TAB_USER_KEY, TAB_MAIN_KEY } from './NavigatorStateTosser.util';
import NavigatorTosserSceneContainer from './NavigatorTosserSceneContainer';
import NavigatorMain from './../../presentationals/navigator/NavigatorMain';

class NavigatorTosser extends Component {

	constructor(props, context) {
		super(props, context);
		this._back = this._back.bind(this);
		this._renderScene = this._renderScene.bind(this);
	}

	render() {
		const {appNavigationState} = this.props;
		const {tabs} = appNavigationState;
		const tabKey = tabs.routes[tabs.index].key;
		const scenes = appNavigationState[tabKey];
		return (
			<NavigatorMain
				stackkey={'stack_' + tabKey}
				onNavigateBack={this._back}
				navigationState={scenes}
				renderScene={this._renderScene}
				/>
		);
	}

	_renderScene(sceneProps) {
		return <NavigatorTosserSceneContainer {...sceneProps} />;
	}

	_back() {
		this.props.navigate({ type: 'pop' });
	}
}

NavigatorTosser.propTypes = {
	appNavigationState: PropTypes.shape({
		[TAB_USER_KEY]: NavigationExperimental.PropTypes.navigationState.isRequired,
		[TAB_MAIN_KEY]: NavigationExperimental.PropTypes.navigationState.isRequired,
		tabs: NavigationExperimental.PropTypes.navigationState.isRequired,
	}),
	navigate: PropTypes.func.isRequired,
};

export default NavigatorContainerHOC(NavigatorTosser);