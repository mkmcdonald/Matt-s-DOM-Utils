if (typeof Utils === "object" && Utils) {
	(function () {

               /**
                * @module
                * Utils.traverse
                *
                * @description
                * Various methods used to traverse document tree
                * nodes.
                *
                * @dependencies
                * * Utils.types
                * * Utils.is
                * * Utils.helpers
                * * Utils.node
                * * Utils.create
                */

		var isDocument = Utils.is.document,
			nodeTypes = Utils.types,
			isNodeLike = Utils.is.nodeLike,
			isHostObject = Utils.is.hostObject,
			makeArray = Utils.helpers.makeArray,
			isArrayLike = Utils.is.arrayLike,
			isElement = Utils.is.element,
			removeNode = Utils.node.remove,
			isText = Utils.is.text,
			getNodeValue = Utils.node.getValue,
			createText = Utils.create.text,
			appendNode = Utils.node.append,
			setNodeValue = Utils.node.setValue,

			doc,

			textGetters,
			textSetters,
			getChildren,
			textGetterDecisions,
			textSetterDecisions,
			getChildNodes;

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Variable containing the current document
                * node-like object or `null`.
                */

		doc = (function () {
			var result = null;
			if (isDocument(global.document)) {
				result = global.document;
			}
			return result;
		}());

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Variable containing keys of `nodeType` values
                * that can retrieve text.
                *
                * @see `Utils.types`.
                */

		textGetters = (function () {
			var result = {};
			result[nodeTypes.ELEMENT_NODE] = true;
			result[nodeTypes.TEXT_NODE] = true;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				true;
			result[nodeTypes.COMMENT_NODE] = true;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] =
				true;
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified node-like object can retrieve textual
                * content.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function canGetText(
			obj
		)
		{
			var getters = textGetters,
				result = false;
			if (isNodeLike(obj)) {
				if (getters[obj.nodeType]) {
					result = true;
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Object containing keys of `nodeType` values that
                * can overwrite text.
                *
                * @see `Utils.types`.
                */

		textSetters = (function () {
			var result = {};
			result[nodeTypes.ELEMENT_NODE] = true;
			result[nodeTypes.TEXT_NODE] = true;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				true;
			result[nodeTypes.COMMENT_NODE] = true;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] =
				true;
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified node can overwrite textual content.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function canSetText(
			obj
		)
		{
			var setters = textSetters,
				result = false;
			if (isNodeLike(obj)) {
				if (setters[obj.nodeType]) {
					result = true;
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns an array-like object of
                * `childNodes` collected from a node-like object;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to access.
                */

		function getNodes(
			obj
		)
		{
			var key = "childNodes",
				result = null;
			if (isNodeLike(obj)) {
				if (isHostObject(obj[key])) {
					result = makeArray(
						obj[key]
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.traverse.getNodes`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure)
                * `getNodes` or `null` * if not applicable.
                *
                * @param obj Object
                * An node-like object to access.
                *
                * @see `getNodes`.
                */

		getChildNodes = (function () {
			var key = "childNodes",
				result = null;
			if (isDocument(doc)) {
				if (isHostObject(doc[key])) {
					result = getNodes;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Helper method for `traverse*` methods; calls
                * the specified callback with a node-like object
                * passed.
                *
                * @param obj Object
                * A node-like object to pass.
                *
                * @param callback Function
                * A function to call.
                *
                * @param result Array
                * An array-like object to modify.
                */

		function pushCallback(
			obj,
			callback,
			result
		)
		{
			var called;
			if (typeof callback === "function") {
				called = callback(
					obj
				);
				if (called === true) {
					result[result.length] = obj;
				} else if (called) {
					result[result.length] = called;
				}
			}
		}

               /**
                * @public `Utils.traverse.linear`.
                *
                * @description
                * Method that traverses an array-like object,
                * calling a callback on each element; results are
                * returned as an array-like object.
                *
                * @param obj Array
                * An array-like object to traverse.
                *
                * @param callback Function
                * A function to call.
                */

		function traverseLinear(
			obj,
			callback
		)
		{
			var max,
				aux,
				diff,
				result = [];
			if (isArrayLike(obj)) {
				max = obj.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					pushCallback(
						obj[diff],
						callback,
						result
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Wrapper method that wraps `getChildNodes`;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to access.
                *
                * @see `getChildNodes`.
                */

		function wrapChildNodes(
			obj
		)
		{
			var result = null;
			if (getChildNodes) {
				result = getChildNodes(
					obj
				);
			}
			return result;
		}

               /**
                * @public `Utils.traverse.nodes`.
                *
                * @description
                * Method that traverses a node-like object's
                * `childNodes` (via `traverseLinear`), calling a
                * callback on each node-like object; results are
                * returned as an array-like object.
                *
                * @param obj Object
                * A node-like object to source `childNodes` from.
                *
                * @param callback Function
                * A function to call.
                *
                * @see `traverseLinear`.
                */

		function traverseChildNodes(
			obj,
			callback
		)
		{
			var result = [];
			if (typeof callback === "function") {
				result = traverseLinear(
					wrapChildNodes(obj),
					callback
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method used as a callback for `traverse*`; removes
                * a node-like object from the document tree; returns
                * `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to remove.
                */

		function clearNode(
			obj
		)
		{
			var result = null;
			if (isNodeLike(obj)) {
				removeNode(
					obj.parentNode,
					obj
				);
			}
			return result;
		}

               /**
                * @public `Utils.traverse.clearNodes`.
                *
                * @description
                * Method that clears a node-like object's
                * `childNodes` (via `traverseChildNodes`),
                * returning them upon successful removal;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to clear `childNodes` from.
                *
                * @see `traverseChildNodes`.
                */

		function clearChildNodes(
			obj
		)
		{
			var result = null;
			if (isNodeLike(obj)) {
				result = traverseChildNodes(
					obj,
					clearNode
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method used as a callback for `traverse*`; returns
                * a boolean asserting if the specified node-like
                * object passed is an element node-like object.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function filterElementNode(
			obj
		)
		{
			var result = false;
			if (isElement(obj)) {
				result = true;
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that collects the specified
                * element node-like object's `children` as an
                * array-like object; returns `null` if not
                * applicable.
                *
                * @param obj Object
                * An element node-like object to traverse.
                *
                * @see `traverseLinear`.
                */

		function forkChildren(
			obj
		)
		{
			return traverseLinear(
				wrapChildNodes(obj),
				filterElementNode
			);
		}

               /**
                * @private
                *
                * @description
                * Helper method that collects the specified
                * element node-like object's `children` via its
                * `children` property as an array-like object;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to traverse.
                */

		function getNativeChildren(
			obj
		)
		{
			var key = "children",
				result = null;
			if (isElement(obj)) {
				if (isHostObject(obj[key])) {
					result = makeArray(
						obj[key]
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if `obj`
                * can access the `children` property.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function canGetChildren(
			obj
		)
		{
			var result = false;
			if (isElement(obj)) {
				result = isHostObject(
					obj.children
				);
			}
			return result;
		}

               /**
                * @public `Utils.traverse.getElements`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) an
                * array-like object of element node-like objects
                * from an element node-like object; returns `null`
                * if not applicable.
                *
                * @see `getNativeChildren`.
                * @see `forkChildren`.
                */

		getChildren = (function () {
			var canGet,
				result;
			if (doc) {
				canGet = canGetChildren(
					doc.body
				);
				if (canGet) {
					result = getNativeChildren;
				} else if (!canGet) {
					result = forkChildren;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method that wraps `getChildren`;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to traverse.
                *
                * @see `getChildren`.
                */

		function wrapChildren(
			obj
		)
		{
			var result = null;
			if (getChildren) {
				result = getChildren(
					obj
				);
			}
			return result;
		}

               /**
                * @public `Utils.traverse.elements`.
                *
                * @description
                * Method that traverses an element node-like object's
                * `children` (via `traverseLinear`), calling a
                * callback on each element node-like object; results
                * are returned as an array-like object.
                *
                * @param obj Object
                * An element node-like object to traverse.
                *
                * @param callback Function
                * A function to call.
                *
                * @see `traverseLinear`.
                */

		function traverseChildren(
			obj,
			callback
		)
		{
			var result = [];
			if (typeof callback === "function") {
				result = traverseLinear(
					wrapChildren(obj),
					callback
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method used as a callback for `traverse*`; returns
                * a boolean asserting if the specified node-like
                * object passed is an element node-like object and
                * can be removed.
                *
                * @param obj Object
                * An element node-like object to assert.
                */

		function removeElementNode(
			obj
		)
		{
			var result = false;
			if (isElement(obj)) {
				result = clearNode(
					obj
				);
			}
			return result;
		}

               /**
                * @public `Utils.traverse.clearElements`.
                *
                * @description
                * Method that clears an element node-like object's
                * `children`, returning them upon successful
                * removal; returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to clear `children`
                * from.
                *
                * @see `traverseChildren`.
                */

		function clearChildren(
			obj
		)
		{
			var result = null;
			if (isNodeLike(obj)) {
				result = traverseChildren(
					obj,
					removeElementNode
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method used as a callback for `traverse*`; returns
                * the `nodeValue` property value for the specified
                * node-like object if it is a text node-like object;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function filterTextData(
			obj
		)
		{
			var result = null;
			if (isText(obj)) {
				result = getNodeValue(
					obj
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that retrieves the `nodeValue`
                * property value of a node-like object; returns
                * `null` if not applicable.
                *
                * @param obj Object
                * A text node-like object to use.
                *
                * @see `getText`.
                */

		function grabText(
			obj
		)
		{
			return getNodeValue(
				obj
			);
		}

               /**
                * @private
                *
                * @description
                * Helper method that adds a node-like object and an
                * array-like object (tree) to an array-like object.
                *
                * @param obj Object
                * A node-like object to add.
                *
                * @param tree Array
                * An array-like object (tree) to add.
                *
                * @param par Array
                * An array-like object to modify.
                *
                * @see `collectChildNodeTree`.
                */

		function addTree(
			obj,
			tree,
			par
		)
		{
			var result;
			par[par.length] = obj;
			if (tree.length) {
				par[par.length] = tree;
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method returning a boolean asserting if a
                * node-like object can be traversed via its
                * `childNodes` property.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function canTraverse(
			obj
		)
		{
			var result = false;
			if (isNodeLike(obj)) {
				result = isHostObject(
					obj.childNodes
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Recursive method that returns an array-like object
                * from a node-like object's subtree.
                * 
                *
                * @param obj Object
                * A node-like object to traverse.
                */

		function collectChildNodeTree(
			obj
		)
		{
			var max,
				aux,
				diff,
				tree,
				result = [];
			if (canTraverse(obj)) {
				max = obj.childNodes.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					tree = collectChildNodeTree(
						obj.childNodes[diff]
					);
					addTree(
						obj.childNodes[diff],
						tree,
						result
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.traverse.getNodeTree`.
                *
                * @description
                * Method that collects an array-like object from
                * the specified node-like object's subtree; returns
                * `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to traverse.
                */

		function getChildNodeTree(
			obj
		)
		{
			var key = "childNodes",
				result = null;
			if (isNodeLike(obj)) {
				if (isHostObject(obj[key])) {
					result = collectChildNodeTree(
						obj
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.traverse.nodeTree`.
                *
                * @description
                * Method that traverses the specified node-like
                * object's subtree, calling a callback on each
                * node-like object; results are returned as an
                * array-like object.
                *
                * @param obj Object
                * A node-like object to traverse.
                *
                * @param callback Function
                * A function to call.
                *
                * @param result Array
                * An array-like object used to collect callback
                * results.
                */

		function traverseChildNodeTree(
			obj,
			callback,
			result
		)
		{
			// FIXME: get this <= 20 lines
			var max,
				aux,
				diff;
			result = result || [];
			if (canTraverse(obj)) {
				max = obj.childNodes.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					traverseChildNodeTree(
						obj.childNodes[diff],
						callback,
						result
					);
					pushCallback(
						obj.childNodes[diff],
						callback,
						result
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that concatenates the `nodeValue`
                * property value of text node-like objects
                * in the specified node-like object's subtree;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to traverse.
                *
                * @see `getText`.
                */

		function collectText(
			obj
		)
		{
			var nodes,
				result = null;
			if (isNodeLike(obj)) {
				nodes = traverseChildNodeTree(
					obj,
					filterTextData
				);
				result = nodes.join(
					""
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Object containing decisions for specific
                * `nodeType` values pertaining to the retrieval of
                * textual content.
                */

		textGetterDecisions = (function () {
			var result = {};
			result[nodeTypes.ELEMENT_NODE] = collectText;
			result[nodeTypes.TEXT_NODE] = grabText;
			result[nodeTypes.COMMENT_NODE] = grabText;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] =
				collectText;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				grabText;
			return result;
		}());

               /**
                * @public `Utils.traverse.getText`.
                *
                * @description
                * Method that returns a concatenated string
                * consisting of `nodeValue` property values of text
                * node-like objects from the specified node-like
                * object's subtree or the `nodeValue` property value
                * of the node-like object itself; returns `null` if
                * not applicable.
                *
                * @param obj Object
                * A node-like object to retrieve textual content
                * from.
                *
                * @see DOM 4 Spec section 5.3 (`Node::textContent`,
                * getting).
                */

		function getText(
			obj
		)
		{
			var decisions = textGetterDecisions,
				decision,
				result = null;
			if (canGetText(obj)) {
				decision = decisions[obj.nodeType];
				if (typeof decision === "function") {
					result = decision(
						obj
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Wrapper method that wraps `createText`;
                * returns `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to create a text
                * node-like object in.
                *
                * @param text String
                * A string representing the `nodeValue` of the
                * text node-like object to be created.
                */

		function wrapCreateText(
			doc,
			text
		)
		{
			var result = null;
			if (createText) {
				result = createText(
					doc,
					text
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that returns the result of the
                * creation and suffixion of a text node-like object
                * to the specified node-like object; returns `null`
                * if not applicable.
                *
                * @param obj Object
                * A node-like object to append the created text node
                * like object to.
                *
                * @param text String
                * A string containing textual content to add.
                *
                * @param doc Object
                * A document node-like object used to create a text
                * node-like object.
                */

		function appendText(
			obj,
			text,
			doc
		)
		{
			var node,
				result = null;
				node = wrapCreateText(
					doc,
					text
				);
				result = appendNode(
					obj,
					node
				);
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that clears the specified
                * node-like object's subtree and appends a text
                * node-like object with a specific string;
                * returns the textual content added or `null` if not
                * applicable.
                *
                * @param obj Object
                * A node-like object to traverse.
                *
                * @param text String
                * A string containing textual content to add.
                *
                * @param doc Object
                * A document node-like object used to create a text
                * node-like object.
                *
                * @see `setText`.
                */

		function overrideText(
			obj,
			text,
			doc
		)
		{
			var textNode,
				result = null;
			if (isNodeLike(obj)) {
				if (isDocument(doc)) {
					clearChildNodes(
						obj
					);
					textNode = appendText(
						obj,
						text,
						doc
					);
					result = getNodeValue(
						textNode
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that replaces the `nodeValue`
                * property value of the specified node-like object
                * with a specific string.
                *
                * @param text String
                * A string containing textual content to add.
                *
                * @param obj Object
                * A node-like object to replace the `nodeValue`
                * property value of.
                *
                * @see `setText`.
                */

		function replaceText(
			obj,
			text
		)
		{
			return setNodeValue(
				obj,
				text
			);
		}

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Object containing decisions for specific
                * `nodeType` values pertaining to the replacement
                * textual content.
                */

		textSetterDecisions = (function () {
			var result = {};
			result[nodeTypes.ELEMENT_NODE] =
				overrideText;
			result[nodeTypes.TEXT_NODE] =
				replaceText;
			result[nodeTypes.COMMENT_NODE] =
				replaceText;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] =
				overrideText;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				replaceText;
			return result;
		}());

               /**
                * @public `Utils.traverse.setText`.
                *
                * @description
                * Method that returns a string consisting of textual
                * content that replaces existing textual content;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to replace the textual content
                * of.
                *
                * @param text String
                * A string containing the textual content to act as
                * a replacement.
                *
                * @param doc Document
                * A document node-like object to create a text
                * node-like object with.
                *
                * @see DOM 4 Spec section 5.3 (`Node::textContent`,
                * setting).
                */

		function setText(
			obj,
			text,
			doc
		)
		{
			var decisions = textSetterDecisions,
				decision,
				result = null;
			if (canSetText(obj)) {
				decision = decisions[obj.nodeType];
				if (typeof decision === "function") {
					result = decision(
						obj,
						text,
						doc
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.traverse.recursive`.
                *
                * @description
                * Recursive method that traverses an array-like
                * object, calling a callback on each element; results
                * are returned as an array-like object.
                *
                * @param obj Array
                * An array-like object to traverse.
                *
                * @param callback Function
                * A function to call.
                *
                * @param result Array
                * An array-like object used to collect callback
                * results.
                */

		function traverseRecursive(
			obj,
			callback,
			result
		)
		{
			// FIXME: get this <= 20 lines
			var max,
				aux,
				diff;
			result = result || [];
			if (isArrayLike(obj)) {
				max = obj.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					traverseRecursive(
						obj[diff],
						callback,
						result
					);
					pushCallback(
						obj[diff],
						callback,
						result
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that passes the specified node-like
                * object and a specific array-like object for
                * processing if the specified node-like object
                * is an element node-like object.
                *
                * @param obj Object
                * A node-like object to add.
                *
                * @param tree Array
                * An array-like object to add.
                *
                * @param collection Array
                * An array-like object to modify.
                */

		function addRecursiveChild(
			obj,
			tree,
			collection
		)
		{
			var result;
			if (isElement(obj)) {
				addTree(
					obj,
					tree,
					collection
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Recursive method that traverses the specified
                * element node-like object's subtree and returns an
                * array-like object of element node-like objects.
                *
                * @param obj Object
                * An element node-like object to traverse.
                */

		function collectChildrenTree(
			obj
		)
		{
			var max,
				aux,
				diff,
				tree,
				result = [];
			if (canTraverse(obj)) {
				max = obj.childNodes.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					tree = collectChildrenTree(
						obj.childNodes[diff]
					);
					addRecursiveChild(
						obj.childNodes[diff],
						tree,
						result
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.traverse.getElementTree`.
                *
                * @description
                * Recursive method that returns an array-like object
                * containing element node-like objects from the
                * specified element node-like object's subtree;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to traverse.
                */

		function getChildrenTree(
			obj
		)
		{
			var key = "childNodes",
				result = null;
			if (isNodeLike(obj)) {
				if (isHostObject(obj[key])) {
					result = collectChildrenTree(
						obj
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that passes the specified node-like
                * object for processing if the specified node-like
                * object is an element node-like object.
                *
                * @param obj Object
                * A node-like object to add.
                *
                * @param callback Function
                * An function to call.
                *
                * @param collection Array
                * An array-like object to modify.
                */

		function handleRecursiveChild(
			obj,
			callback,
			collection
		)
		{
			var result;
			if (isElement(obj)) {
				pushCallback(
					obj,
					callback,
					collection
				);
			}
			return result;
		}

               /**
                * @public `Utils.traverse.elementTree`.
                *
                * @description
                * Method that traverses an element node-like object's
                * subtree, calling a callback only on each element
                * node-like object in the subtree; results are
                * returned as an array-like object.
                *
                * @param obj Object
                * An element node-like object to traverse.
                *
                * @param callback Function
                * A function to call.
                *
                * @param result Array
                * An array-like object used to collect callback
                * results.
                */

		function traverseChildrenTree(
			obj,
			callback,
			result
		)
		{
			// FIXME: get this <= 20 lines
			var max,
				aux,
				diff;
			result = result || [];
			if (canTraverse(obj)) {
				max = obj.childNodes.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					traverseChildrenTree(
						obj.childNodes[diff],
						callback,
						result
					);
					handleRecursiveChild(
						obj.childNodes[diff],
						callback,
						result
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.traverse.getAncestors`.
                *
                * @description
                * Method that returns a linked list of ancestors of a
                * node-like object to the top of the document tree
                * (`document`); returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to traverse.
                *
                * @example `getAncestorList(document.body);`
                *       return {
                *               "parent": {
                *                       "parent": null,
                *                       "value": [`document`]
                *               },
                *               "value": [`documentElement`]
                *       };
                */

		function getAncestorList(
			obj
		)
		{
			var key = "parent",
				result = null;
			if (isNodeLike(obj)) {
				if (isHostObject(obj.parentNode)) {
					result = {};
					result.value = obj.parentNode;
					result[key] = getAncestorList(
						obj.parentNode
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method returning a boolean asserting if a linked
                * list-like object (preferably created via
                * `getAncestorList`) contains an object.
                *
                * @param list Object
                * A linked list-like object to traverse.
                *
                * @param obj Object
                * An object to find.
                *
                * @see `getAncestorList`.
                */

		function listContainsNode(
			list,
			obj
		)
		{
			var key = "parent",
				result = false;
			if (isNodeLike(obj)) {
				while (list) {
					if (list.value === obj) {
						result = true;
						break;
					}
					list = list[key];
				}
			}
			return result;
		}

               /**
                * @public `Utils.traverse.isAncestor`.
                *
                * @description
                * Method returning a boolean asserting if the
                * specified node-like object is an ancestor of a
                * specific node-like object.
                *
                * @param par Object
                * A node-like object to find.
                *
                * @param obj Object
                * A node-like object to traverse.
                *
                * @see `listContainsNode`.
                */

		function isAncestor(
			par,
			obj
		)
		{
			var list,
				result = false;
			if (isNodeLike(obj)) {
				list = getAncestorList(
					obj
				);
				result = listContainsNode(
					list,
					par
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that returns a boolean asserting if
                * a linked list can be traversed.
                *
                * @param list Object
                * A linked list-like object to assert.
                */

		function canTraverseList(
			list
		)
		{
			var result = false;
			if (list && typeof list === "object") {
				result = typeof list.value ===
					"object";
			}
			return result;
		}

               /**
                * @public `Utils.traverse.linkedList`.
                *
                * @description
                * Method that traverses a linked list-like
                * object, calling a callback on each node in the
                * list-like object; results are returned as an
                * array-like object.
                *
                * @param list Object
                * A linked list-like object to traverse.
                *
                * @param callback Function
                * A function to call.
                */

		function traverseLinkedList(
			list,
			callback
		)
		{
			var key = "parent",
				result = [];
			if (canTraverseList(list)) {
				while (list) {
					pushCallback(
						list.value,
						callback,
						result
					);
					list = list[key];
				}
			}
			return result;
		}

               /**
                * @public `Utils.traverse.ancestors`.
                *
                * @description
                * Method that traverses a node-like object's
                * ancestral tree (via `traverseLinkedList`), calling
                * a callback on each node in the list-like object;
                * results are returned as an array-like object.
                *
                * @param obj Object
                * A node-like object to traverse.
                *
                * @param callback Function
                * A function to call.
                *
                * @see `traverseLinkedList`.
                */

		function traverseAncestors(
			obj,
			callback
		)
		{
			var result = [];
			if (typeof callback === "function") {
				result = traverseLinkedList(
					getAncestorList(obj),
					callback
				);
			}
			return result;
		}

		doc = null;

		Utils.traverse = Utils.traverse || {
			"getNodes": getChildNodes,

			"linear": traverseLinear,
			"nodes": traverseChildNodes,
			"clearNodes": clearChildNodes,

			"getElements": getChildren,
			"elements": traverseChildren,
			"clearElements": clearChildren,

			"getNodeTree": getChildNodeTree,

			"nodeTree": traverseChildNodeTree,

			"getText": getText,
			"setText": setText,

			"recursive": traverseRecursive,

			"getElementTree": getChildrenTree,
			"elementTree": traverseChildrenTree,

			"getAncestors": getAncestorList,
			"isAncestor": isAncestor,
			"list": traverseLinkedList,
			"ancestors": traverseAncestors
		};
	}());
}

