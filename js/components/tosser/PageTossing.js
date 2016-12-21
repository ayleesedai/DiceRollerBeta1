import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import DiceRender from './DiceRender';

export default class PageTossing extends Component {
	render() {
		const dado = this.props.howmanydice===1 ? 'dado' : 'dadi';
		return (
			/*
				View
					- header
							nav
								ul
									li
					- SVG
					- secondarynav nav
					- DICE render
			*/
			<View style={styles.container}>
				<header>
					<nav>
						<ul>
							<li>SETTINGS</li>
							<li>ACHIEVEMENTS</li>
							<li>COLLECTION</li>
							<li>FREE POINTS</li>
						</ul>
					</nav>
				</header>
				<secondarynav>
					<Text style={styles.choose}>Scegli quanti D20</Text>
					<TextInput 
						style={styles.howmanydice}
						onChangeText={this.props.onChangeText} 
						value={'' + this.props.howmanydice}
					/>
					<Button
						onPress={this.props.onButtonTossPress}
						title={`Lancia ${this.props.howmanydice} ${dado} da venti`}
						accessibilityLabel="Lancia i dadi"
						color='#01579b'
					/>
				</secondarynav>
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
		backgroundColor: '#2196f3',
	},
	choose: {
		fontSize: 20,
		textAlign: 'left',
		margin: 10,
		fontWeight: 'bold',
		color: '#ffffff',
	},
	howmanydice: {
		color: '#ffffff',
	},
});
