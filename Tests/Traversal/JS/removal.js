(function () {
	var commonElements = {
		"test": document.getElementById("test"),
		"start": document.getElementById("start"),
		"stop": document.getElementById("stop"),
		"results": document.getElementById("results")
	},
		childRemoved,
		childrenCleared,
		childNodesCleared;

	function assignValues()
	{
		childRemoved = Utils.nodes.remove(
			commonElements.test.childNodes[0]
		);
		childrenCleared =
			Utils.traversal.clearChildren(
				commonElements.test
			);
		childNodesCleared =
			Utils.traversal.clearChildNodes(
				commonElements.test
			);
	}

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
		assignValues();
		addMessage(childRemoved);
		addMessage(childrenCleared);
		addMessage(childNodesCleared);
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

	addHandlers();
}());
