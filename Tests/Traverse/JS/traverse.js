global = global || this;
(function () {
	var doc = global.document,
		commonElements = {
			"test": doc.getElementById("test"),
			"start": doc.getElementById("start"),
			"stop": doc.getElementById("stop"),
			"results": doc.getElementById("results")
		},
		test;

	function childNodes()
	{
		return Utils.traverse.getChildNodes(
			commonElements.test
		);
	}

	function optimisticFilter(node)
	{
		return true;
	}

	function childNodesTraversed()
	{
		return Utils.traverse.childNodes(
			commonElements.test,
			optimisticFilter
		);
	}

	function children()
	{
		return Utils.traverse.getChildren(
			commonElements.test
		);
	}

	function childrenTraversed()
	{
		return Utils.traverse.children(
			commonElements.test,
			pessimisticFilter
		);
	}

	function pessimisticFilter(node)
	{
		return false;
	}

	function textCollected()
	{
		return Utils.traverse.getText(
			commonElements.test
		);
	}

	function textOverridden()
	{
		return Utils.traverse.setText(
			"NEW TEXTUAL CONTENT",
			commonElements.test
		);
	}

	function generateTests()
	{
		return [
			childNodes,
			childNodesTraversed,
			children,
			childrenTraversed,
			textCollected,
			textOverridden
		];
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
			par = commonElements.results,
			separator = createMessage("----------");
		text = createMessage(text);
		Utils.nodes.append(
			par,
			text
		);
		Utils.nodes.append(
			par,
			separator
		);
	}

	function runTest(evt)
	{
		var index = 0,
			max,
			test;
		tests = generateTests();
		max = tests.length;
		while (index < max) {
			test = tests[index];
			addMessage(
				test()
			);
			index += 1;
		}
	}

	function clearTest(evt)
	{
		var par = commonElements.results,
		nodes = par.childNodes;
		if (nodes) {
			while(nodes.length) {
				Utils.nodes.remove(
					par,
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
