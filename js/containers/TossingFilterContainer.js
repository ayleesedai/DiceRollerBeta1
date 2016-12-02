import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';

import * as tosserActions from '../components/tosser/actionsCreator.js';
import DiceRender from '../components/tosser/DiceRender.js';

export class TossingFilterContainer extends Component {
	constructor(props) {
		super(props);
		
		this.state = {d20number: 15};
		
		this.onChangeText = this.onChangeText.bind(this);
		this.onButtonTossPress = this.onButtonTossPress.bind(this);
	}

	onChangeText(text) {
		const parsed = parseInt(text);
		if(Number.isNaN(parsed))
			this.setState({d20number: 0});
		else
			this.setState({d20number: parsed});
	}
	
	onButtonTossPress() {
		let dice = [];
		for(let i=0; i<this.state.d20number; ++i) {
			dice.push({
				type: 'D20'
			});
		}
		this.props.generateDice(dice);
	}
	
	render() {
		const n = '' + this.state.d20number;
		const dado = this.state.d20number===1 ? 'dado' : 'dadi';
		return (
			<View style={styles.container}>
				<Text style={styles.header}>Scegli quanti D20</Text>
				<TextInput 
					style={styles.howmanydice}
					onChangeText={this.onChangeText} 
					value={n}
				/>
				<Button
					onPress={this.onButtonTossPress}
					title={`Lancia ${n} ${dado} da venti`}
					accessibilityLabel="Lancia i dadi"
					color='#0000FF'
				/>
				<DiceRender dice={this.props.dice} />
			</View>
		);
	}
}

TossingFilterContainer.PropTypes = {
	dice: React.PropTypes.array,
	generateDice: React.PropTypes.func,
};

const mapStateToProps = state => {
	const { dice } = state.tosser;
	return {
		dice,
	};
};

const mapActionsToProps = dispatch => {
	return {
		generateDice: dice => dispatch(tosserActions.generateDice(dice)),
	};
};

export default connect(mapStateToProps, mapActionsToProps)(TossingFilterContainer);

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
