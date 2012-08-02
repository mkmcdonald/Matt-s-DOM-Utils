if (typeof Utils === "object" && Utils) {
	(function () {

               /**
                * @module
                * Utils.classes
                *
                * @description
                * DOM Level 4-style `classList` implementation with
                * additional features.
                *
                * @see DOM 4 Spec section 5.7 (Element, classList).
                * @see DOM 4 Spec section 9.2 (DOMTokenList).
                *
                * @dependencies
                * * null
                */

		var invalidChars,

			doc,
			body,

			hostTypes,
			nodeTypes,

			canGetClassName,
			canUseClassList,

			forkHasClass,
			hasClass,
			forkAddClass,
			addClass,
			forkRemoveClass,
			removeClass,
			forkToggleClass,
			toggleClass,
			forkGetClass,
			getClass,
			getClasses;

               /**
                * @private
                *
                * @description
                * Object containing characters whose presence is
                * considered invalid in a token list.
                * node or `null`.
                */

		invalidChars = {
			" ": true,
			"\t": true,
			"\n": true,
			"\f": true,
			"\r": true
		};

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
                * @closure
                *
                * @description
                * Wrapper method that returns the current body
                * node-like object; returns `null` if not
                * applicable.
                */

		body = (function () {
			var result = null;
			if (doc && doc.body) {
				result = doc.body;
			}
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
                * Method that returns a boolean asserting if the
                * specified object has a certain value for the
                * `nodeType` property.
                *
                * @param obj Object
                * An object which will have its `nodeType`
                * property checked.
                *
                * @param num Number
                * A number to assert.
                */

		function isNodeType(
			obj,
			num
		)
		{
			var type = typeof obj,
				normal = hostTypes[type] && obj,
				result = false;
			if (normal || type === "unknown") {
				result = obj.nodeType === num;
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is an element node-like object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isElement(
			obj
		)
		{
			var type = nodeTypes.ELEMENT_NODE;
			return isNodeType(
				obj,
				type
			);
		}

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Boolean asserting if element node-like objects
                * can retrieve the `className` property.
                */

		canGetClassName = (function () {
			var result = false;
			if (isElement(body)) {
				result = typeof body.className ===
					"string";
			}
			return result;
		}());

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
                * @private
                *
                * @closure
                *
                * @description
                * Boolean asserting if element node-like objects
                * can retrieve the `classList` property.
                */

		canUseClassList = (function () {
			var result = false;
			if (isElement(body)) {
				result = isHostObject(
					body.classList
				);
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method that returns a closure, wrapping
                * a specified key and initial return value.
                *
                * @param method String
                * A string containing the key of the method to be
                * called.
                *
                * @param base *
                * An initial return value.
                */

		function forkMethod(
			method,
			base
		)
		{
			var key = method,
				result = base;
			return function (obj, token) {
				if (isElement(obj)) {
					result = obj.classList[key](
						token
					);
				}
				return result;
			};
		}

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure)
                * the result of `forkMethod` or `null`
                * if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param token String
                * A string containing a token to use.
                *
                * @see `forkMethod`.
                */

		forkHasClass = (function () {
			var key = "contains",
				result = null;
			if (body && canUseClassList &&
				isHostObject(body.classList[key])) {
				result = forkMethod(
					key,
					"false"
				);
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Throws an error describing invalid characters.
                *
                * @throws Error
                */

		function raiseInvalid()
		{
			throw new Error(
				"The string contains invalid " +
					"characters."
			);
		}

               /**
                * @private
                *
                * @description
                * Throws an error describing improper syntax.
                *
                * @throws Error
                */

		function raiseSyntax()
		{
			throw new Error(
				"The string did not match " +
					"the expected pattern."
			);
		}

               /**
                * @private
                *
                * @description
                * Helper method that returns a boolean asserting if
                * the character passed is "valid" for use within a
                * class "token"; throws an error if the character is
                * a key of `invalidChars` or if it is an empty string.
                *
                * @param chr String
                * A string containing the character to assert.
                *
                * @see `raiseInvalid`
                * @see `raiseSyntax`
                */

		function checkCharacter(
			chr
		)
		{
			var invalidChar = invalidChars[chr],
				u = "undefined",
				result = false;
			if (chr === "") {
				raiseSyntax();
			} else if (invalidChar !== global[u]) {
				raiseInvalid();
			} else if (invalidChar === global[u]) {
				result = true;
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if
                * the token specified contains any invalid
                * characters.
                *
                * @param token String
                * A string containing the token to assert.
                */

		function checkToken(
			token
		)
		{
			var index = 0,
				max,
				result = true;
			if (token && token.length) {
				max = token.length;
				for (index; index < max; index += 1) {
					result = checkCharacter(
						token.charAt(index)
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that returns a modified list of
                * tokens depending on the validity of the
                * character passed, ignoring spaces.
                *
                * @param chr String
                * A string containing the character to check.
                *
                * @param sequence String
                * A string containing the sequence to use.
                *
                * @param tokens Array
                * An array-like object containing the tokens to
                * modify.
                */

		function handleCharacter(
			chr,
			sequence,
			tokens
		)
		{
			var validChar = false,
				result = "";
			if (chr && chr !== " ") {
				validChar = checkCharacter(
					chr
				);
			}
			if (!validChar && sequence.length) {
				tokens[tokens.length] = sequence;
			} else if (validChar) {
				result = sequence + chr;
			}
			return result;
		}

               /**
                * @private
                * 
                * @description
                * Method that builds a token list from a
                * (space-separated) string.
                *
                * @param chars String
                * A string containing the characters to handle.
                *
                * @see DOM Level 4 Spec 2.3.2 (Space-separated
                * tokens).
                */

		function buildTokenList(
			chars
		)
		{
			var index = 0,
				max,
				sequence = "",
				result = [];
			if (chars && chars.length) {
				max = chars.length + 1;
				for (index; index < max; index += 1) {
					sequence = handleCharacter(
						chars.charAt(index),
						sequence,
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
                * Method that returns a token list of an element
                * node-like object; returns `null` if not
                * applicable.
                *
                * @param obj Object
                * An element node-like object to use.
                */

		function buildClassList(
			obj
		)
		{
			var result = [];
			if (canGetClassName) {
				result = buildTokenList(
					obj.className
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that returns a boolean asserting
                * if the specified token can be found in a token
                * list.
                *
                * @param list Array
                * An array-like object of tokens to search.
                *
                * @param find String
                * A string containing the token to find.
                */

		function findToken(
			list,
			find
		)
		{
			var index = 0,
				max,
				result = false;
			max = list.length;
			for (index; index < max; index += 1) {
				if (find === list[index]) {
					result = true;
					break;
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that returns a boolean asserting
                * if the specified token is valid and is present
                * in a specific token list.
                *
                * @param list Array
                * An array-like object of tokens to search.
                *
                * @param token String
                * A string containing the token to find.
                */

		function attemptTokenSearch(
			list,
			token
		)
		{
			var result = false;
			if (checkToken(token)) {
				result = findToken(
					list,
					token
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting
                * if the specified token is contained by a specific
                * element node-like object's token list; returns
                * `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param token String
                * A string containing the token to find.
                */

		function hasSingleClass(
			obj,
			token
		)
		{
			var result = null;
			if (isElement(obj)) {
				result = attemptTokenSearch(
					buildClassList(obj),
					token
				);
			}
			return result;
		}

               /**
                * @public `Utils.classes.contains`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) a
                * boolean asserting if the specified token is
                * contained by a specific element node-like object's
                * token list; returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param token String
                * A string containing a token to use.
                *
                * @see `forkHasClass`.
                * @see `hasSingleClass`.
                * @see `DOMTokenList::contains`.
                */

		hasClass = (function () {
			var result = null;
			if (canUseClassList) {
				result = forkHasClass;
			} else if (!canUseClassList &&
				isElement(body)) {
				result = hasSingleClass;
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method that wraps `hasClass`;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param token String
                * A string containing a token to use.
                *
                * @see `hasClass`.
                */

		function wrapHasClass(
			obj,
			token
		)
		{
			var result = null;
			if (hasClass) {
				result = hasClass(
					obj,
					token
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that iterates over the specified list
                * of tokens and returns a boolean asserting their
                * presence in a specific element node-like object's
                * token list.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param tokens Array
                * An array-like object containing the tokens to
                * search for.
                */

		function searchClassesInList(
			obj,
			tokens
		)
		{
			var index = 0,
				max = tokens.length,
				result = true;
			while (index < max && result) {
				result = wrapHasClass(
					obj,
					tokens[index]
				);
				result = !!result;
				index += 1;
			}
			return result;
		}

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
                * @public `Utils.classes.containsList`.
                *
                * @description
                * Method that returns a boolean asserting if an
                * array-like object of tokens is contained by
                * a token list (independent of order).
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param tokens Array
                * An array-like object containing the tokens to
                * search for.
                */

		function hasClasses(
			obj,
			tokens
		)
		{
			var result = false;
			if (isElement(obj)) {
				if (isArrayLike(tokens)) {
					result = searchClassesInList(
						obj,
						tokens
					);
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
                * Wrapper method that returns (via a closure)
                * the result of `forkMethod` or `null`
                * if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param token String
                * A string containing a token to use.
                *
                * @see `forkMethod`.
                */

		forkAddClass = (function () {
			var result = null;
			if (body && canUseClassList &&
				isHostObject(body.classList.add)) {
				result = forkMethod(
					"add"
				);
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Helper method that returns a boolean asserting
                * if the specified token list already contains
                * a specific token and can be added to a token list.
                *
                * @param obj Object
                * An object used as the source of a token list.
                *
                * @param add String
                * A string containing a token to be added to a
                * specific token list.
                *
                * @param list Array
                * An array-like object to be modified.
                */

		function attemptClassAddition(
			obj,
			add,
			list
		)
		{
			var result = false;
			if (!wrapHasClass(obj, add)) {
				list[list.length] = add;
				result = true;
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that returns a boolean asserting
                * if the specified token is valid and can be added
                * to a specific token list.
                *
                * @param obj Object
                * An object used as the source of a token list.
                *
                * @param token String
                * A string containing a token to be added to a
                * specific token list.
                *
                * @param list Array
                * An array-like object to be modified.
                */

		function classAdditionCheck(
			obj,
			token,
			list
		)
		{
			var result = false;
			if (checkToken(token)) {
				result = attemptClassAddition(
					obj,
					token,
					list
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that assigns the specified token list
                * to a node-like object's `className` property as a
                * string.
                *
                * @param obj Object
                * An element node-like object whose `className`
                * property will be overridden.
                *
                * @param list Array
                * An array-like object of tokens to be sourced.
                */

		function overwriteClass(
			obj,
			list
		)
		{
			var result;
			if (canGetClassName) {
				obj.className = list.join(
					" "
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that add a single token to a token list and
                * applies the list to the specified node-like
                * object's `className` property.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param token String
                * A string containing the token to add.
                */

		function addSingleClass(
			obj,
			token
		)
		{
			var list,
				result;
			if (isElement(obj)) {
				list = buildClassList(
					obj
				);
				classAdditionCheck(
					obj,
					token,
					list
				);
				overwriteClass(
					obj,
					list
				);
			}
			return result;
		}

               /**
                * @public `Utils.classes.add`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) a
                * boolean asserting if the specified token is
                * contained by a specific element node-like object's
                * token list and adds it to the token list; returns
                * `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param token String
                * A string containing a token to use.
                *
                * @see `forkAddClass`.
                * @see `addSingleClass`.
                * @see `DOMTokenList::add`.
                */

		addClass = (function () {
			var result = null;
			if (canUseClassList){
				result = forkAddClass;
			} else if (!canUseClassList &&
					isElement(body)) {
				result = addSingleClass;
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method that wraps `addClass`;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param token String
                * A string containing a token to use.
                *
                * @see `addClass`.
                */

		function wrapAddClass(
			obj,
			token
		)
		{
			var result = null;
			if (addClass) {
				result = addClass(
					obj,
					token
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that iterates over the specified list
                * of tokens and adds them to a specific element
                * node-like object's token list.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param tokens Array
                * An array-like object containing the tokens to
                * add.
                */

		function addClassesToList(
			obj,
			tokens
		)
		{
			var index = 0,
				max = tokens.length,
				result;
			for (index; index < max; index += 1) {
				wrapAddClass(
					obj,
					tokens[index]
				);
			}
			return result;
		}

               /**
                * @public `Utils.classes.addList`.
                *
                * @description
                * Method that adds an array-like object of tokens to
                * a specified token list.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param tokens Array
                * An array-like object containing the tokens to
                * add.
                */

		function addClasses(
			obj,
			tokens
		)
		{
			var result;
			if (isElement(obj)) {
				if (isArrayLike(tokens)) {
					addClassesToList(
						obj,
						tokens
					);
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
                * Wrapper method that returns (via a closure)
                * the result of `forkMethod` or `null`
                * if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param token String
                * A string containing a token to use.
                *
                * @see `forkMethod`.
                */

		forkRemoveClass = (function () {
			var key = "remove",
				result = null;
			if (body && canUseClassList &&
				isHostObject(body.classList[key])) {
				result = forkMethod(
					key
				);
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Helper method that removes the specified token
                * from a specific token list if it is inside of
                * the list.
                *
                * @param remove String
                * A token to be remove from a specific token list.
                *
                * @param list Array
                * An array-like object to be modified.
                */

		function removeToken(
			remove,
			list
		)
		{
			var max = list.length - 1,
				aux = max,
				diff,
				cleaned = 0,
				token,
				result;
			for (aux; aux > -1; aux -= 1) {
				diff = max - aux;
				token = list[diff];
				if (token === remove) {
					delete list[diff];
				} else if (token !== remove) {
					delete list[diff];
					list[cleaned] = token;
					cleaned += 1;
				}
			}
			list.length = cleaned;
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that attempts to remove the
                * specified token from a specific token list.
                *
                * @param obj Object
                * An object used as the source of a token list.
                *
                * @param remove String
                * A string containing a token to remove from a
                * specific token list.
                *
                * @param list Array
                * An array-like object to be modified.
                */

		function attemptClassRemoval(
			obj,
			remove,
			list
		)
		{
			var result;
			if (wrapHasClass(obj, remove)) {
				result = removeToken(
					remove,
					list
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that checks the specified token
                * and attempts to remove it from a specific token
                * list.
                *
                * @param obj Object
                * An object used as the source of a token list.
                *
                * @param token String
                * A string containing a token to remove from
                * a specific token list.
                *
                * @param list Array
                * An array-like object to be modified.
                */

		function classRemovalCheck(
			obj,
			token,
			list
		)
		{
			var result;
			if (checkToken(token)) {
				attemptClassRemoval(
					obj,
					token,
					list
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that removes a single token from a token
                * list and applies the list to the specified
                * node-like object's `className` property.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param token String
                * A string containing the token to remove.
                */

		function removeSingleClass(
			obj,
			token
		)
		{
			var list,
				result;
			if (isElement(obj)) {
				list = buildClassList(
					obj
				);
				classRemovalCheck(
					obj,
					token,
					list
				);
				overwriteClass(
					obj,
					list
				);
			}
			return result;
		}

               /**
                * @public `Utils.classes.remove`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) a
                * boolean asserting if the specified token is
                * contained by a specific element node-like object's
                * token list and removes it from the token list;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param token String
                * A string containing a token to use.
                *
                * @see `forkRemoveClass`.
                * @see `removeSingleClass`.
                * @see `DOMTokenList::remove`.
                */

		removeClass = (function () {
			var result = null;
			if (canUseClassList) {
				result = forkRemoveClass;
			} else if (!canUseClassList &&
				isElement(body)) {
				result = removeSingleClass;
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method that wraps `removeClass`;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param token String
                * A string containing a token to use.
                *
                * @see `removeClass`.
                */

		function wrapRemoveClass(
			obj,
			token
		)
		{
			var result = null;
			if (removeClass) {
				result = removeClass(
					obj,
					token
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that iterates over the specified list
                * of tokens and removes them from a specific element
                * node-like object's token list.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param tokens Array
                * An array-like object containing the tokens to
                * remove.
                */

		function removeClassesFromList(
			obj,
			tokens
		)
		{
			var max = tokens.length,
				aux = max,
				diff,
				result;
			for (aux; aux > -1; aux -= 1) {
				diff = max - aux;
				wrapRemoveClass(
					obj,
					tokens[diff]
				);
			}
			return result;
		}

               /**
                * @public `Utils.classes.removeList`.
                *
                * @description
                * Method that removes an array-like object of tokens
                * from a specified token list.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param tokens Array
                * An array-like object containing the tokens to
                * remove.
                */

		function removeClasses(
			obj,
			tokens
		)
		{
			var result;
			if (isElement(obj)) {
				if (isArrayLike(tokens)) {
					removeClassesFromList(
						obj,
						tokens
					);
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
                * Wrapper method that returns (via a closure)
                * the result of `forkMethod` or `null`
                * if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param token String
                * A string containing a token to use.
                *
                * @see `forkMethod`.
                */

		forkToggleClass = (function () {
			var key = "toggle",
				result = null;
			if (body && canUseClassList &&
				isHostObject(body.classList[key])) {
				result = forkMethod(
					key,
					"false"
				);
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that toggles a single token from a token
                * list and applies the list to the specified
                * node-like object's `className` property.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param token String
                * A string containing the token to toggle.
                */

		function toggleSingleClass(
			obj,
			token
		)
		{
			var has = wrapHasClass(obj, token),
				result = false;
			if (!has) {
				wrapAddClass(
					obj,
					token
				);
				result = true;
			} else if (has) {
				wrapRemoveClass(
					obj,
					token
				);
			}
			return result;
		}

               /**
                * @public `Utils.classes.toggle`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) a
                * boolean asserting if the specified token can
                * be removed from a specific element node-like
                * object's token list and removes or adds it to
                * the token list; returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param token String
                * A string containing a token to use.
                *
                * @see `forkToggleClass`.
                * @see `toggleSingleClass`.
                * @see `DOMTokenList::toggle`.
                */

		toggleClass = (function () {
			var result = null;
			if (doc) {
				if (canUseClassList) {
					result = forkToggleClass;
				} else if (!canUseClassList &&
					isElement(body)) {
					result = toggleSingleClass;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method that wraps `toggleClass`;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param token String
                * A string containing a token to use.
                *
                * @see `toggleClass`.
                */

		function wrapToggleClass(
			obj,
			token
		)
		{
			var result = null;
			if (toggleClass) {
				result = toggleClass(
					obj,
					token
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that iterates over the specified list
                * of tokens and toggles them on a specific element
                * node-like object's token list.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param tokens Array
                * An array-like object containing the tokens to
                * toggle.
                */

		function toggleClassesInList(
			obj,
			tokens
		)
		{
			var index = 0,
				max = tokens.length,
				result;
			for (index; index < max; index += 1) {
				wrapToggleClass(
					obj,
					tokens[index]
				);
			}
			return result;
		}

               /**
                * @public `Utils.classes.toggleList`.
                *
                * @description
                * Method that toggles an array-like object of tokens
                * on a specified token list.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param tokens Array
                * An array-like object containing the tokens to
                * toggle.
                */

		function toggleClasses(
			obj,
			tokens
		)
		{
			var result;
			if (isElement(obj)) {
				if (isArrayLike(tokens)) {
					toggleClassesInList(
						obj,
						tokens
					);
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
                * Wrapper method that returns (via a closure)
                * the result of `forkMethod` or `null`
                * if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @param index Number
                * A number to be the index retrieved.
                *
                * @see `forkMethod`.
                */

		forkGetClass = (function () {
			var result = null;
			if (body && canUseClassList &&
				isHostObject(body.classList.item)) {
				result = forkMethod(
					"item",
					null
				);
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns the token at the specified
                * index in a specific node-like object's token list;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param index Number
                * A number to be the index retrieved.
                *
                * @see `DOMTokenList::item`.
                */

		function getToken(
			obj,
			index
		)
		{
			var tokens,
				result = null;
			if (isElement(obj)) {
				tokens = buildClassList(
					obj
				);
				if (index >= 0 && 
					index < tokens.length) {
					result = tokens[index];
				}
			}
			return result;
		}

               /**
                * @public `Utils.classes.item`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) the
                * the token at the specified in a specific
                * node-like object's token list; returns `null` if
                * not applicable.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                *
                * @param index Number
                * A number to be the index retrieved.
                *
                * @see `DOMTokenList::item`.
                */

		getClass = (function () {
			var result = null;
			if (doc) {
				if (canUseClassList) {
					result = forkGetClass;
				} else if (!canUseClassList &&
					isElement(body)) {
					result = getToken;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns an array produced from an
                * iterable object.
                *
                * @param obj Object
                * An object to iterate.
                */

		function makeArray(
			obj
		)
		{
			var max,
				aux,
				diff,
				result = [];
			if (isArrayLike(obj)) {
				result.length = obj.length;
				max = obj.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					result[diff] = obj[diff];
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a node-like object's token
                * list converted to an array-like object.
                *
                * @param obj Object
                * An element node-like object used as a source of
                * a token list.
                */

		function wrapClassList(
			obj
		)
		{
			var result = null;
			if (isElement(obj)) {
				result = makeArray(
					obj.classList
				);
			}
			return result;
		}

               /**
                * @public `Utils.classes.get`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) a
                * an array-like object containing a node-like
                * token list returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to access.
                *
                * @see `wrapClassList`.
                * @see `buildClassList`.
                */

		getClasses = (function () {
			var result = null;
			if (body) {
				if (canUseClassList) {
					result = wrapClassList;
				} else if (!canUseClassList &&
					isElement(body)) {
					result = buildClassList;
				}
			}
			return result;
		}());

		doc = null;
		body = null;

		Utils.classes = Utils.classes || {
			"contains": hasClass,
			"containsList": hasClasses,

			"add": addClass,
			"addList": addClasses,

			"remove": removeClass,
			"removeList": removeClasses,

			"toggle": toggleClass,
			"toggleList": toggleClasses,

			"item": getClass,
			"get": getClasses
		};
	}());
}

