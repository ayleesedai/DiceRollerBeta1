import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ExtraRootView from './../../presentationals/_base/ExtraRootView';
import ExtraToolBar  from './../../presentationals/toolBar/ExtraToolBar';

export class CreditsContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ExtraRootView>
				<ExtraToolBar header="Application credits go here" onPressBack={this.props.onBack} />
			</ExtraRootView>
		);
	}
}

CreditsContainer.propTypes = {
	onBack: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return {
	};
};

const mapActionsToProps = dispatch => {
	return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(CreditsContainer);