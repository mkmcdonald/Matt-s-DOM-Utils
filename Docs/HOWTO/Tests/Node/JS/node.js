var global = global || this;
if (typeof Utils === "object" && Utils) {
	(function () {
		var doc = global.document,
			commonElements,
			tests,

			runTests,

			testIndex,
			tester;

		commonElements = (function () {
			var key = "getElementById",
				obj = {};
			obj.test = doc[key]("test");
			obj.start = doc[key]("start");
			obj.stop = doc[key]("stop");
			obj.results = doc[key]("results");
			return obj;
		}());

		doc = null;

		function prepend(node)
		{
			var par = commonElements.test;
			if (par && node) {
				node =  Utils.node.prepend(
					par,
					node,
					par.lastChild
				);
			}
			return node;
		}

		function makeElement(
			doc,
			tag
		)
		{
			var result = null;
			if (Utils.create.element) {
				result = Utils.create.element(
					doc,
					tag
				);
			}
			return result;
		}

		function insertBefore()
		{
			var node;
			if (Utils.create.element) {
				node = makeElement(
					global.document,
					"li"
				);
			}
			if (node) {
				node = prepend(node);
			}
			return Utils.is.nodeLike(
				node
			);
		}

		function generateList(
			num
		)
		{
			var index = num - 1,
				node,
				list = [];
			while (index > -1) {
				node = makeElement(
					global.document,
					"li"
				);
				if (node) {
					list[index] = node;
				}
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
				par = commonElements.test,
				nodes;
			if (par && list && list.length) {
				nodes = Utils.node.prependList(
					par,
					list,
					par.lastChild
				);
			}
			return Utils.is.type(
				nodes,
				"undefined"
			);
		}

		function appendChild()
		{
			var node = makeElement(
				global.document,
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
				nodes,
				par = commonElements.test;
			if (list && list.length) {
				nodes = Utils.node.appendList(
					par,
					list
				);
			}
			return Utils.is.type(
				nodes,
				"undefined"
			);
		}

		function removeChild()
		{
			var par = commonElements.test,
				node;
			if (par) {
				node = Utils.node.remove(
					par,
					par.lastChild
				);
			}
			return Utils.is.nodeLike(
				node
			);
		}

		function replace(node)
		{
			var par = commonElements.test;
			if (par) {
				node =  Utils.node.replace(
					par,
					node,
					par.lastChild
				);
			}
			return node;
		}

		function makeText(
			doc,
			text
		)
		{
			var result = null;
			if (Utils.create.text) {
				result = Utils.create.text(
					doc,
					text
				);
			}
			return result;
		}

		function replaceChild()
		{
			var node = makeText(
				global.document,
				"c = b^x; x = log(c) / log(b)"
			);
			if (node) {
				node = replace(node);
			}
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
				global.document,
				str
			);
		}

		function grabById(
			id
		)
		{
			return global.document.getElementById(
				id
			);
		}

		function addMessage(
			msg,
			num
		)
		{
			var cell = grabById("result_" + num),
				row = grabById("test_" + num),
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
				} catch (err) {
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

		function startTests(
			evt
		)
		{
			testIndex = 0;
			runTests();
			this.disabled = true;
			this.onclick = function () {};
		}

		function clearResult(
			num
		)
		{
			var cell = grabById("result_" + num),
				row = grabById("test_" + num),
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
			global.clearTimeout(tester);
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
}
