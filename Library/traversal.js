if (Utils) {
	(function () {
		function makeLinearArray(
			node
		)
		{
			/*
                                Private recursive method that
                                takes iterable objects and
                                creates an array; returns `null`
                                if not applicable.
			*/
			var isNode = Utils.nodes.isNode(node),
				result = null,
				child;
			if (!isNode) {
				result = [];
			} else if (isNode) {
				result = makeLinearArray(
					node.nextSibling
				);
				result.unshift(node);
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
						node.childNodes[0]
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

		function recurNode(
			nodes,
			callback
		)
		{
			/*
                                Private helper method intended for
                                `traverseLinear`. Recurs on next
                                array element if found; returns
                                `null` if not applicable.
			*/
			var node = nodes.shift(),
				isNode = Utils.nodes.isNode(node),
				result = null;
			result = traverseLinear(
				nodes,
				callback
			);
			handleCallback(
				node,
				callback,
				result
			);
			return result;
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
			var result = null;
			if (!nodes || !nodes.length) {
				return [];
			}
			if (typeof nodes.shift === "function") {
				result = recurNode(
					nodes,
					callback
				);
			}
			return result;
		}

		function makeRecursiveArray(
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
				result = makeRecursiveArray(
					node.nextSibling
				);
				if (node.childNodes &&
					node.childNodes.length) {
					child = makeRecursiveArray(
						node.childNodes[0]
					);
					result.unshift(child);
				}
				result.unshift(node);
			}
			return result;
		}

		function getRecursiveChildNodes(node)
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
					nodes = makeRecursiveArray(
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
			if (isNode) {
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
					Utils.nodes.remove
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

		function recurArray(
			nodes,
			callback
		)
		{
			/*
                                Private helper method intended for
                                `traverseRecursive`. Recurs on
                                next array element and/or sub-array
                                if found; returns `null` if not
                                applicable.
			*/
			var node = nodes.shift(),
				isNode = Utils.nodes.isNode(node),
				result = null;
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
				result.unshift(traverseRecursive(
					node,
					callback
				));
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
			var result = null;
			if (!nodes || !nodes.length) {
				result = [];
			} else if (typeof nodes.shift ===
				"function") {
				result = recurArray(
					nodes,
					callback
				);
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
				nodes = getRecursiveChildNodes(
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
			"getChildNodes": getChildNodes,
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
