import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from './actionCreators';
import PageUserLogin from '../../presentationals/user/PageUserLogin';
import PageUserRegistration from '../../presentationals/user/PageUserRegistration';
import firebaseWrapper from './../../libs/firebase/FirebaseWrapper';
import * as UserLoggedStatus from './../../libs/usermanagement/UserLoggedStatus';

export class LoginContainer extends Component {
	constructor(props) {
		super(props);

		this.onCancelRegisterPress = this.onCancelRegisterPress.bind(this);
		this.onCreateAccountPress = this.onCreateAccountPress.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onLoginPress = this.onLoginPress.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onPasswordConfirmChange = this.onPasswordConfirmChange.bind(this);
		this.onRegisterPress = this.onRegisterPress.bind(this);
		this.onResetPasswordPress = this.onResetPasswordPress.bind(this);
		this.onUserStatusChanged = this.onUserStatusChanged.bind(this);

		firebaseWrapper.registerUserStatusListener(this.onUserStatusChanged);

		this.state = {
			loggin: true,
			registering: false,
			
			email: null,
			password: null,
			passwordConfirmation: null,
		};
	}

	onUserStatusChanged(status) {
		console.log("USER STATUS", status.toString());
		switch(status) {
		case UserLoggedStatus.OK_LOGGED: {
			this.props.login('andrea.briozzo@gmail.com', true);
			break;
		}
		}
	}

	onCreateAccountPress() {
		this.setState({ loggin: false, registering: true });
	}

	onEmailChange(email) {
		this.setState({ email });
	}

	onLoginPress() {
		//FIXME firebaseWrapper.login(this.state.email, this.state.password);
		this.props.login('andrea.briozzo@gmail.com', true);
	}

	onPasswordChange(password) {
		this.setState({ password });
	}

	onPasswordConfirmChange(passwordConfirmation) {
		this.setState({ passwordConfirmation });
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

	render() {
		if(this.state.loggin) {
			return (
				<PageUserLogin
					userEmail={this.state.email}
					userPassword={this.state.password}
					onCreateAccountPress={this.onCreateAccountPress}
					onEmailChange={this.onEmailChange}
					onLoginPress={this.onLoginPress}
					onPasswordChange={this.onPasswordChange}
					onResetPasswordPress={this.onResetPasswordPress} />
			);
		}
		else {
			return (
				<PageUserRegistration 
					userEmail={this.state.email}
					userPassword={this.state.password}
					userPasswordConfirm={this.state.passwordConfirmation}
					onEmailChange={this.onEmailChange}
					onPasswordChange={this.onPasswordChange}
					onPasswordConfirmChange={this.onPasswordConfirmChange}
					onRegisterPress={this.onRegisterPress}
					onCancelRegisterPress={this.onCancelRegisterPress} />
			);
		}
	}
}

LoginContainer.propTypes = {
	// Actions
	login: React.PropTypes.func.isRequired,
	logout: React.PropTypes.func.isRequired,
};

const mapStateToProps = () => {
	// No props so far
	return {};
};

const mapActionsToProps = dispatch => {
	return bindActionCreators(UserActions, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(LoginContainer);