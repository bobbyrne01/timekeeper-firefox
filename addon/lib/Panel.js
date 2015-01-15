var Panel = require("sdk/panel"),
	Data = require("./Data"),
	Button = require("./ToggleButton"),
	Notification = require("./Notification"),
	panel;

exports.init = function () {

	panel = Panel.Panel({
		width: 550,
		height: 300,
		contentURL: Data.get("html/view.html"),
		contentScriptFile: [
			Data.get("bower_components/jquery/dist/jquery.js"),
			Data.get("bower_components/jquery-ui/ui/core.js"),
			Data.get("bower_components/jquery-ui/ui/widget.js"),
			Data.get("bower_components/jquery-ui/ui/datepicker.js"),
			Data.get("bower_components/jquery-ui/ui/tabs.js"),
			Data.get("bower_components/jquery-ui/ui/button.js"),
			Data.get("js/controller.js")
		],
		onHide: function () {
			Button.get().state('window', {
				checked: false
			});
		}
	});

	panel.port.on("notify", function (duration) {
		Notification.sendMsg(duration);
	});
};

exports.get = function () {

	return panel;
};
