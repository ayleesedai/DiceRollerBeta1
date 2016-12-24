import React, { Component } from 'react';
import { Text } from 'react-native';
import { textPlain as styles } from './../styles.css.js';

export default class TextPlain extends Component {
	render() {
		return (
			<Text style={styles.text}>
				{this.props.text}
			</Text>
		);
	}
}

TextPlain.propTypes = {
	text: React.PropTypes.string,
};
