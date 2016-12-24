import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { buttonPlain as styles, buttonPlainExtra as stylesExtra } from './../../styles.css.js';

export default class ButtonPlainEnabled extends Component {
	render() {
		return (
			<TouchableHighlight style={styles.view} underlayColor={stylesExtra.underlayColor} onPress={this.props.onPress}>
				<Text style={styles.text}>
					{this.props.text}
				</Text>
			</TouchableHighlight>
		);
	}
}

ButtonPlainEnabled.propTypes = {
	onPress: React.PropTypes.func.isRequired,
	text: React.PropTypes.string.isRequired,
};
