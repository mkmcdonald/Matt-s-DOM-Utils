if (Utils) {
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
                * * Utils.raise
                * * Utils.is
                * * Utils.helpers
                */

		var invalidChars,
			isDocument = Utils.is.document,
			isElement = Utils.is.element,
			isHostObject = Utils.is.hostObject,
			raiseInvalid = Utils.raise.invalidCharacter,
			raiseSyntax = Utils.raise.syntax,
			isArrayLike = Utils.is.arrayLike,
			makeArray = Utils.helpers.makeArray,

			doc,
			body,

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
                * Variable containing the current body
                * node-like object or `null`.
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
                * Helper method that returns a boolean asserting if
                * the character passed is "valid" for use within a
                * class "token"; throws an error if the character is
                * a key of `invalidChars` or if it is an empty string.
                *
                * @param chr String
                * A string containing the character to assert.
                *
                * @throws `Utils.raise.types.invalidCharacter`;
                */

		function checkCharacter(
			chr
		)
		{
			var invalidChar = invalidChars[chr],
				result = false;
			if (typeof invalidChar !== "undefined") {
				raiseInvalid();
			} else if (chr === "") {
				raiseSyntax();
			} else if (typeof invalidChar ===
				"undefined") {
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
				validChar = checkCharacter(chr);
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
			if (hasClass) {
				while (index < max && result) {
					result = hasClass(
						obj,
						tokens[index]
					);
					index += 1;
				}
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
			if (hasClass) {
				if (!hasClass(obj, add)) {
					list[list.length] = add;
					result = true;
				}
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
				obj.className = list.join(" ");
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
				list = buildClassList(obj);
				classAdditionCheck(
					obj,
					token,
					list
				);
				overwriteClass(obj, list);
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
			if (addClass) {
				for (index; index < max; index += 1) {
					addClass(
						obj,
						tokens[index]
					);
				}
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
			if (hasClass) {
				if (hasClass(obj, remove)) {
					result = removeToken(
						remove,
						list
					);
				}
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
				list = buildClassList(obj);
				classRemovalCheck(
					obj,
					token,
					list
				);
				overwriteClass(obj, list);
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
			if (removeClass) {
				for (aux; aux > -1; aux -= 1) {
					diff = max - aux;
					removeClass(
						obj,
						tokens[diff]
					);
				}
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
			var has,
				result = false;
			if (isElement(obj) && hasClass) {
				has = hasClass(obj, token);
				if (!has && addClass) {
					addClass(
						obj,
						token
					);
					result = true;
				} else if (has && removeClass) {
					removeClass(
						obj,
						token
					);
				}
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
			if (toggleClass) {
				for (index; index < max; index += 1) {
					toggleClass(
						obj,
						tokens[index]
					);
				}
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
                * @public `Utils.classes.item`.
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
                * A number to be the index retrieve.
                */

		function getClass(
			obj,
			index
		)
		{
			var tokens,
				result = null;
			if (isElement(obj)) {
				tokens = buildClassList(obj);
				if (index >= 0 && 
					index < tokens.length) {
					result = tokens[index];
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

