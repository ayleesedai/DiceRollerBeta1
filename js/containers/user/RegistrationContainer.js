import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from './actionCreators';
import { getEmail, getPassword, getPasswordConfirmation, isEmailValid, isPasswordValid, isPasswordConfirmationValid } from './selectors';
import PageUserRegistration from '../../presentationals/user/PageUserRegistration';
import firebaseWrapper from './../../libs/firebase/FirebaseWrapper';
import * as UserLoggedStatus from './../../libs/usermanagement/UserLoggedStatus';
import UserRootView from './../../presentationals/user/UserRootView';

export class LoginContainer extends Component {
	constructor(props, context) {
		super(props, context);

		this.onCancelRegisterPress = this.onCancelRegisterPress.bind(this);
		this.onRegisterPress = this.onRegisterPress.bind(this);
		this.onUserStatusChanged = this.onUserStatusChanged.bind(this);

		firebaseWrapper.registerUserStatusListener(this.onUserStatusChanged);
	}

	componentWillUnmount() {
		firebaseWrapper.unregisterUserStatusListener(this.onUserStatusChanged);
	}	

	onUserStatusChanged(status) {
		console.log("USER STATUS", status.toString());
		switch(status) {
		case UserLoggedStatus.OK_LOGGED: {
			this.props.login(true);
			this.props.onLogged();
			break;
		}
		}
	}

	onRegisterPress() {
		//FIXME firebaseWrapper.createAccount(this.state.email, this.state.password);
		this.props.onCancel();
	}

	onCancelRegisterPress() {
		this.props.onCancel();
	}

	render() {
		return (
			<UserRootView>
				<PageUserRegistration 
					userEmail={this.props.email}
					userPassword={this.props.password}
					userPasswordConfirm={this.props.passwordConfirmation}
					onEmailChange={this.props.updateEmail}
					onPasswordChange={this.props.updatePassword}
					onPasswordConfirmChange={this.props.updatePasswordConfirmation}
					onRegisterPress={this.onRegisterPress}
					onCancelRegisterPress={this.onCancelRegisterPress} />
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
	passwordConfirmationValid: PropTypes.bool,
	// Actions
	login: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
	updateEmail: PropTypes.func.isRequired,
	updatePassword: PropTypes.func.isRequired,
	updatePasswordConfirmation: PropTypes.func.isRequired,

	onCancel: PropTypes.func.isRequired,
	onLogged: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	const email = getEmail(state);
	const password = getPassword(state);
	const passwordConfirmation = getPasswordConfirmation(state);
	const emailValid = isEmailValid(state);
	const passwordValid = isPasswordValid(state);
	const passwordConfirmationValid = isPasswordConfirmationValid(state);
	return {
		email, 
		password, 
		passwordConfirmation, 
		emailValid, 
		passwordValid,
		passwordConfirmationValid
	};
};

const mapActionsToProps = dispatch => {
	return bindActionCreators(UserActions, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(LoginContainer);