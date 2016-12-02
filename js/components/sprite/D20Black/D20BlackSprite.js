import BaseSprite from '../BaseSprite';

class D20BlackSprite extends BaseSprite {
    
	constructor(props) {
		super(props);

		this.sprites.push(require('./D20Black_01.png'));
		this.sprites.push(require('./D20Black_02.png'));
		this.sprites.push(require('./D20Black_03.png'));
		this.sprites.push(require('./D20Black_04.png'));
		this.sprites.push(require('./D20Black_05.png'));
	}
}

export default D20BlackSprite;