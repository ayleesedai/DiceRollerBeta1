/**
 * Allows user to login to the application
 * User has to create a valid account before logging in
 * To create a valid account, use UserRegistration component
 * 
 * Allowed operations on this component
 * - insert email and password and click on "login" button
 * - click on "create account" button to switch to UserRegistration component
 * - click on "reset password" button to start password deletion process
 */

import React, { Component } from 'react';
import { View } from 'react-native';

import ButtonPlain from './../_base/ButtonPlain.js';
import TextInputPlain from './../_base/TextInputPlain';
import { pageUserLogin as styles } from './../styles.css.js';

export default class PageUserLogin extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TextInputPlain placeholder="Inserire e-mail" value={this.props.userEmail} onChangeText={this.props.onEmailChange} keyboardType="email-address" />
				<TextInputPlain placeholder="Inserire password" value={this.props.userPassword} onChangeText={this.props.onPasswordChange} secureTextEntry={true} />
				<ButtonPlain onPress={this.props.onLoginPress} text="Login" disabled={this.props.loginDisabled} />
				<ButtonPlain onPress={this.props.onCreateAccountPress} text="Create account" />
				<ButtonPlain onPress={this.props.onResetPasswordPress} text="Reset password" disabled={this.props.resetPasswordDisabled} />
			</View>
		);
	}
}

PageUserLogin.propTypes = {
	// Incoming props
	userEmail: React.PropTypes.string,
	userPassword: React.PropTypes.string,
	loginDisabled: React.PropTypes.bool,
	resetPasswordDisabled: React.PropTypes.bool,

	// Outgoing callbacks
	onCreateAccountPress: React.PropTypes.func.isRequired,
	onEmailChange: React.PropTypes.func.isRequired,
	onLoginPress: React.PropTypes.func.isRequired,
	onPasswordChange: React.PropTypes.func.isRequired,
	onResetPasswordPress: React.PropTypes.func.isRequired,
};

PageUserLogin.defaultProps = {
	loginDisabled: false,
	resetPasswordDisabled: false,
};