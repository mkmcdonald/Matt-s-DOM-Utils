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

                        * Utils.is;
                        * Utils.can;
                        * Utils.node;
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

		function canUseClassList(node)
		{
			/*
                                Private wrapper for
                                `Utils.can.useClassList`.
			*/
			return Utils.can.useClassList(
				node
			);
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
				result = false;
			chr = String(chr);
			invalidChar = INVALID_CHARS[chr];
			if (typeof invalidChar !== "undefined") {
				Utils.raise.invalidCharacter(
				);
			} else if (chr === "") {
				Utils.raise.syntax();
			} else if (typeof invalidChar ===
				"undefined") {
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

		function buildClassList(node)
		{
			/*
                                Private method that checks
                                if the node passed is an element.
                                The token list is returned, or
                                null if not applicable.
			*/
			var isElement =
				Utils.is.element(node),
				input,
				result = [];
			if (isElement && typeof node.className ===
				"string") {
				input = node.className;
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
			node
		)
		{
			/*
                                Private fork of `forkHas` that asserts
                                if the specified class is contained by
                                `node`'s "class list".
			*/
			var list = buildClassList(node);
			return attemptTokenSearch(
				token,
				list
			);
		}

		function searchClassesInList(
			tokens,
			node
		)
		{
			/*
                                Private helper method that iterates
                                over a list of tokens and detects
                                their presence in token list.
			*/
			var list = buildClassList(node),
				index = 0,
				max = tokens.length,
				result = false;
			while (index < max) {
				result = attemptTokenSearch(
					tokens[index],
					list
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
			node
		)
		{
			/*
                                Public method that returns a boolean
                                asserting if an array of tokens is
                                contained by a token list
                                (independent of order).
			*/
			var isElement = Utils.is.element(node),
				result = false;
			if (isElement) {
				if (typeof tokens === "object" &&
					tokens.length) {
					result = searchClassesInList(
						tokens,
						node
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function hasClass(
			token,
			node
		)
		{
			/*
                                Public method that asserts if the
                                specified class(es) are contained by
                                `node`'s "class list"; forks to
                                `hasSingleClass` if `classList` is
                                unavailable.
			*/
			var canUseList = canUseClassList(node),
				canUseHas,
				key = "contains",
				isElement = Utils.is.element(node),
				result = false;
			if (canUseList) {
				canUseHas = Utils.is.hostObject(
					node.classList[key]
				);
				if (canUseHas) {
					result = node.classList[key](
						token
					);
				}
			} else if (!canUseList && isElement) {
				result = hasSingleClass(
					token,
					node
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function attemptClassAddition(
			add,
			node,
			list
		)
		{
			/*
                                Private helper method that returns
                                a boolean asserting if a token list
                                already contains the token passed and
                                can be added to a token list.
			*/
			var has = hasClass(add, node),
				result = false;
			if (!has) {
				list.push(add);
				result = true;
			}
			return result;
		}

		function overwriteClass(
			node,
			list
		)
		{
			/*
                                Private helper method that
                                assigns the given token list
                                to `node`'s `className` property
                                as a string.
			*/
			var isElement =
				Utils.is.element(node),
				result;
			if (isElement && typeof node.className ===
				"string") {
				node.className = list.join(" ");
			}
			return result;
		}

		function classAdditionCheck(
			token,
			node,
			list
		)
		{
			/*
                                Private helper method returning a
                                boolean asserting if a token is
                                valid and can be added to a token
                                list.
			*/
			var validToken,
				result = false;
			token = String(token);
			validToken = checkToken(token);
			if (validToken) {
				result = attemptClassAddition(
					token,
					node,
					list
				);
			}
			return result;
		}

		function addClassesToList(
			tokens,
			node
		)
		{
			/*
                                Private helper method that iterates
                                over a list of tokens and attempts
                                to add them to a token list.
			*/
			var list = buildClassList(node),
				index = 0,
				max = tokens.length,
				result;
			while (index < max) {
				classAdditionCheck(
					tokens[index],
					node,
					list
				);
				index += 1;
			}
			overwriteClass(node, list);
			return result;
		}


                /*        PUBLIC METHOD        */


		function addClasses(
			tokens,
			node
		)
		{
			/*
                                Public method that adds an array of
                                tokens to a token list and applies
                                the list to the node's `className`.
			*/
			var isElement = Utils.is.element(node),
				result;
			if (isElement) {
				if (typeof tokens === "object" &&
					tokens.length) {
					addClassesToList(
						tokens,
						node
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function addSingleClass(
			token,
			node
		)
		{
			/*
                                Private method forked from
                                `addClass`; adds single token to
                                a token list and applies the list
                                to the node's `className`.
			*/
			var list = buildClassList(node),
				result;
			token = String(token);
			attemptClassAddition(
				token,
				node,
				list
			);
			overwriteClass(node, list);
			return result;
		}


                /*        PUBLIC METHOD        */


		function addClass(
			token,
			node
		)
		{
			/*
                                Public method that attempts to add
                                the specified class(es) to the node's
                                "class list"; forks to `addSingleClass`
                                if `classList` is unavailable.
			*/
			var canUseList = canUseClassList(node),
				canUseAdd,
				isElement = Utils.is.element(node),
				result = false;
			if (canUseList) {
				canUseAdd = Utils.is.hostObject(
					node.classList.add
				);
				if (canUseAdd) {
					result = node.classList.add(
						token
					);
				}
			} else if (!canUseList && isElement) {
				result = addSingleClass(
					token,
					node
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


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
			node,
			list
		)
		{
			/*
                                Private helper method that returns
                                a boolean asserting if a token list
                                already contains the token passed and
                                can be removed from a token list
                                (via `removeToken`).
			*/
			var has = hasClass(remove, node),
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
			node,
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
					node,
					list
				);
			}
			return result;
		}

		function removeClassesFromList(
			tokens,
			node
		)
		{
			/*
                                Private helper method that iterates
                                over a list of tokens and attempts
                                to remove them from a token list.
			*/
			var list = buildClassList(node),
				index = tokens.length - 1,
				result;
			while (index > -1) {
				classRemovalCheck(
					tokens[index],
					node,
					list
				);
				index -= 1;
			}
			overwriteClass(node, list);
			return result;
		}


                /*        PUBLIC METHOD        */


		function removeClasses(
			tokens,
			node
		)
		{
			/*
                                Public method that removes an array
                                of tokens from a token list and
                                applies the list to the node's
                                `className`.
			*/
			var isElement = Utils.is.element(node),
				result;
			if (isElement) {
				if (typeof tokens === "object" &&
					tokens.length) {
					removeClassesFromList(
						tokens,
						node
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function removeSingleClass(
			token,
			node
		)
		{
			/*
                                Private method forked from
                                `removeClass`; removes single token
                                from a token list and applies the list
                                to the node's `className`.
			*/
			var list = buildClassList(node),
				validToken,
				result;
			token = String(token);
			validToken = checkToken(token);
			if (validToken) {
				attemptClassRemoval(
					token,
					node,
					list
				);
				overwriteClass(node, list);
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function removeClass(
			token,
			node
		)
		{
			/*
                                Public method that attempts to add
                                the specified class(es) to the node's
                                "class list"; forks to `addSingleClass`
                                if `classList` is unavailable.
			*/
			var canUseList = canUseClassList(node),
				key = "remove",
				canUseRemove,
				isElement = Utils.is.element(node),
				result = false;
			if (canUseList) {
				canUseRemove = Utils.is.hostObject(
					node.classList[key]
				);
				if (canUseRemove) {
					result = node.classList[key](
						token
					);
				}
			} else if (!canUseList && isElement) {
				result = removeSingleClass(
					token,
					node
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function toggleSingleClass(
			token,
			node
		)
		{
			/*
                                Private helper method that "toggles"
                                the presence of a single token in a
                                token list; returns a boolean
                                asserting the token's presence in
                                the token list;
			*/
			var has = hasClass(token, node),
				result = false;
			if (!has) {
				addClass(
					token,
					node
				);
				result = true;
			} else if (has) {
				removeClass(
					token,
					node
				);
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function toggleClass(
			token,
			node
		)
		{
			/*
                                Public method that attempts to
                                toggle the specified token on the
                                node's "class list"; returns a
                                boolean asserting if the token was
                                added.
			*/
			var canUseList = canUseClassList(node),
				canUseToggle,
				key = "toggle",
				isElement = Utils.is.element(node),
				result = false;
			if (canUseList) {
				canUseToggle = Utils.is.hostObject(
					node.classList[key]
				);
				if (canUseToggle) {
					result = node.classList[key](
						token
					);
				}
			} else if (!canUseList && isElement) {
				result = toggleSingleClass(
					token,
					node
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function toggleClassesInList(
			tokens,
			node
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
				toggleSingleClass(
					tokens[index],
					node
				);
				index += 1;
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function toggleClasses(
			tokens,
			node
		)
		{
			/*
                                Public method that detects the
                                presence of tokens in `node`'s
                                token list.
			*/
			var isElement = Utils.is.element(node),
				result;
			if (isElement) {
				if (typeof tokens === "object" &&
					tokens.length) {
					toggleClassesInList(
						tokens,
						node
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getClass(
			index,
			node
		)
		{
			/*
                                Public method that returns the
                                token at `index` in the node's
                                "class list"; returns null
                                if not applicable.
			*/
			var isElement =
				Utils.is.element(node),
				tokens,
				result = null;
			index = Number(index);
			if (isElement) {
				tokens = buildClassList(node);
				if (index >= 0 && 
					index < tokens.length) {
					result = tokens[index];
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getClasses(node)
		{
			/*
                                Public method that returns a node's
                                "class list" (via `buildClassList`).
			*/
			var canUseList = canUseClassList(node),
				isElement = Utils.is.element(node),
				result = null;
			if (canUseList) {
				result = node.classList;
			} else if (!canUseList && isElement) {
				result = buildClassList(node);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		Utils.classes = Utils.classes || {
			"add": addClass,
			"addList": addClasses,

			"contains": hasClass,
			"containsList": hasClasses,

			"remove": removeClass,
			"removeList": removeClasses,

			"toggle": toggleClass,
			"toggleList": toggleClasses,

			"item": getClass,
			"get": getClasses
		};
	}());
}

