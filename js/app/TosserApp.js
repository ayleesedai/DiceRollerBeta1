import React, { Component } from 'react';
import {
	Image,
	StyleSheet,
	Text,
	View
} from 'react-native';

import TossingFilterContainer from '../containers/TossingFilterContainer.js';

export default class TosserApp extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.header}>MAS Experience: DAIS Roller</Text>
				<Image source={require('./dice.png')} />
				<TossingFilterContainer />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	flexDirection: 'column',
    backgroundColor: '#000000',
	marginTop: 50
  },
  header: {
	color: '#0000FF',
	fontSize: 25,
	textAlign: 'center',
	fontWeight: 'bold',
  }
});
