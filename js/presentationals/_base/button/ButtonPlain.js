import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { buttonPlain as styles, buttonPlainExtra as stylesExtra } from './../../styles.css';

export default class ButtonPlain extends Component {
	render() {
		return (
			<TouchableHighlight style={styles.background} underlayColor={stylesExtra.underlayColor} onPress={this.props.onPress}>
				<Text style={styles.text}>
					{this.props.text}
				</Text>
			</TouchableHighlight>
		);
	}
}

ButtonPlain.propTypes = {
	onPress: React.PropTypes.func.isRequired,
	text: React.PropTypes.string.isRequired,
};
