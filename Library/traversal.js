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
                                creates an array or null
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
                                static array of childNodes or
                                null if not applicable.
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
                                array or null if not applicable.
			*/
			var node,
				called,
				result = null;
			if (!nodes.length) {
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
			nodes,
			callback
		)
		{
			/*
                                Private method that creates a
                                static array of childNodes (via 
                                makeArray) and then traverses the
                                array (via traverseLinear) or
                                returns null if not applicable.
			*/
			var result = null;
			if (typeof callback === "function") {
				nodes = makeArray(
					nodes,
					0
				);
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
                                traverse* methods. Returns true
                                if node passed is a node and is
                                an element node. Returns false
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
                                static array of children (element
                                nodes) or null if not applicable.
			*/
			var isNode = Utils.nodes.isNode(node),
				nodes = [],
				children = null;
			if (isNode) {
				nodes = getChildNodes(
					node
				);
				children = traverseChildNodes(
					nodes,
					filterElementNode
				);
			}
			return children;
		}

		Utils.traversal = Utils.traversal || {
			"traverseChildNodes": traverseChildNodes,
			"getChildNodes": getChildNodes,
			"getChildren": getChildren
		};
	}());
}
