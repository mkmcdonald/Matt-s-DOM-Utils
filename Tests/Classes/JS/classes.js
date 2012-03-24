(function () {
	var commonElements = {
		"test": document.getElementById("test"),
		"start": document.getElementById("start"),
		"stop": document.getElementById("stop"),
		"results": document.getElementById("results")
	},
		canAdd,
		canDetect,
		canRemove,
		canToggleOn,
		canToggleOff,
		canAddMultiple,
		canRemoveMultiple,
		listed;

	function addSingleClassValues()
	{
		canAdd = Utils.classes.add(
			"good",
			commonElements.test
		);
		canDetect = Utils.classes.contains(
			"good",
			commonElements.test
		);
		canRemove = Utils.classes.remove(
			"good",
			commonElements.test
		);
		canToggleOn = Utils.classes.toggle(
			"good",
			commonElements.test
		);
		canToggleOff = Utils.classes.toggle(
			"good",
			commonElements.test
		);
	}

	function addValues()
	{
		addSingleClassValues();
		canAddMultiple = Utils.classes.add(
			["foo", "bar", "baz"],
			commonElements.test
		);
		canRemoveMultiple = Utils.classes.remove(
			["foo", "bar", "baz"],
			commonElements.test
		);
		listed = Utils.classes.list(
			commonElements.test
		);
	}

	function createMessage(text)
	{
		var str = String(text);
		if (str === "") {
			str = "[an empty string]";
		}
		return Utils.nodes.createTextNode(
			document,
			str + "\r\n"
		);
	}

	function addMessage(text)
	{
		var isText =
			Utils.nodes.isTextNode(
				text
			),
			par = commonElements.results,
			separator = createMessage("----------");
		text = createMessage(text);
		Utils.nodes.appendChild(
			par,
			text
		);
		Utils.nodes.appendChild(
			par,
			separator
		);
	}

	function runTest(evt)
	{
		addValues();
		addMessage(canAdd);
		addMessage(canDetect);
		addMessage(canRemove);
		addMessage(canToggleOn);
		addMessage(canToggleOff);
		addMessage(canAddMultiple);
		addMessage(canRemoveMultiple);
		addMessage(listed);
	}

	function clearTest(evt)
	{
		var parent = commonElements.results,
		nodes = parent.childNodes;
		if (nodes) {
			while(nodes.length) {
				Utils.nodes.removeChild(
					parent,
					nodes[0]
				);
			}
		}
	}

	function addHandlers()
	{
		commonElements.start.onclick = runTest;
		commonElements.stop.onclick = clearTest;
	}

	addHandlers();
}());
