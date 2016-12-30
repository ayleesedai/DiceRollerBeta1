import React, { Component, PropTypes } from 'react';
import { View, WebView } from 'react-native';

import { toolBarButton as styles } from './../../styles.css.js';

export default class SvgAnimationBeer extends Component {
	
	constructor(props) {
		super(props);

		this.source = undefined;
	}

	render() {
		return (
			<WebView
				style={{ flex: 1 }}
				source={require('./beer.html')}
			/>
		);
	}
}

SvgAnimationBeer.propTypes = {
	
};

        