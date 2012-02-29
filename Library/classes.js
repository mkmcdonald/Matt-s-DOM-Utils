if (Utils) {
	(function () {
		var INVALID_CHARACTER =
			"Class name passed contains an " +
			"invalid character; whitespace is " +
			"not permitted";

		function generateInvalidChars()
		{
			/*
                                Private method that returns
                                an object containing characters
                                deemed invalid for use inside of
                                a single "class".
			*/
			return {
				" ": true,
				"\t": true,
				"\n": true,
				"\f": true,
				"\r": true
			};
		}

		function checkClass(name)
		{
			/*
                                Private method that returns a boolean
                                asserting if the string passed
                                contains any invalid characters
                                (i.e. whitespace); throws an error
                                if invalid characters are detected.
			*/
			var str = String(name);
				index = 0,
				max = str.length,
				invalidChars =
					generateInvalidChars(),
				char,
				invalidChar;
			while (index < max) {
				char = str.charAt(index),
				invalidChar = invalidChars[char];
				if (typeof invalidChar !==
					"undefined") {
					throw new Error(
						INVALID_CHARACTER	
					);
					/* false condition */
				}
				index += 1;
			}
			return true;
		}

		function addToken(token, list)
		{
			token = String(token);
			if (token !== "") {
				list.push(token);
				return true;
			}
			return false;
		}

		function buildTokenList(str)
		{
			/*
                                Private method that builds a token
                                list from a (space-separated)
                                string.
                                See: HTML (5) Spec 2.5.7.
			*/
			var index = 0,
				max = str.length + 1,
				tokens = [],
				sequence = "",
				char,
				isWhitespace;
			str = String(str);
			while (index < max) {
				char = str.charAt(index);
				isWhitespace = /\s/.test(char);
				if (char === "" || isWhitespace) {
					addToken(sequence, tokens);
					sequence = "";
				} else if (!isWhitespace) {
					sequence += char;
				}
				index += 1;
			}
			return tokens;
		}

		function buildClassList(el)
		{
			/*
                                Private method that checks
                                if the node passed is an element.
                                The token list is returned, or
                                null if not applicable.
			*/
			var isElement =
				Utils.nodes.isElementNode(el),
				list = null,
				input;
			if (isElement) {
				input = el.className;
				list = buildTokenList(
					input
				);
			}
			return list;
		}

		function hasClass(
			name,
			el
		)
		{
			/*
                                Public method that returns a boolean
                                asserting if the class passed is
                                in the token list generated.
			*/
			var str = String(name);
				validClass = checkClass(str),
				list = buildClassList(el),
				index = 0,
				max;
			if (validClass && list) {
				max = list.length
				while (index < max) {
					if (list[index] === str) {
						return true;
					}
					index += 1;
				}
			}
			return false;
		}

		function addClass(
			name,
			el
		)
		{
			/*
                                Public method that attempts to add
                                the specified class to the node's
                                token list; returns a boolean
                                asserting if the addition was
                                successful.
			*/
			var isElement =
				Utils.nodes.isElementNode(
					el
				),
				str = String(name);
				validClass = checkClass(str),
				has,
				list;
			if (isElement && validClass) {
				has = hasClass(str, el);
				list = buildClassList(el);
				if (!has) {
					list.push(str);
					el.className =
						list.join(" ");
					return true;
				}
			}
			return false;
		}

		function attemptClassRemoval(
			name,
			list
		)
		{
			/*
                                Private helper method for
                                removeClass. See removeClass
                                for details.
			*/
			var str = String(name);
				validClass = checkClass(str),
				index = list.length,
				success = false;
			if (validClass) {
				while (index >= 0) {
					index -= 1;
					if (list[index] === str) {
						list.splice(index, 1);
						success = true;
					}
				}
			}
			return success;
		}

		function removeClass(
			name,
			el
		)
		{
			/*
                                Public method that attempts to
                                remove the specified class from the
                                node's token list; returns a boolean
                                asserting if the removal was
                                successful.
			*/
			var isElement =
				Utils.nodes.isElementNode(
					el
				),
				str = String(name);
				has,
				list,
				removed = false;
			if (isElement) {
				has = hasClass(str, el);
				if (!has) {
					return false;
				}
				list = buildClassList(el);
				removed = attemptClassRemoval(
					str,
					list
				);
				el.className = list.join(" ");
			}
			return removed;
		}

		Utils.classes = Utils.classes || {
			"add": addClass,
			"has": hasClass,
			"remove": removeClass
		};
	}());
}
