import React, { Component } from 'react';

import ButtonPlainEnabled from './buttons/ButtonPlainEnabled';
import ButtonPlainDisabled from './buttons/ButtonPlainDisabled';

export default class ButtonPlain extends Component {
	render() {
		if(this.props.disabled) {
			return <ButtonPlainDisabled text={this.props.text} />;
		}
		else {
			return <ButtonPlainEnabled text={this.props.text} onPress={this.props.onPress} />;
		}
	}
}

ButtonPlain.propTypes = {
	disabled: React.PropTypes.bool,
	onPress: React.PropTypes.func.isRequired,
	text: React.PropTypes.string.isRequired,
};

ButtonPlain.defaultProps = {
	disabled: false,
};
