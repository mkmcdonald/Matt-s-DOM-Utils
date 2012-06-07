var global = global || this;
if (Utils) {
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

		function createElement()
		{
			var test = makeElement(
				global.document,
				"p"
			);
			return Utils.is.element(
				test
			);
		}

		function createTextNode()
		{
			var test = makeText(
				global.document,
				"The rain in Spain is quite plain."
			);
			return Utils.is.text(
				test
			);
		}

		function makeComment(
			doc,
			text
		)
		{
			var result = null;
			if (Utils.create.comment) {
				result = Utils.create.comment(
					doc,
					text
				);
			}
			return result;
		}

		function createComment()
		{
			var test = makeComment(
				global.document,
				"No comment."
			);
			return Utils.is.comment(
				test
			);
		}

		function makeDocumentFragment(
			doc
		)
		{
			var result = null;
			if (Utils.create.documentFragment) {
				result = Utils.create.documentFragment(
					doc
				);
			}
			return result;
		}

		function createDocumentFragment()
		{
			var test = makeDocumentFragment(
				global.document
			);
			return Utils.is.documentFragment(
				test
			);
		}

		tests = (function () {
			return [
				createElement,
				createTextNode,
				createComment,
				createDocumentFragment
			];
		}());

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
