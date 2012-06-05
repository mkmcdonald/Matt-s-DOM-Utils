var global = global || this;
(function () {
	var doc = global.document,
		commonElements = {
			"node_test": doc.getElementById("node_test"),
			"create_test": doc.getElementById("create_test"),
			"classes_test": doc.getElementById("classes_test"),
			"traverse_test": doc.getElementById("traverse_test"),
			"start": doc.getElementById("start"),
			"stop": doc.getElementById("stop"),
			"results": doc.getElementById("results")
		},
		tests,

		runTests,

		testIndex,
		tester;

	doc = null;

	function prepend(node)
	{
		var par = commonElements.node_test,
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
			global.document,
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
				global.document,
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
				commonElements.node_test,
				list,
				commonElements.node_test.lastChild
			);
		return Utils.is.type(
			nodes,
			"undefined"
		);
	}

	function appendChild()
	{
		var node = Utils.create.element(
			global.document,
			"li"
		);
		node = Utils.node.append(
			commonElements.node_test,
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
				commonElements.node_test,
				list
			);
		return Utils.is.type(
			nodes,
			"undefined"
		);
	}

	function removeChild()
	{
		var par = commonElements.node_test,
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
		var par = commonElements.node_test,
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
			global.document,
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
			commonElements.node_test,
			true
		);
		return Utils.is.nodeLike(
			node
		);
	}

	function createElement()
	{
		var test;
		if (Utils.create.element) {
			test = Utils.create.element(
				global.document,
				"p"
			);
		}
		return Utils.is.element(
			test
		);
	}

	function createTextNode()
	{
		var test;
		if (Utils.create.text) {
			test = Utils.create.text(
				global.document,
				"The rain in Spain is quite plain."
			);
		}
		return Utils.is.text(
			test
		);
	}

	function createComment()
	{
		var test;
		if (Utils.create.comment) {
			test = Utils.create.comment(
				global.document,
				"No comment."
			);
		}
		return Utils.is.comment(
			test
		);
	}

	function createDocumentFragment()
	{
		var test;
		if (Utils.create.documentFragment) {
			test = Utils.create.documentFragment(
				global.document
			);
		}
		return Utils.is.documentFragment(
			test
		);
	}

	function contains()
	{
		var test;
		if (Utils.classes.contains) {
			test = Utils.classes.contains(
				commonElements.classes_test,
				"good"
			);
		}
		return Utils.is.type(
			test,
			"boolean"
		);
	}

	function containsList()
	{
		var tokens = Utils.classes.containsList(
			commonElements.classes_test,
			["a", "b", "c"]
		);
		return Utils.is.type(
			tokens,
			"boolean"
		);
	}

	function add()
	{
		var test = null;
		if (Utils.classes.add) {
			test = Utils.classes.add(
				commonElements.classes_test,
				"good"
			);
		}
		return Utils.is.type(
			test,
			"undefined"
		);
	}

	function addList()
	{
		var test = Utils.classes.addList(
			commonElements.classes_test,
			["a", "b", "c"]
		);
		return Utils.is.type(
			test,
			"undefined"
		);
	}

	function remove()
	{
		var test = null;
		if (Utils.classes.remove) {
			test = Utils.classes.remove(
				commonElements.classes_test,
				"good"
			);
		}
		return Utils.is.type(
			test,
			"undefined"
		);
	}

	function removeList()
	{
		var tokens = Utils.classes.removeList(
			commonElements.classes_test,
			["a", "b", "c"]
		);
		return Utils.is.type(
			tokens,
			"undefined"
		);
	}

	function toggle()
	{
		var test = null;
		if (Utils.classes.toggle) {
			test = Utils.classes.toggle(
				commonElements.classes_test,
				"toggle"
			);
		}
		return Utils.is.type(
			test,
			"boolean"
		);
	}

	function toggleList()
	{
		var test = Utils.classes.toggleList(
			commonElements.classes_test,
			["a", "b", "c"]
		);
		return Utils.is.type(
			test,
			"undefined"
		);
	}

	function get()
	{
		var test;
		if (Utils.classes.get) {
			test = Utils.classes.get(
				commonElements.classes_test
			);
		}
		return Utils.is.arrayLike(
			test
		);
	}

	function childNodes()
	{
		var nodes = Utils.traverse.getNodes(
			commonElements.traverse_test
		);
		return Utils.is.arrayLike(
			nodes
		);
	}

	function optimisticFilter(node)
	{
		return true;
	}

	function childNodesTraversed()
	{
		var nodes = Utils.traverse.nodes(
			commonElements.traverse_test,
			optimisticFilter
		);
		return Utils.is.arrayLike(
			nodes
		);
	}

	function children()
	{
		var test;
		if (Utils.traverse.getElements) {
			test = Utils.traverse.getElements(
				commonElements.traverse_test
			);
		}
		return Utils.is.arrayLike(
			test
		);
	}

	function pessimisticFilter(node)
	{
		return false;
	}

	function childrenTraversed()
	{
		var nodes = Utils.traverse.elements(
			commonElements.traverse_test,
			pessimisticFilter
		);
		return Utils.is.arrayLike(
			nodes
		);
	}

	function tree()
	{
		var nodes = Utils.traverse.getNodeTree(
			global.document
		);
		return Utils.is.arrayLike(
			nodes
		);
	}

	function treeTraversed()
	{
		var nodes = Utils.traverse.nodeTree(
			global.document,
			optimisticFilter
		);
		return Utils.is.arrayLike(
			nodes
		);
	}

	function getText()
	{
		var text = Utils.traverse.getText(
			commonElements.traverse_test
		);
		return Utils.is.type(
			text,
			"string"
		);
	}

	function setText()
	{
		var text = Utils.traverse.setText(
			"NEW TEXTUAL CONTENT",
			commonElements.traverse_test,
			global.document
		);
		return Utils.is.type(
			text,
			"string"
		);
	}

	function childrenTree()
	{
		var tree = Utils.traverse.getElementTree(
			global.document
		);
		return Utils.is.arrayLike(
			tree
		);
	}

	function childrenTreeTraversed()
	{
		var nodes = Utils.traverse.elementTree(
			global.document,
			optimisticFilter
		);
		return Utils.is.arrayLike(
			nodes
		);
	}

	function isAncestor()
	{
		var node = Utils.traverse.isAncestor(
			global.document.documentElement,
			commonElements.traverse_test
		);
		return Utils.is.type(
			node,
			"boolean"
		);
	}

	function ancestors()
	{
		var list = Utils.traverse.getAncestors(
			commonElements.traverse_test
		);
		return Utils.is.nodeLike(
			list.value
		);
	}

	function ancestorsTraversed()
	{
		var nodes = Utils.traverse.ancestors(
			commonElements.traverse_test,
			optimisticFilter
		);
		return Utils.is.arrayLike(
			nodes
		);
	}

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
				"select_test"
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

	tests = [
			insertBefore,
			insertList,
			appendChild,
			appendList,
			removeChild,
			replaceChild,
			cloneNode,
			createElement,
			createTextNode,
			createComment,
			createDocumentFragment,
			contains,
			containsList,
			add,
			addList,
			remove,
			removeList,
			toggle,
			toggle,
			toggleList,
			get,
			childNodes,
			childNodesTraversed,
			children,
			childrenTraversed,
			tree,
			treeTraversed,
			getText,
			setText,
			childrenTree,
			childrenTreeTraversed,
			isAncestor,
			ancestors,
			ancestorsTraversed,
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
			allAnchors
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
		var cell = document.getElementById("result_" + key),
			row = document.getElementById("test_" + key),
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
