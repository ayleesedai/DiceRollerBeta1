import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import DieRender from './DieRender.js';

export default class DiceRender extends Component {
	render() {
		const diceList = this.props.dice.map((die, index) => <DieRender key={index} die={die} />);
		return (
			<View style={styles.container}>
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		marginTop: 10
	},
});
