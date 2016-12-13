import React, {Component} from 'react';

export default class ReactVisible extends Component {
	render() {
		let component = null;
		if(this.props.visible) {
			component = this.props.children;
		}
		return ( 
			{component}
		);
	}
}

ReactVisible.propTypes = {
	children: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.node),
		React.PropTypes.node
	]),
	visible: React.PropTypes.bool,
};

ReactVisible.defaultProps = {
	children: null,
	visible: true,
};
