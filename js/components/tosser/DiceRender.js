import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

import DieRender from './DieRender.js';

export default class DiceRender extends Component {
	static propTypes = {
		dice: React.PropTypes.array,
	};

	static defaultProps = {
		dice: [],
	};
	
	render() {
		const diceList = this.props.dice.map((die, index) => <DieRender key={index} die={die} />);
		return (
			<View style={styles.container}>
				{ diceList }
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	flexDirection: 'row',
	flexWrap: 'wrap',
	alignItems: 'flex-start',
    backgroundColor: '#000000',
	marginTop: 10
  },
});
