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
		childrenTraversed;

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
		addMessage(childNodes);
		addMessage(childNodesTraversed);
		addMessage(children);
		addMessage(childrenTraversed);
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

	function pessimisticFilter(node)
	{
		return false;
	}

	function optimisticFilter(node)
	{
		return true;
	}

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
	}

	addHandlers();
	assignValues();
}());
