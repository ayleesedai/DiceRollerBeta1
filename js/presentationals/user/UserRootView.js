import React, { Component } from 'react';
import { View } from 'react-native';

import { userRootView as styles} from './../styles.css.js';
import TextPlain from './../_base/TextPlain';

class UserRootView extends Component {
	render() {
		return (
			<View style={styles.view}>
				
				{this.props.children}
			</View>
		);
	}
}

UserRootView.propTypes = {
	children: React.PropTypes.object
};

export default UserRootView;