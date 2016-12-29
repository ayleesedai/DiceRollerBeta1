import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from './actionCreators';
import { getEmail, getPassword, isEmailValid, isPasswordValid } from './selectors';
import PageUserLogin from '../../presentationals/user/PageUserLogin';
import firebaseWrapper from './../../libs/firebase/FirebaseWrapper';
import * as UserLoggedStatus from './../../libs/usermanagement/UserLoggedStatus';
import UserRootView from './../../presentationals/user/UserRootView';

export class LoginContainer extends Component {
	constructor(props, context) {
		super(props, context);

		this.onCreateAccountPress = this.onCreateAccountPress.bind(this);
		this.onLoginPress = this.onLoginPress.bind(this);
		this.onResetPasswordPress = this.onResetPasswordPress.bind(this);
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

	onCreateAccountPress() {
		this.props.onSelectRegistration();
	}

	onLoginPress() {
		//FIXME firebaseWrapper.login(this.state.email, this.state.password);
		this.props.login(true);
		this.props.onLogged();
	}

	onResetPasswordPress() {
		//FIXME firebaseWrapper.resetPassword(this.state.email);
	}				

	_isResetPasswordDisabled() {
		return !this.props.emailValid;
	}

	_isLoginDisabled() {
		return !this.props.emailValid || !this.props.passwordValid;
	}

	render() {
		return (
			<UserRootView>
				<PageUserLogin
					userEmail={this.props.email}
					userPassword={this.props.password}
					loginDisabled={this._isLoginDisabled()}
					resetPasswordDisabled={this._isResetPasswordDisabled()}
					onCreateAccountPress={this.onCreateAccountPress}
					onEmailChange={this.props.updateEmail}
					onLoginPress={this.onLoginPress}
					onPasswordChange={this.props.updatePassword}
					onResetPasswordPress={this.onResetPasswordPress} />
			</UserRootView>
		);
	}
}

LoginContainer.propTypes = {
	email: PropTypes.string, 
	password: PropTypes.string,
	emailValid: PropTypes.bool,
	passwordValid: PropTypes.bool,
	// Actions
	login: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
	updateEmail: PropTypes.func.isRequired,
	updatePassword: PropTypes.func.isRequired,

	onLogged: PropTypes.func.isRequired,
	onSelectRegistration: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	const email = getEmail(state);
	const password = getPassword(state);
	const emailValid = isEmailValid(state);
	const passwordValid = isPasswordValid(state);
	return {
		email, 
		password, 
		emailValid: true, 
		passwordValid: true,
	};
};

const mapActionsToProps = dispatch => {
	return bindActionCreators(UserActions, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(LoginContainer);