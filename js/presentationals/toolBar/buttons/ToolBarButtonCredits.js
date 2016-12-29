import ToolBarButton from './../ToolBarButton';

export default class ToolBarButtonCredits extends ToolBarButton {
	constructor(props) {
		super(props);
		
		this.source = require('./credits.png');
	}
}
