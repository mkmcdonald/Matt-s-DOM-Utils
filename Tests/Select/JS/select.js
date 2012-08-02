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

		function byName()
		{
			var test;
			if (Utils.select.byName) {
				test = Utils.select.byName(
					global.document,
					"control1"
				);
			}
			return Utils.is.arrayLike(
				test
			);
		}

		function byTagName()
		{
			var key = "byTagName",
				test;
			if (Utils.select[key]) {
				test = Utils.select[key](
					global.document,
					"input"
				);
			}
			return Utils.is.arrayLike(
				test
			);
		}

		function byClassName()
		{
			var key = "byClassName",
				test;
			if (Utils.select[key]) {
				test = Utils.select[key](
					global.document,
					"container"
				);
			}
			return Utils.is.arrayLike(
				test
			);
		}

		function byId()
		{
			var test;
			if (Utils.select.byId) {
				test = Utils.select.byId(
					global.document,
					"test"
				);
			}
			return Utils.is.nodeLike(
				test
			);
		}

		function query()
		{
			var test;
			if (Utils.select.query) {
				test = Utils.select.query(
					global.document,
					"input[type=text]"
				);
			}
			return Utils.is.nodeLike(
				test
			);
		}

		function queryAll()
		{
			var key = "queryAll",
				test;
			if (Utils.select[key]) {
				test = Utils.select[key](
					global.document,
					"input[type]"
				);
			}
			return Utils.is.arrayLike(
				test
			);
		}

		function head()
		{
			var test;
			if (Utils.select.head) {
				test = Utils.select.head(
					global.document
				);
			}
			return Utils.is.nodeLike(
				test
			);
		}

		function body()
		{
			var test;
			if (Utils.select.body) {
				test = Utils.select.body(
					global.document
				);
			}
			return Utils.is.nodeLike(
				test
			);
		}

		function images()
		{
			var test;
			if (Utils.select.images) {
				test = Utils.select.images(
					global.document,
					"0"
				);
			}
			return Utils.is.nodeLike(
				test
			);
		}

		function allImages()
		{
			var key = "allImages",
				test;
			if (Utils.select[key]) {
				test = Utils.select[key](
					global.document
				);
			}
			return Utils.is.arrayLike(
				test
			);
		}

		function embeds()
		{
			var test;
			if (Utils.select.embeds) {
				test = Utils.select.embeds(
					global.document,
					"0"
				);
			}
			return Utils.is.nodeLike(
				test
			);
		}

		function allEmbeds()
		{
			var key = "allEmbeds",
				test;
			if (Utils.select[key]) {
				test = Utils.select[key](
					global.document
				);
			}
			return Utils.is.arrayLike(
				test
			);
		}

		function plugins()
		{
			var test;
			if (Utils.select.plugins) {
				test = Utils.select.plugins(
					global.document,
					"0"
				);
			}
			return Utils.is.nodeLike(
				test
			);
		}

		function allPlugins()
		{
			var key = "allPlugins",
				test;
			if (Utils.select[key]) {
				test = Utils.select[key](
					global.document
				);
			}
			return Utils.is.arrayLike(
				test
			);
		}

		function links()
		{
			var test;
			if (Utils.select.links) {
				test = Utils.select.links(
					global.document,
					"0"
				);
			}
			return Utils.is.nodeLike(
				test
			);
		}

		function allLinks()
		{
			var key = "allLinks",
				test;
			if (Utils.select[key]) {
				test = Utils.select[key](
					global.document
				);
			}
			return Utils.is.arrayLike(
				test
			);
		}

		function forms()
		{
			var test;
			if (Utils.select.forms) {
				test = Utils.select.forms(
					global.document,
					"0"
				);
			}
			return Utils.is.nodeLike(
				test
			);
		}

		function allForms()
		{
			var key = "allForms",
				test;
			if (Utils.select[key]) {
				test = Utils.select[key](
					global.document
				);
			}
			return Utils.is.arrayLike(
				test
			);
		}

		function scripts()
		{
			var test;
			if (Utils.select.scripts) {
				test = Utils.select.scripts(
					global.document,
					"0"
				);
			}
			return Utils.is.nodeLike(
				test
			);
		}

		function allScripts()
		{
			var key = "allScripts",
				test;
			if (Utils.select[key]) {
				test = Utils.select[key](
					global.document
				);
			}
			return Utils.is.arrayLike(
				test
			);
		}

		function applets()
		{
			var test;
			if (Utils.select.applets) {
				test = Utils.select.applets(
					global.document,
					"0"
				);
			}
			return Utils.is.nodeLike(
				test
			);
		}

		function allApplets()
		{
			var key = "allApplets",
				test;
			if (Utils.select[key]) {
				test = Utils.select[key](
					global.document
				);
			}
			return Utils.is.arrayLike(
				test
			);
		}

		function anchors()
		{
			var test;
			if (Utils.select.anchors) {
				test = Utils.select.anchors(
					global.document,
					"0"
				);
			}
			return Utils.is.nodeLike(
				test
			);
		}

		function allAnchors()
		{
			var key = "allAnchors",
				test;
			if (Utils.select[key]) {
				test = Utils.select[key](
					global.document
				);
			}
			return Utils.is.arrayLike(
				test
			);
		}

		function namedItem()
		{
			var key = "namedItem",
				node = commonElements.test,
				test = Utils.select[key](
					node,
					"elements",
					"control1"
				);
			return Utils.is.nodeLike(
				test
			);
		}

		function collection()
		{
			var key = "collection",
				node = commonElements.test,
				test = Utils.select[key](
				node,
				"elements"
			);
			return Utils.is.arrayLike(
				test
			);
		}

		tests = [
			byName,
			byTagName,
			byClassName,
			byId,
			query,
			queryAll,
			head,
			body,
			images,
			allImages,
			embeds,
			allEmbeds,
			plugins,
			allPlugins,
			links,
			allLinks,
			forms,
			allForms,
			scripts,
			allScripts,
			applets,
			allApplets,
			anchors,
			allAnchors,
			namedItem,
			collection
		];

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
