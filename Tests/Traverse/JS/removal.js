(function () {
	var doc = global.document,
		commonElements = {
			"test": doc.getElementById("test"),
			"start": doc.getElementById("start"),
			"stop": doc.getElementById("stop"),
			"results": doc.getElementById("results")
		},
		childRemoved,
		childrenCleared,
		childNodesCleared;

	function assignValues()
	{
		childRemoved = Utils.node.remove(
			commonElements.test.childNodes[0]
		);
		childrenCleared =
			Utils.traverse.clearChildren(
				commonElements.test
			);
		childNodesCleared =
			Utils.traverse.clearChildNodes(
				commonElements.test
			);
	}

	function createMessage(text)
	{
		var str = String(text);
		if (str === "") {
			str = "[an empty string]";
		}
		return Utils.create.text(
			doc,
			str + "\r\n"
		);
	}

	function addMessage(text)
	{
		var isText =
			Utils.is.text(
				text
			),
			par = commonElements.results;
		if (!isText) {
			text = createMessage(text);
		}
		par.appendChild(text);
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
		var par = commonElements.results,
		nodes = par.childNodes;
		while(nodes.length) {
			Utils.node.remove(
				par,
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
