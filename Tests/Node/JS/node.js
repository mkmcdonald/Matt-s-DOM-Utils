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

	function prepend(node)
	{
		var par = commonElements.test,
			test =  Utils.node.prepend(
				par,
				node,
				par.lastChild
			);
		return test;
	}

	function insertBefore()
	{
		var node = Utils.create.element(
			doc,
			"li"
		),
			test = prepend(node);
		return Utils.is.nodeLike(
			test
		);
	}

	function generateList(
		num
	)
	{
		var index = num - 1,
			list = [];
		while (index > -1) {
			list[index] = Utils.create.element(
				doc,
				"li"
			);
			list.length += 1;
			index -= 1;
		}
		return list;
	}

	function generatePrependList()
	{
		return generateList(3);
	}

	function insertBeforeList()
	{
		var list = generatePrependList(),
			test = Utils.node.prependList(
				commonElements.test,
				list,
				commonElements.test.lastChild
			);
		return Utils.is.type(
			test,
			"undefined"
		);
	}

	function appendChild()
	{
		var node = Utils.create.element(
			doc,
			"li"
		),
			test = Utils.node.append(
				commonElements.test,
				node
			);
		return Utils.is.nodeLike(
			test
		);
	}

	function generateAppendList()
	{
		return generateList(3);
	}

	function appendList()
	{
		var list = generateAppendList(),
			test = Utils.node.appendList(
				commonElements.test,
				list
			);
		return Utils.is.type(
			test,
			"undefined"
		);
	}

	function removeChild()
	{
		var par = commonElements.test,
			test = Utils.node.remove(
				par,
				par.lastChild
			);
		return Utils.is.nodeLike(
			test
		);
	}

	function replace(node)
	{
		var par = commonElements.test,
			test =  Utils.node.replace(
				par,
				node,
				par.lastChild
			);
		return test;
	}

	function replaceChild()
	{
		var node = Utils.create.text(
			doc,
			"c = b^x; x = log(c) / log(b)"
		),
			test = replace(node);
		return Utils.is.nodeLike(
			test
		);
	}

	function cloneNode()
	{
		var test = Utils.node.clone(
			commonElements.test,
			true
		);
		return Utils.is.nodeLike(
			test
		);
	}

	function generateTests()
	{
		return [
			insertBefore,
			insertBeforeList,
			appendChild,
			appendList,
			removeChild,
			replaceChild,
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
