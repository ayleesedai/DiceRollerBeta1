import React, { Component, PropTypes } from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';

import { toolBarButton as styles, toolBarButtonExtra as stylesExtra } from './../styles.css.js';

export default class ToolBarButton extends Component {
	
	constructor(props) {
		super(props);

		this.source = undefined;
	}

	render() {
		return (
			<TouchableHighlight style={styles.container} underlayColor={stylesExtra.underlayColor} onPress={this.props.onPress}>
				<View style={styles.view}>
					<Image style={styles.image} resizeMode="contain" source={this.source} />
					<Text style={styles.text}>
						{this.props.text}
					</Text>
				</View>
			</TouchableHighlight>
		);
	}
}

ToolBarButton.propTypes = {
	onPress: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
};
