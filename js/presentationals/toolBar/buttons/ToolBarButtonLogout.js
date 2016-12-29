import ToolBarButton from './../ToolBarButton';

export default class ToolBarButtonLogout extends ToolBarButton {
	constructor(props) {
		super(props);
		
		this.source = require('./logout.png');
	}
}
