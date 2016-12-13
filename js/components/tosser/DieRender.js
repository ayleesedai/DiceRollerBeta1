import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DieRender extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.die}>{this.props.die.value}</Text>
			</View>
		);
	}
}

DieRender.propTypes = {
	// Incoming props 
	die: React.PropTypes.object,
};

DieRender.defaultProps = {
	die: {},
};
	
const styles = StyleSheet.create({
	container: {
		margin: 5, 
		borderRadius: 10, 
		backgroundColor: '#0000FF'
	},
	die: {
		marginTop: 10,
		color: '#FFFFFF',
		fontSize: 25,
		textAlign: 'center',
		width: 60,
		height: 50,
	}
});
