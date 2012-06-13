if (Utils) {
	(function () {

               /**
                * @module
                * Utils.create
                *
                * @description
                * Various creation method wrappers.
                *
                * @dependencies
                * * Utils.is
                */

		var isDocument = Utils.is.document,
			isHostObject = Utils.is.hostObject,

			doc,

			createElement,
			createElementNS,
			createText,
			createProcessingInstruction,
			createComment,

			canUseDocFrag,
			canCallDocFrag,

			createDocumentFragment;

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
			if (global.document) {
				if (typeof global.document ===
					"object") {
					result = global.document;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method for `createElement`; returns the
                * wrapped method's result or `null` if not
                * applicable.
                *
                * @param doc Object
                * A document node-like object to create an element
                * node-like object in.
                *
                * @param tag String
                * A string representing the `tagName` of the created
                * element node-like object.
                *
                * @see `Document::createElement`.
                */

		function createElementNode(
			doc,
			tag
		)
		{
			var key = "createElement",
				result = null;
			if (isDocument(doc)) {
				result = doc[key](
					tag
				);
			}
			return result;
		}

               /**
                * @public `Utils.create.element`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure)
                * the result of `createElementNode` or `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to create an element
                * node-like object in.
                *
                * @param tag String
                * A string representing the `tagName` of the created
                * element node-like object.
                *
                * @see `createElementNode`.
                */

		createElement = (function () {
			var key = "createElement",
				result = null;
			if (isDocument(doc)) {
				if (isHostObject(doc[key])) {
					result = createElementNode;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method for `createElementNS`; returns the
                * wrapped method's result or `null` if not
                * applicable.
                *
                * @param doc Object
                * A document node-like object to create an element
                * node-like object in.
                *
                * @param uri String
                * A string representing the namespace URI of the
                * element node-like object to be created.
                *
                * @param name String
                * A string representing the qualified name
                * ([namespace:]local) of the element node-like object
                * to be created.
                *
                * @see `Document::createElementNS`.
                */

		function createElementNodeNS(
			doc,
			uri,
			name
		)
		{
			var key = "createElementNS",
				result = null;
			if (isDocument(doc)) {
				result = doc[key](
					uri,
					name
				);
			}
			return result;
		}

               /**
                * @public `Utils.create.elementNS`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure)
                * the result of `createElementNodeNS` or `null`
                * if not applicable.
                *
                * @param uri String
                * A string representing the namespace URI of the
                * element node-like object to be created.
                *
                * @param name String
                * A string representing the qualified name
                * ([namespace:]local) of the element node-like object
                * to be created.
                *
                * @see `createElementNodeNS`.
                */

		createElementNS = (function () {
			var key = "createElementNS",
				result = null;
			if (isDocument(doc)) {
				if (isHostObject(doc[key])) {
					result = createElementNodeNS;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method for `createTextNode`; returns the
                * wrapped method's result or `null` if not
                * applicable.
                *
                * @param doc Object
                * A document node-like object to create a text
                * node-like object in.
                *
                * @param text String
                * A string representing the `nodeValue` of the
                * text node-like object to be created.
                *
                * @see `Document::createTextNode`.
                */

		function createTextNode(
			doc,
			text
		)
		{
			var key = "createTextNode",
				result = null;
			if (isDocument(doc)) {
				result = doc[key](
					text
				);
			}
			return result;
		}

               /**
                * @public `Utils.create.text`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure)
                * the result of `createTextNode` or `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to create a text
                * node-like object in.
                *
                * @param text String
                * A string representing the `nodeValue` of the
                * text node-like object to be created.
                *
                * @see `createTextNode`.
                */

		createText = (function () {
			var key = "createTextNode",
				result = null;
			if (isDocument(doc)) {
				if (isHostObject(doc[key])) {
					result = createTextNode;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method for `createProcessingInstruction`;
                * returns the wrapped method's result or `null` if
                * not applicable.
                *
                * @param doc Object
                * A document node-like object to create a
                * processing instruction node-like object in.
                *
                * @param target String
                * A string representing the `target` of the created
                * processing instruction node-like object.
                *
                * @param text String
                * A string representing the `nodeValue` of the created
                * processing instruction node-like object.
                *
                * @see `Document::createProcessingInstruction`.
                */

		function createPINode(
			doc,
			target,
			text
		)
		{
			var key = "createProcessingInstruction",
				result = null;
			if (isDocument(doc)) {
				result = doc[key](
					target,
					text
				);
			}
			return result;
		}

               /**
                * @public `Utils.create.processingInstruction`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure)
                * the result of `createPINode` or
                * `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to create a
                * processing instruction node-like object in.
                *
                * @param target String
                * A string representing the `target` of the created
                * processing instruction node-like object.
                *
                * @param text String
                * A string representing the `nodeValue` of the created
                * processing instruction node-like object.
                *
                * @see `createPINode`.
                */

		createProcessingInstruction = (function () {
			var key = "createProcessingInstruction",
				result = null;
			if (isDocument(doc)) {
				if (isHostObject(doc[key])) {
					result = createPINode;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method for `createComment`; returns the
                * wrapped method's result or `null` if not
                * applicable.
                *
                * @param doc Object
                * A document node-like object to create a comment
                * node-like object in.
                *
                * @param text String
                * A string representing the `nodeValue` of the created
                * comment node-like object.
                *
                * @see `Document::createComment`.
                */

		function createCommentNode(
			doc,
			text
		)
		{
			var key = "createComment",
				result = null;
			if (isDocument(doc)) {
				result = doc[key](
					text
				);
			}
			return result;
		}

               /**
                * @public `Utils.create.comment`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure)
                * the result of `createCommentNode` or `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to create a comment
                * node-like object in.
                *
                * @param text String
                * A string representing the `nodeValue` of the created
                * comment node-like object.
                *
                * @see `createCommentNode`.
                */

		createComment = (function () {
			var key = "createComment",
				result = null;
			if (isDocument(doc)) {
				if (isHostObject(doc[key])) {
					result = createCommentNode;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Boolean asserting if `createDocumentFragment`
		* is available.
                */

		canUseDocFrag = (function () {
			var key = "createDocumentFragment",
				result = false;
			if (isDocument(doc)) {
				if (isHostObject(doc[key])) {
					result = true;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Boolean asserting if `createDocumentFragment`
		* does not err when called.
                */

		canCallDocFrag = (function () {
			var key = "createDocumentFragment",
				result = canUseDocFrag;
			// NOTE: in IE 5, doc.cDF is uncallable.
			if (canUseDocFrag) {
				try {
					doc[key]();
				} catch (err) {
					result = false;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method for `createDocumentFragment`;
                * returns the wrapped method's result or `null` if
                * not applicable.
                *
                * @param doc Object
                * A document node-like object to create a
                * document fragment node-like object in.
                *
                * @see `Document::createDocumentFragment`.
                */

		function createDocFragNode(
			doc
		)
		{
			var key = "createDocumentFragment",
				result = null;
			if (isDocument(doc)) {
				result = doc[key]();
			}
			return result;
		}

               /**
                * @public `Utils.create.documentFragment`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure)
                * the result of `createDocFragNode` or `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to create a
                * document fragment node-like object in.
                *
                * @see `createDocFragNode`.
                */

		createDocumentFragment = (function () {
			var result = null;
			if (canCallDocFrag) {
				result = createDocFragNode;
			}
			return result;
		}());

		doc = null;

		Utils.create = Utils.create || {
			"element": createElement,
			"elementNS": createElementNS,
			"text": createText,
			"processingInstruction":
				createProcessingInstruction,
			"comment": createComment,
			"documentFragment":
				createDocumentFragment
		};
	}());
}

