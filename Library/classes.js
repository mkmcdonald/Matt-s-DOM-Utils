if (Utils) {
	(function () {

		/*
                        Utils.classes

                        Description:

                        DOM Level 4-compliant `classList`
                        implementation with additional
                        features. See the DOM 4 spec section 5.7
                        (Element, classList) and 9.2
                        (DOMTokenList) for more.

                        Dependencies:

                        * Utils.nodes;
		*/

		/*
                        Private object containing invalid
                        characters for a class "token"; presence
                        of any will throw
                        `Utils.errors.types.INVALID_CHARACTER_ERROR`.
		*/

		var INVALID_CHARS = {
			" ": true,
			"\t": true,
			"\n": true,
			"\f": true,
			"\r": true
		};

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
				Utils.errors.throwInvalidCharacter(
				);
			} else if (chr === "") {
				Utils.errors.throwSyntax();
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
				Utils.nodes.isElementNode(node),
				input,
				result = null;
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


                /*        PUBLIC METHOD        */


		function hasClass(
			token,
			node
		)
		{
			/*
                                Public method that returns a boolean
                                asserting if the class passed is
                                in the token list generated.
			*/
			var isElement =
				Utils.nodes.isElementNode(node),
				validToken,
				list,
				tokenFound,
				result = false;
			token = String(token);
			list = buildClassList(node);
			validToken = checkToken(token);
			if (isElement && validToken) {
				tokenFound = findToken(
					token,
					list
				);
				result = tokenFound;
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
				Utils.nodes.isElementNode(node),
				result;
			if (isElement && typeof node.className ===
				"string") {
				node.className = list.join(" ");
			}
			return result;
		}

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
			var isElement =
				Utils.nodes.isElementNode(node),
				list = buildClassList(node),
				validToken,
				result;
			token = String(token);
			validToken = checkToken(token);
			if (isElement && validToken) {
				attemptClassAddition(
					token,
					node,
					list
				);
				overwriteClass(node, list);
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

		function addClasses(
			tokens,
			node
		)
		{
			/*
                                Private method forked from
                                `addClass`; adds an array of tokens
                                to a token list and applies the list
                                to the node's `className`.
			*/
			var isElement =
				Utils.nodes.isElementNode(node),
				list = buildClassList(node),
				index = 0,
				max = tokens.length,
				token,
				result;
			if (isElement) {
				while (index < max) {
					token = tokens[index];
					classAdditionCheck(
						token,
						node,
						list
					);
					index += 1;
				}
				overwriteClass(node, list);
			}
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
                                "class list"; forks to
                                `addSingleClass` if String detected;
                                forks to `addClasses` if "array"
                                detected.
			*/
			var result = false;
			if (typeof token === "string") {
				result = addSingleClass(
					token,
					node
				);
			} else if (typeof token === "object" &&
				token.length) {
				result = addClasses(
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
			var isElement =
				Utils.nodes.isElementNode(node),
				list = buildClassList(node),
				validToken,
				result;
			token = String(token);
			validToken = checkToken(token);
			if (isElement && validToken) {
				attemptClassRemoval(
					token,
					node,
					list
				);
				overwriteClass(node, list);
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

		function removeClasses(
			tokens,
			node
		)
		{
			/*
                                Private method forked from
                                `removeClass`; removes an array of
                                tokens from a token list and applies
                                the list to the node's `className`.
			*/
			var isElement =
				Utils.nodes.isElementNode(node),
				list = buildClassList(node),
				index = tokens.length - 1,
				token,
				result;
			if (isElement) {
				while (index > -1) {
					token = tokens[index];
					classRemovalCheck(
						token,
						node,
						list
					);
					index -= 1;
				}
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
                                Public method that attempts to
                                remove the specified class(es)
                                from the node's "class list";
                                forks to `removeSingleClass` if
                                String detected; forks to
                                `removeClasses` if "array" detected.
			*/
			var result = false;
			if (typeof token === "string") {
				result = removeSingleClass(
					token,
					node
				);
			} else if (typeof token === "object" &&
				token.length) {
				result = removeClasses(
					token,
					node
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


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
			var isElement =
				Utils.nodes.isElementNode(node),
				has,
				result = false;
			if (isElement) {
				has = hasClass(token, node);
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
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getToken(
			index,
			node
		)
		{
			/*
                                Public method that returns the
                                specific index in the node's
                                "class list"; returns null
                                if not applicable.
			*/
			var isElement =
				Utils.nodes.isElementNode(node),
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


		function listClasses(node)
		{
			/*
                                Public method that returns a node's
                                "class list" (via
                                `buildClassList`).
			*/
			var isElement =
				Utils.nodes.isElementNode(node),
				result = null;
			if (isElement) {
				result = buildClassList(node);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		Utils.classes = Utils.classes || {
			"add": addClass,
			"contains": hasClass,
			"remove": removeClass,
			"toggle": toggleClass,
			"item": getToken,
			"list": listClasses
		};
	}());
}

