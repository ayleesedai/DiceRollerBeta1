import React, { Component, PropTypes } from 'react';
import { Slider, Text, View } from 'react-native';

import { settingsSliderPercentual as styles } from './../styles.css.js';

export default class SettingsSliderPercentual extends Component {
	render() {
		return (
			<View style={styles.view}>
				<Text style={styles.text}>{this.props.text} ({this.props.value})%</Text>
				<Slider style={styles.slider} minimumValue={0} maximumValue={100} step={1} value={this.props.value} onSlidingComplete={this.props.onChange} />
			</View>
		);
	}
}

SettingsSliderPercentual.propTypes = {
	text: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,

	onChange: PropTypes.func.isRequired,
};

SettingsSliderPercentual.defaultProps = {
};