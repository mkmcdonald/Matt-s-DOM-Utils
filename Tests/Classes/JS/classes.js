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

	function canDetect()
	{
		var test = Utils.classes.contains(
			"good",
			commonElements.test
		);
		return Utils.is.type(
			test,
			"boolean"
		);
	}

	function canDetectMultiple()
	{
		var test = Utils.classes.containsList(
			["a", "b", "c"],
			commonElements.test
		);
		return Utils.is.type(
			test,
			"boolean"
		);
	}

	function canAdd()
	{
		var test = Utils.classes.add(
			"good",
			commonElements.test
		);
		return Utils.is.type(
			test,
			"undefined"
		);
	}

	function canAddMultiple()
	{
		var test = Utils.classes.addList(
			["a", "b", "c"],
			commonElements.test
		);
		return Utils.is.type(
			test,
			"undefined"
		);
	}

	function canRemove()
	{
		var test = Utils.classes.remove(
			"good",
			commonElements.test
		);
		return Utils.is.type(
			test,
			"undefined"
		);
	}

	function canRemoveMultiple()
	{
		var test = Utils.classes.removeList(
			["a", "b", "c"],
			commonElements.test
		);
		return Utils.is.type(
			test,
			"undefined"
		);
	}

	function canToggleOn()
	{
		var test = Utils.classes.toggle(
			"toggle",
			commonElements.test
		);
		return Utils.is.type(
			test,
			"boolean"
		);
	}

	function canToggleOff()
	{
		return canToggleOn();
	}

	function canToggleMultiple()
	{
		var test = Utils.classes.toggleList(
			["a", "b", "c"],
			commonElements.test
		);
		return Utils.is.type(
			test,
			"undefined"
		);
	}

	function canGet()
	{
		var test = Utils.classes.get(
			commonElements.test
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function generateTests()
	{
		return [
			canDetect,
			canDetectMultiple,
			canAdd,
			canAddMultiple,
			canRemove,
			canRemoveMultiple,
			canToggleOn,
			canToggleOff,
			canToggleMultiple,
			canGet
		];
	}

	function createMessage(text)
	{
		var str = String(text);
		if (str === "") {
			str = "[an empty string]";
		}
		return Utils.create.text(
			doc,
			str + "\r\n"
		);
	}

	function addMessage(text)
	{
		var isText =
			Utils.is.text(
				text
			),
			par = commonElements.results,
			separator = createMessage("----------");
		text = createMessage(text);
		Utils.node.append(
			par,
			text
		);
		Utils.node.append(
			par,
			separator
		);
	}

	function runTest(test)
	{
		var isFunction = Utils.is.type(
			test,
			"function"
		),
			result = null;
		if (isFunction) {
			try {
				result = test();
				String(result);
			} catch (e) {
				result = "ERROR";
			}
			addMessage(result);
		}
	}

	function runTests(evt)
	{
		var index = 0,
			max,
			test;
		tests = generateTests();
		max = tests.length;
		while (index < max) {
			test = tests[index];
			runTest(test);
			index += 1;
		}
	}

	function clearTests(evt)
	{
		var par = commonElements.results,
			nodes = par.childNodes;
			isHostObject = Utils.is.hostObject(nodes);
		if (isHostObject) {
			while(nodes.length) {
				Utils.node.remove(
					par,
					nodes[0]
				);
			}
		}
	}

	function addHandlers()
	{
		commonElements.start.onclick = runTests;
		commonElements.stop.onclick = clearTests;
	}

	addHandlers();
}());
