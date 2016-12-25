import React, { PropTypes, Component } from 'react';

const NavigatorContainerHOC = ComponentClass => {
	const key = '_tosserAppNavigationContainerNavigateCall';

	class Container extends Component {

		getChildContext() {
			return {
				[key]: this.context[key] || this.props.navigate,
			};
		}

		render() {
			const navigate = this.context[key] || this.props.navigate;
			return <ComponentClass {...this.props} navigate={navigate} />;
		}
	}

	Container.contextTypes = {
		[key]: PropTypes.func,
	};

	Container.childContextTypes = {
		[key]: PropTypes.func.isRequired,
	};

	Container.propTypes = {
		navigate: PropTypes.func,
	};

	return Container;
};

export default NavigatorContainerHOC;