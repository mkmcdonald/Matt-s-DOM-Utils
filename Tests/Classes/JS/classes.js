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

	function contains()
	{
		var test;
		if (Utils.classes.contains) {
			test = Utils.classes.contains(
				commonElements.test,
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
		var tokens = Utils.classes.containsList(
			commonElements.test,
			["a", "b", "c"]
		);
		return Utils.is.type(
			tokens,
			"boolean"
		);
	}

	function add()
	{
		var test = null;
		if (Utils.classes.add) {
			test = Utils.classes.add(
				commonElements.test,
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
		var tokens = Utils.classes.addList(
			commonElements.test,
			["a", "b", "c"]
		);
		return Utils.is.type(
			tokens,
			"undefined"
		);
	}

	function remove()
	{
		var test = null;
		if (Utils.classes.remove) {
			test = Utils.classes.remove(
				commonElements.test,
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
		var tokens = Utils.classes.removeList(
			commonElements.test,
			["a", "b", "c"]
		);
		return Utils.is.type(
			tokens,
			"undefined"
		);
	}

	function toggle()
	{
		var test = null;
		if (Utils.classes.toggle) {
			test = Utils.classes.toggle(
				commonElements.test,
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
		var tokens = Utils.classes.toggleList(
			commonElements.test,
			["a", "b", "c"]
		);
		return Utils.is.type(
			tokens,
			"undefined"
		);
	}

	function get()
	{
		var test;
		if (Utils.classes.get) {
			test = Utils.classes.get(
				commonElements.test
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
