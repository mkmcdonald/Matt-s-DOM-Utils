global = global || this;
(function () {
	var doc = global.document,
		commonElements = {
			"test": doc.getElementById("test"),
			"start": doc.getElementById("start"),
			"stop": doc.getElementById("stop"),
			"results": doc.getElementById("results")
		},
		tests;

	function canAdd()
	{
		return Utils.classes.add(
			"good",
			commonElements.test
		);
	}

	function canDetect()
	{
		return Utils.classes.contains(
			"good",
			commonElements.test
		);
	}

	function canRemove()
	{
		return Utils.classes.remove(
			"good",
			commonElements.test
		);
	}

	function canToggleOn()
	{
		return Utils.classes.toggle(
			"toggle",
			commonElements.test
		);
	}

	function canToggleOff()
	{
		return canToggleOn();
	}

	function canAddMultiple()
	{
		return Utils.classes.addList(
			["a", "b", "c"],
			commonElements.test
		);
	}

	function canDetectMultiple()
	{
		return Utils.classes.containsList(
			["a", "b", "c"],
			commonElements.test
		);
	}

	function canRemoveMultiple()
	{
		return Utils.classes.removeList(
			["a", "b", "c"],
			commonElements.test
		);
	}

	function canToggleMultiple()
	{
		return Utils.classes.toggleList(
			["a", "b", "c"],
			commonElements.test
		);
	}

	function canGet()
	{
		return Utils.classes.get(
			commonElements.test
		);
	}

	function generateTests()
	{
		return [
			canAdd,
			canDetect,
			canRemove,
			canToggleOn,
			canToggleOff,
			canAddMultiple,
			canDetectMultiple,
			canRemoveMultiple,
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

	function runTest(evt)
	{
		var index = 0,
			max,
			test;
		tests = generateTests();
		max = tests.length;
		while (index < max) {
			test = tests[index];
			addMessage(
				test()
			);
			index += 1;
		}
	}

	function clearTest(evt)
	{
		var par = commonElements.results,
		nodes = par.childNodes;
		if (nodes) {
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
		commonElements.start.onclick = runTest;
		commonElements.stop.onclick = clearTest;
	}

	addHandlers();
}());
