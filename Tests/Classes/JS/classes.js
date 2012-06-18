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

		function contains()
		{
			var test,
				node = commonElements.test;
			if (Utils.classes.contains) {
				test = Utils.classes.contains(
					node,
					"good"
				);
			}
			return Utils.is.type(
				test,
				"boolean"
			);
		}

		function containsList()
		{
			var node = commonElements.test,
				tokens  = Utils.classes.containsList(
					node,
					["a", "b", "c"]
				);
			return Utils.is.type(
				tokens,
				"boolean"
			);
		}

		function add()
		{
			var test,
				node = commonElements.test;
			if (Utils.classes.add) {
				test = Utils.classes.add(
					node,
					"good"
				);
			}
			return Utils.is.type(
				test,
				"undefined"
			);
		}

		function addList()
		{
			var node = commonElements.test,
				test = Utils.classes.addList(
					node,
					["a", "b", "c"]
				);
			return Utils.is.type(
				test,
				"undefined"
			);
		}

		function remove()
		{
			var node = commonElements.test,
				test = null;
			if (Utils.classes.remove) {
				test = Utils.classes.remove(
					node,
					"good"
				);
			}
			return Utils.is.type(
				test,
				"undefined"
			);
		}

		function removeList()
		{
			var node = commonElements.test,
				tokens = Utils.classes.removeList(
					node,
					["a", "b", "c"]
				);
			return Utils.is.type(
				tokens,
				"undefined"
			);
		}

		function toggle()
		{
			var node = commonElements.test,
				test = null;
			if (Utils.classes.toggle) {
				test = Utils.classes.toggle(
					node,
					"toggle"
				);
			}
			return Utils.is.type(
				test,
				"boolean"
			);
		}

		function toggleList()
		{
			var node = commonElements.test,
				test = Utils.classes.toggleList(
					node,
					["a", "b", "c"]
				);
			return Utils.is.type(
				test,
				"undefined"
			);
		}

		function getClass()
		{
			var node = commonElements.test,
				test;
			if (Utils.classes.item) {
				test = Utils.classes.item(
					node,
					0
				);
			}
			return Utils.is.type(
				test,
				"string"
			);
		}

		function get()
		{
			var node = commonElements.test,
				test;
			if (Utils.classes.get) {
				test = Utils.classes.get(
					node
				);
			}
			return Utils.is.arrayLike(
				test
			);
		}

		tests = (function () {
			return [
				contains,
				containsList,
				add,
				addList,
				remove,
				removeList,
				toggle,
				toggle,
				toggleList,
				getClass,
				get
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
