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

	function byName()
	{
		var test;
		if (Utils.select.byName) {
			test = Utils.select.byName(
				doc,
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
				doc,
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
				doc,
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
				doc,
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
				doc,
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
				doc,
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
				doc
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
				doc
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
				doc,
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
				doc
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
				doc,
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
				doc
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
				doc,
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
				doc
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
				doc,
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
				doc
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
				doc,
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
				doc
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
				doc,
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
				doc
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
				doc,
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
				doc
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
				doc,
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
				doc
			);
		}
		return Utils.is.arrayLike(
			test
		);
	}

	tests = (function () {
		return [
			{"test": byName, "key": "one"},
			{"test": byTagName, "key": "two"},
			{"test": byClassName, "key": "three"},
			{"test": byId, "key": "four"},
			{"test": query, "key": "five"},
			{"test": queryAll, "key": "six"},
			{"test": head, "key": "seven"},
			{"test": body, "key": "eight"},
			{"test": images, "key": "nine"},
			{"test": allImages, "key": "ten"},
			{"test": embeds, "key": "eleven"},
			{"test": allEmbeds, "key": "twelve"},
			{"test": plugins, "key": "thirteen"},
			{"test": allPlugins, "key": "fourteen"},
			{"test": links, "key": "fifteen"},
			{"test": allLinks, "key": "sixteen"},
			{"test": forms, "key": "seventeen"},
			{"test": allForms, "key": "eighteen"},
			{"test": scripts, "key": "nineteen"},
			{"test": allScripts, "key": "twenty"},
			{"test": applets, "key": "twenty_one"},
			{"test": allApplets, "key": "twenty_two"},
			{"test": anchors, "key": "twenty_three"},
			{"test": allAnchors, "key": "twenty_four"}
		];
	}());

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
		var isFunction = Utils.is.type(
			test,
			"function"
		),
			result = null;
		if (isFunction) {
			try {
				result = test();
				result = String(result);
			} catch (e) {
				result = "ERROR";
			}
			addMessage(result, key);
		}
	}

	function runTests(evt)
	{
		var index = 0,
			max,
			test;
		max = tests.length;
		while (index < max) {
			runTest(
				tests[index].test,
				tests[index].key
			);
			index += 1;
		}
	}


	function clearResult(key)
	{
		var cell = doc.getElementById("result_" + key),
			row = doc.getElementById("test_" + key),
			index;
		if (cell && row) {
			index = cell.childNodes.length;
			for (index; index > -1; index -= 1) {
				Utils.node.remove(
					cell,
					cell.childNodes[index]
				);
			}
			row.className = "";
		}
	}

	function clearTests(evt)
	{
		var index = 0,
			max = tests.length;
		for (index; index < max; index += 1) {
			clearResult(tests[index].key);
		}
	}

	function addHandlers()
	{
		commonElements.start.onclick = runTests;
		commonElements.stop.onclick = clearTests;
	}

	addHandlers();
}());
