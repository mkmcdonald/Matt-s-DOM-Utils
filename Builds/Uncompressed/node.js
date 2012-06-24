if (typeof Utils === "object" && Utils) {
	(function () {

               /**
                * @module
                * Utils.node
                *
                * @description
                * Various DOM node method wrappers.
                *
                * @dependencies
                * * null
                */

		var nodeTypes, 
			valueSetters,
			hostTypes;

               /**
                * @private
                *
                * @description
                * Object of documented `nodeType`s.
                *
                * @see DOM 4 Spec 5.3 (Node, nodeType).
                */

		nodeTypes = {
			"ELEMENT_NODE": 1,
			"ATTRIBUTE_NODE": 2,
			"TEXT_NODE": 3,
			"CDATA_SECTION_NODE": 4,
			"ENTITY_REFERENCE_NODE": 5,
			"ENTITY_NODE": 6,
			"PROCRESSING_INSTRUCTION_NODE": 7,
			"COMMENT_NODE": 8,
			"DOCUMENT_NODE": 9,
			"DOCUMENT_TYPE_NODE": 10,
			"DOCUMENT_FRAGMENT_NODE": 11,
			"NOTATION_NODE": 12
		};

               /**
                * @private
                *
                * @description
                * Object of `nodeTypes` that can set the 
                * `nodeValue` property.
                *
                * @see DOM 4 Spec 5.3 (Node, nodeValue).
                */

		valueSetters = (function () {
			var result = {};
			result[nodeTypes.TEXT_NODE] = true;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				true;
			result[nodeTypes.COMMENT_NODE] = true;
			return result;
		}());

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
                * specified object is array-like.
                *
                * @param obj Object
                * An object to assert.
                */

		function isArrayLike(
			obj
		)
		{
			var type = typeof obj,
				normal = hostTypes[type] && obj,
				result = false;
			if (normal || type === "unknown") {
				result = typeof obj.length ===
					"number";
			}
			return result;
		}

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
                * @public `Utils.node.prepend`.
                *
                * @description
                * Wrapper method for `insertBefore`; returns the
                * wrapped method's result or `null` if not
                * applicable.
                *
                * @see `Node::insertBefore`.
                * 
                * @param par Object
                * A node-like object that will attempt to prefix
                * a node-like object.
                *
                * @param newObj Object
                * A node-like object to prefix.
                * 
                * @param refObj Object
                * A node-like object to insert before.
                */

		function insertBefore(
			par,
			newObj,
			refObj
		)
		{
			var key = "insertBefore",
				result = null;
			if (isNodeLike(par) && isNodeLike(newObj) &&
				isNodeLike(refObj)) {
				if (isHostObject(par[key])) {
					result = par[key](
						newObj,
						refObj
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.node.prependList`.
                *
                * @description
                * Method that passes each element of an array-like
                * object to `insertBefore`.
                *
                * @see `insertBefore`.
                * 
                * @param par Object
                * A node-like object that will attempt to prepend
                * a list of node-like objects.
                *
                * @param list Array
                * A list of node-like objects to prepend.
                * 
                * @param refObj Object
                * A node-like object to prepend before.
                */

		function insertListBefore(
			par,
			list,
			refObj
		)
		{
			var max,
				aux,
				diff,
				result;
			if (isArrayLike(list)) {
				max = list.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					insertBefore(
						par,
						list[diff],
						refObj
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.node.append`
                *
                * @description
                * Wrapper method for `appendChild`; returns the
                * wrapped method's result or `null` if not
                * applicable.
                *
                * @see `Node::appendChild`.
                * 
                * @param par Object
                * A node-like object that will attempt to append
                * a node-like object.
                * 
                * @param obj Object
                * A node-like object to append.
                */

		function appendChild(
			par,
			obj
		)
		{
			var key = "appendChild",
				result = null;
			if (isNodeLike(par) && isNodeLike(obj)) {
				if (isHostObject(par[key])) {
					result = par[key](
						obj
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.node.appendList`.
                *
                * @description
                * Method that passes each element of an array-like
                * object to `appendChild`.
                *
                * @see `appendChild`.
                * 
                * @param par Object
                * A node-like object that will attempt to append
                * a list of node-like objects.
                * 
                * @param list Array
                * A list of node-like objects to append.
                */

		function appendList(
			par,
			list
		)
		{
			var max,
				aux,
				diff,
				result;
			if (isArrayLike(list)) {
				max = list.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					appendChild(
						par,
						list[diff]
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.node.remove`.
                *
                * @description
                * Wrapper method for `removeChild`; returns the
                * wrapped method's result or `null` if not
                * applicable.
                *
                * @see `Node::removeChild`.
                * 
                * @param par Object
                * A node-like object that will attempt to remove
                * another node-like object.
                * 
                * @param obj Object
                * A node-like object to be removed.
                */

		function removeChild(
			par,
			obj
		)
		{
			var key = "removeChild",
				result = null;
			if (isNodeLike(par) && isNodeLike(obj)) {
				if (isHostObject(par[key])) {
					result = par[key](
						obj
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.node.replace`.
                *
                * @description
                * Wrapper method for `replaceChild`; returns the
                * wrapped method's result or `null` if not
                * applicable.
                *
                * @see `Node::replaceChild`.
                * 
                * @param par Object
                * A node-like object that will attempt to replace
                * another node-like object.
                * 
                * @param newObj Object
                * A node-like object to replace a node-like object
                * with.
                * 
                * @param oldObj Object
                * A node-like object to be replaced.
                */

		function replaceChild(
			par,
			newObj,
			oldObj
		)
		{
			var key = "replaceChild",
				result = null;
			if (isNodeLike(par) && isNodeLike(newObj) &&
				isNodeLike(oldObj)) {
				if (isHostObject(par[key])) {
					result = par[key](
						newObj,
						oldObj
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.node.clone`.
                *
                * @description
                * Wrapper method for `cloneNode`; returns the
                * wrapped method's result or `null` if not
                * applicable.
                *
                * @see `Node::cloneNode`.
                * 
                * @param obj Object
                * A node-like object to be cloned.
                * 
                * @param deep Boolean
                * A boolean determining if a "deep" (recursive)
                * clone will occur.
                */

		function cloneNode(
			obj,
			deep
		)
		{
			var key = "cloneNode",
				result = null;
			if (isNodeLike(obj)) {
				if (isHostObject(obj[key])) {
					result = obj[key](
						obj,
						deep
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if a
                * specified object can retrieve the `nodeName`
                * property.
                *
                * @param obj Object
                * An object to assert.
                */

		function canGetName(
			obj
		)
		{
			var result = false;
			if (isNodeLike(obj)) {
				result = typeof obj.nodeName ===
					"string";
			}
			return result;
		}

               /**
                * @public `Utils.node.getName`.
                *
                * @description
                * Getter method for `nodeName`; returns the
                * wrapped property's result or `null` if not
                * applicable.
                *
                * @see `Node::nodeName`.
                * @see `Element::tagName`.
                * 
                * @param obj Object
                * A node-like object to retrieve the `nodeName`
                * property from.
                * 
                * @param lower Boolean
                * A boolean determining if a the `nodeName` will
                * be returned in lower case form.
                */

		function getName(
			obj,
			lower
		)
		{
			var lowKey = "toLowerCase",
				upKey = "toUpperCase",
				result = null;
			if (canGetName(obj)) {
				result = obj.nodeName;
				if (lower) {
					result = result[lowKey]();
				} else if (!lower) {
					result = result[upKey]();
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if a
                * specified object can retrieve the `nodeValue`
                * property.
                *
                * @param obj Object
                * An object to assert.
                */

		function canGetValue(
			obj
		)
		{
			var result = false;
			if (isNodeLike(obj)) {
				result = typeof obj.nodeValue ===
					"string";
			}
			return result;
		}

               /**
                * @public `Utils.node.getValue`.
                *
                * @description
                * Getter method for `nodeValue`; returns the
                * wrapped property's result or `null` if not
                * applicable.
                *
                * @see `Node::nodeValue`.
                * @see `CharacterData::data`.
                * @see `Text::data` (inherited from above).
                * 
                * @param obj Object
                * A node-like object to retrieve the `nodeValue`
                * property from.
                */

		function getValue(
			obj
		)
		{
			var result = null;
			if (canGetValue(obj)) {
				result = obj.nodeValue;
			}
			return result;
		}

               /**
                * @public `Utils.node.setValue`.
                *
                * @description
                * Setter method for `nodeValue`; returns the
                * wrapped property's result or `null` if not
                * applicable.
                *
                * @see `Node::nodeValue`.
                * @see `CharacterData::data`.
                * @see `Text::data`.
                * 
                * @param obj Object
                * A node-like object to retrieve the `nodeValue`
                * property from.
                * 
                * @param newValue String
                * A string containing the new value for the
		* `nodeValue` property.
                */

		function setValue(
			obj,
			newValue
		)
		{
			var key = "nodeValue",
				result = null;
			if (isNodeLike(obj)) {
				if (valueSetters[obj.nodeType]) {
					result = obj[key] = newValue;
				}
			}
			return result;
		}

		Utils.node = Utils.node || {
			"prepend": insertBefore,
			"prependList": insertListBefore,
			"append": appendChild,
			"appendList": appendList,
			"remove": removeChild,
			"replace": replaceChild,
			"clone": cloneNode,
			"getName": getName,
			"getValue": getValue,
			"setValue": setValue
		};
	}());
}
