/**
 * Allows user to create an account
 * The device shall be connected to internet to perform this action
 * 
 * Allowed operations on this component
 * - insert email, password and password confirmation and click on "create" button
 */

import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default class PageUserRegistration extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TextInput style={styles.email} placeholder="Inserire e-mail" value={this.props.userEmail} onChangeText={this.props.onEmailChange} keyboardType="email-address" />
				<TextInput style={styles.password} placeholder="Inserire password" value={this.props.userPassword} onChangeText={this.props.onPasswordChange} secureTextEntry={true} />
				<TextInput style={styles.passwordConfirm} placeholder="Confermare password" value={this.props.userPasswordConfirm} onChangeText={this.props.onPasswordConfirmChange} secureTextEntry={true} />
				<Button style={styles.registerButton} onPress={this.props.onRegisterPress} title="Register" />
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
	onEmailChange: React.PropTypes.func.isRequired,
	onPasswordChange: React.PropTypes.func.isRequired,
	onPasswordConfirmChange: React.PropTypes.func.isRequired,
	onRegisterPress: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	email: {},
	password: {},
	passwordConfirm: {},
	registerButton: {},
});