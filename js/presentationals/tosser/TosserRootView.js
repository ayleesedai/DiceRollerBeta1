import React, { Component } from 'react';
import { View } from 'react-native';

import { tosserRootView as styles} from './../styles.css.js';

class TosserRootView extends Component {
	render() {
		return (
			<View style={styles.view}>
				{this.props.children}
			</View>
		);
	}
}

TosserRootView.propTypes = {
	children: React.PropTypes.any
};

export default TosserRootView;