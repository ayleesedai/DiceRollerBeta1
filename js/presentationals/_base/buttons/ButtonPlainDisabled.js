import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { buttonPlainDisabled as styles } from './../../styles.css.js';

export default class ButtonPlainDisabled extends Component {
	render() {
		return (
			<TouchableHighlight style={styles.view} underlayColor={styles.view.backgroundColor} disabled={true}>
				<Text style={styles.text}>
					{this.props.text}
				</Text>
			</TouchableHighlight>
		);
	}
}

ButtonPlainDisabled.propTypes = {
	text: React.PropTypes.string.isRequired,
};
