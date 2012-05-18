var global = global || this;
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
		var test = Utils.traverse.getNodes(
			commonElements.test
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function optimisticFilter(node)
	{
		return true;
	}

	function childNodesTraversed()
	{
		var test = Utils.traverse.nodes(
			commonElements.test,
			optimisticFilter
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function children()
	{
		var test = Utils.traverse.getElements(
			commonElements.test
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function pessimisticFilter(node)
	{
		return false;
	}

	function childrenTraversed()
	{
		var test = Utils.traverse.elements(
			commonElements.test,
			pessimisticFilter
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function treeCollected()
	{
		var test = Utils.traverse.getNodeTree(
			doc
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function treeTraversed()
	{
		var test = Utils.traverse.nodeTree(
			doc,
			optimisticFilter
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function textCollected()
	{
		var test = Utils.traverse.getText(
			commonElements.test
		);
		return Utils.is.type(
			test,
			"string"
		);
	}

	function textOverridden()
	{
		var test = Utils.traverse.setText(
			"NEW TEXTUAL CONTENT",
			commonElements.test,
			doc
		);
		return Utils.is.type(
			test,
			"string"
		);
	}

	function childrenTreeCollected()
	{
		var test = Utils.traverse.getElementTree(
			doc
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function childrenTreeTraversed()
	{
		var test = Utils.traverse.elementTree(
			doc,
			optimisticFilter
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function ancestors()
	{
		var test = Utils.traverse.getAncestors(
			commonElements.test
		);
		return Utils.is.nodeLike(
			test.value
		);
	}

	function ancestorsTraversed()
	{
		var test = Utils.traverse.ancestors(
			commonElements.test,
			optimisticFilter
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function generateTests()
	{
		return [
			childNodes,
			childNodesTraversed,
			children,
			childrenTraversed,
			treeCollected,
			treeTraversed,
			textCollected,
			textOverridden,
			childrenTreeCollected,
			childrenTreeTraversed,
			ancestors,
			ancestorsTraversed
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
		Utils.node.append(
			par,
			text
		);
		Utils.node.append(
			par,
			separator
		);
	}

	function runTest(test)
	{
		var isFunction = Utils.is.type(
			test,
			"function"
		),
			result = null;
		if (isFunction) {
			try {
				result = test();
				String(result);
			} catch (e) {
				result = "ERROR";
			}
			addMessage(result);
		}
	}

	function runTests(evt)
	{
		var index = 0,
			max,
			test;
		tests = generateTests();
		max = tests.length;
		while (index < max) {
			test = tests[index];
			runTest(test);
			index += 1;
		}
	}

	function clearTests(evt)
	{
		var par = commonElements.results,
			nodes = par.childNodes;
			isHostObject = Utils.is.hostObject(nodes);
		if (isHostObject) {
			while(nodes.length) {
				Utils.node.remove(
					par,
					nodes[0]
				);
			}
		}
	}

	function addHandlers()
	{
		commonElements.start.onclick = runTests;
		commonElements.stop.onclick = clearTests;
	}

	addHandlers();
}());
