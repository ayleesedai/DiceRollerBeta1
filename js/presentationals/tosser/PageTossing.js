import React, { Component } from 'react';
import { View } from 'react-native';

import DiceRender from './DiceRender';
import { pageTossing as styles } from './../styles.css.js';
import TextPlain from './../_base/button/TextPlain';
import ButtonPlain from './../_base/button/ButtonPlain';
import TextInputPlain from './../_base/button/TextInputPlain';

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
				<TextPlain text='Scegli quanti D20' />
				<TextInputPlain onChangeText={this.props.onChangeText} value={'' + this.props.howmanydice} />
				<ButtonPlain
					onPress={this.props.onButtonTossPress}
					text={`Lancia ${this.props.howmanydice} ${dado} da venti`}
					accessibilityLabel="Lancia i dadi" />
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


