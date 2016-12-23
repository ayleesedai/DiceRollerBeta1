import React, { Component } from 'react';
import { View } from 'react-native';

import { rootView as styles} from './styles.css.js';

class RootView extends Component {
	render() {
		return (
			<View style={styles.view}>
				{this.props.children}
			</View>
		);
	}
}

RootView.propTypes = {
	children: React.PropTypes.object
};

export default RootView;