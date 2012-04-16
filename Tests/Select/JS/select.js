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

	function headReturned()
	{
		return Utils.select.head(
			doc
		);
	}

	function bodyReturned()
	{
		return Utils.select.body(
			doc
		);
	}

	function byNameWrapped()
	{
		return Utils.select.byName(
			doc,
			"control1"
		);
	}

	function byTagNameWrapped()
	{
		return Utils.select.byTagName(
			doc,
			"input"
		);
	}

	function byClassNameWrapped()
	{
		return Utils.select.byClassName(
			doc,
			"container"
		);
	}

	function byIdWrapped()
	{
		return Utils.select.byId(
			doc,
			"test"
		);
	}

	function qsWrapped()
	{
		return Utils.select.query(
			doc,
			"input[type=text]"
		);
	}

	function qsaWrapped()
	{
		return Utils.select.queryAll(
			doc,
			"input[type]"
		);
	}

	function generateTests()
	{
		return [
			headReturned,
			bodyReturned,
			byNameWrapped,
			byTagNameWrapped,
			byClassNameWrapped,
			byIdWrapped,
			qsWrapped,
			qsaWrapped
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
			isHostObject = Utils.is.hostObject(nodes);
		if (isHostObject) {
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
