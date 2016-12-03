import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DieRender extends Component {
	render() {
		const value = Math.floor(255 * (this.props.die.value / 20));
		const zero = value<16 ? '0' : '';
		const backColor = '#0000' + zero + value.toString(16) ;
		return (
			<View style={{margin:5, borderRadius: 10, backgroundColor: `${backColor}`}}>
				<Text style={styles.die}>{this.props.die.value}</Text>
			</View>
		);
	}
}

DieRender.propTypes = {
	die: React.PropTypes.object,
};

DieRender.defaultProps = {
	die: {},
};
	
const styles = StyleSheet.create({
	die: {
		marginTop: 10,
		color: '#FFFFFF',
		fontSize: 25,
		textAlign: 'center',
		width: 60,
		height: 50,
	}
});
