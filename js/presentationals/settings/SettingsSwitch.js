import React, { Component, PropTypes } from 'react';
import { Switch, Text, View } from 'react-native';

import { settingsSwitch as styles } from './../styles.css.js';

export default class SettingsSwitch extends Component {
	render() {
		return (
			<View style={styles.view}>
				<Switch value={this.props.value} onValueChange={this.props.onChange} />
				<Text style={styles.text}>{this.props.text} {this.props.value ? 'on' : 'off'}</Text>
			</View>
		);
	}
}

SettingsSwitch.propTypes = {
	text: PropTypes.string.isRequired,
	value: PropTypes.bool.isRequired,

	onChange: PropTypes.func.isRequired,
};

SettingsSwitch.defaultProps = {
};