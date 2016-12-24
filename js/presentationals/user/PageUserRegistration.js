/**
 * Allows user to create an account
 * The device shall be connected to internet to perform this action
 * 
 * Allowed operations on this component
 * - insert email, password and password confirmation and click on "create" button
 */

import React, { Component } from 'react';
import { View } from 'react-native';

import ButtonPlain from './../_base/ButtonPlain';
import TextInputPlain from './../_base/TextInputPlain';
import { pageUserRegistration as styles } from './../styles.css.js';

export default class PageUserRegistration extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TextInputPlain placeholder="Inserire e-mail" value={this.props.userEmail} onChangeText={this.props.onEmailChange} keyboardType="email-address" />
				<TextInputPlain placeholder="Inserire password" value={this.props.userPassword} onChangeText={this.props.onPasswordChange} secureTextEntry={true} />
				<TextInputPlain placeholder="Confermare password" value={this.props.userPasswordConfirm} onChangeText={this.props.onPasswordConfirmChange} secureTextEntry={true} />
				<ButtonPlain onPress={this.props.onRegisterPress} text="Register" />
				<ButtonPlain onPress={this.props.onCancelRegisterPress} text="Cancel" />
			</View>
		);
	}
}

PageUserRegistration.propTypes = {
	// Incoming props
	userEmail: React.PropTypes.string,
	userPassword: React.PropTypes.string,
	userPasswordConfirm: React.PropTypes.string,

	// Outgoing callbacks
	onCancelRegisterPress: React.PropTypes.func.isRequired,
	onEmailChange: React.PropTypes.func.isRequired,
	onPasswordChange: React.PropTypes.func.isRequired,
	onPasswordConfirmChange: React.PropTypes.func.isRequired,
	onRegisterPress: React.PropTypes.func.isRequired,
};