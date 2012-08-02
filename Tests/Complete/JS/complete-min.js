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

			tester,

			eventObject,
			eventTarget;

		commonElements = (function () {
			var obj = {},
				form = doc.forms.test_form;
			obj.node_test = doc.links[0];
			obj.create_test = doc.links[1];
			obj.classes_test = doc.links[2];
			obj.traverse_test = doc.links[3];
			obj.event_test = doc.images.event_test;
			obj.test_form = form;
			obj.start = form.elements.start;
			obj.stop = form.elements.stop;
			obj.score = form.elements.score;
			form = null;
			return obj;
		}());

		doc = null;

		function prepend(
			node
		)
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

		function makeElement(
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

		function insertBefore()
		{
			var node;
			if (Utils.create.text) {
				node = makeText(
					global.document,
					"span"
				);
			}
			if (node) {
				node = prepend(
					node
				);
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
				node = makeText(
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
			return generateList(
				3
			);
		}

		function insertList()
		{
			var list = generatePrependList(),
				par = commonElements.node_test,
				key = "prependList",
				nodes;
			if (list && list.length && par) {
				nodes = Utils.node[key](
					par,
					list,
					par.lastChild
				);
			}
			return typeof nodes === "undefined";
		}

		function makeElement(
			doc,
			tag
		)
		{
			var key = "element",
				result = null;
			if (Utils.create[key]) {
				result = Utils.create[key](
					doc,
					tag
				);
			}
			return result;
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
			return generateList(
				3
			);
		}

		function appendList()
		{
			var list = generateAppendList(),
				key = "appendList",
				par = commonElements.node_test,
				nodes;
			if (list && list.length) {
				nodes = Utils.node[key](
					par,
					list
				);
			}
			return typeof nodes === "undefined";
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

		function replace(
			node
		)
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
			var key = "text",
				result = null;
			if (Utils.create[key]) {
				result = Utils.create[key](
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
				node = replace(
					node
				);
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

		function getName()
		{
			var node = commonElements.node_test,
				test;
			if (node) {
				test = Utils.node.getName(
					node,
					true
				);
			}
			return test === "a";
		}

		function getValue()
		{
			var node = commonElements.node_test,
				test;
			if (node.firstChild) {
				test = Utils.node.getValue(
					node.firstChild
				);
			}
			return typeof test === "string";
		}

		function setValue()
		{
			var node = commonElements.node_test,
				test;
			if (node.firstChild) {
				test = Utils.node.setValue(
					node.firstChild,
					"testing; 1, 2, 3"
				);
			}
			return typeof test === "string";
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
			var key = "comment",
				result = null;
			if (Utils.create[key]) {
				result = Utils.create[key](
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
			var key = "documentFragment",
				result = null;
			if (Utils.create[key]) {
				result = Utils.create[key](
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
			var key = "contains",
				test,
				node = commonElements.classes_test;
			if (Utils.classes[key]) {
				test = Utils.classes[key](
					node,
					"good"
				);
			}
			return typeof test === "boolean";
		}

		function containsList()
		{
			var key = "containsList",
				node = commonElements.classes_test,
				tokens  = Utils.classes[key](
					node,
					["a", "b", "c"]
				);
			return typeof tokens === "boolean";
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
			return typeof test === "undefined";
		}

		function addList()
		{
			var key = "addList",
				node = commonElements.classes_test,
				test = Utils.classes[key](
					node,
					["a", "b", "c"]
				);
			return typeof test === "undefined";
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
			return typeof test === "undefined";
		}

		function removeList()
		{
			var key = "removeList",
				node = commonElements.classes_test,
				tokens = Utils.classes[key](
					node,
					["a", "b", "c"]
				);
			return typeof tokens === "undefined";
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
			return typeof test === "boolean";
		}

		function toggleList()
		{
			var key = "toggleList",
				node = commonElements.classes_test,
				test = Utils.classes[key](
					node,
					["a", "b", "c"]
				);
			return typeof test === "undefined";
		}

		function getClass()
		{
			var node = commonElements.classes_test,
				test;
			if (Utils.classes.item) {
				test = Utils.classes.item(
					node,
					0
				);
			}
			return typeof test === "string";
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
			var key = "getNodes",
				node = commonElements.traverse_test,
				nodes;
			if (Utils.traverse[key]) {
				nodes = Utils.traverse[key](
					node
				);
			}
			return Utils.is.arrayLike(
				nodes
			);
		}

		function optimisticFilter(
			node
		)
		{
			return true;
		}

		function childNodesTraversed()
		{
			var key = "nodes",
				node = commonElements.traverse_test,
				nodes = Utils.traverse[key](
					node,
					optimisticFilter
				);
			return Utils.is.arrayLike(
				nodes
			);
		}

		function children()
		{
			var key = "getElements",
				node = commonElements.traverse_test,
				test;
			if (Utils.traverse[key]) {
				test = Utils.traverse[key](
					node
				);
			}
			return Utils.is.arrayLike(
				test
			);
		}

		function pessimisticFilter(
			node
		)
		{
			return false;
		}

		function childrenTraversed()
		{
			var key = "elements",
				node = commonElements.traverse_test,
				nodes = Utils.traverse[key](
					node,
					pessimisticFilter
				);
			return Utils.is.arrayLike(
				nodes
			);
		}

		function tree()
		{
			var key = "getNodeTree",
				nodes = Utils.traverse[key](
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

		function childrenTree()
		{
			var key = "getElementTree",
				tree = Utils.traverse[key](
					global.document
				);
			return Utils.is.arrayLike(
				tree
			);
		}

		function childrenTreeTraversed()
		{
			var key = "elementTree",
				nodes = Utils.traverse[key](
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
				text = Utils.text.get(
					node
				);
			return typeof text === "string";
		}

		function setText()
		{
			var node = commonElements.traverse_test,
				text = Utils.text.set(
					node,
					"NEW TEXTUAL CONTENT",
					global.document
				);
			return text === "NEW TEXTUAL CONTENT";
		}

		function ancestorsTraversed()
		{
			var key = "traverse",
				node = commonElements.traverse_test,
				nodes = Utils.ancestors[key](
					node,
					optimisticFilter
				);
			return Utils.is.arrayLike(
				nodes
			);
		}

		function getAncestors()
		{
			var node = commonElements.traverse_test,
				list = Utils.ancestors.get(
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

		function isAncestor()
		{
			var child = commonElements.traverse_text,
				node = Utils.ancestors.is(
					global.document,
					child
				);
			return typeof node === "boolean";
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

		function bindHandler(
			handler,
			thisValue
		)
		{
			return Utils.event.bindHandler(
				handler,
				thisValue
			);
		}

		function nativeBound(
			evt
		)
		{
			return this;
		}

		function bindNative()
		{
			var result = false;
			boundHandler = bindHandler(
				nativeBound,
				global.document
			);
			if (boundHandler) {
				if (boundHandler() ===
					global.document) {
					result = true;
				} else if (boundHandler() ===
					global) {
					// handler was not bound
					result = false;
				}
			}
			return result;
		}

		function unbindHandler(
			bound
		)
		{
			return Utils.event.unbindHandler(
				bound
			);
		}

		function unbindNative()
		{
			bound = unbindHandler(
				boundHandler
			);
			return bound === nativeBound;
		}

		function addWindowListener(
			win,
			evt,
			handler,
			capture
		)
		{
			var key = "addWindowListener",
				result = null;
			if (Utils.event[key]) {
				result = Utils.event[key](
					win,
					evt,
					handler,
					capture
				);
			}
			win = null;
			return result;
		}

		function dummyHandler(
			evt
		)
		{
			return this;
		}

		function addWindowLoad()
		{
			var test = addWindowListener(
				global.window,
				"load",
				dummyHandler,
				false
			);
			return test === global["undefined"];
		}

		function removeWindowListener(
			win,
			evt,
			handler,
			capture
		)
		{
			var key = "removeWindowListener",
				result = null;
			if (Utils.event[key]) {
				result = Utils.event[key](
					win,
					evt,
					handler,
					capture
				);
			}
			win = null;
			return result;
		}

		function removeWindowLoad()
		{
			var test = removeWindowListener(
				global.window,
				"load",
				dummyHandler,
				false
			);
			return test === global["undefined"];
		}

		function addDocumentListener(
			doc,
			evt,
			handler,
			capture
		)
		{
			var key = "addDocumentListener",
				result = null;
			if (Utils.event[key]) {
				result = Utils.event[key](
					doc,
					evt,
					handler,
					capture
				);
			}
			doc = null;
			return result;
		}

		function addDocumentClick()
		{
			var test = addDocumentListener(
				global.document,
				"click",
				dummyHandler,
				false
			);
			return test === global["undefined"];
		}

		function removeDocumentListener(
			doc,
			evt,
			handler,
			capture
		)
		{
			var key = "removeDocumentListener",
				result = null;
			if (Utils.event[key]) {
				result = Utils.event[key](
					doc,
					evt,
					handler,
					capture
				);
			}
			doc = null;
			return result;
		}

		function removeDocumentClick()
		{
			var test = removeDocumentListener(
				global.document,
				"click",
				dummyHandler,
				false
			);
			return test === global["undefined"];
		}

		function addElementListener(
			el,
			evt,
			handler,
			capture
		)
		{
			var key = "addElementListener",
				result = null;
			if (Utils.event[key]) {
				result = Utils.event[key](
					el,
					evt,
					handler,
					capture
				);
			}
			return result;
		}

		function getBody(
			doc
		)
		{
			var hO = "hostObject",
				key = "body",
				result = null;
			if (doc && Utils.is[hO](doc[key])) {
				result = doc[key];
			}
			return result;
		}

		function addElementClick()
		{
			var test = addElementListener(
				getBody(global.document),
				"click",
				dummyHandler,
				false
			);
			return test === global["undefined"];
		}

		function removeElementListener(
			el,
			evt,
			handler,
			capture
		)
		{
			var key = "removeElementListener",
				result = null;
			if (Utils.event[key]) {
				result = Utils.event[key](
					el,
					evt,
					handler,
					capture
				);
			}
			return result;
		}

		function removeElementClick()
		{
			var test = removeElementListener(
				getBody(global.document),
				"click",
				dummyHandler,
				false
			);
			return test === global["undefined"];
		}

		function isHostObject(
			obj
		)
		{
			return Utils.is.hostObject(
				obj
			);
		}

		function checkEventObject()
		{
			var par = commonElements,
				key = "event_test",
				test = false;
			if (isHostObject(par[key])) {
				test = isHostObject(
					eventObject
				);
			}
			return test;
		}

		function checkEventTarget()
		{
			var par = commonElements,
				key = "event_test",
				test = false;
			if (isHostObject(par[key])) {
				test = eventTarget === par[key];
			}
			return test;
		}

		tests = [
			insertBefore,
			insertList,
			appendChild,
			appendList,
			removeChild,
			replaceChild,
			cloneNode,
			getName,
			getValue,
			setValue,
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
			getClass,
			get,
			childNodes,
			childNodesTraversed,
			children,
			childrenTraversed,
			tree,
			treeTraversed,
			childrenTree,
			childrenTreeTraversed,
			getText,
			setText,
			ancestorsTraversed,
			getAncestors,
			isAncestor,
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
			collection,
			bindNative,
			unbindNative,
			addWindowLoad,
			removeWindowLoad,
			addDocumentClick,
			removeDocumentClick,
			addElementClick,
			removeElementClick,
			checkEventObject,
			checkEventTarget
		];

		function resetTestData()
		{
			testIndex = 0;
			score = 0;
			testsRun = 0;
		}

		function disableStartButton(
			button
		)
		{
			if (button) {
				button.disabled = true;
				button.onclick = function () {};
			}
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

		function addResult(
			result
		)
		{
			var par = commonElements.test_form,
				control = par.elements.score;
			if (result === "true") {
				score += 1;
				testsRun += 1;
			} else if (result === "ERROR") {
				testsRun += 1;
			}
			control.value = score + " / " + testsRun;
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
				addMessage(
					result,
					key
				);
				addResult(
					result
				);
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
			resetTestData();
			disableStartButton(
				this
			);
			runTests();
		}

		function enableStartButton()
		{
			var par = commonElements;
			if (par.start) {
				par.start.disabled = false;
				par.start.onclick = startTests;
			}
		}

		function addStartHandler()
		{
			var par = commonElements;
			if (par.start) {
				par.start.onclick = startTests;
			}
		}

		function endTests(
			evt
		)
		{
			global.clearTimeout(
				tester
			);
			tester = null;
			enableStartButton();
		}

		function addStopHandler()
		{
			var par = commonElements;
			if (par.stop) {
				par.stop.onclick = endTests;
			}
		}

		function getEventObject(
			evt
		)
		{
			return Utils.event.getObject(
				evt
			);
		}

		function getEventTarget(
			evt
		)
		{
			return Utils.event.getTarget(
				evt
			);
		}

		function runErrorTest(
			evt
		)
		{
			eventObject = getEventObject(
				evt
			);
			eventTarget = getEventTarget(
				evt
			);
		}

		function addEventTestHandler()
		{
			var par = commonElements,
				key = "event_test";
			if (par[key]) {
				par[key].onerror =
					runErrorTest;
				par[key].src = "null.null";
			}
		}

		function addHandlers()
		{
			addStartHandler();
			addStopHandler();
			addEventTestHandler();
		}

		addHandlers();
	}());
}
