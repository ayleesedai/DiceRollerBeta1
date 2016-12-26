import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight } from 'react-native';

import { toolBarButton as styles, toolBarButtonExtra as stylesExtra } from './../../styles.css.js';

export default class ToolBarButton extends Component {
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

ToolBarButton.propTypes = {
	onPress: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
};
