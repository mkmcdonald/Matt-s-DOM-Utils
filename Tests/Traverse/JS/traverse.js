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
		var nodes = Utils.traverse.getNodes(
			commonElements.test
		);
		return Utils.is.arrayLike(
			nodes
		);
	}

	function optimisticFilter(node)
	{
		return true;
	}

	function childNodesTraversed()
	{
		var nodes = Utils.traverse.nodes(
			commonElements.test,
			optimisticFilter
		);
		return Utils.is.arrayLike(
			nodes
		);
	}

	function children()
	{
		var test;
		if (Utils.traverse.getElements) {
			test = Utils.traverse.getElements(
				commonElements.test
			);
		}
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
		var nodes = Utils.traverse.elements(
			commonElements.test,
			pessimisticFilter
		);
		return Utils.is.arrayLike(
			nodes
		);
	}

	function tree()
	{
		var nodes = Utils.traverse.getNodeTree(
			doc
		);
		return Utils.is.arrayLike(
			nodes
		);
	}

	function treeTraversed()
	{
		var nodes = Utils.traverse.nodeTree(
			doc,
			optimisticFilter
		);
		return Utils.is.arrayLike(
			nodes
		);
	}

	function getText()
	{
		var text = Utils.traverse.getText(
			commonElements.test
		);
		return Utils.is.type(
			text,
			"string"
		);
	}

	function setText()
	{
		var text = Utils.traverse.setText(
			"NEW TEXTUAL CONTENT",
			commonElements.test,
			doc
		);
		return Utils.is.type(
			text,
			"string"
		);
	}

	function childrenTree()
	{
		var tree = Utils.traverse.getElementTree(
			doc
		);
		return Utils.is.arrayLike(
			tree
		);
	}

	function childrenTreeTraversed()
	{
		var nodes = Utils.traverse.elementTree(
			doc,
			optimisticFilter
		);
		return Utils.is.arrayLike(
			nodes
		);
	}

	function isAncestor()
	{
		var node = Utils.traverse.isAncestor(
			document.documentElement,
			commonElements.test
		);
		return Utils.is.type(
			node,
			"boolean"
		);
	}

	function ancestors()
	{
		var list = Utils.traverse.getAncestors(
			commonElements.test
		);
		return Utils.is.nodeLike(
			list.value
		);
	}

	function ancestorsTraversed()
	{
		var nodes = Utils.traverse.ancestors(
			commonElements.test,
			optimisticFilter
		);
		return Utils.is.arrayLike(
			nodes
		);
	}

	tests = (function () {
		return [
			{"test": childNodes, "key": "one"},
			{"test": childNodesTraversed, "key": "two"},
			{"test": children, "key": "three"},
			{"test": childrenTraversed, "key": "four"},
			{"test": tree, "key": "five"},
			{"test": treeTraversed, "key": "six"},
			{"test": getText, "key": "seven"},
			{"test": setText, "key": "eight"},
			{"test": childrenTree, "key": "nine"},
			{"test": childrenTreeTraversed, "key": "ten"},
			{"test": isAncestor, "key": "eleven"},
			{"test": ancestors, "key": "twelve"},
			{"test": ancestorsTraversed, "key": "thirteen"}
		];
	}());

	function createMessage(text)
	{
		var str = String(text);
		if (str === "") {
			str = "[an empty string]";
		}
		return Utils.create.text(
			doc,
			str
		);
	}

	function addMessage(
		msg,
		key
	)
	{
		var cell = document.getElementById("result_" + key),
			row = document.getElementById("test_" + key),
			text = createMessage(msg);
		if (cell) {
			Utils.node.append(
				cell,
				text
			);
		}
		if (row) {
			if (msg === "true") {
				row.className = "pass";
			} else if (msg === "false") {
				row.className = "fail";
			} else if (msg === "ERROR") {
				row.className = "error";
			}
		}
	}

	function runTest(
		test,
		key
	)
	{
		var isFunction = Utils.is.type(
			test,
			"function"
		),
			result = null;
		if (isFunction) {
			try {
				result = test();
				result = String(result);
			} catch (e) {
				result = "ERROR";
			}
			addMessage(result, key);
		}
	}

	function runTests(evt)
	{
		var index = 0,
			max,
			test;
		max = tests.length;
		while (index < max) {
			runTest(
				tests[index].test,
				tests[index].key
			);
			index += 1;
		}
	}


	function clearResult(key)
	{
		var cell = doc.getElementById("result_" + key),
			row = doc.getElementById("test_" + key),
			index;
		if (cell && row) {
			index = cell.childNodes.length;
			for (index; index > -1; index -= 1) {
				Utils.node.remove(
					cell,
					cell.childNodes[index]
				);
			}
			row.className = "";
		}
	}

	function clearTests(evt)
	{
		var index = 0,
			max = tests.length;
		for (index; index < max; index += 1) {
			clearResult(tests[index].key);
		}
	}

	function addHandlers()
	{
		commonElements.start.onclick = runTests;
		commonElements.stop.onclick = clearTests;
	}

	addHandlers();
}());
