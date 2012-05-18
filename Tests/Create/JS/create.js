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

	function elementCreated()
	{
		var test = Utils.create.element(
			doc,
			"p"
		);
		return Utils.is.element(
			test
		);
	}

	function textNodeCreated()
	{
		var test = Utils.create.text(
			doc,
			"The rain in Spain is quite plain."
		);
		return Utils.is.text(
			test
		);
	}

	function commentCreated()
	{
		var test = Utils.create.comment(
			doc,
			"No comment."
		);
		return Utils.is.comment(
			test
		);
	}

	function documentFragmentCreated()
	{
		var test = Utils.create.documentFragment(
			doc
		);
		return Utils.is.documentFragment(
			test
		);
	}

	function generateTests()
	{
		return [
			elementCreated,
			textNodeCreated,
			commentCreated,
			documentFragmentCreated
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
