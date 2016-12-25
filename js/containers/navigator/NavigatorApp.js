import React, { Component, PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';

import { createAppNavigationState } from './NavigatorStateTosser.util';
import NavigatorEx from './NavigatorTosser';

class NavigatorApp extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = createAppNavigationState();
		this._navigate = this._navigate.bind(this);
	}

	render() {
		return (
			<NavigatorEx appNavigationState={this.state} navigate={this._navigate} />
		);
	}

	handleBackAction() {
		return this._navigate({ type: 'pop' });
	}

	_updateAppNavigationState(state, action) {
		const {type} = action;

		switch (type) {
		case 'push': {
			const route = action.route;
			const {tabs} = state;
			const tabKey = tabs.routes[tabs.index].key;
			const scenes = state[tabKey];
			const nextScenes = NavigationExperimental.StateUtils.push(scenes, route);
			if (scenes !== nextScenes) {
				return {
					...state,
					[tabKey]: nextScenes,
				};
			}
			break;
		}

		case 'BackAction':
		case 'pop': {
			const {tabs} = state;
			const tabKey = tabs.routes[tabs.index].key;
			const scenes = state[tabKey];
			const nextScenes = NavigationExperimental.StateUtils.pop(scenes);
			if (scenes !== nextScenes) {
				return {
					...state,
					[tabKey]: nextScenes,
				};
			}
			break;
		}

		case 'selectTab': {
			const tabKey = action.tabKey;
			const tabs = NavigationExperimental.StateUtils.jumpTo(state.tabs, tabKey);
			if (tabs !== state.tabs) {
				return {
					...state,
					tabs,
				};
			}
			break;
		}
		}
		return state;
	}

	_navigate(action) {
		if (action.type === 'exit') {
			this.props.onExit && this.props.onExit();
			return;
		}

		const state = this._updateAppNavigationState(this.state, action);

		if (this.state !== state) {
			this.setState(state);
		}
	}
}

NavigatorApp.propTypes = {
	onExit: PropTypes.func,
};

export default NavigatorApp;