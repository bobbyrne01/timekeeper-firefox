var Panel = require("sdk/panel"),
	Data = require("./Data"),
	Button = require("./ToggleButton"),
	Notification = require("./Notification"),
	panel;

exports.init = function() {
	
	panel = Panel.Panel({
		width: 350,
		height: 125,
		contentURL: Data.get("html/view.html"),
		contentScriptFile: Data.get("js/controller.js"),
		onHide: function() {
			Button.get().state('window', {checked: false});
		}
	});
	
	panel.port.on("notify", function (duration) {
		Notification.sendMsg(duration);
	});
};

exports.get = function() {
	
	return panel;
};
