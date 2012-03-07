(function () {
	var commonElements = {
		"test": document.getElementById("test"),
		"start": document.getElementById("start"),
		"stop": document.getElementById("stop"),
		"results": document.getElementById("results")
	},
		childNodes,
		childNodesTraversed,
		children,
		childrenTraversed,
		textCollected,
		textOverridden;

	function assignValues()
	{
		childNodes = Utils.traversal.getChildNodes(
			commonElements.test
		);
		childNodesTraversed =
			Utils.traversal.traverseChildNodes(
				commonElements.test,
				optimisticFilter
			);
		children = Utils.traversal.getChildren(
			commonElements.test
		);
		childrenTraversed =
			Utils.traversal.traverseChildren(
				commonElements.test,
				pessimisticFilter
			);
		textCollected = Utils.traversal.getText(
			commonElements.test
		);
		textOverridden = Utils.traversal.setText(
			"NEW TEXTUAL CONTENT",
			commonElements.test
		);
	}

	function pessimisticFilter(node)
	{
		return false;
	}

	function optimisticFilter(node)
	{
		return true;
	}

	function createMessage(text)
	{
		var str = String(text);
		if (str === "") {
			str = "[an empty string]";
		}
		return document.createTextNode(
			str + "\r\n"
		);
	}

	function addMessage(text)
	{
		var isText =
			Utils.nodes.isTextNode(
				text
			),
			parent = commonElements.results,
			separator = createMessage("----------");
		if (!isText) {
			text = createMessage(text);
		}
		parent.appendChild(text);
		parent.appendChild(separator);
	}

	function runTest(evt)
	{
		assignValues();
		addMessage(childNodes);
		addMessage(childNodesTraversed);
		addMessage(children);
		addMessage(childrenTraversed);
		addMessage(textCollected);
		addMessage(textOverridden);
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
