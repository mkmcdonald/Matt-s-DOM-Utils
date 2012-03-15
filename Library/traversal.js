if (Utils) {
	(function () {
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

		function listContainsNode(
			list,
			node
		)
		{
			/*
                                Private recursive method returning
                                a boolean asserting a if a linked
                                list (preferably created via
                                `getAncestorList`) contains `node`.
			*/
			var isNode = Utils.nodes.isNode(node),
				result = false;
			if (isNode && list.parent)  {
				if (list.value === node) {
					result = true;
				} else if (list.value !== node) {
					result = listContainsNode(
						list.parent,
						node
					);
				}
			}
			return result;
		}

		function isAncestor(
			parent,
			node
		)
		{
			/*
                                Public method returning a boolean
                                asserting if `parent` is an
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
					parent
				);
			}
			return result;
		}

		function canAppendNode(
			node,
			parent
		)
		{
			/*
                                Private method returning a boolean
                                asserting if `parent` can append
                                `node` (via
                                `Utils.nodes.canAppendNodes` and
                                `isAncestor`).
			*/
			var canAppend = Utils.nodes.canAppendNodes(
					parent
				),
				validParent = !isAncestor(
					parent,
					node
				),
				result = false;
			if (canAppend && validParent) {
				result = true;
			} else if (!validParent) {
				Utils.errors.throwHeirarchyRequest(
				);
			}
			return result;
		}

		function addNode(
			node,
			parent
		)
		{
			/*
                                Public method that appends `node`
                                to `parent`; returns `null` if not
                                applicable.
			*/
			var isNode = Utils.nodes.isNode(node),
				canAppend,
				result = null;
			if (isNode) {
				canAppend = canAppendNode(
					node,
					parent
				);
				if (canAppend) {
					result = parent.appendChild(
						node
					);
				}
			}
			return result;
		}

		function removeNode(
			node,
			parent)
		{
			/*
                                Public method with multiple
                                applicative possibilities:
                                can be used as a stand-alone
                                or as a callback for a `traverse*`
                                method; returns `null` if not
                                applicable.
			*/
			var isNode = Utils.nodes.isNode(node),
				result = null,
				errorKey = "NOT_FOUND_ERROR",
				error = Utils.errors[errorKey];
			if (isNode) {
				if (parent && parent ===
					node.parentNode) {
					result = parent.removeChild(
						node
					);
				} else if (parent && parent !==
					node.parentNode) {
					Utils.errors.throwNotFound(
					);
				}
			}
			return result;
		}

		function makeLinearArray(
			nodes,
			index
		)
		{
			/*
                                Private recursive method that
                                takes iterable objects and
                                creates an array; returns `null`
                                if not applicable.
			*/
			var isNode = Utils.nodes.isNode(nodes),
				result = null,
				node;
			if (!nodes || isNode || index < 0 ||
				!nodes.length) {
				result = [];
			} else if (nodes && nodes.length) {
				if (typeof index !== "number") {
					index = nodes.length - 1;
				}
				if (index >= 0) {
					node = nodes[index];
					index -= 1;
					result = makeLinearArray(
						nodes,
						index
					);
					result.push(node);
				}
			}
			return result;
		}

		function getChildNodes(node)
		{
			/*
                                Public method that exposes a
                                static array of `childNodes` (via
                                `makeLinearArray`); returns `null` if
                                not applicable.
			*/
			var isNode = Utils.nodes.isNode(node),
				nodes = null;
			if (isNode) {
				if (typeof node.childNodes ===
					"object") {
					nodes = makeLinearArray(
						node.childNodes
					);
				}
			}
			return nodes;
		}

		function handleCallback(
			node,
			callback,
			result
		)
		{
			/*
                                Helper method for `traverse*`
                                methods; calls callback with
                                specified node passed; returns
                                `null` if not applicable.
			*/
			var called = callback(node);
			if (called === true) {
				result.unshift(node);
			} else if (called) {
				result.unshift(called);
			}
		}

		function traverseLinear(
			nodes,
			callback
		)
		{
			/*
                                Private recursive method that
                                traverses an array, running a
                                callback on each node in the
                                array; returns `null` if not
                                applicable.
			*/
			var result = null,
				nodes,
				node;
			if (!nodes || !nodes.length) {
				result = [];
			} else if (typeof nodes.shift ===
				"function") {
				node = nodes.shift();
				result = traverseLinear(
					nodes,
					callback
				);
				handleCallback(
					node,
					callback,
					result
				);
			}
			return result;
		}

		function collectChildNodeTree(
			node
		)
		{
			/*
                                Private **deep** recursive method
                                that takes a node and creates an
                                array from its "childNode tree";
                                returns `null` if not applicable.
			*/
			var isNode = Utils.nodes.isNode(node),
				result = null,
				child;
			if (!isNode) {
				result = [];
			} else if (isNode) {
				result = collectChildNodeTree(
					node.nextSibling
				);
				if (node.childNodes &&
					node.childNodes.length) {
					child = collectChildNodeTree(
						node.childNodes[0]
					);
					result.unshift(child);
				}
				result.unshift(node);
			}
			return result;
		}

		function getChildNodeTree(node)
		{
			/*
                                Public method that exposes a
                                static array of `childNodes` (via
                                `makeArray`); returns `null` if not
                                applicable.
			*/
			var isNode = Utils.nodes.isNode(node),
				nodes = null;
			if (isNode) {
				if (typeof node.childNodes ===
					"object") {
					nodes = collectChildNodeTree(
						node.childNodes[0]
					);
				}
			}
			return nodes;
		}

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

		function forkNativeChildren(node)
		{
			var isNode = Utils.nodes.isNode(node),
				result = null;
			if (isNode && typeof node.children ===
				"object") {
				result = makeLinearArray(
					node.children
				);
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
					);
			if (isElementNode) {
				return true;
			}
			return false;
		}

		function getChildren(
			node
		)
		{
			/*
                                Public method that exposes a
                                static array of `children`—also
                                known as element nodes—(via
                                `makeArray`); returns `null` if not
                                applicable.
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
				result = Utils.nodes.remove(
					node
				);
			}
			return result;
		}

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

		function traverseRecursive(
			nodes,
			callback
		)
		{
			/*
                                Private recursive method that
                                traverses an array, running a
                                callback on each node in the
                                array; returns `null` if not
                                applicable.
			*/
			// PONDER: Limit to 30 lines or 25?
			var result = null,
				node,
				isNode;
			if (!nodes || !nodes.length) {
				result = [];
			} else if (typeof nodes.shift ===
				"function") {
				node = nodes.shift();
				isNode = Utils.nodes.isNode(node);
				result = traverseRecursive(
					nodes,
					callback
				);
				handleCallback(
					node,
					callback,
					result
				);
				if (!isNode) {
					result.unshift(
						traverseRecursive(
							node,
							callback
						)
					);
				}
			}
			return result;
		}

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
				Utils.nodes.isTextNode(node);
			if (validNode) {
				return node.nodeValue;
			}
			return false;
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
				decisions = {};
			decisions[types.ELEMENT_NODE] = collectText;
			decisions[types.TEXT_NODE] = grabText;
			decisions[types.COMMENT_NODE] = grabText;
			decisions[types.DOCUMENT_FRAGMENT_NODE] =
				collectText;
			decisions[types.PROCESSING_INSTRUCTION_NODE] =
				grabText;
			return decisions;
		}

		function getText(node)
		{
			/*
                                Public method that exposes a
                                string consisting of concatenated
                                text node data or node `data` (via
                                `traverseRecursive`); returns
                                `null` if not applicable. See
                                DOM 4 Spec section 5.3
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
			textNode =
				global.document.createTextNode(
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
				decisions = {};
			decisions[types.ELEMENT_NODE] =
				overrideText;
			decisions[types.TEXT_NODE] =
				replaceText;
			decisions[types.COMMENT_NODE] =
				replaceText;
			decisions[types.DOCUMENT_FRAGMENT_NODE] =
				overrideText;
			decisions[types.PROCESSING_INSTRUCTION_NODE] =
				replaceText;
			return decisions;
		}

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
                                DOM 4 Spec section 5.3
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

		Utils.traversal = Utils.traversal || {
			"getAncestorList": getAncestorList,
			"isAncestor": isAncestor,
			"addNode": addNode,
			"removeNode": removeNode,
			"makeLinearArray": makeLinearArray,
			"getChildNodes": getChildNodes,
			"getChildNodeTree": getChildNodeTree,
			"traverseChildNodes": traverseChildNodes,
			"getChildren": getChildren,
			"traverseChildren": traverseChildren,
			"clearChildNodes": clearChildNodes,
			"clearChildren": clearChildren,
			"getText": getText,
			"setText": setText
		};
	}());
}
