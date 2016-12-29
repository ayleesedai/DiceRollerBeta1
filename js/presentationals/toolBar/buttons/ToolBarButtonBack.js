import ToolBarButton from './../ToolBarButton';

export default class ToolBarButtonBack extends ToolBarButton {
	constructor(props) {
		super(props);
		
		this.source = require('./back.png');
	}
}
