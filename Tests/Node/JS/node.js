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

	function appendChild()
	{
		var node = Utils.create.element(
			doc,
			"li"
		);
		return Utils.node.append(
			commonElements.test,
			node
		);
	}

	function prepend(node)
	{
		var par = commonElements.test;
		return Utils.node.prepend(
			par,
			node,
			par.lastChild
		);
	}

	function insertBefore()
	{
		var node = Utils.create.text(
			doc,
			"I think; therefore I am"
		);
		return prepend(node);
	}

	function replace(node)
	{
		var par = commonElements.test;
		return Utils.node.replace(
			par,
			node,
			par.lastChild
		);
	}

	function replaceChild()
	{
		var node = Utils.create.text(
			doc,
			"c = b^x; x = log(c) / log(b)"
		);
		return replace(node);
	}

	function removeChild()
	{
		var par = commonElements.test;
		return Utils.node.remove(
			par,
			par.lastChild
		);
	}

	function cloneNode()
	{
		return Utils.node.clone(
			commonElements.test,
			true
		);
	}

	function generateTests()
	{
		return [
			appendChild,
			insertBefore,
			replaceChild,
			removeChild,
			cloneNode
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

	function clearChildNodes(par)
	{
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

	function clearTest(evt)
	{
		clearChildNodes(commonElements.results);
	}

	function addHandlers()
	{
		commonElements.start.onclick = runTest;
		commonElements.stop.onclick = clearTest;
	}

	addHandlers();
}());
