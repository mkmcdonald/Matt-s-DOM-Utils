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
			obj.test_text = doc[key]("test_text");
			obj.start = doc[key]("start");
			obj.stop = doc[key]("stop");
			obj.results = doc[key]("results");
			obj.tests = doc[key]("tests");
			obj.score = doc[key]("score");
			return obj;
		}());

		doc = null;

		function prepend(node)
		{
			var par = commonElements.test;
			if (par && node) {
				node =  Utils.node.prepend(
					par,
					node,
					par.lastChild
				);
			}
			return node;
		}

		function makeElement(
			doc,
			tag
		)
		{
			var result = null;
			if (Utils.create.element) {
				result = Utils.create.element(
					doc,
					tag
				);
			}
			return result;
		}

		function insertBefore()
		{
			var node;
			if (Utils.create.element) {
				node = makeElement(
					global.document,
					"li"
				);
			}
			if (node) {
				node = prepend(node);
			}
			return Utils.is.nodeLike(
				node
			);
		}

		function generateList(
			num
		)
		{
			var index = num - 1,
				node,
				list = [];
			while (index > -1) {
				node = makeElement(
					global.document,
					"li"
				);
				if (node) {
					list[index] = node;
				}
				index -= 1;
			}
			return list;
		}

		function generatePrependList()
		{
			return generateList(3);
		}

		function insertList()
		{
			var list = generatePrependList(),
				par = commonElements.test,
				nodes;
			if (par && list && list.length) {
				nodes = Utils.node.prependList(
					par,
					list,
					par.lastChild
				);
			}
			return typeof nodes === "undefined";
		}

		function appendChild()
		{
			var node = makeElement(
				global.document,
				"li"
			);
			node = Utils.node.append(
				commonElements.test,
				node
			);
			return Utils.is.nodeLike(
				node
			);
		}

		function generateAppendList()
		{
			return generateList(3);
		}

		function appendList()
		{
			var list = generateAppendList(),
				nodes,
				par = commonElements.test;
			if (list && list.length) {
				nodes = Utils.node.appendList(
					par,
					list
				);
			}
			return typeof nodes === "undefined";
		}

		function removeChild()
		{
			var par = commonElements.test,
				node;
			if (par) {
				node = Utils.node.remove(
					par,
					par.lastChild
				);
			}
			return Utils.is.nodeLike(
				node
			);
		}

		function replace(node)
		{
			var par = commonElements.test;
			if (par) {
				node =  Utils.node.replace(
					par,
					node,
					par.lastChild
				);
			}
			return node;
		}

		function makeText(
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

		function replaceChild()
		{
			var node = makeText(
				global.document,
				"c = b^x; x = log(c) / log(b)"
			);
			if (node) {
				node = replace(node);
			}
			return Utils.is.nodeLike(
				node
			);
		}

		function cloneNode()
		{
			var node = Utils.node.clone(
				commonElements.test,
				true
			);
			return Utils.is.nodeLike(
				node
			);
		}

		function getName()
		{
			var node = commonElements.test,
				test;
			if (node) {
				test = Utils.node.getName(
					node,
					true
				);
			}
			return test === "ul";
		}

		function getValue()
		{
			var node = commonElements.test_text,
				test;
			if (node.firstChild) {
				test = Utils.node.getValue(
					node.firstChild
				);
			}
			return test === "test";
		}

		function setValue()
		{
			var node = commonElements.test_text,
				test;
			if (node.firstChild) {
				test = Utils.node.setValue(
					node.firstChild,
					"testing; 1, 2, 3"
				);
			}
			return test === "testing; 1, 2, 3";
		}

		tests = [
			insertBefore,
			insertList,
			appendChild,
			appendList,
			removeChild,
			replaceChild,
			cloneNode,
			getName,
			getValue,
			setValue
		];

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
