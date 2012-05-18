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

	function ancestors()
	{
		var test = Utils.traverse.getAncestors(
			commonElements.test
		);
		return Utils.is.nodeLike(
			test.value
		);
	}

	function optimisticFilter(node)
	{
		return true;
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

	function childNodes()
	{
		var test = Utils.traverse.getChildNodes(
			commonElements.test
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function childNodesTraversed()
	{
		var test = Utils.traverse.childNodes(
			commonElements.test,
			optimisticFilter
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function children()
	{
		var test = Utils.traverse.getChildren(
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
		var test = Utils.traverse.children(
			commonElements.test,
			pessimisticFilter
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function treeCollected()
	{
		var test = Utils.traverse.getChildNodeTree(
			doc
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function treeTraversed()
	{
		var test = Utils.traverse.childNodeTree(
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

	function generateTests()
	{
		return [
			ancestors,
			ancestorsTraversed,
			childNodes,
			childNodesTraversed,
			children,
			childrenTraversed,
			treeCollected,
			treeTraversed,
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
