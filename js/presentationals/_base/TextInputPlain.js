import React, { Component } from 'react';
import { TextInput } from 'react-native';

import { textInputPlain as styles} from './../styles.css.js';

export default class TextInputPlain extends Component {
	render() {
		return (
			<TextInput 
				style={styles.textInput} 
				placeholder={this.props.placeholder} 
				value={this.props.value} 
				onChangeText={this.props.onChangeText} 
				keyboardType={this.props.keyboardType} />
		);
	}
}

TextInputPlain.propTypes = {
	keyboardType: React.PropTypes.string, 
	onChangeText: React.PropTypes.func, 
	placeholder: React.PropTypes.string, 
	value: React.PropTypes.string, 
};

TextInputPlain.defaultProps = {
	onChangeText: () => null,
};
