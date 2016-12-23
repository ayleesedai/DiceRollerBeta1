import React from 'react';
import { connect } from 'react-redux';

import TossingFilterContainer from '../containers/tosser/TossingFilterContainer';
import LoginContainer from '../containers/user/LoginContainer';
import { getLogged } from '../containers/user/selectors';
import firebaseWrapper from './../libs/firebase/FirebaseWrapper';
import RootView from './../presentationals/RootView';

export class TosserApp extends React.Component {

	constructor(props) {
		super(props);
		
		firebaseWrapper.initialize();
	}

	componentWillUnmount() {
		firebaseWrapper.terminate();
	}
	
	render() {
		console.log('userLogged', this.props.userLogged);
		// FIXME: temporaneo, questa logichetta finirà nel navigatore di scene
		const child = this.props.userLogged ? <TossingFilterContainer /> : <LoginContainer />;
		return (
			<RootView>
				{child}
			</RootView>
		);
	}
}

TosserApp.propTypes = {
	userLogged: React.PropTypes.bool,
};

TosserApp.defaultProps = {
	userLogged: false,
};

const mapStateToProps = (state) => {
	// No props so far
	return {
		userLogged: getLogged(state)
	};
};

export default connect(mapStateToProps)(TosserApp);