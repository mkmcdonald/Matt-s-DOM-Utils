var global = global || this;
(function () {
	var doc = global.document,
		commonElements = {
			"test": doc.getElementById("test"),
			"start": doc.getElementById("start"),
			"stop": doc.getElementById("stop"),
			"results": doc.getElementById("results")
		},
		tests,

		runTests,

		testIndex,
		tester;

	function prepend(node)
	{
		var par = commonElements.test,
			node =  Utils.node.prepend(
				par,
				node,
				par.lastChild
			);
		return node;
	}

	function insertBefore()
	{
		var node = Utils.create.element(
			doc,
			"li"
		);
		node = prepend(node);
		return Utils.is.nodeLike(
			node
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

	function insertList()
	{
		var list = generatePrependList(),
			nodes = Utils.node.prependList(
				commonElements.test,
				list,
				commonElements.test.lastChild
			);
		return Utils.is.type(
			nodes,
			"undefined"
		);
	}

	function appendChild()
	{
		var node = Utils.create.element(
			doc,
			"li"
		);
		node = Utils.node.append(
			commonElements.test,
			node
		);
		return Utils.is.nodeLike(
			node
		);
	}

	function generateAppendList()
	{
		return generateList(3);
	}

	function appendList()
	{
		var list = generateAppendList(),
			nodes = Utils.node.appendList(
				commonElements.test,
				list
			);
		return Utils.is.type(
			nodes,
			"undefined"
		);
	}

	function removeChild()
	{
		var par = commonElements.test,
			node = Utils.node.remove(
				par,
				par.lastChild
			);
		return Utils.is.nodeLike(
			node
		);
	}

	function replace(node)
	{
		var par = commonElements.test,
			node =  Utils.node.replace(
				par,
				node,
				par.lastChild
			);
		return node;
	}

	function replaceChild()
	{
		var node = Utils.create.text(
			doc,
			"c = b^x; x = log(c) / log(b)"
		);
		node = replace(node);
		return Utils.is.nodeLike(
			node
		);
	}

	function cloneNode()
	{
		var node = Utils.node.clone(
			commonElements.test,
			true
		);
		return Utils.is.nodeLike(
			node
		);
	}

	tests = [
		insertBefore,
		insertList,
		appendChild,
		appendList,
		removeChild,
		replaceChild,
		cloneNode
	];

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
			cell.appendChild(
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
		var cell = doc.getElementById("result_" + key),
			row = doc.getElementById("test_" + key),
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
