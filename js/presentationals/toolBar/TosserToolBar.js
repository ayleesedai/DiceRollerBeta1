import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

import ToolBarButton from './ToolBarButton';
import { tosserToolBar as styles } from './../styles.css.js';

export default class TosserToolBar extends Component {
	render() {
		return (
			<View style={styles.view}>
				<ToolBarButton text="Settings" onPress={this.props.onPressSettings} />
				<ToolBarButton text="Credits" onPress={this.props.onPressCredits} />
				<ToolBarButton text="Commercials" onPress={this.props.onPressCommercials} />
				<ToolBarButton text="Achievements" onPress={this.props.onPressAchievements} />
				<ToolBarButton text="Logout" onPress={this.props.onPressLogout} />
			</View>
		);
	}
}

TosserToolBar.propTypes = {
	onPressSettings: PropTypes.func.isRequired,
	onPressCredits: PropTypes.func.isRequired,
	onPressCommercials: PropTypes.func.isRequired,
	onPressAchievements: PropTypes.func.isRequired,
	onPressLogout: PropTypes.func.isRequired,
};
