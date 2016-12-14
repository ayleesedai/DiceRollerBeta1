import React from 'react';
import { connect } from 'react-redux';

import TossingFilterContainer from '../containers/tosser/TossingFilterContainer';
import LoginContainer from '../containers/user/LoginContainer';
import { getLogged } from '../containers/user/selectors';

export class TosserApp extends React.Component {
	render() {
		// FIXME: solo per test
		if(this.props.userLogged) {
			return <TossingFilterContainer />;
		}
		else {
			return <LoginContainer />;
		}
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