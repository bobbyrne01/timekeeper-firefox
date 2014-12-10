var Panel = require("sdk/panel"),
	Data = require("./Data"),
	Button = require("./ToggleButton"),
	panel;

exports.init = function() {
	
	panel = Panel.Panel({
		width: 250,
		height: 100,
		contentURL: Data.get("html/view.html"),
		contentScriptFile: Data.get("js/controller.js"),
		onHide: function() {
			Button.get().state('window', {checked: false});
		}
	});
};

exports.get = function() {
	
	return panel;
};
