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
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default class PageUserLogin extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TextInput style={styles.email} placeholder="Inserire e-mail" value={this.props.userEmail} onChangeText={this.props.onEmailChange} keyboardType="email-address" />
				<TextInput style={styles.password} placeholder="Inserire password" value={this.props.userPassword} onChangeText={this.props.onPasswordChange} secureTextEntry={true} />
				<Button style={styles.loginButton} onPress={this.props.onLoginPress} title="Login" />
				<Button style={styles.createButton} onPress={this.props.onCreateAccountPress} title="Create account" />
				<Button style={styles.resetButton} onPress={this.props.onResetPasswordPress} title="Reset password" />
			</View>
		);
	}
}

PageUserLogin.propTypes = {
	// Incoming props
	userEmail: React.PropTypes.string,
	userPassword: React.PropTypes.string,

	// Outgoing callbacks
	onCreateAccountPress: React.PropTypes.func.isRequired,
	onEmailChange: React.PropTypes.func.isRequired,
	onLoginPress: React.PropTypes.func.isRequired,
	onPasswordChange: React.PropTypes.func.isRequired,
	onResetPasswordPress: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	email: {},
	password: {},
	loginButton: {},
	createButton: {},
	resetButton: {},
});