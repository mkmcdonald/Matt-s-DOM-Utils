var global = global || this;
(function () {
	var doc = global.document,
		commonElements = {
			"test": doc.getElementById("test"),
			"start": doc.getElementById("start"),
			"stop": doc.getElementById("stop"),
			"results": doc.getElementById("results")
		},
		tests;

	doc = null;

	function createElement()
	{
		var test;
		if (Utils.create.element) {
			test = Utils.create.element(
				global.document,
				"p"
			);
		}
		return Utils.is.element(
			test
		);
	}

	function createTextNode()
	{
		var test;
		if (Utils.create.text) {
			test = Utils.create.text(
				global.document,
				"The rain in Spain is quite plain."
			);
		}
		return Utils.is.text(
			test
		);
	}

	function createComment()
	{
		var test;
		if (Utils.create.comment) {
			test = Utils.create.comment(
				global.document,
				"No comment."
			);
		}
		return Utils.is.comment(
			test
		);
	}

	function createDocumentFragment()
	{
		var test;
		if (Utils.create.documentFragment) {
			test = Utils.create.documentFragment(
				global.document
			);
		}
		return Utils.is.documentFragment(
			test
		);
	}

	tests = (function () {
		return [
			createElement,
			createTextNode,
			createComment,
			createDocumentFragment
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

	function startTests(evt)
	{
		testIndex = 0;
		runTests();
		this.disabled = true;
		this.onclick = function () {};
	}

	function clearResult(key)
	{
		var cell = document.getElementById("result_" + key),
			row = document.getElementById("test_" + key),
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
		clearTimeout(tester);
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
