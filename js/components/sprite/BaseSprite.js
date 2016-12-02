import React from 'react';
import { Image, View } from 'react-native';

class BaseSprite extends React.Component {
	constructor(props) {
		super(props);
		
		this.sprites = [];

		this.state = {
			currentSprite: -1,
			currentLoop: 0,
		};

		this.paintNextSprite = this.paintNextSprite.bind(this);
	}
	
	componentDidMount() {
		this.interval = setInterval(this.paintNextSprite, this.props.msPerSprite);	
	}

	componentWillUnmount() {
		this.stopTimer();
	}
	
	stopTimer() {
		clearInterval(this.interval);
	}

	paintNextSprite() {
		const currentSprite = ++this.state.currentSprite % this.sprites.length;
		const currentLoop = ++this.state.currentLoop;
		if(this.props.loops !== INFINITE_LOOPS && currentLoop > this.props.loops) {
			this.stopTimer();
			this.props.onSpriteComplete();
		} 
		else {
			this.setState({ 
				currentSprite,
				currentLoop
			});
		}
	}

	render() {
		return (
			<View>
				<Image source={this.sprites[this.state.currentSprite]} />
			</View>
		);
	}
}

BaseSprite.propTypes = {
	loops: React.PropTypes.number,
	msPerSprite: React.PropTypes.number.isRequired,

	onSpriteComplete: React.PropTypes.func,
};

BaseSprite.defaultProps = {
	loops: INFINITE_LOOPS,

	onSpriteComplete: () => null
};

export const INFINITE_LOOPS = -1;
export default BaseSprite;