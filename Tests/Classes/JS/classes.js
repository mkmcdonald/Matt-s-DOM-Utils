var global = global || this;
if (Utils) {
	(function () {
		var doc = global.document,
			commonElements,
			tests;

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
				get
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
