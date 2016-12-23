import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TosserActions from './actionsCreator.js';
import { getDice } from './selectors';
import PageTossing from '../../presentationals/tosser/PageTossing';

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
		return (
			<PageTossing
				dice={this.props.dice}
				howmanydice={this.state.d20number}
				onChangeText={this.onChangeText}
				onButtonTossPress={this.onButtonTossPress}
			/>
		);
	}
}

TossingFilterContainer.propTypes = {
	dice: React.PropTypes.array,
	generateDice: React.PropTypes.func,
};

const mapStateToProps = state => {
	const dice = getDice(state);
	return {
		dice,
	};
};

const mapActionsToProps = dispatch => {
	return bindActionCreators(TosserActions, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(TossingFilterContainer);