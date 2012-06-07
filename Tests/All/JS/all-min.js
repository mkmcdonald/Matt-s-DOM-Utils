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
			var obj = {},
				form = doc.forms.test_form;
			obj.node_test = doc.links[0];
			obj.create_test = doc.links[1];
			obj.classes_test = doc.links[2];
			obj.traverse_test = doc.links[3];
			obj.test_form = form;
			obj.start = form.elements.start;
			obj.stop = form.elements.stop;
			form = null;
			return obj;
		}());

		doc = null;

		function prepend(node)
		{
			var par = commonElements.node_test;
			if (par && node) {
				node =  Utils.node.prepend(
					par,
					node,
					par.lastChild
				);
			}
			return node;
		}

		function insertBefore()
		{
			var node;
			if (Utils.create.element) {
				node = Utils.create.element(
					global.document,
					"span"
				);
			}
			if (node) {
				node = prepend(node);
			}
			return Utils.is.nodeLike(
				node
			);
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
					"span"
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
				par = commonElements.node_test,
				nodes;
			if (list && list.length && par) {
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
				"span"
			),
				par = commonElements.node_test;
			if (node) {
				node = Utils.node.append(
					par,
					node
				);
			}
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
				par = commonElements.node_test,
				nodes;
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
			var par = commonElements.node_test,
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
			var par = commonElements.node_test;
			if (par && node) {
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
				commonElements.node_test,
				true
			);
			return Utils.is.nodeLike(
				node
			);
		}

		function createElement()
		{
			var test = makeElement(
				global.document,
				"span"
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

		function contains()
		{
			var test,
				node = commonElements.classes_test;
			if (Utils.classes.contains) {
				test = Utils.classes.contains(
					node,
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
			var node = commonElements.classes_test,
				tokens  = Utils.classes.containsList(
					node,
					["a", "b", "c"]
				);
			return Utils.is.type(
				tokens,
				"boolean"
			);
		}

		function add()
		{
			var test,
				node = commonElements.classes_test;
			if (Utils.classes.add) {
				test = Utils.classes.add(
					node,
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
			var node = commonElements.classes_test,
				test = Utils.classes.addList(
					node,
					["a", "b", "c"]
				);
			return Utils.is.type(
				test,
				"undefined"
			);
		}

		function remove()
		{
			var node = commonElements.classes_test,
				test = null;
			if (Utils.classes.remove) {
				test = Utils.classes.remove(
					node,
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
			var node = commonElements.classes_test,
				tokens = Utils.classes.removeList(
					node,
					["a", "b", "c"]
				);
			return Utils.is.type(
				tokens,
				"undefined"
			);
		}

		function toggle()
		{
			var node = commonElements.classes_test,
				test = null;
			if (Utils.classes.toggle) {
				test = Utils.classes.toggle(
					node,
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
			var node = commonElements.classes_test,
				test = Utils.classes.toggleList(
					node,
					["a", "b", "c"]
				);
			return Utils.is.type(
				test,
				"undefined"
			);
		}

		function get()
		{
			var node = commonElements.classes_test,
				test;
			if (Utils.classes.get) {
				test = Utils.classes.get(
					node
				);
			}
			return Utils.is.arrayLike(
				test
			);
		}

		function childNodes()
		{
			var node = commonElements.traverse_test,
				nodes = Utils.traverse.getNodes(
					node
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
			var node = commonElements.traverse_test,
				nodes = Utils.traverse.nodes(
					node,
					optimisticFilter
				);
			return Utils.is.arrayLike(
				nodes
			);
		}

		function children()
		{
			var node = commonElements.traverse_test,
				test;
			if (Utils.traverse.getElements) {
				test = Utils.traverse.getElements(
					node
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
			var node = commonElements.traverse_test,
				nodes = Utils.traverse.elements(
					node,
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
			var node = commonElements.traverse_test,
				text = Utils.traverse.getText(
					node
				);
			return Utils.is.type(
				text,
				"string"
			);
		}

		function setText()
		{
			var node = commonElements.traverse_test,
				text = Utils.traverse.setText(
					"NEW TEXTUAL CONTENT",
					node,
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
			var child = commonElements.traverse_text,
				node = Utils.traverse.isAncestor(
					global.document,
					child
				);
			return Utils.is.type(
				node,
				"boolean"
			);
		}

		function ancestors()
		{
			var node = commonElements.traverse_test,
				list = Utils.traverse.getAncestors(
					node
				),
				test;
			if (list && list.value) {
				test = list.value;
			}
			return Utils.is.nodeLike(
				test
			);
		}

		function ancestorsTraversed()
		{
			var node = commonElements.traverse_test,
				nodes = Utils.traverse.ancestors(
					node,
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

		function namedItem()
		{
			var test = Utils.select.namedItem(
				commonElements.test_form,
				"elements",
				"result_1"
			);
			return Utils.is.nodeLike(
				test
			);
		}

		function collection()
		{
			var test = Utils.select.collection(
				commonElements.test_form,
				"elements"
			);
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

		function addMessage(
			msg,
			key
		)
		{
			var par = commonElements.test_form,
				pre = "result_",
				control = par.elements[pre + key];
			if (control) {
				control.value = msg;
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

		function endTests(evt)
		{
			global.clearTimeout(tester);
			tester = null;
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
