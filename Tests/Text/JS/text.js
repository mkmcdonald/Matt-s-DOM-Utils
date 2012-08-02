var global = global || this;
if (typeof Utils === "object" && Utils) {
	(function () {
		var doc = global.document,
			commonElements,
			tests,
			testIndex,

			score,
			testsRun,

			runTests,

			tester;

		commonElements = (function () {
			var key = "getElementById",
				obj = {};
			obj.test = doc[key]("test");
			obj.start = doc[key]("start");
			obj.stop = doc[key]("stop");
			obj.results = doc[key]("results");
			obj.tests = doc[key]("tests");
			obj.score = doc[key]("score");
			return obj;
		}());

		doc = null;

		function retrieveText()
		{
			var node = commonElements.test,
				text = Utils.text.get(
					node
				);
			return typeof text === "string";
		}

		function setText(
			obj,
			text,
			doc
		)
		{
			return Utils.text.set(
				obj,
				text,
				doc
			);
		}

		function overwriteText()
		{
			var node = commonElements.test,
				text = setText(
					node,
					"NEW TEXTUAL CONTENT",
					global.document
				);
			return typeof text === "string";
		}

		tests = (function () {
			return [
				retrieveText,
				overwriteText,
			];
		}());

		function resetTestData()
		{
			testIndex = 0;
			score = 0;
			testsRun = 0;
		}

		function isHostObject(
			obj
		)
		{
			return Utils.is.hostObject(
				obj
			);
		}

		function disableStartButton()
		{
			var par = commonElements;
			if (isHostObject(par.start)) {
				par.start.disabled = true;
				par.start.onclick = function () {};
			}
		}

		function grabById(
			id
		)
		{
			var key = "getElementById";
			return global.document[key](
				id
			);
		}

		function addMessage(
			msg,
			num
		)
		{
			var cell = grabById("result_" + num);
			if (cell) {
				setText(
					cell,
					msg,
					global.document
				);
			}
		}

		function updateScore()
		{
			var par = commonElements,
				total = score + " / " + testsRun;
			if (isHostObject(par.score)) {
				setText(
					par.score,
					total,
					global.document
				);
			}
		}

		function adjustScore(
			result,
			num
		)
		{

			var row = grabById("test_" + num);
			if (row) {
				if (result === "true") {
					row.className = "pass";
					score += 1;
					testsRun += 1;
				} else if (result === "false") {
					row.className = "fail";
				} else if (result === "ERROR") {
					row.className = "error";
					testsRun += 1;
				}
			}
			updateScore();
		}

		function addResult(
			result,
			num
		)
		{
			addMessage(
				result,
				num
			);
			adjustScore(
				result,
				num
			);
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
					result = String(
						result
					);
				} catch (err) {
					result = "ERROR";
				}
				addResult(
					result,
					key
				);
			}
		}

		function makeTimeout(
			ref,
			ms
		)
		{
			var key = "setTimeout",
				result;
			if (isHostObject(global[key])) {
				result = global[key](
					ref,
					ms
				);
			}
			return result;
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
					tester = makeTimeout(
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
			resetTestData();
			runTests();
			disableStartButton();
		}

		function addStartHandler()
		{
			var par = commonElements;
			if (isHostObject(par.start)) {
				par.start.onclick = startTests;
			}
		}

		function clearResult(
			num
		)
		{
			var cell = grabById("result_" + num),
				row = grabById("test_" + num),
				index;
			if (cell && row) {
				row.className = "";
				setText(
					cell,
					"\r\n",
					global.document
				);
			}
		}

		function clearTests()
		{
			var index = 0,
				max = tests.length;
			for (index; index < max; index += 1) {
				clearResult(
					index + 1
				);
			}
		}

		function resetScore()
		{
			var par = commonElements;
			if (isHostObject(par.score)) {
				setText(
					par.score,
					"0 / 0",
					global.document
				);
			}
		}

		function enableStartButton()
		{
			var par = commonElements;
			if (isHostObject(par.start)) {
				par.start.disabled = false;
				par.start.onclick = startTests;
			}
		}

		function removeTimeout(
			ref
		)
		{
			var key = "clearTimeout";
			if (isHostObject(global[key])) {
				global[key](
					ref
				);
			}
		}

		function endTests(
			evt
		)
		{
			removeTimeout(
				tester
			);
			tester = null;
			clearTests();
			resetScore();
			enableStartButton();
		}

		function addStopHandler()
		{
			var par = commonElements;
			if (isHostObject(par.stop)) {
				par.stop.onclick = endTests;
			}
		}

		function addHandlers()
		{
			var par = commonElements;
			addStartHandler();
			addStopHandler();
		}

		addHandlers();
	}());
}
