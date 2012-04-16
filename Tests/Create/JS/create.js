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

	function elementCreated()
	{
		return Utils.create.element(
			doc,
			"p"
		);
	}

	function textNodeCreated()
	{
		return Utils.create.text(
			doc,
			"The rain in Spain is quite plain."
		);
	}

	function commentCreated()
	{
		return Utils.create.comment(
			doc,
			"No comment."
		);
	}

	function documentFragmentCreated()
	{
		return Utils.create.documentFragment(
			doc
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
		Utils.nodes.append(
			par,
			text
		);
		Utils.nodes.append(
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
				Utils.nodes.remove(
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
