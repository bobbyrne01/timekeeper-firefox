var Data = require("./Data"),
	panel;

exports.init = function () {
	panel = require("sdk/panel").Panel({
		width: 350,
		height: 150,
		contentURL: Data.get("html/view.html"),
		contentScriptFile: [Data.get("js/controller.js")],
		onHide: function () {
			require("./ToggleButton").get().state('window', {
				checked: false
			});
		}
	});

	panel.port.on("notify", function (duration) {
		require("./Notification").sendMsg(duration);
	});
};

exports.get = function () {
	return panel;
};
