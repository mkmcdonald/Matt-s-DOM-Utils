(function () {
	var commonElements = {
		"test": document.getElementById("test"),
		"start": document.getElementById("start"),
		"stop": document.getElementById("stop"),
		"results": document.getElementById("results")
	},
		canAdd,
		canDetect,
		canRemove;

	function createMessage(text)
	{
		var str = String(text);
		if (str === "") {
			str = "[an empty string]";
		}
		return document.createTextNode(
			str + "\n"
		);
	}

	function addMessage(text)
	{
		var isText =
			Utils.nodes.isTextNode(
				text
			),
			parent = commonElements.results;
		if (!isText) {
			text = createMessage(text);
		}
		parent.appendChild(text);
	}

	function runTest(evt)
	{
		addMessage(canAdd);
		addMessage(canDetect);
		addMessage(canRemove);
	}

	function clearTest(evt)
	{
		var parent = commonElements.results,
		nodes = parent.childNodes;
		while(nodes.length) {
			parent.removeChild(
				nodes[0]
			);
		}
	}

	function addHandlers()
	{
		commonElements.start.onclick = runTest;
		commonElements.stop.onclick = clearTest;
	}

	function addValues()
	{
		canAdd = Utils.classes.add(
			"good",
			commonElements.test
		);
		canDetect = Utils.classes.has(
			"good",
			commonElements.test
		);
		canRemove = Utils.classes.remove(
			"good",
			commonElements.test
		);
	}

	addHandlers();
	addValues();
}());
