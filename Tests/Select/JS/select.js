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
		var test = Utils.select.head(
			doc
		);
		return Utils.is.nodeLike(
			test
		);
	}

	function bodyReturned()
	{
		var test = Utils.select.body(
			doc
		);
		return Utils.is.nodeLike(
			test
		);
	}

	function byNameWrapped()
	{
		var test = Utils.select.byName(
			doc,
			"control1"
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function byTagNameWrapped()
	{
		var test = Utils.select.byTagName(
			doc,
			"input"
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function byClassNameWrapped()
	{
		var test = Utils.select.byClassName(
			doc,
			"container"
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function byIdWrapped()
	{
		var test = Utils.select.byId(
			doc,
			"test"
		);
		return Utils.is.nodeLike(
			test
		);
	}

	function qsWrapped()
	{
		var test = Utils.select.query(
			doc,
			"input[type=text]"
		);
		return Utils.is.nodeLike(
			test
		);
	}

	function qsaWrapped()
	{
		var test = Utils.select.queryAll(
			doc,
			"input[type]"
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function namedImagesWrapped()
	{
		var test = Utils.select.images(
			doc,
			0
		);
		return Utils.is.nodeLike(
			test
		);
	}

	function allImagesWrapped()
	{
		var test = Utils.select.allImages(
			doc
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function namedEmbedsWrapped()
	{
		var test = Utils.select.embeds(
			doc,
			0
		);
		return Utils.is.nodeLike(
			test
		);
	}

	function allEmbedsWrapped()
	{
		var test = Utils.select.allEmbeds(
			doc
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function namedPluginsWrapped()
	{
		var test = Utils.select.plugins(
			doc,
			0
		);
		return Utils.is.nodeLike(
			test
		);
	}

	function allPluginsWrapped()
	{
		var test = Utils.select.allPlugins(
			doc
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function namedLinksWrapped()
	{
		var test = Utils.select.links(
			doc,
			0
		);
		return Utils.is.nodeLike(
			test
		);
	}

	function allLinksWrapped()
	{
		var test = Utils.select.allLinks(
			doc
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function namedFormsWrapped()
	{
		var test = Utils.select.forms(
			doc,
			0
		);
		return Utils.is.nodeLike(
			test
		);
	}

	function allFormsWrapped()
	{
		var test = Utils.select.allForms(
			doc
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function namedScriptsWrapped()
	{
		var test = Utils.select.scripts(
			doc,
			0
		);
		return Utils.is.nodeLike(
			test
		);
	}

	function allScriptsWrapped()
	{
		var test = Utils.select.allScripts(
			doc
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function namedAppletsWrapped()
	{
		var test = Utils.select.applets(
			doc,
			0
		);
		return Utils.is.nodeLike(
			test
		);
	}

	function allAppletsWrapped()
	{
		var test = Utils.select.allApplets(
			doc
		);
		return Utils.is.arrayLike(
			test
		);
	}

	function namedAnchorsWrapped()
	{
		var test = Utils.select.anchors(
			doc,
			0
		);
		return Utils.is.nodeLike(
			test
		);
	}

	function allAnchorsWrapped()
	{
		var test = Utils.select.allAnchors(
			doc
		);
		return Utils.is.arrayLike(
			test
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
			qsaWrapped,
			namedImagesWrapped,
			allImagesWrapped,
			namedEmbedsWrapped,
			allEmbedsWrapped,
			namedPluginsWrapped,
			allPluginsWrapped,
			namedLinksWrapped,
			allLinksWrapped,
			namedFormsWrapped,
			allFormsWrapped,
			namedScriptsWrapped,
			allScriptsWrapped,
			namedAppletsWrapped,
			allAppletsWrapped,
			namedAnchorsWrapped,
			allAnchorsWrapped
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
