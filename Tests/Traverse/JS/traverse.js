var global = global || this;
if (typeof Utils === "object" && Utils) {
	(function () {
		var doc = global.document,
			commonElements,
			tests,
			testIndex,

			score,
			testsRun,

			runTests,

			tester;

		commonElements = (function () {
			var key = "getElementById",
				obj = {};
			obj.test = doc[key]("test");
			obj.start = doc[key]("start");
			obj.stop = doc[key]("stop");
			obj.results = doc[key]("results");
			obj.tests = doc[key]("tests");
			obj.score = doc[key]("score");
			return obj;
		}());

		doc = null;

		function childNodes()
		{
			var node = commonElements.test,
				nodes;
			if (Utils.traverse.getNodes) {
				nodes = Utils.traverse.getNodes(
					node
				);
			}
			return Utils.is.arrayLike(
				nodes
			);
		}

		function optimisticFilter(
			node
		)
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
					node,
					"NEW TEXTUAL CONTENT",
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
				getText,
				setText,
				childrenTree,
				childrenTreeTraversed,
				isAncestor,
				ancestors,
				ancestorsTraversed
			];
		}());

		function resetTestData()
		{
			testIndex = 0;
			score = 0;
			testsRun = 0;
		}

		function disableStartButton()
		{
			var par = commonElements,
				button = par.start;
			button.disabled = true;
			button.onclick = function () {};
		}

		function createText(
			doc,
			text
		)
		{
			var result = null;
			if (Utils.create.text) {
				result = Utils.create.text(
					doc,
					text
				);
			}
			return result;
		}

		function appendNode(
			par,
			node
		)
		{
			return Utils.node.append(
				par,
				node
			);
		}

		function createMessage(text)
		{
			var str = String(text);
			if (str === "") {
				str = "[an empty string]";
			}
			return createText(
				global.document,
				str
			);
		}

		function grabById(
			id
		)
		{
			var key = "getElementById";
			return global.document[key](
				id
			);
		}

		function addMessage(
			msg,
			num
		)
		{
			var cell = grabById("result_" + num),
				text = createMessage(msg);
			if (cell) {
				appendNode(
					cell,
					text
				);
			}
		}

		function updateScore()
		{
			var par = commonElements,
				element = par.score,
				total = score + " / " + testsRun,
				text = createMessage(total);
			if (element && !element.firstChild) {
				appendNode(
					element,
					text
				);
			} else if (element && element.firstChild) {
				element.firstChild.nodeValue = total;
			}
		}

		function adjustScore(
			result,
			num
		)
		{

			var row = grabById("test_" + num);
			if (row) {
				if (result === "true") {
					row.className = "pass";
					score += 1;
					testsRun += 1;
				} else if (result === "false") {
					row.className = "fail";
				} else if (result === "ERROR") {
					row.className = "error";
					testsRun += 1;
				}
			}
			updateScore();
		}

		function addResult(
			result,
			num
		)
		{
			addMessage(
				result,
				num
			);
			adjustScore(
				result,
				num
			);
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
					result = String(
						result
					);
				} catch (err) {
					result = "ERROR";
				}
				addResult(
					result,
					key
				);
			}
		}

		function makeTimeout(
			ref,
			ms
		)
		{
			var key = "setTimeout",
				result;
			if (Utils.is.hostObject(global[key])) {
				result = global[key](
					ref,
					ms
				);
			}
			return result;
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
					tester = makeTimeout(
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
			resetTestData();
			runTests();
			disableStartButton();
		}

		function removeNode(
			par,
			node
		)
		{
			return Utils.node.remove(
				par,
				par.firstChild
			);
		}

		function clearChildNodes(
			par
		)
		{
			while (par && par.firstChild) {
				removeNode(
					par,
					par.firstChild
				);
			}
		}

		function clearResult(
			num
		)
		{
			var cell = grabById("result_" + num),
				row = grabById("test_" + num),
				index;
			if (cell && row) {
				row.className = "";
				clearChildNodes(
					cell
				);
			}
		}

		function clearTests()
		{
			var index = 0,
				max = tests.length;
			for (index; index < max; index += 1) {
				clearResult(
					index + 1
				);
			}
		}

		function resetScore()
		{
			var par = commonElements,
				cell = par.score;
			clearChildNodes(
				cell
			);
		}

		function enableStartButton()
		{
			var par = commonElements,
				button = par.start;
			button.disabled = false;
			button.onclick = startTests;
		}

		function removeTimeout(
			ref
		)
		{
			var key = "clearTimeout";
			if (Utils.is.hostObject(global[key])) {
				global[key](
					ref
				);
			}
		}

		function endTests(
			evt
		)
		{
			removeTimeout(
				tester
			);
			tester = null;
			clearTests();
			resetScore();
			enableStartButton();
		}

		function addHandlers()
		{
			var par = commonElements;
			par.start.onclick = startTests;
			par.stop.onclick = endTests;
		}

		addHandlers();
	}());
}
