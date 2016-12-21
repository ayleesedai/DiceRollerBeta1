import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DieRender extends Component {
	render() {
		return (
			<View style={styles.containerd}>
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
	containerd: {
		margin: 5, 
		borderRadius: 10, 
		backgroundColor: '#0277bd'
	},
	die: {
		marginTop: 10,
		color: '#e3f2fd',
		fontSize: 25,
		textAlign: 'center',
		width: 60,
		height: 50,
	}
});
