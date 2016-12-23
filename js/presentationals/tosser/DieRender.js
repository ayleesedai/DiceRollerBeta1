import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { dieRender as styles } from './../styles.css.js';

export default class DieRender extends Component {
	render() {
		return (
			<View style={styles.view}>
				<Text style={styles.text}>{this.props.die.value}</Text>
			</View>
		);
	}
}

DieRender.propTypes = {
	// Incoming props 
	die: React.PropTypes.object,
};

DieRender.defaultProps = {
	die: {},
};
