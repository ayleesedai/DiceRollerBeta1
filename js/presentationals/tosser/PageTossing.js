import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

import DiceRender from './DiceRender';
import { pageTossing as styles } from './../styles.css.js';
import ButtonPlain from './../_base/ButtonPlain';
import SvgAnimationBeer from './../svganimations/beer/SvgAnimationBeer';

export default class PageTossing extends Component {
	render() {
		return (
			<View style={styles.containerview}>
				<View style={styles.animationview}>
					<SvgAnimationBeer />
				</View>
				<View style={styles.diceview}>
					<View style={styles.dicechoseview}>
						<View style={styles.howmanydiceview}>
							<Text style={styles.textDice}>How many dice:</Text>
							<TextInput style={styles.textInputDice} onChangeText={this.props.onChangeText} value={'' + this.props.howmanydice} />
						</View>
						<ButtonPlain
							onPress={this.props.onButtonTossPress}
							text={'ROLL!'}
							accessibilityLabel="GO" />
					</View>
					<DiceRender dice={this.props.dice} />
				</View>
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


