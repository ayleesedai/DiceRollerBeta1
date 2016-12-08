import React from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

import TossingFilterContainer from '../containers/tosser/TossingFilterContainer';
import D20BlackSprite from '../components/sprite/D20Black/D20BlackSprite';

export default class TosserApp extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.header}>MAS Experience: DAIS Roller</Text>
				<D20BlackSprite msPerSprite={50} loops={50} />
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
