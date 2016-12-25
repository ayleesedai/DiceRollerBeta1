import React, { Component, PropTypes } from 'react';
import { TextInput } from 'react-native';

import { textInputPlain as styles} from './../styles.css.js';

export default class TextInputPlain extends Component {
	render() {
		return (
			<TextInput 
				style={styles.textInput} 
				keyboardType={this.props.keyboardType} 
				onChangeText={this.props.onChangeText} 
				placeholder={this.props.placeholder} 
				secureTextEntry={this.props.secureTextEntry}
				value={this.props.value} 
			/>
		);
	}
}

TextInputPlain.propTypes = {
	keyboardType: PropTypes.string, 
	onChangeText: PropTypes.func, 
	placeholder: PropTypes.string, 
	secureTextEntry: PropTypes.bool, 
	value: PropTypes.string, 
};

TextInputPlain.defaultProps = {
	onChangeText: () => null,
};
