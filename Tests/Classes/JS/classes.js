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
			{"test": contains, "key": "one"},
			{"test": containsList, "key": "two"},
			{"test": add, "key": "three"},
			{"test": addList, "key": "four"},
			{"test": remove, "key": "five"},
			{"test": removeList, "key": "six"},
			{"test": toggle, "key": "seven"},
			{"test": toggle, "key": "eight"},
			{"test": toggleList, "key": "nine"},
			{"test": get, "key": "ten"}
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
