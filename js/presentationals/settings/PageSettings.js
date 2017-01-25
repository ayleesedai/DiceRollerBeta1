import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

import { pageSettings as styles } from './../styles.css.js';
import SettingsSwitch from './SettingsSwitch';
import SettingsSliderPercentual from './SettingsSliderPercentual';

export default class PageSettings extends Component {
	render() {
		return (
			<View style={styles.view}>
				<SettingsSwitch text="Music" value={this.props.music} onChange={this.props.onMusicChange} />
				<SettingsSwitch text="Sound" value={this.props.sound} onChange={this.props.onSoundChange} />
				<SettingsSwitch text="Vibration" value={this.props.vibration} onChange={this.props.onVibrationChange} />
				<SettingsSliderPercentual text="Volume" value={this.props.volume} onChange={this.props.onVolumeChange} />

			</View>
		);
	}
}

PageSettings.propTypes = {
	music: PropTypes.bool.isRequired,
	sound: PropTypes.bool.isRequired,
	vibration: PropTypes.bool.isRequired,
	volume: PropTypes.number.isRequired,

	onMusicChange: PropTypes.func.isRequired,
	onSoundChange: PropTypes.func.isRequired,
	onVibrationChange: PropTypes.func.isRequired,
	onVolumeChange: PropTypes.func.isRequired,
};

PageSettings.defaultProps = {
};