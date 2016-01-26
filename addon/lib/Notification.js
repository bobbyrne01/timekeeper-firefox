var notification = require("sdk/notifications"),
	Data = require("./Data");

exports.sendMsg = function (msg) {
	notification.notify({
		title: "Time Keeper",
		text: msg,
		iconURL: Data.get("images/ico-64.png")
	});
};
