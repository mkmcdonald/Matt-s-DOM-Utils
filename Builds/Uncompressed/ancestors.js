if (typeof Utils === "object" && Utils) {
	(function () {

                /**
                * @module
                * Utils.ancestors
                *
                * @description
                * Various methods used to traverse document
                * tree ancestors.
                *
                * @dependencies
                * * null
                */

		var doc,

			hostTypes;

               /**
                * @private
                *
                * @description
                * Variable containing the current document
                * node-like object.
                */

		doc = global.document;

               /**
                * @private
                *
                * @description
                * Object containing "normal" types associated with
                * host objects (exludes "unknown").
                */

		hostTypes = {
			"object": true,
			"function": true
		};

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is node-like.
                *
                * @param obj Object
                * An object to assert.
                */

		function isNodeLike(
			obj
		)
		{
			var type = typeof obj,
				normal = hostTypes[type] && obj,
				result = false;
			if (normal || type === "unknown") {
				result = typeof obj.nodeType ===
					"number";
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a host-like object (by passing
                * one of two assertions:
                * a) a `typeof` result of "object" or "function"
                * along with "truthiness";
                * b) a `typeof` result of "unknown".
                *
                * @param obj Object
                * An object to assert.
                */

		function isHostObject(
			obj
		)
		{
			var type = typeof obj,
				normal = hostTypes[type] && obj;
			return !!(normal || type === "unknown");
		}

               /**
                * @public `Utils.ancestors.get`.
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
				while (list && !result) {
					result = list.value === obj;
					list = list[key];
				}
			}
			return result;
		}

               /**
                * @public `Utils.ancestors.is`.
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
                * Helper method for "filter" methods; calls
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
                * @public `Utils.ancestors.traverse`.
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
			var list = getAncestorList(obj),
				key = "parent",
				result = [];
			if (typeof callback === "function") {
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

		doc = null;

		Utils.ancestors = Utils.ancestors || {
			"get": getAncestorList,
			"is": isAncestor,
			"traverse": traverseAncestors
		};
	}());
}


