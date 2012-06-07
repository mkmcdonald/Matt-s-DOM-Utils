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
			var test;
			if (Utils.select.byTagName) {
				test = Utils.select.byTagName(
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
			var test;
			if (Utils.select.byClassName) {
				test = Utils.select.byClassName(
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
			var test;
			if (Utils.select.queryAll) {
				test = Utils.select.queryAll(
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
			var test;
			if (Utils.select.allImages) {
				test = Utils.select.allImages(
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
			var test;
			if (Utils.select.allEmbeds) {
				test = Utils.select.allEmbeds(
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
			var test;
			if (Utils.select.allPlugins) {
				test = Utils.select.allPlugins(
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
			var test;
			if (Utils.select.allLinks) {
				test = Utils.select.allLinks(
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
			var test;
			if (Utils.select.allForms) {
				test = Utils.select.allForms(
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
			var test;
			if (Utils.select.allScripts) {
				test = Utils.select.allScripts(
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
			var test;
			if (Utils.select.allApplets) {
				test = Utils.select.allApplets(
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
			var test;
			if (Utils.select.allAnchors) {
				test = Utils.select.allAnchors(
					global.document
				);
			}
			return Utils.is.arrayLike(
				test
			);
		}

		function namedItem()
		{
			var node = commonElements.test,
				test = Utils.select.namedItem(
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
			var node = commonElements.test,
				test = Utils.select.collection(
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
