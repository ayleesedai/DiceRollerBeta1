import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import DiceRender from './DiceRender';

export default class PageTossing extends Component {
	render() {
		const dado = this.props.howmanydice===1 ? 'dado' : 'dadi';
		return (
			<View style={styles.container}>
				<Text style={styles.header}>Scegli quanti D20</Text>
				<TextInput 
					style={styles.howmanydice}
					onChangeText={this.props.onChangeText} 
					value={'' + this.props.howmanydice}
				/>
				<Button
					onPress={this.props.onButtonTossPress}
					title={`Lancia ${this.props.howmanydice} ${dado} da venti`}
					accessibilityLabel="Lancia i dadi"
					color='#0000FF'
				/>
				<DiceRender dice={this.props.dice} />
			</View>
		);
	}
}

PageTossing.propTypes = {
	// Incoming props
	dice: React.PropTypes.array,
	howmanydice: React.PropTypes.number,

	// Outgoing callbacks
	onButtonTossPress: React.PropTypes.func.isRequired,
	onChangeText: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000',
	},
	header: {
		fontSize: 18,
		textAlign: 'left',
		margin: 10,
		fontWeight: 'bold',
		color: '#0000FF',
	},
	howmanydice: {
		color: '#0000FF',
	},
});
