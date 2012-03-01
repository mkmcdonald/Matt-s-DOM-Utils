if (Utils) {
	(function () {
		function makeArray(
			source,
			start
		)
		{
			/*
                                Private recursive method that
                                takes iterable objects and
                                creates an array; returns `null`
                                if not applicable.
			*/
			var max = source.length,
				element,
				next = null;
			if (typeof source === "object") {
				if (max && start >= max) {
					return [];
				} else if (max && start < max) {
					element = source[start];
					start += 1;
					next = makeArray(
						source,
						start
					);
					next.unshift(element);
				}
			}
			return next;
		}

		function getChildNodes(node)
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
					nodes = makeArray(
						node.childNodes,
						0
					);
				}
			}
			return nodes;
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
			var node,
				called,
				result = null;
			if (!nodes || !nodes.length) {
				return [];
			}
			if (typeof nodes.shift === "function") {
				node = nodes.shift();
				called = callback(node);
				result = traverseLinear(
					nodes,
					callback
				);
				if (called === true) {
					result.unshift(node);
				}
			}
			return result;
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
                                if node passed is a node and is
                                an element node; returns `false`
                                otherwise.
                        */
			var isNode = Utils.nodes.isNode(node);
			if (isNode) {
				if (node.nodeType === 1) {
					return true;
				}
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
				children = null;
			if (isNode) {
				nodes = getChildNodes(
					node
				);
				children = traverseLinear(
					nodes,
					filterElementNode
				);
			}
			return children;
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

		Utils.traversal = Utils.traversal || {
			"getChildNodes": getChildNodes,
			"traverseChildNodes": traverseChildNodes,
			"getChildren": getChildren,
			"traverseChildren": traverseChildren
		};
	}());
}
