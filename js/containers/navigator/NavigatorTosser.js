import React, { Component, PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';

import NavigatorContainerHOC from './NavigatorContainerHOC';
import NavigatorStateTosserUtil from './NavigatorStateTosser.util';
import NavigatorTosserSceneContainer from './NavigatorTosserSceneContainer';
import NavigatorMain from './../../presentationals/navigator/NavigatorMain';
import RootView from './../../presentationals/roots/RootView';

class NavigatorTosser extends Component {

	constructor(props, context) {
		super(props, context);
		this._back = this._back.bind(this);
		this._renderHeader = this._renderHeader.bind(this);
		this._renderScene = this._renderScene.bind(this);
	}

	render() {
		const {appNavigationState} = this.props;
		const {tabs} = appNavigationState;
		const tabKey = tabs.routes[tabs.index].key;
		const scenes = appNavigationState[tabKey];

		return (
			<RootView>
				<NavigatorMain
					key={'stack_' + tabKey}
					onNavigateBack={this._back}
					navigationState={scenes}
					renderScene={this._renderScene}
					/>
			</RootView>
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
		[NavigatorStateTosserUtil.TAB_USER_KEY]: NavigationExperimental.PropTypes.navigationState.isRequired,
		[NavigatorStateTosserUtil.TAB_MAIN_KEY]: NavigationExperimental.PropTypes.navigationState.isRequired,
		tabs: NavigationExperimental.PropTypes.navigationState.isRequired,
	}),
	navigate: PropTypes.func.isRequired,
};

export default NavigatorContainerHOC(NavigatorTosser);