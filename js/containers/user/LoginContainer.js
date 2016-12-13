import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from './actionCreators';
import PageUserLogin from '../../components/user/PageUserLogin';
import PageUserRegistration from '../../components/user/PageUserRegistration';

export class LoginContainer extends Component {
	constructor(props) {
		super(props);

		this.onCreateAccountPress = this.onCreateAccountPress.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onLoginPress = this.onLoginPress.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onPasswordConfirmChange = this.onPasswordConfirmChange.bind(this);
		this.onRegisterPress = this.onRegisterPress.bind(this);
		this.onResetPasswordPress = this.onResetPasswordPress.bind(this);				

		this.state = {
			loggin: true,
			registering: false,
			
			email: null,
			password: null,
			passwordConfirmation: null,
		};
	}

	onCreateAccountPress() {
		this.setState({ loggin: false, registering: true });
	}

	onEmailChange(email) {
		this.setState({ email });
	}

	onLoginPress() {

	}

	onPasswordChange(password) {
		this.setState({ password });
	}

	onPasswordConfirmChange(passwordConfirmation) {
		this.setState({ passwordConfirmation });
	}

	onRegisterPress() {
		this.setState({ loggin: true, registering: false });
	}

	onResetPasswordPress() {

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
					onRegisterPress={this.onRegisterPress} />
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