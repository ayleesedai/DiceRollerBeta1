import ToolBarButton from './../ToolBarButton';

export default class ToolBarButtonSettings extends ToolBarButton {
	constructor(props) {
		super(props);
		
		this.source = require('./settings.png');
	}
}
