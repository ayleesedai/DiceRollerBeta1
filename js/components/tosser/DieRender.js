import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class DieRender extends Component {
	static propTypes = {
		die: React.PropTypes.object,
	};

	static defaultProps = {
		die: {},
	};
	
	render() {
		const value = Math.floor(255 * (this.props.die.value / 20));
		const zero = value<16 ? '0' : '';
		const backColor = '#0000' + zero + value.toString(16) ;
		return (
			<View style={{backgroundColor: `${backColor}`}}>
				<Text style={styles.die}>{this.props.die.value}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  die: {
	margin: 10,
	color: '#FFFFFF',
	fontSize: 25,
	textAlign: 'center',
  }
});
