import React, { PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';

import { navigatorMain as styles} from './../styles.css.js';

const NavigatorMain = (props) => {
	return (
		<NavigationExperimental.CardStack
			key={props.key}
			onNavigateBack={props.onNavigateBack}
			navigationState={props.navigationState}
			renderScene={props.renderScene}
			style={styles.navigatorCardStack} />
	);
};

NavigatorMain.propTypes = {
	key: PropTypes.string.isRequired,
	navigationState: PropTypes.object.isRequired,
	onNavigateBack: PropTypes.func.isRequired,
	renderScene: PropTypes.func.isRequired,
};

export default NavigatorMain;