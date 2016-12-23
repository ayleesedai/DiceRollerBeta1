import React, { Component } from 'react';
import { View } from 'react-native';

import DieRender from './DieRender.js';
import { diceRender as styles } from './../styles.css.js';

export default class DiceRender extends Component {
	render() {
		const diceList = this.props.dice.map((die, index) => <DieRender key={index} die={die} />);
		return (
			<View style={styles.view}>
				{ diceList }
			</View>
		);
	}
}

DiceRender.propTypes = {
	// Incoming props
	dice: React.PropTypes.array,
};

DiceRender.defaultProps = {
	dice: [],
};
