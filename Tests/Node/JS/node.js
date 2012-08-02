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

		function prepend(
			node
		)
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
			return generateList(
				3
			);
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
			return generateList(
				3
			);
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

		function replace(
			node
		)
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
				node = replace(
					node
				);
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

		function isHostObject(
			obj
		)
		{
			return Utils.is.hostObject(
				obj
			);
		}

		function disableStartButton()
		{
			var par = commonElements;
			if (isHostObject(par.start)) {
				par.start.disabled = true;
				par.start.onclick = function () {};
			}
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

		function setText(
			obj,
			text,
			doc
		)
		{
			return Utils.text.set(
				obj,
				text,
				doc
			);
		}

		function addMessage(
			msg,
			num
		)
		{
			var cell = grabById("result_" + num);
			if (cell) {
				setText(
					cell,
					msg,
					global.document
				);
			}
		}

		function updateScore()
		{
			var par = commonElements,
				total = score + " / " + testsRun;
			if (isHostObject(par.score)) {
				setText(
					par.score,
					total,
					global.document
				);
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
			if (isHostObject(global[key])) {
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

		function addStartHandler()
		{
			var par = commonElements;
			if (isHostObject(par.start)) {
				par.start.onclick = startTests;
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
				setText(
					cell,
					"\r\n",
					global.document
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
			var par = commonElements;
			if (isHostObject(par.score)) {
				setText(
					par.score,
					"0 / 0",
					global.document
				);
			}
		}

		function enableStartButton()
		{
			var par = commonElements;
			if (isHostObject(par.start)) {
				par.start.disabled = false;
				par.start.onclick = startTests;
			}
		}

		function removeTimeout(
			ref
		)
		{
			var key = "clearTimeout";
			if (isHostObject(global[key])) {
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

		function addStopHandler()
		{
			var par = commonElements;
			if (isHostObject(par.stop)) {
				par.stop.onclick = endTests;
			}
		}

		function addHandlers()
		{
			var par = commonElements;
			addStartHandler();
			addStopHandler();
		}

		addHandlers();
	}());
}
