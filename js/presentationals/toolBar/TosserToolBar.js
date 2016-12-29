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
				<ToolBarButtonSettings text="settings" onPress={this.props.onPressSettings} />
				<ToolBarButtonCredits text="credits" onPress={this.props.onPressCredits} />
				<ToolBarButtonCommercials text="earn" onPress={this.props.onPressCommercials} />
				<ToolBarButtonAchievements text="achies" onPress={this.props.onPressAchievements} />
				<ToolBarButtonLogout text="logout" onPress={this.props.onPressLogout} />
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
