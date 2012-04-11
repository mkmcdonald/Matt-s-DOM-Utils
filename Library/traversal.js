if (Utils) {
	(function () {

		/*
                        Utils.traversal

                        Description:

                        Various methods used to traverse DOM
                        nodes.

                        Dependencies:

                        * Utils.host;
                        * Utils.nodes;
                        * Utils.helpers;
		*/


                /*        PUBLIC METHOD        */


		function getAncestorList(node)
		{
			/*
                                Public method that builds a linked
                                list of ancestors from `node` all
                                the way to the top of the document
                                tree (`document`); returns null
                                if not applicable.

                                Example result (`node` is
                                `document.documentElement`):

                                {
                                        "parent": {
                                                "parent": null,
                                                "value": [`document`]
                                        },
                                        "value": [`node`]
                                }
			*/
			var isNode = Utils.nodes.isNode(node),
				result = null;
			if (isNode) {
				result = {};
				result.value = node;
				result.parent = getAncestorList(
					node.parentNode
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function listContainsNode(
			list,
			node
		)
		{
			/*
                                Private method returning
                                a boolean asserting a if a linked
                                list (preferably created via
                                `getAncestorList`) contains `node`.
			*/
			var isNode = Utils.nodes.isNode(node),
				result = false;
			while (isNode && typeof list.parent !==
				"undefined") {
				if (list.value === node) {
					result = true;
					break;
				}
				list = list.parent;
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function isAncestor(
			par,
			node
		)
		{
			/*
                                Public method returning a boolean
                                asserting if `par` is an
                                ancestor of `node` (via
                                `listContainsNode`).
			*/
			var isNode = Utils.nodes.isNode(node),
				list,
				result = false;
			if (isNode) {
				list = getAncestorList(node);
				result = listContainsNode(
					list,
					par
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function makeLinearArray(obj)
		{
			/*
				Private wrapper for
				`Utils.helpers.makeLinearArray`.
			*/
			return Utils.helpers.makeLinearArray(obj);
		}


                /*        PUBLIC METHOD        */


		function getChildNodes(node)
		{
			/*
                                Public method that exposes a
                                static array of `childNodes`;
                                returns `null` if
                                not applicable.
			*/
			var isNode = Utils.nodes.isNode(node),
				key = "childNodes",
				isHostObject,
				result = null;
			if (isNode) {
				isHostObject = Utils.host.isObject(
					node[key]
				);
				if (isHostObject) {
					result = makeLinearArray(
						node[key]
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function handleCallback(
			node,
			callback,
			result
		)
		{
			/*
                                Helper method for `traverse*`
                                methods; calls callback with
                                specified node passed;
			*/
			var called;
			if (typeof callback === "function") {
				called = callback(node);
				if (called === true) {
					result.unshift(node);
				} else if (called) {
					result.unshift(called);
				}
			}
		}


                /*        PUBLIC METHOD        */


		function traverseLinear(
			nodes,
			callback
		)
		{
			/*
                                Public method that traverses
                                an array-like objects, running
                                a callback on each node in the
                                array.
			*/
			var index,
				node,
				result = [];
			if (nodes && nodes.length) {
				index = nodes.length - 1;
				while (index > -1) {
					node = nodes[index];
					handleCallback(
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


		function addRecursiveTree(
			tree,
			par
		)
		{
			/*
                                Private helper method for
                                `traverseRecursive`; returns
                                boolean asserting if tree
                                can be added to `par`.
			*/
			var result = false;
			if (tree.length) {
				par.unshift(tree);
				result = true;
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function traverseRecursive(
			nodes,
			callback
		)
		{
			/*
                                Public recursive method that
                                traverses an array-like object,
                                running a callback on each node
                                in the array.
			*/
			var result = [],
				index = -1,
				node,
				tree;
			if (nodes && nodes.length) {
				index = nodes.length - 1;
				while (index > -1) {
					node = nodes[index];
					tree = traverseRecursive(
						node.childNodes,
						callback
					);
					addRecursiveTree(
						tree,
						result
					);
					handleCallback(
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


		function addChildNodeTree(
			tree,
			par
		)
		{
			/*
                                Private helper method for
                                `collectChildNodeTree`; returns
                                a boolean asserting if the tree
                                passed could be added.
			*/
			var result = false;
			if (tree.length) {
				par.push(tree);
				result = true;
			}
			return result;
		}

		function canTraverse(node)
		{
			/*
                                Private method returning a
                                boolean asserting if a node
                                can be traversed via
                                `node.childNodes` and
                                `node.nextSibling`.
			*/
			var isNode = Utils.nodes.isNode(node),
				hasChildNodes,
				hasSibling,
				result = false;
			if (isNode) {
				hasChildNodes = Utils.host.isObject(
					node.childNodes
				);
				hasSibling = Utils.host.isObject(
					node.nextSibling
				);
				if (hasChildNodes && hasSibling
					&& node.childNodes.length) {
					result = true;
				}
			}
			return result;
		}

		function collectChildNodeTree(
			node
		)
		{
			/*
                                Private recursive method
                                that takes a node and creates an
                                array from its "childNode tree";
                                returns `null` if not applicable.
			*/
			var hasNodes = canTraverse(node),
				child,
				result = [],
				tree;
			if (hasNodes) {
				child = node.childNodes[0];
				while (child) {
					result.push(child);
					tree = collectChildNodeTree(
						child
					);
					addChildNodeTree(
						tree,
						result
					);
					child = child.nextSibling;
				}
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function getChildNodeTree(node)
		{
			/*
                                Public method that exposes a
                                static array of `childNodes` (via
                                `makeArray`); returns `null` if not
                                applicable.
			*/
			var isNode = Utils.nodes.isNode(node),
				isHostObject,
				result = null;
			if (isNode) {
				isHostObject = Utils.host.isObject(
					node.childNodes
				);
				if (isHostObject) {
					result = collectChildNodeTree(
						node
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function traverseChildNodes(
			node,
			callback
		)
		{
			/*
                                Public method that traverses
                                a node's `childNodes` (via
                                `traverseLinear`); returns `null` if
                                not applicable.
			*/
			var nodes,
				result = null;
			if (typeof callback === "function") {
				nodes = getChildNodes(node);
				result = traverseLinear(
					nodes,
					callback
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function removeNode(
			node
		)
		{
			/*
                                Private method used as a callback
                                for `traverse*`; removes `node`;
                                returns `null` if not applicable.
			*/
			var isNode = Utils.nodes.isNode(node),
				key = "parentNode",
				isHostObject,
				result = null;
			if (isNode) {
				isHostObject = Utils.host.isObject(
					node[key]
				);
				if (isHostObject) {
					Utils.nodes.removeChild(
						node[key],
						node
					);
				}
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function clearChildNodes(node)
		{
			/*
                                Public method that clears a
				a node's `childNodes`, returning
				them upon successful removal;
				returns `null` if not applicable.
			*/
			var isNode = Utils.nodes.isNode(node),
				result = null;
			if (isNode) {
				result = traverseChildNodes(
					node,
					removeNode
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function forkNativeChildren(node)
		{
			/*
                                Private helper method that
                                builds a node's "native" `children`
                                as a static array; returns `null`
                                if not applicable.
			*/
			var isNode = Utils.nodes.isNode(node),
				isHostObject,
				result = null;
			if (isNode) {
				isHostObject = Utils.host.isObject(
					node.children
				);
				if (isHostObject) {
					result = makeLinearArray(
						node.children
					);
				}
			}
			return result;
		}

		function filterElementNode(node)
		{
                        /*
                                Private callback method intended
                                to be used in conjunction with
                                `traverse*` methods; returns `true`
                                if node passed is an element node;
                                returns `false` otherwise.
                        */
			var isElementNode =
				Utils.nodes.isElementNode(
					node
				),
				result = false;
			if (isElementNode) {
				result = true;
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function getChildren(
			node
		)
		{
			/*
                                Public method that exposes a
                                static array of `children` (via
                                `makeArray`); returns `null` if
                                not applicable.
			*/
			var isNode = Utils.nodes.isNode(node),
				nodes = [],
				result = null;
			if (isNode && typeof node.children !==
				"undefined") {
				result = forkNativeChildren(
					node
				);
			} else if (isNode && typeof node.children ===
				"undefined") {
				nodes = getChildNodes(
					node
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
			node,
			callback
		)
		{
			/*
                                Public method that traverses
                                a node's `children` (via
                                `traverseLinear`); returns `null` if
                                not applicable.
			*/
			var nodes,
				result = null;
			if (typeof callback === "function") {
				nodes = getChildren(node);
				result = traverseLinear(
					nodes,
					callback
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function removeElementNode(node)
		{
                        /*
                                Private callback method intended
                                to be used in conjunction with
                                `traverse*` methods; returns `true`
                                if node passed is an element node
                                and can be removed; returns `false`
                                otherwise.
                        */
			var isElementNode =
				Utils.nodes.isElementNode(
					node
				),
				result = false;
			if (isElementNode) {
				result = Utils.nodes.removeChild(
					node
				);
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function clearChildren(node)
		{
			/*
                                Public method that clears a
				a node's `children`, returning
				them upon successful removal;
				returns `null` if not applicable.
			*/
			var isNode = Utils.nodes.isNode(node),
				result = null;
			if (isNode) {
				result = traverseChildren(
					node,
					removeElementNode
				);
			}
			return result;
		}



                /*        END PUBLIC METHOD        */


		function filterTextData(node)
		{
			/*
                                Private callback method intended
                                to be used in conjunction with
                                `traverse*` methods; returns
                                `node.nodeValue` if node passed
                                is a text node; returns `false`
                                otherwise.
			*/
			var validNode =
				Utils.nodes.isTextNode(node),
				result = false;
			if (validNode) {
				result = node.nodeValue;
			}
			return result;
		}

		function grabText(node)
		{
			/*
                                Private helper method for
                                `getText` that grabs the `data`
                                property of a node; returns
                                `null` if not applicable. For
                                more, see `getText`.
			*/
			var isNode = Utils.nodes.isNode(node),
				result = null;
			if (isNode && typeof node.data !==
				"undefined") {
				result = node.data;
			}
			return result;
		}

		function collectText(node)
		{
			/*
                                Private helper method for
                                `getText` that recursively
                                concatenates text node data
                                (via `traverseRecursive`);
                                returns `null` if not applicable.
                                For more, see `getText`.
			*/
			var isNode = Utils.nodes.isNode(node),
				nodes,
				result = null;
			if (isNode) {
				nodes = getChildNodeTree(
					node
				);
				nodes = traverseRecursive(
					nodes,
					filterTextData
				);
				result = nodes.join("");
			}
			return result;
		}

		function generateTextGetterDecisions()
		{
			/*
                                Private method that returns a
                                decision table based upon
                                accepted `nodeType`s for "getting"
                                textual content.
			*/
			var types = Utils.nodes.types,
				result = {};
			result[types.ELEMENT_NODE] = collectText;
			result[types.TEXT_NODE] = grabText;
			result[types.COMMENT_NODE] = grabText;
			result[types.DOCUMENT_FRAGMENT_NODE] =
				collectText;
			result[types.PROCESSING_INSTRUCTION_NODE] =
				grabText;
			return result;
		}


                /*        PUBLIC METHOD        */


		function getText(node)
		{
			/*
                                Public method that exposes a
                                string consisting of concatenated
                                text node data or node `data` (via
                                `traverseRecursive`); returns
                                `null` if not applicable. See
                                the DOM 4 Spec section 5.3
                                (`Node.textContent`, getting)
                                for more.
			*/
			var canGet = Utils.nodes.canGetText(node),
				decisions =
					generateTextGetterDecisions(),
				decision,
				result = null;
			if (canGet) {
				decision = decisions[node.nodeType];
				if (typeof decision !==
					"undefined") {
					result = decision(node);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function overrideText(
			text,
			node
		)
		{
			/*
                                Private helper method for
                                `setText` that overrides
                                existing `childNodes` with a
                                text node; returns `null`
                                if not applicable. For more,
                                see `setText`.
			*/
			var isNode = Utils.nodes.isNode(node),
				textNode,
				result = null;
			text = String(text);
			textNode = Utils.nodes.createTextNode(
				global.document,
				text
			);
			if (isNode) {
				clearChildNodes(node);
				node.appendChild(textNode);
				result = text;
			}
			return result;
		}

		function replaceText(
			text,
			node
		)
		{
			/*
                                Private helper method for
                                `setText` that replaces
                                `node.data` with `text`;
                                returns `null` if not
                                applicable. For more, see
                                `setText`.
			*/
			var isNode = Utils.nodes.isNode(node),
				result = null;
			text = String(text);
			if (isNode && typeof node.data !==
				"undefined") {
				node.data = text;
				result = node.data;
			}
			return result;
		}

		function generateTextSetterDecisions()
		{
			/*
                                Private method that returns a
                                decision table based upon
                                accepted `nodeType`s for "setting"
                                textual content.
			*/
			var types = Utils.nodes.types,
				result = {};
			result[types.ELEMENT_NODE] =
				overrideText;
			result[types.TEXT_NODE] =
				replaceText;
			result[types.COMMENT_NODE] =
				replaceText;
			result[types.DOCUMENT_FRAGMENT_NODE] =
				overrideText;
			result[types.PROCESSING_INSTRUCTION_NODE] =
				replaceText;
			return result;
		}


                /*        PUBLIC METHOD        */


		function setText(
			text,
			node
		)
		{
			/*
                                Public method that either
                                overrides a node's (textual)
                                content or its `data`; returns
                                `null` if not applicable. See
                                the DOM 4 Spec section 5.3
                                (`Node.textContent`, setting)
                                for more.
			*/
			var canSet = Utils.nodes.canSetText(node),
				decisions =
					generateTextSetterDecisions(),
				decision,
				result = null;
			if (canSet) {
				decision = decisions[node.nodeType];
				if (typeof decision !==
					"undefined") {
					result = decision(
						text,
						node
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		Utils.traversal = Utils.traversal || {
			"getAncestorList": getAncestorList,
			"isAncestor": isAncestor,

			"getChildNodes": getChildNodes,
			"getChildNodeTree": getChildNodeTree,

			"traverseLinear": traverseLinear,
			"traverseRecursive": traverseRecursive,

			"traverseChildNodes": traverseChildNodes,
			"clearChildNodes": clearChildNodes,

			"getChildren": getChildren,
			"traverseChildren": traverseChildren,
			"clearChildren": clearChildren,

			"getText": getText,
			"setText": setText
		};
	}());
}

