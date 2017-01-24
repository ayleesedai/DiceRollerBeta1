import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { pageCredits as styles } from './../styles.css.js';

export default class PageCredits extends Component {
	render() {
		return (
			<View style={styles.view}>

			
				<Text style={styles.textHighlighted}>Giacomo Ponziani</Text>
				<Text style={styles.text}>Starting idea and design</Text>

				<Text style={styles.textHighlighted}>Andrea Briozzo</Text>
				<Text style={styles.text}>Code development, App architecture, business logic and flow</Text>

				<Text style={styles.textHighlighted}>Special thanks to</Text>
				<Text style={styles.text}>
					Facebook and all the React and React-Native guys{'\n'}
					Dan Abramov, a mentor, and all the Redux guys
				</Text>
			

			{/*Faccio una prova andre non ti spaventare :P*/}
			{/*
				<Text style={styles.text}>
					<Text style={styles.textHighlighted}>Giacomo Ponziani</Text>{'\n'}
						Starting idea and design{'\n'}
					<Text style={styles.textHighlighted}>Andrea Briozzo</Text>{'\n'}
						Code development, App architecture, business logic and flow{'\n'}
					<Text style={styles.textHighlighted}>Special thanks to</Text>{'\n'}
						Facebook and all the React and React-Native guys{'\n'}
						Dan Abramov, a mentor, and all the Redux guys{'\n'}
				</Text>
				*/}
			</View>
		);
	}
}

PageCredits.propTypes = {
};

PageCredits.defaultProps = {
};