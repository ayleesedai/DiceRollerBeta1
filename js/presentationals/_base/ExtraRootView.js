import React, { Component } from 'react';
import { View } from 'react-native';

import { extraRootView as styles} from './../styles.css.js';

class ExtraRootView extends Component {
	render() {
		return (
			<View style={styles.view}>
				{this.props.children}
			</View>
		);
	}
}

ExtraRootView.propTypes = {
	children: React.PropTypes.any
};

export default ExtraRootView;