import firebase from 'firebase';

import * as UserLoggedStatus from '../usermanagement/UserLoggedStatus';
import * as FireBaseErrorCode from './FireBaseErrorCode';

/**
 * Class internal fields keys
 * We use the Symbol paradimg to define private class fields
 */
const _userAuthListenerList = Symbol('userAuthListenerList');

/**
 * Wraps the firebase nodemodule, to easily access user management and database usage
 * So far, all user interaction ara asynchronous. Maybe in the future I will rule them all
 * 
 * @class FirebaseWrapper
 */
class FirebaseWrapper {
	
	/**
	 * Creates an instance of FirebaseWrapper.
	 * Initializes firebase instance with custom parameters
	 * 
	 * @memberOf FirebaseWrapper
	 */
	constructor() {
		this[_userAuthListenerList] = [];
		this._onAuthStateChanged = this._onAuthStateChanged.bind(this);
		this._fireUserStatusChanged = this._fireUserStatusChanged.bind(this);
		this._convertFirebaseError = this._convertFirebaseError.bind(this);

		var config = {
			apiKey: 'AIzaSyDH-bsGA7zTuXZbHC8olEIkkOQcaZniSh0',
			authDomain: 'global-authentication-server.firebaseapp.com',
			databaseURL: 'https://global-authentication-server.firebaseio.com',
			storageBucket: 'global-authentication-server.appspot.com',
			messagingSenderId: '842740070280'
		};
		firebase.initializeApp(config);
		firebase.auth().onAuthStateChanged(this._onAuthStateChanged);
	}

	_fireUserStatusChanged(status) {
		for(let callback of this[_userAuthListenerList]) {
			callback(status);
		}
	}

	_onAuthStateChanged(user) {
		let status = UserLoggedStatus.NOT_LOGGED;
		if(user) {
			if(user.emailVerified) {
				status = UserLoggedStatus.OK_LOGGED;
			}
			else {
				status = UserLoggedStatus.ERROR_EMAIL_NOT_VERIFIED;
			}
		}
		this._fireUserStatusChanged(status);
	}

	_convertFirebaseError(error) {
		switch(error) {
		case FireBaseErrorCode.EMAIL_ALREADY_IN_USE: return UserLoggedStatus.ERROR_EMAIL_ALREADY_IN_USE;
		case FireBaseErrorCode.INVALID_EMAIL: return UserLoggedStatus.ERROR_EMAIL_INVALID;
		case FireBaseErrorCode.USER_NOT_FOUND: return UserLoggedStatus.ERROR_EMAIL_NOT_FOUND;
		case FireBaseErrorCode.WEAK_PASSWORD: return UserLoggedStatus.ERROR_PASSWORD_TOO_WEAK;
		case FireBaseErrorCode.WRONG_PASSWORD: return UserLoggedStatus.ERROR_PASSWORD_WRONG;
		default: return UserLoggedStatus.ERROR_GENERIC;
		}
	}

	/**
	 * Invokes firebase signOut async request.
	 * Please use registerUserStatusLister to receive callback notifications
	 * 
	 * @memberOf FirebaseWrapper
	 */
	logout() {
		if (firebase.auth().currentUser) {
			firebase.auth().signOut();
		}		
	}

	/**
	 * Logins to firebase server using email and password authentication.
	 * Please use registerUserStatusLister to receive callback notifications
	 * 
	 * @param {any} email
	 * @param {any} password
	 * 
	 * @memberOf FirebaseWrapper
	 */
	login(email, password) {
		firebase.auth().signInWithEmailAndPassword(email, password)
		.catch(error => {
			const {errorCode} = error;
			this._fireUserStatusChanged(this._convertFirebaseError(errorCode));
		});
	}

	/**
	 * Creates a new account with specified email and password.
	 * Automatically sends a email verification code to the created account
	 * Please use registerUserStatusLister to receive callback notifications
	 * 
	 * @param {string} email
	 * @param {string} password
	 * 
	 * @memberOf FirebaseWrapper
	 */
	createAccount(email, password) {
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(user => {
			this._onAuthStateChanged(user);
			firebase.auth().currentUser.sendEmailVerification();
		})
		.catch(error => {
			const {errorCode} = error;
			this._fireUserStatusChanged(this._convertFirebaseError(errorCode));
		});
	}

	/**
	 * Sends to user mail a verification code, to verify its email address.
	 * User must be logged in to perform this action, so please user login method first
	 * and call this method only if user status is ERROR_EMAIL_NOT_VERIFIED
	 * Please use registerUserStatusLister to receive callback notifications
	 * 
	 * @memberOf FirebaseWrapper
	 */
	sendMailVerification() {
		if(firebase.auth().currentUser) {
			firebase.auth().currentUser.sendEmailVerification();
		}
	}

	/**
	 * Starts the password reset procedure, sending a mail to the user
	 * to open the firebase page for password resetting and changing
	 * 
	 * @param {any} email
	 * 
	 * @memberOf FirebaseWrapper
	 */
	resetPassword(email) {
		firebase.auth().sendPasswordResetEmail(email)
		.catch(function(error) {
			const {errorCode} = error;
			this._fireUserStatusChanged(this._convertFirebaseError(errorCode));
		});
	}

	/**
	 * Registers user authentication callback, to receive user authentication status changes
	 * 
	 * @param {function} userAuthenticationListenerCallback
	 * 
	 * @memberOf FirebaseWrapper
	 */
	registerUserStatusListener(userAuthenticationListenerCallback) {
		// try to remove callback if already present
		this.unregisterUserListener(userAuthenticationListenerCallback);
		// add callback to internal listeners list
		this[_userAuthListenerList].push(userAuthenticationListenerCallback);
	}

	/**
	 * Unregisters user authentication callback, to stop receiving notifications
	 * 
	 * @param {any} userAuthenticationListenerCallback
	 * 
	 * @memberOf FirebaseWrapper
	 */
	unregisterUserStatusListener(userAuthenticationListenerCallback) {
		const index = this[_userAuthListenerList].indexOf(userAuthenticationListenerCallback);
		if(index !== -1) {
			this[_userAuthListenerList] = this[_userAuthListenerList].splice(index, 1);
		}
	}
}

const fireBaseWrapperInstance = new FirebaseWrapper();

export default fireBaseWrapperInstance;