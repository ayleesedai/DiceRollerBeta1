import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { pageCredits as styles } from './../styles.css.js';

export default class PageCredits extends Component {
	render() {
		return (
			<View style={styles.view}>
				<Text style={styles.text}>Starting idea:</Text>
				<Text style={styles.textHighlighted}>Giacomo Ponziani</Text>
				<Text style={styles.text}>Graphics architectural and design:</Text>
				<Text style={styles.textHighlighted}>Giacomo Ponziani</Text>
				<Text style={styles.text}>Code development:</Text>
				<Text style={styles.textHighlighted}>Andrea Briozzo</Text>
				<Text style={styles.text}>App architecture, business logic and flow:</Text>
				<Text style={styles.textHighlighted}>Andrea Briozzo</Text>
				<Text style={styles.textHighlighted}>Giacomo Ponziani</Text>
				<Text style={styles.text}>Special thanks to:</Text>
				<Text style={styles.text}>Facebook and all the React and React-Native guys</Text>
				<Text style={styles.text}>Dan Abramov, a mentor, and all the Redux guys</Text>
			</View>
		);
	}
}

PageCredits.propTypes = {
};

PageCredits.defaultProps = {
};