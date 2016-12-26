import React from 'react';
import { connect } from 'react-redux';

import NavigatorApp from './../containers/navigator/NavigatorApp';
import { getLogged } from '../containers/user/selectors';
import firebaseWrapper from './../libs/firebase/FirebaseWrapper';
import RootView from './../presentationals/_base/RootView';

export class TosserApp extends React.Component {

	constructor(props) {
		super(props);
		
		firebaseWrapper.initialize();
	}

	componentWillUnmount() {
		firebaseWrapper.terminate();
	}
	
	render() {
		return (
			<RootView>
				<NavigatorApp />
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