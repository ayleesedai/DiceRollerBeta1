import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from './actionCreators';
import { getEmail, getPassword, getPasswordConfirmation, isEmailValid, isPasswordValid } from './selectors';
import PageUserLogin from '../../presentationals/user/PageUserLogin';
import PageUserRegistration from '../../presentationals/user/PageUserRegistration';
import firebaseWrapper from './../../libs/firebase/FirebaseWrapper';
import * as UserLoggedStatus from './../../libs/usermanagement/UserLoggedStatus';
import UserRootView from './../../presentationals/roots/UserRootView';

export class LoginContainer extends Component {
	constructor(props) {
		super(props);

		this.onCancelRegisterPress = this.onCancelRegisterPress.bind(this);
		this.onCreateAccountPress = this.onCreateAccountPress.bind(this);
		this.onLoginPress = this.onLoginPress.bind(this);
		this.onRegisterPress = this.onRegisterPress.bind(this);
		this.onResetPasswordPress = this.onResetPasswordPress.bind(this);
		this.onUserStatusChanged = this.onUserStatusChanged.bind(this);

		firebaseWrapper.registerUserStatusListener(this.onUserStatusChanged);

		this.state = {
			loggin: true,
			registering: false,
		};
	}

	componentWillUnmount() {
		firebaseWrapper.unregisterUserStatusListener(this.onUserStatusChanged);
	}	

	onUserStatusChanged(status) {
		console.log("USER STATUS", status.toString());
		switch(status) {
		case UserLoggedStatus.OK_LOGGED: {
			this.props.login(true);
			break;
		}
		}
	}

	onCreateAccountPress() {
		this.setState({ loggin: false, registering: true });
	}

	onLoginPress() {
		//FIXME firebaseWrapper.login(this.state.email, this.state.password);
		this.props.login(true);
	}

	onRegisterPress() {
		this.setState({ loggin: true, registering: false });
		//FIXME firebaseWrapper.createAccount(this.state.email, this.state.password);
	}

	onResetPasswordPress() {
		//FIXME firebaseWrapper.resetPassword(this.state.email);
	}				

	onCancelRegisterPress() {
		this.setState({ loggin: true, registering: false });
	}

	_isResetPasswordDisabled() {
		return !this.props.emailValid;
	}

	_isLoginDisabled() {
		return !this.props.emailValid || !this.props.passwordValid;
	}

	render() {
		const child = this.state.loggin
		? (<PageUserLogin
			userEmail={this.state.email}
			userPassword={this.state.password}
			loginDisabled={this._isLoginDisabled()}
			resetPasswordDisabled={this._isResetPasswordDisabled()}
			onCreateAccountPress={this.onCreateAccountPress}
			onEmailChange={this.props.updateEmail}
			onLoginPress={this.onLoginPress}
			onPasswordChange={this.props.updatePassword}
			onResetPasswordPress={this.onResetPasswordPress} />)
		: (<PageUserRegistration 
			userEmail={this.state.email}
			userPassword={this.state.password}
			userPasswordConfirm={this.state.passwordConfirmation}
			onEmailChange={this.props.updateEmail}
			onPasswordChange={this.props.updatePassword}
			onPasswordConfirmChange={this.props.updatePasswordConfirmation}
			onRegisterPress={this.onRegisterPress}
			onCancelRegisterPress={this.onCancelRegisterPress} />);
		return (
			<UserRootView>
				{child}
			</UserRootView>
		);
	}
}

LoginContainer.propTypes = {
	email: PropTypes.string, 
	password: PropTypes.string,
	passwordConfirmation: PropTypes.string,
	emailValid: PropTypes.bool,
	passwordValid: PropTypes.bool,
	// Actions
	login: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
	updateEmail: PropTypes.func.isRequired,
	updatePassword: PropTypes.func.isRequired,
	updatePasswordConfirmation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	const email = getEmail(state);
	const password = getPassword(state);
	const passwordConfirmation = getPasswordConfirmation(state);
	const emailValid = isEmailValid(state);
	const passwordValid = isPasswordValid(state);
	return {
		email, 
		password, 
		passwordConfirmation, 
		emailValid, 
		passwordValid
	};
};

const mapActionsToProps = dispatch => {
	return bindActionCreators(UserActions, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(LoginContainer);