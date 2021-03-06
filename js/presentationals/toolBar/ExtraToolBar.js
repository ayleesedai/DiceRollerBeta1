import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';

import ToolBarButtonBack from './buttons/ToolBarButtonBack';
import { extraToolBar as styles } from './../styles.css.js';

export default class ExtraToolBar extends Component {
	render() {
		return (
			<View style={styles.view}>
				<View style={styles.headerView}>
					<Text style={styles.header}>{this.props.header}</Text>
				</View>
				<View style={styles.backView}>
					<ToolBarButtonBack text="Back" onPress={this.props.onPressBack} />
				</View>
			</View>
		);
	}
}

ExtraToolBar.propTypes = {
	header: PropTypes.string.isRequired,
	onPressBack: PropTypes.func.isRequired,
};
