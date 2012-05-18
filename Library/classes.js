if (Utils) {
	(function () {

		/*
                        Utils.classes

                        Description:

                        DOM Level 4-style `classList`
                        implementation with additional
                        features. See the DOM 4 spec section 5.7
                        (Element, classList) and 9.2
                        (DOMTokenList) for more.

                        Dependencies:

                        * Utils.raise;
                        * Utils.is;
                        * Utils.can;
		*/

		/*
                        Private object containing invalid
                        characters for a class "token"; presence
                        of any will throw
                        `Utils.raise.types.INVALID_CHARACTER_ERROR`.
		*/

		var INVALID_CHARS = {
			" ": true,
			"\t": true,
			"\n": true,
			"\f": true,
			"\r": true
		};

		function canGetClassName(
			obj
		)
		{
			/*
                                Public method that returns a
                                boolean asserting if a node-like
                                object can "use" the `className`
                                property.
			*/
			var isElement = Utils.is.element(obj),
				result = false;
			if (isElement) {
				result = Utils.is.type(
					obj.className,
					"string"
				);
			}
			return result;
		}

		function canUseClassList(
			obj
		)
		{
			/*
                                Public method that returns a
                                boolean asserting if a node-like
                                object can "use" the `classList`
                                object.
			*/
			var isElement = Utils.is.element(obj),
				result = false;
			if (isElement) {
				result = Utils.is.hostObject(
					obj.classList
				);
			}
			return result;
		}

		function forkHasClass(
			token,
			obj
		)
		{
			/*
                                Private helper method that forks
                                to the `contains` method of a
                                node-like object's `classList`
                                object.
			*/
			var key = "contains",
				canUseHas = Utils.is.hostObject(
					obj.classList[key]
				),
				result = false;
			token = String(token);
			if (canUseHas) {
				result = obj.classList[key](
					token
				);
			}
			return result;
		}

		function checkCharacter(
			chr
		)
		{
			/*
                                Private helper method that returns
                                a boolean asserting if the character
                                passed is "valid" for use within a
                                class "token"; throws an error if
                                the character is a key of
                                `INVALID_CHARS` or if it is an empty
                                string
			*/
			var invalidChar,
				isGood,
				result = false;
			chr = String(chr);
			invalidChar = INVALID_CHARS[chr];
			isGood = Utils.is.type(
				invalidChar,
				"undefined"
			);
			if (!isGood) {
				Utils.raise.invalidCharacter(
				);
			} else if (chr === "") {
				Utils.raise.syntax();
			} else if (isGood) {
				result = true;
			}
			return result;
		}

		function checkToken(
			token
		)
		{
			/*
                                Private method that returns a boolean
                                asserting if the token passed
                                contains any invalid characters
                                (i.e. whitespace); throws an error
                                if invalid characters are detected.
			*/
			var index = 0,
				max,
				chr,
				result = true;
			token = String(token);
			max = token.length;
			while (index < max) {
				chr = token.charAt(index);
				result = checkCharacter(chr);
				index += 1;
			}
			return result;
		}

		function pushToken(
			token,
			list
		)
		{
			/*
                                Private helper method that pushes
                                a token onto a token list; returns
                                a boolean asserting if the push
                                was successful.
			*/
			var result = true;
			token = String(token);
			list.push(token);
			return result;
		}

		function handleCharacter(
			chr,
			sequence,
			tokens
		)
		{
			/*
                                Private helper method returning
                                a modified character sequence
                                depending on the validity of the
                                character passed; ignores spaces.
			*/
			var validChar = false,
				result = "";
			if (chr && chr !== " ") {
				validChar = checkCharacter(chr);
			}
			if (!validChar && sequence.length) {
				pushToken(sequence, tokens);
			} else if (validChar) {
				result = sequence + chr;
			}
			return result;
		}

		function buildTokenList(
			chars
		)
		{
			/*
                                Private method that builds a token
                                list from a (space-separated)
                                string. See the DOM Level 4 Spec 2.3.2
                                (Space-separated tokens).
			*/
			var index = 0,
				max,
				sequence = "",
				chr,
				result = [];
			chars = String(chars);
			max = chars.length + 1;
			while (index < max) {
				chr = chars.charAt(index);
				sequence = handleCharacter(
					chr,
					sequence,
					result
				);
				index += 1;
			}
			return result;
		}

		function buildClassList(
			obj
		)
		{
			/*
                                Private method that returns the
                                token list of a node-like object;
                                returns `null` if not applicable.
			*/
			var canGet = canGetClassName(obj),
				input,
				result = [];
			if (canGet) {
				input = obj.className;
				result = buildTokenList(
					input
				);
			}
			return result;
		}

		function findToken(
			find,
			list
		)
		{
			/*
                                Private helper method returning
                                a boolean asserting if a token
                                can be found in a token list.
			*/
			var index = 0,
				max,
				token,
				result = false;
			find = String(find);
			max = list.length;
			while (index < max) {
				token = list[index];
				if (find === token) {
					result = true;
					break;
				}
				index += 1;
			}
			return result;
		}

		function attemptTokenSearch(
			token,
			list
		)
		{
			/*
                                Private helper method that returns
                                a boolean asserting if `token` is
                                "valid" and is present in the token
                                list.
			*/
			var validToken,
				result = false;
			token = String(token);
			validToken = checkToken(token);
			if (validToken) {
				result = findToken(
					token,
					list
				);
			}
			return result;
		}

		function hasSingleClass(
			token,
			obj
		)
		{
			/*
                                Private fork of `forkHas` that
                                asserts if the specified class is
                                contained by a node-like object's
                                token list.
			*/
			var list = buildClassList(obj);
			return attemptTokenSearch(
				token,
				list
			);
		}


                /*        PUBLIC METHOD        */


		function hasClass(
			token,
			obj
		)
		{
			/*
                                Public method that asserts if the
                                specified class(es) are contained by
                                a node-like object's token list;
                                forks to `hasSingleClass` if
                                `classList` is unavailable.
			*/
			var canUseList = canUseClassList(obj),
				isElement = Utils.is.element(obj),
				result = false;
			if (canUseList) {
				result = forkHasClass(
					token,
					obj
				);
			} else if (!canUseList && isElement) {
				result = hasSingleClass(
					token,
					obj
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function searchClassesInList(
			tokens,
			obj
		)
		{
			/*
                                Private helper method that iterates
                                over a list of tokens and detects
                                their presence in token list.
			*/
			var index = 0,
				max = tokens.length,
				result = false;
			while (index < max) {
				result = hasClass(
					tokens[index],
					obj
				);
				if (!result) {
					break;
				}
				index += 1;
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function hasClasses(
			tokens,
			obj
		)
		{
			/*
                                Public method that returns a boolean
                                asserting if an array-like object of
                                tokens is contained by a token list
                                (independent of order).
			*/
			var isElement = Utils.is.element(obj),
				isArrayLike = Utils.is.arrayLike(
					tokens
				),
				result = false;
			if (isElement) {
				if (isArrayLike) {
					result = searchClassesInList(
						tokens,
						obj
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */ 

		function forkAddClass(
			token,
			obj
		)
		{
			/*
                                Private helper method that forks
                                to the `add` method of a node-like
                                object's `classList` object.
			*/
			var canUseAdd = Utils.is.hostObject(
					obj.classList.add
				),
				result = false;
			token = String(token);
			if (canUseAdd) {
				result = obj.classList.add(
					token
				);
			}
			return result;
		}

		function attemptClassAddition(
			add,
			obj,
			list
		)
		{
			/*
                                Private helper method that returns
                                a boolean asserting if a token list
                                already contains the token passed and
                                can be added to a token list.
			*/
			var has = hasClass(add, obj),
				result = false;
			if (!has) {
				list.push(add);
				result = true;
			}
			return result;
		}

		function classAdditionCheck(
			token,
			obj,
			list
		)
		{
			/*
                                Private helper method returning a
                                boolean asserting if a token is
                                valid and can be added to a
                                token list.
			*/
			var validToken,
				result = false;
			token = String(token);
			validToken = checkToken(token);
			if (validToken) {
				result = attemptClassAddition(
					token,
					obj,
					list
				);
			}
			return result;
		}

		function overwriteClass(
			obj,
			list
		)
		{
			/*
                                Private helper method that
                                assigns the given token list
                                to a node-like object's `className`
                                property as a string.
			*/
			var canGet = canGetClassName(obj),
				result;
			if (canGet) {
				obj.className = list.join(" ");
			}
			return result;
		}

		function addSingleClass(
			token,
			obj
		)
		{
			/*
                                Private method forked from
                                `addClass`; adds single token to
                                a token list and applies the list
                                to the a node-like object's
                                `className` property.
			*/
			var list = buildClassList(obj),
				result;
			token = String(token);
			classAdditionCheck(
				token,
				obj,
				list
			);
			overwriteClass(obj, list);
			return result;
		}


                /*        PUBLIC METHOD        */


		function addClass(
			token,
			obj
		)
		{
			/*
                                Public method that attempts to add
                                the specified class(es) a node-like
                                object's token list; forks to
                                `addSingleClass` if `classList`
                                is unavailable.
			*/
			var canUseList = canUseClassList(obj),
				isElement = Utils.is.element(obj),
				result = false;
			if (canUseList) {
				result = forkAddClass(
					token,
					obj
				);
			} else if (!canUseList && isElement) {
				result = addSingleClass(
					token,
					obj
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function addClassesToList(
			tokens,
			obj
		)
		{
			/*
                                Private helper method that iterates
                                over a list of tokens and attempts
                                to add them to a token list.
			*/
			var index = 0,
				max = tokens.length,
				result;
			while (index < max) {
				addClass(
					tokens[index],
					obj
				);
				index += 1;
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function addClasses(
			tokens,
			obj
		)
		{
			/*
                                Public method that adds an
                                array-like object of tokens to a
                                token list and applies the list to
                                a node-like object's `className`
                                property.
			*/
			var isElement = Utils.is.element(obj),
				isArrayLike = Utils.is.arrayLike(
					tokens
				),
				result;
			if (isElement) {
				if (isArrayLike) {
					addClassesToList(
						tokens,
						obj
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function forkRemoveClass(
			token,
			obj
		)
		{
			/*
                                Private helper method that forks
                                to the `remove` method of a
                                node-like object's `classList`
                                object.
			*/
			var key = "remove",
				canUseRemove = Utils.is.hostObject(
					obj.classList[key]
				),
				result = false;
			token = String(token);
			if (canUseRemove) {
				result = obj.classList[key](
					token
				);
			}
			return result;
		}

		function removeToken(
			remove,
			list
		)
		{
			/*
                                Private helper method that returns
                                a boolean asserting if a token list
                                already contains the token passed and
                                can be removed from a token list.
			*/
			var index = list.length - 1,
				token,
				result = false;
			while (index > -1) {
				token = list[index];
				if (token === remove) {
					list.splice(index, 1);
				}
				index -= 1;
			}
			return result;
		}

		function attemptClassRemoval(
			remove,
			obj,
			list
		)
		{
			/*
                                Private helper method that returns
                                a boolean asserting if a token list
                                already contains the token passed
                                and can be removed from a token list
                                (via `removeToken`).
			*/
			var has = hasClass(remove, obj),
				result = false;
			if (has) {
				result = removeToken(
					remove,
					list
				);
			}
			return result;
		}

		function classRemovalCheck(
			token,
			obj,
			list
		)
		{
			/*
                                Private helper method returning a
                                boolean asserting if a token is
                                valid and can be removed from a
                                token list.
			*/
			var validToken,
				result = false;
			token = String(token);
			validToken = checkToken(token);
			if (validToken) {
				result = attemptClassRemoval(
					token,
					obj,
					list
				);
			}
			return result;
		}

		function removeSingleClass(
			token,
			obj
		)
		{
			/*
                                Private method forked from
                                `removeClass`; removes single token
                                from a token list and applies the list
                                to a node-like object's `className`
                                property.
			*/
			var list = buildClassList(obj),
				validToken,
				result;
			token = String(token);
			validToken = checkToken(token);
			if (validToken) {
				classRemovalCheck(
					token,
					obj,
					list
				);
				overwriteClass(obj, list);
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function removeClass(
			token,
			obj
		)
		{
			/*
                                Public method that attempts to add
                                the specified class(es) to a
                                node-like object's token list; forks
                                to `addSingleClass` if `classList` is
                                unavailable.
			*/
			var canUseList = canUseClassList(obj),
				isElement = Utils.is.element(obj),
				result = false;
			if (canUseList) {
				result = forkRemoveClass(
					token,
					obj
				);
			} else if (!canUseList && isElement) {
				result = removeSingleClass(
					token,
					obj
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function removeClassesFromList(
			tokens,
			obj
		)
		{
			/*
                                Private helper method that iterates
                                over a list of tokens and attempts
                                to remove them from a token list.
			*/
			var index = tokens.length - 1,
				result;
			while (index > -1) {
				removeClass(
					tokens[index],
					obj
				);
				index -= 1;
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function removeClasses(
			tokens,
			obj
		)
		{
			/*
                                Public method that removes an
                                array-like object of tokens from
                                a token list and applies the list
                                to a node-like object's `className`
                                property.
			*/
			var isElement = Utils.is.element(obj),
				isArrayLike = Utils.is.arrayLike(
					tokens
				),
				result;
			if (isElement) {
				if (isArrayLike) {
					removeClassesFromList(
						tokens,
						obj
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function forkToggleClass(
			token,
			obj
		)
		{
			/*
                                Private helper method that forks
                                to the `toggle` method of a
                                node-like object's `classList`
                                object.
			*/
			var key = "toggle",
				canUseToggle = Utils.is.hostObject(
					obj.classList[key]
				),
				result = false;
			token = String(token);
			if (canUseToggle) {
				result = obj.classList[key](
					token
				);
			}
			return result;
		}

		function toggleSingleClass(
			token,
			obj
		)
		{
			/*
                                Private helper method that "toggles"
                                the presence of a single token in a
                                token list; returns a boolean
                                asserting the token's presence in
                                the token list;
			*/
			var has = hasClass(token, obj),
				result = false;
			if (!has) {
				addClass(
					token,
					obj
				);
				result = true;
			} else if (has) {
				removeClass(
					token,
					obj
				);
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function toggleClass(
			token,
			obj
		)
		{
			/*
                                Public method that attempts to
                                toggle the specified token on a
                                node-like object's token list;
                                returns a boolean asserting if the
                                token was added.
			*/
			var canUseList = canUseClassList(obj),
				isElement = Utils.is.element(obj),
				result = false;
			if (canUseList) {
				result = forkToggleClass(
					token,
					obj
				);
			} else if (!canUseList && isElement) {
				result = toggleSingleClass(
					token,
					obj
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function toggleClassesInList(
			tokens,
			obj
		)
		{
			/*
                                Private helper method that iterates
                                over a list of tokens and "toggles"
                                their presence in a token list.
			*/
			var index = 0,
				max = tokens.length,
				result;
			while (index < max) {
				toggleClass(
					tokens[index],
					obj
				);
				index += 1;
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function toggleClasses(
			tokens,
			obj
		)
		{
			/*
                                Public method that detects the
                                presence of tokens in a node-like
                                object's token list.
			*/
			var isElement = Utils.is.element(obj),
				isArrayLike = Utils.is.arrayLike(
					tokens
				),
				result;
			if (isElement) {
				if (isArrayLike) {
					toggleClassesInList(
						tokens,
						obj
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getClass(
			index,
			obj
		)
		{
			/*
                                Public method that returns the
                                token at `index` in a node-like
                                object's token list; returns `null`
                                if not applicable.
			*/
			var isElement =
				Utils.is.element(obj),
				tokens,
				result = null;
			index = Number(index);
			if (isElement) {
				tokens = buildClassList(obj);
				if (index >= 0 && 
					index < tokens.length) {
					result = tokens[index];
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getClasses(
			obj
		)
		{
			/*
                                Public method that returns a
                                node-like object's token list (via
                                `buildClassList`).
			*/
			var canUseList = canUseClassList(obj),
				isElement = Utils.is.element(obj),
				result = null;
			if (canUseList) {
				result = obj.classList;
			} else if (!canUseList && isElement) {
				result = buildClassList(obj);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


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

