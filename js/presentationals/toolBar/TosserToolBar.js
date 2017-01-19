import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

import ToolBarButtonLogout from './buttons/ToolBarButtonLogout';
import ToolBarButtonAchievements from './buttons/ToolBarButtonAchievements';
import ToolBarButtonCommercials from './buttons/ToolBarButtonCommercials';
import ToolBarButtonCredits from './buttons/ToolBarButtonCredits';
import ToolBarButtonSettings from './buttons/ToolBarButtonSettings';
import { tosserToolBar as styles } from './../styles.css.js';

export default class TosserToolBar extends Component {
	render() {
		return (
			<View style={styles.view}>
				<ToolBarButtonSettings text="SETTINGS" onPress={this.props.onPressSettings} />
				<ToolBarButtonCredits text="CREDITS" onPress={this.props.onPressCredits} />
				<ToolBarButtonCommercials text="EARN" onPress={this.props.onPressCommercials} />
				<ToolBarButtonAchievements text="ACHIEVS" onPress={this.props.onPressAchievements} />
				<ToolBarButtonLogout text="ROLL OUT" onPress={this.props.onPressLogout} />
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
