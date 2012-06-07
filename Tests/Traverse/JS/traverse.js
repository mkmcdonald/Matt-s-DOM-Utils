var global = global || this;
if (Utils) {
	(function () {
		var doc = global.document,
			commonElements,
			tests,

			runTests,

			testIndex,
			tester;

		commonElements = (function () {
			var key = "getElementById",
				obj = {};
			obj.test = doc[key]("test");
			obj.start = doc[key]("start");
			obj.stop = doc[key]("stop");
			obj.results = doc[key]("results");
			return obj;
		}());

		doc = null;

		function childNodes()
		{
			var node = commonElements.test,
				nodes = Utils.traverse.getNodes(
					node
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
			var node = commonElements.test,
				nodes = Utils.traverse.nodes(
					node,
					optimisticFilter
				);
			return Utils.is.arrayLike(
				nodes
			);
		}

		function children()
		{
			var node = commonElements.test,
				test;
			if (Utils.traverse.getElements) {
				test = Utils.traverse.getElements(
					node
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
			var node = commonElements.test,
				nodes = Utils.traverse.elements(
					node,
					pessimisticFilter
				);
			return Utils.is.arrayLike(
				nodes
			);
		}

		function tree()
		{
			var nodes = Utils.traverse.getNodeTree(
				global.document
			);
			return Utils.is.arrayLike(
				nodes
			);
		}

		function treeTraversed()
		{
			var nodes = Utils.traverse.nodeTree(
				global.document,
				optimisticFilter
			);
			return Utils.is.arrayLike(
				nodes
			);
		}

		function getText()
		{
			var node = commonElements.test,
				text = Utils.traverse.getText(
					node
				);
			return Utils.is.type(
				text,
				"string"
			);
		}

		function setText()
		{
			var node = commonElements.test,
				text = Utils.traverse.setText(
					"NEW TEXTUAL CONTENT",
					node,
					global.document
				);
			return Utils.is.type(
				text,
				"string"
			);
		}

		function childrenTree()
		{
			var tree = Utils.traverse.getElementTree(
				global.document
			);
			return Utils.is.arrayLike(
				tree
			);
		}

		function childrenTreeTraversed()
		{
			var nodes = Utils.traverse.elementTree(
				global.document,
				optimisticFilter
			);
			return Utils.is.arrayLike(
				nodes
			);
		}

		function isAncestor()
		{
			var child = commonElements.traverse_text,
				node = Utils.traverse.isAncestor(
					global.document,
					child
				);
			return Utils.is.type(
				node,
				"boolean"
			);
		}

		function ancestors()
		{
			var node = commonElements.test,
				list = Utils.traverse.getAncestors(
					node
				),
				test;
			if (list && list.value) {
				test = list.value;
			}
			return Utils.is.nodeLike(
				test
			);
		}

		function ancestorsTraversed()
		{
			var node = commonElements.test,
				nodes = Utils.traverse.ancestors(
					node,
					optimisticFilter
				);
			return Utils.is.arrayLike(
				nodes
			);
		}

		tests = (function () {
			return [
				childNodes,
				childNodesTraversed,
				children,
				childrenTraversed,
				tree,
				treeTraversed,
				tree,
				treeTraversed,
				getText,
				setText,
				childrenTree,
				childrenTreeTraversed,
				isAncestor,
				ancestors,
				ancestorsTraversed
			];
		}());

		function createMessage(text)
		{
			var str = String(text);
			if (str === "") {
				str = "[an empty string]";
			}
			return Utils.create.text(
				global.document,
				str
			);
		}

		function grabById(
			id
		)
		{
			return global.document.getElementById(
				id
			);
		}

		function addMessage(
			msg,
			num
		)
		{
			var cell = grabById("result_" + num),
				row = grabById("test_" + num),
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
			var result = null;
			if (typeof test === "function") {
				try {
					result = test();
					result = String(result);
				} catch (e) {
					result = "ERROR";
				}
				addMessage(result, key);
			}
		}

		runTests = (function () {
			var max = tests.length;
			return function () {
				if (testIndex < max) {
					runTest(
						tests[testIndex],
						testIndex + 1
					);
					testIndex += 1;
					tester = global.setTimeout(
						runTests,
						100
					);
				} else if (testIndex >= max) {
					testIndex = 0;
				}
			};
		}());

		function startTests(
			evt
		)
		{
			testIndex = 0;
			runTests();
			this.disabled = true;
			this.onclick = function () {};
		}

		function clearResult(
			num
		)
		{
			var cell = grabById("result_" + num),
				row = grabById("test_" + num),
				index;
			if (cell && row) {
				index = cell.childNodes.length - 1;
				for (index; index > -1; index -= 1) {
					cell.removeChild(
						cell.childNodes[index]
					);
				}
				row.className = "";
			}
		}

		function clearTests()
		{
			var index = 0,
				max = tests.length;
			for (index; index < max; index += 1) {
				clearResult(index + 1);
			}
		}

		function endTests(evt)
		{
			global.clearTimeout(tester);
			tester = null;
			clearTests();
			commonElements.start.disabled = false;
			commonElements.start.onclick = startTests;
		}

		function addHandlers()
		{
			commonElements.start.onclick = startTests;
			commonElements.stop.onclick = endTests;
		}

		addHandlers();
	}());
}
