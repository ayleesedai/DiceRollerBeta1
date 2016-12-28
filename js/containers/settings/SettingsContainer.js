import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ExtraRootView from './../../presentationals/_base/ExtraRootView';
import ExtraToolBar  from './../../presentationals/toolBar/ExtraToolBar';
import * as Actions from './actionCreators';
import { getMusic, getSound, getVibration, getVolume} from './selectors.js';
import PageSettings from './../../presentationals/settings/PageSettings';

export class SettingsContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ExtraRootView>
				<ExtraToolBar header="Change app settings" onPressBack={this.props.onBack} />
				<PageSettings 
					music={this.props.music}
					sound={this.props.sound}
					vibration={this.props.vibration}
					volume={this.props.volume}
					onMusicChange={this.props.setSettingsMusic}
					onSoundChange={this.props.setSettingsSound}
					onVibrationChange={this.props.setSettingsVibration}
					onVolumeChange={this.props.setSettingsVolume}
				/>
			</ExtraRootView>
		);
	}
}

SettingsContainer.propTypes = {
	// Settings info
	music: PropTypes.bool.isRequired,
	sound: PropTypes.bool.isRequired,
	vibration: PropTypes.bool.isRequired,
	volume: PropTypes.number.isRequired,
	// Navigation Callbacks
	onBack: PropTypes.func.isRequired,
	// Actions
	setSettingsMusic: PropTypes.func.isRequired,
	setSettingsSound: PropTypes.func.isRequired,
	setSettingsVibration: PropTypes.func.isRequired,
	setSettingsVolume: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	const music = getMusic(state);
	const sound = getSound(state);
	const vibration = getVibration(state);
	const volume = getVolume(state);
	return {
		music,
		sound,
		vibration,
		volume,
	};
};

const mapActionsToProps = dispatch => {
	return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(SettingsContainer);