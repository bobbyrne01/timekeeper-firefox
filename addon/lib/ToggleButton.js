var ToggleButton = require("sdk/ui/button/toggle").ToggleButton,
	button;

exports.init = function () {
	button = ToggleButton({
		id: "timekeeper-widget",
		label: 'Time Keeper',
		icon: require("./Data").get("images/ico-64.png"),
		onChange: function (state) {
    	if (state.checked) {
    		require("./Panel").get().show({
    			position: button
    		});
    	}
    }
	});
};

exports.get = function () {
	return button;
};
