if (Utils) {
	(function () {

		/*
                        Utils.traverse

                        Description:

                        Various methods used to traverse DOM
                        nodes.

                        Dependencies:

                        * Utils.types;
                        * Utils.helpers;
                        * Utils.is;
                        * Utils.can;
                        * Utils.node;
			* Utils.create;
		*/

		var nodeTypes = Utils.types;

		function generateTextGetters()
		{
			/*
                                Private method that "generates"
                                an object with keys of `nodeType`s
                                that can "get" text.
			*/
			var result = {};
			result[nodeTypes.ELEMENT_NODE] = true;
			result[nodeTypes.TEXT_NODE] = true;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				true;
			result[nodeTypes.COMMENT_NODE] = true;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] =
				true;
			return result;
		}

		function canGetText(
			obj
		)
		{
			/*
                                Private method that returns a
                                boolean asserting if the specified
                                node can "get" textual content.
			*/
			var validNode = Utils.is.nodeLike(obj),
				getters = generateTextGetters(),
				getter,
				result = false;
			if (validNode) {
				getter = getters[obj.nodeType];
				if (getter) {
					result = true;
				}
			}
			return result;
		}

		function generateTextSetters()
		{
			/*
                                Private method that "generates"
                                an object with keys of `nodeType`s
                                that can "set" text.
			*/
			var result = {};
			result[nodeTypes.ELEMENT_NODE] = true;
			result[nodeTypes.TEXT_NODE] = true;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				true;
			result[nodeTypes.COMMENT_NODE] = true;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] =
				true;
			return result;
		}

		function canSetText(
			obj
		)
		{
			/*
                                Private method that returns a
                                boolean asserting if the specified
                                node can "set" textual content.
			*/
			var validNode = Utils.is.nodeLike(obj),
				setters = generateTextSetters(),
				setter,
				result = false;
			if (validNode) {
				setter = setters[obj.nodeType];
				if (setter) {
					result = true;
				}
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function getAncestorList(
			obj
		)
		{
			/*
                                Public method that builds a linked
                                list of ancestors from a node-like
                                object to the top of the document
                                tree (`document`); returns null if
                                not applicable.

                                Example result (`obj` is
                                `document.body`):

                                {
                                        "parent": {
                                                "parent": null,
                                                "value": [`document`]
                                        },
                                        "value": [`documentElement`]
                                }
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				key = "parent",
				result = null;
			if (isNodeLike) {
				if (obj.parentNode) {
					result = {};
					result.value = obj.parentNode;
					result[key] = getAncestorList(
						obj.parentNode
					);
				} else if (!obj.parentNode) {
					result = null;
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function listContainsNode(
			list,
			obj
		)
		{
			/*
                                Private method returning
                                a boolean asserting a if a linked
                                list (preferably created via
                                `getAncestorList`) contains a
                                node-like object.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				key = "parent",
				result = false;
			if (isNodeLike) {
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


                /*        PUBLIC METHOD        */


		function isAncestor(
			par,
			obj
		)
		{
			/*
                                Public method returning a boolean
                                asserting if a given node-like
                                object is an ancestor of another
                                node-like object (via
                                `listContainsNode`.)
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				list,
				result = false;
			if (isNodeLike) {
				list = getAncestorList(obj);
				result = listContainsNode(
					list,
					par
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function canTraverseList(
			list
		)
		{
			/*
                                Private helper method for
                                `traverseList`; returns a boolean
                                asserting if a linked list can be
                                traversed.
			*/
			var isObj = Utils.is.type(list, "object"),
				hasVal,
				result = false;
			if (list && isObj) {
				hasVal = Utils.is.type(
					list.value,
					"object"
				);
				result = hasVal;
			}
			return result;
		}

		function pushCallback(
			obj,
			callback,
			result
		)
		{
			/*
                                Private helper method for `traverse*`
                                methods; calls callback with
                                a node-like object passed.
			*/
			var isCallback = Utils.is.type(
					callback,
					"function"
				),
				called;
			if (isCallback) {
				called = callback(obj);
				if (called === true) {
					result.push(obj);
				} else if (called) {
					result.push(called);
				}
			}
		}


                /*        PUBLIC METHOD        */


		function traverseList(
			list,
			callback
		)
		{
			/*
                                Public method that traverses a
                                linked list, running a callback
                                on each node in the list.
			*/
			var canUse = canTraverseList(list),
				key = "parent",
				result = [];
			if (canUse) {
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


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function traverseAncestors(
			obj,
			callback
		)
		{
			/*
                                Public method that traverses
                                a node-like object's "ancestor
                                list" (via `traverseLinkedList`).
			*/
			var isCallback = Utils.is.type(
					callback,
					"function"
				),
				list,
				result = [];
			if (isCallback) {
				list = getAncestorList(obj);
				result = traverseList(
					list,
					callback
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function makeLinearArray(
			obj
		)
		{
			/*
                                Private wrapper for
                                `Utils.helpers.makeLinearArray`.
			*/
			return Utils.helpers.makeLinearArray(
				obj
			);
		}


                /*        PUBLIC METHOD        */


		function getChildNodes(
			obj
		)
		{
			/*
                                Public method that exposes a
                                static array of `childNodes`
                                collected from a node-like object;
                                returns `null` if not applicable.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				key = "childNodes",
				isHostObject,
				result = null;
			if (isNodeLike) {
				isHostObject = Utils.is.hostObject(
					obj[key]
				);
				if (isHostObject) {
					result = makeLinearArray(
						obj[key]
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function unshiftCallback(
			obj,
			callback,
			result
		)
		{
			/*
                                Private helper method for `traverse*`
                                methods; calls callback with
                                a node-like object passed.
			*/
			var isCallback = Utils.is.type(
					callback,
					"function"
				),
				called;
			if (isCallback) {
				called = callback(obj);
				if (called === true) {
					result.unshift(obj);
				} else if (called) {
					result.unshift(called);
				}
			}
		}


                /*        PUBLIC METHOD        */


		function traverseLinear(
			obj,
			callback
		)
		{
			/*
                                Public method that traverses
                                an array-like object, running
                                a callback on each node in the
                                array.
			*/
			var isArrayLike = Utils.is.arrayLike(obj),
				index,
				node,
				result = [];
			if (isArrayLike) {
				index = obj.length - 1;
				while (index > -1) {
					node = obj[index];
					unshiftCallback(
						node,
						callback,
						result
					);
					index -= 1;
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function traverseChildNodes(
			obj,
			callback
		)
		{
			/*
                                Public method that traverses
                                a node-like object's `childNodes`
                                (via `traverseLinear`).
			*/
			var isCallback = Utils.is.type(
					callback,
					"function"
				),
				nodes,
				result = [];
			if (isCallback) {
				nodes = getChildNodes(obj);
				result = traverseLinear(
					nodes,
					callback
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function removeNode(
			obj
		)
		{
			/*
                                Private method used as a callback
                                for `traverse*`; removes a node-like
                                object from the document tree;
                                returns `null` if not applicable.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				result = null;
			if (isNodeLike) {
				Utils.node.remove(
					obj.parentNode,
					obj
				);
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function clearChildNodes(
			obj
		)
		{
			/*
                                Public method that clears a
                                a node-like object's `childNodes`,
                                returning them upon successful
                                removal; returns `null` if not
                                applicable.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				result = null;
			if (isNodeLike) {
				result = traverseChildNodes(
					obj,
					removeNode
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function forkNativeChildren(
			obj
		)
		{
			/*
                                Private helper method that
                                collects a node-like object's
                                "native" `children` as a static
                                array; returns `null` if not
                                applicable.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				isHostObject,
				result = null;
			if (isNodeLike) {
				isHostObject = Utils.is.hostObject(
					obj.children
				);
				if (isHostObject) {
					result = makeLinearArray(
						obj.children
					);
				}
			}
			return result;
		}

		function filterElementNode(
			obj
		)
		{
                        /*
                                Private callback method intended
                                to be used in conjunction with
                                `traverse*` methods; returns `true`
                                if node-like object passed is an
                                element node; returns `false`
                                otherwise.
                        */
			var isElementNode =
				Utils.is.element(
					obj
				),
				result = false;
			if (isElementNode) {
				result = true;
			}
			return result;
		}

		function canGetChildren(
			obj
		)
		{
			/*
                                Private method that returns a
                                boolean asserting if `obj` can
                                "use" the `children` property.
			*/
			var isElement = Utils.is.element(obj),
				result = false;
			if (isElement) {
				result = Utils.is.hostObject(
					obj.children
				);
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function getChildren(
			obj
		)
		{
			/*
                                Public method that collects a
                                static array of `children` (via
                                `makeArray`) from a node-like
                                object ; returns `null` if not
                                applicable.
			*/
			var canGet = canGetChildren(obj),
				nodes = [],
				result = null;
			if (canGet) {
				result = forkNativeChildren(
					obj
				);
			} else if (!canGet) {
				nodes = getChildNodes(
					obj
				);
				result = traverseLinear(
					nodes,
					filterElementNode
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function traverseChildren(
			obj,
			callback
		)
		{
			/*
                                Public method that traverses
                                a node-like object's `children`
                                (via `traverseLinear`);
			*/
			var isCallback = Utils.is.type(
					callback,
					"function"
				),
				nodes,
				result = [];
			if (isCallback) {
				nodes = getChildren(obj);
				result = traverseLinear(
					nodes,
					callback
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function removeElementNode(
			obj
		)
		{
                        /*
                                Private callback method intended
                                to be used in conjunction with
                                `traverse*` methods; returns `true`
                                if node-like object passed is an
                                element node and can be removed;
                                returns `false` otherwise.
                        */
			var isElementNode =
				Utils.is.element(
					obj
				),
				result = false;
			if (isElementNode) {
				result = Utils.node.remove(
					obj
				);
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function clearChildren(
			obj
		)
		{
			/*
                                Public method that clears a
                                a node-like object's `children`,
                                returning them upon successful
                                removal; returns `null` if not
                                applicable.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				result = null;
			if (isNodeLike) {
				result = traverseChildren(
					obj,
					removeElementNode
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function filterTextData(
			obj
		)
		{
			/*
                                Private callback method intended
                                to be used in conjunction with
                                `traverse*` methods; returns
                                `node.nodeValue` if node-like
                                object passed is a text node;
                                returns `false` otherwise.
			*/
			var validNode =
				Utils.is.text(obj),
				result = false;
			if (validNode) {
				result = obj.nodeValue;
			}
			return result;
		}

		function grabText(
			obj
		)
		{
			/*
                                Private helper method for
                                `getText` that gets the
                                `nodeValue` property of a
                                node-like object; returns `null`
                                if not applicable. For more, see
                                `getText`.
			*/
			var canGet = Utils.can.getValue(obj),
				result = null;
			if (canGet) {
				result = obj.nodeValue;
			}
			return result;
		}

		function addChildNodeTree(
			tree,
			obj,
			par
		)
		{
			/*
                                Private helper method for
                                `collectChildNodeTree`; returns
                                a boolean asserting if the tree
                                passed could be added.
			*/
			var result;
			if (tree.length) {
				par.unshift(tree);
			}
			par.unshift(obj);
			return result;
		}

		function canTraverse(
			obj
		)
		{
			/*
                                Private method returning a
                                boolean asserting if a node-like
                                object can be traversed via
                                `node.childNodes`.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				result = false;
			if (isNodeLike) {
				result = Utils.is.hostObject(
					obj.childNodes
				);
			}
			return result;
		}

		function collectChildNodeTree(
			obj
		)
		{
			/*
                                Private recursive method
                                that takes a node-like object and
                                creates an array from its "childNode
                                tree"; returns `null` if not
                                applicable.
			*/
			var hasNodes = canTraverse(obj),
				index = -1,
				tree,
				result = [];
			if (hasNodes) {
				index = obj.childNodes.length - 1;
				while (index > -1) {
					tree = collectChildNodeTree(
						obj.childNodes[index]
					);
					addChildNodeTree(
						tree,
						obj.childNodes[index],
						result
					);
					index -= 1;
				}
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function getChildNodeTree(
			obj
		)
		{
			/*
                                Public method that collects a
                                static array of `childNodes` (via
                                `makeArray`) from a node-like object;
                                returns `null` if not applicable.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				isHostObject,
				result = null;
			if (isNodeLike) {
				isHostObject = Utils.is.hostObject(
					obj.childNodes
				);
				if (isHostObject) {
					result = collectChildNodeTree(
						obj
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function handleRecursiveTree(
			obj,
			callback,
			par
		)
		{
			/*
                                Private helper method for
                                recursive `traverse*` methods.
			*/
			var result;
			unshiftCallback(
				obj,
				callback,
				par		
			);
			return result;
		}


                /*        PUBLIC METHOD        */


		function traverseRecursive(
			obj,
			callback,
			result
		)
		{
			/*
                                Public recursive method that
                                traverses an array-like object,
                                running a callback on each item
                                in the array-like object.
			*/
			var isArrayLike = Utils.is.arrayLike(obj),
				index = -1;
			result = result || [];
			if (isArrayLike) {
				index = obj.length - 1;
				while (index > -1) {
					traverseRecursive(
						obj[index],
						callback,
						result
					);
					handleRecursiveTree(
						obj[index],
						callback,
						result
					);
					index -= 1;
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function traverseChildNodeTree(
			obj,
			callback,
			result
		)
		{
			/*
                                Public method that traverses
                                a node-like object's `childNode`
                                tree.
			*/
			var hasNodes = canTraverse(obj),
				index = -1;
			result = result || [];
			if (hasNodes) {
				index = obj.childNodes.length - 1;
				while (index > -1) {
					traverseChildNodeTree(
						obj.childNodes[index],
						callback,
						result
					);
					handleRecursiveTree(
						obj.childNodes[index],
						callback,
						result
					);
					index -= 1;
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function collectText(
			obj
		)
		{
			/*
                                Private helper method for
                                `getText` that recursively
                                concatenates the `nodeValue`
                                property of text node-like objects
                                (via `traverseRecursive`);
                                returns `null` if not applicable.
                                For more, see `getText`.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				nodes,
				result = null;
			if (isNodeLike) {
				nodes = getChildNodeTree(
					obj
				);
				nodes = traverseRecursive(
					nodes,
					filterTextData
				);
				result = nodes.join("");
			}
			return result;
		}

		function grabTextGetterTable()
		{
			/*
                                Private method that returns a
                                decision table based upon
                                accepted `nodeType`s for "getting"
                                textual content.
			*/
			var result = {};
			result[nodeTypes.ELEMENT_NODE] = collectText;
			result[nodeTypes.TEXT_NODE] = grabText;
			result[nodeTypes.COMMENT_NODE] = grabText;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] =
				collectText;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				grabText;
			return result;
		}


                /*        PUBLIC METHOD        */


		function getText(
			obj
		)
		{
			/*
                                Public method that exposes a
                                string consisting of concatenated
                                or singular text node-like object
                                data from the `nodeValue` property
                                (via `traverseRecursive`); returns
                                `null` if not applicable. See
                                the DOM 4 Spec section 5.3
                                (`Node.textContent`, getting)
                                for more.
			*/
			var canGet = canGetText(obj),
				decisions = grabTextGetterTable(),
				decision,
				isDecision,
				result = null;
			if (canGet) {
				decision = decisions[obj.nodeType];
				isDecision = Utils.is.type(
					decision,
					"function"
				);
				if (isDecision) {
					result = decision(obj);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function overrideText(
			text,
			obj,
			doc
		)
		{
			/*
                                Private helper method for
                                `setText` that overrides
                                existing `childNodes` with a
                                text node-like object; returns
                                `null` if not applicable. For more,
                                see `setText`.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				isDoc = Utils.is.document(doc),
				textNode,
				result = null;
			text = String(text);
			if (isNodeLike && isDoc) {
				textNode = Utils.create.text(
					doc,
					text
				);
				clearChildNodes(obj);
				Utils.node.append(
					obj,
					textNode
				);
				result = text;
			}
			return result;
		}

		function replaceText(
			text,
			obj
		)
		{
			/*
                                Private helper method for
                                `setText` that replaces
                                the `nodeValue` property of a
                                node-like object with `text`;
                                returns `null` if not
                                applicable. For more, see
                                `setText`.
			*/
			var canGetValue = Utils.can.getValue(
					obj
				),
				result = null;
			text = String(text);
			if (canGetValue) {
				obj.nodeValue = text;
				result = obj.nodeValue;
			}
			return result;
		}

		function grabTextSetterTable()
		{
			/*
                                Private method that returns a
                                decision table based upon
                                accepted `nodeType`s for "setting"
                                textual content.
			*/
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
		}


                /*        PUBLIC METHOD        */


		function setText(
			text,
			obj,
			doc
		)
		{
			/*
                                Public method that either
                                sets the `nodeValue` property of
                                a text node-like object or the
                                descendants of a node-like object;
                                returns `null` if not applicable.
                                See the DOM 4 Spec section 5.3
                                (`Node::textContent`, setting)
                                for more.
			*/
			var canSet = canSetText(obj),
				decisions = grabTextSetterTable(),
				decision,
				isDecision,
				result = null;
			if (canSet) {
				decision = decisions[obj.nodeType];
				isDecision = Utils.is.type(
					decision,
					"function"
				);
				if (isDecision) {
					result = decision(
						text,
						obj,
						doc
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		Utils.traverse = Utils.traverse || {
			"getAncestors": getAncestorList,
			"isAncestor": isAncestor,
			"list": traverseList,
			"ancestors": traverseAncestors,

			"getChildNodes": getChildNodes,

			"linear": traverseLinear,
			"childNodes": traverseChildNodes,
			"clearChildNodes": clearChildNodes,

			"getChildren": getChildren,
			"children": traverseChildren,
			"clearChildren": clearChildren,

			"getChildNodeTree": getChildNodeTree,

			"recursive": traverseRecursive,
			"childNodeTree": traverseChildNodeTree,

			"getText": getText,
			"setText": setText
		};
	}());
}

