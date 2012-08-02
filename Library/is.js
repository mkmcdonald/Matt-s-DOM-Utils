if (typeof Utils === "object" && Utils) {
	(function () {

               /**
                * @module
                * Utils.is
                *
                * @description
                * Various identity tests.
                *
                * @dependencies
                * * null
                */

		var hostTypes,
			nodeTypes,

			doc,

			isDocument,

			canGetParentWindow,
			canGetDefaultView,

			isWindow;

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
                * @public `Utils.is.hostObject`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a host-like object (by passing
                * one of two assertions:
                * a) a `typeof` result of "object" or "function"
                *         along with "truthiness";
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
                * @public `Utils.is.arrayLike`.
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
                * @public `Utils.is.nodeLike`.
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
                * @public `Utils.is.nodeType`.
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
                * @public `Utils.is.element`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is an element node-like object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isElementNode(
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
                * @public `Utils.is.attribute`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is an attribute node-like object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isAttributeNode(
			obj
		)
		{
			var type = nodeTypes.ATTRIBUTE_NODE;
			return isNodeType(
				obj,
				type
			);
		}

               /**
                * @public `Utils.is.text`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a text node-like object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isTextNode(
			obj
		)
		{
			var type = nodeTypes.TEXT_NODE;
			return isNodeType(
				obj,
				type
			);
		}

               /**
                * @public `Utils.is.cDataSection`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a cData section node-like
                * object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isCDataSectionNode(
			obj
		)
		{
			var type = nodeTypes.CDATA_SECTION_NODE;
			return isNodeType(
				obj,
				type
			);
		}

               /**
                * @public `Utils.is.entityReference`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is an entity reference node-like
                * object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isEntityReferenceNode(
			obj
		)
		{
			var key = "ENTITY_REFERENCE_NODE",
				type = nodeTypes[key];
			return isNodeType(
				obj,
				type
			);
		}

               /**
                * @public `Utils.is.entity`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is an entity node-like object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isEntityNode(
			obj
		)
		{
			var type = nodeTypes.ENTITY_NODE;
			return isNodeType(
				obj,
				type
			);
		}

               /**
                * @public `Utils.is.processingInstruction`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a processing instruction
                * node-like object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isProcessingInstructionNode(
			obj
		)
		{
			var key = "PROCESSING_INSTRUCTION_NODE",
				type = nodeTypes[key];
			return isNodeType(
				obj,
				type
			);
		}

               /**
                * @public `Utils.is.comment`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a comment node-like object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isCommentNode(
			obj
		)
		{
			var type = nodeTypes.COMMENT_NODE;
			return isNodeType(
				obj,
				type
			);
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a document node-like object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isDocumentNode(
			obj
		)
		{
			var type = nodeTypes.DOCUMENT_NODE;
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
                * Object containing the current document
                * node-like object or `null`.
                */

		doc = global.document;

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is the current document.
                *
                * @param obj Object
                * An object to assert.
                */

		function isCurrentDocument(
			obj
		)
		{
			return obj === global.document;
		}

               /**
                * @public `Utils.is.document`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) a
                * boolean asserting if the specified object is a
                * document node-like object or the current document.
                *
                * @param obj Object
                * An object to assert.
                *
                * @see `isDocumentNode`.
                * @see `isCurrentDocument`.
                */

		isDocument = (function () {
			var result = isDocumentNode;
			if (!isNodeLike(doc)) {
				result = isCurrentDocument;
			}
			return result;
		}());

               /**
                * @public `Utils.is.documentType`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a document type node-like
                * object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isDocumentTypeNode(
			obj
		)
		{
			var type = nodeTypes.DOCUMENT_TYPE_NODE;
			return isNodeType(
				obj,
				type
			);
		}

               /**
                * @public `Utils.is.documentFragment`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a document fragment node-like
                * object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isDocumentFragmentNode(
			obj
		)
		{
			var key = "DOCUMENT_FRAGMENT_NODE",
				type = nodeTypes[key];
			return isNodeType(
				obj,
				type
			);
		}

               /**
                * @public `Utils.is.notation`.
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is a notation node-like object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isNotationNode(
			obj
		)
		{
			var type = nodeTypes.NOTATION_NODE;
			return isNodeType(
				obj,
				type
			);
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is the current Window.
                *
                * @param obj Object
                * An object to assert.
                */

		function isCurrentWindow(
			obj
		)
		{
			return obj === global.window;
		}

               /**
                * @private
                *
                * @description
                * Method that returns the implicit document
                * for the Window provided; returns `null` if not
                * applicable.
                *
                * @param win Object
                * A Window-like object to access.
                */

		function getWindowDocument(
			win
		)
		{
			var key = "document";
			if (isHostObject(win[key])) {
				return win[key];
			}
			win = null;
			return null;
		}

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) a
                * boolean asserting if `parentWindow` is an
                * available property of the current document.
                */

		canGetParentWindow = (function () {
			var key = "parentWindow";
			return isHostObject(doc[key]);
		}());

               /**
                * @private
                *
                * @description
                * Method that returns the "parent" Window for the
                * document provided; returns `null` if not
                * applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		function getParentWindow(
			doc
		)
		{
			var key = "parentWindow";
			if (isHostObject(doc[key])) {
				return doc[key];
			}
			doc = null;
			return null;
		}

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) a
                * boolean asserting if `defaultView` is an available
                * property of the current document.
                */

		canGetDefaultView = (function () {
			var key = "defaultView";
			return isHostObject(doc[key]);
		}());

               /**
                * @private
                *
                * @description
                * Method that returns the "view" for the document
                * provided; returns `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		function getDefaultView(
			doc
		)
		{
			var key = "defaultView";
			if (isHostObject(doc[key])) {
				return doc[key];
			}
			doc = null;
			return null;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is the "parent" Window for the
                * implicit document provided.
                *
                * @param obj Object
                * An object to assert.
                */

		function isParentWindow(
			obj
		)
		{
			return obj === getParentWindow(
				getWindowDocument(obj) ||
				global.document
			);
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified object is the "view" for the implicit
                * document provided.
                *
                * @param obj Object
                * An object to assert.
                */

		function isDefaultView(
			obj
		)
		{
			return obj === getDefaultView(
				getWindowDocument(obj) ||
				global.document
			);
		}

               /**
                * @public `Utils.is.window`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) a
                * method that returns a boolean asserting if the
                * specified object is a Window object.
                *
                * @param obj Object
                * An object to assert.
                *
                * @see `isCurrentWindow`
                * @see `isParentWindow`
                * @see `isDefaultView`
                */

		isWindow = (function () {
			var result = isCurrentWindow;
			if (canGetParentWindow) {
				result = isParentWindow;
			} else if (canGetDefaultView) {
				result = isDefaultView;
			}
			return result;
		}());

		doc = null;

		Utils.is = Utils.is || {
			"hostObject": isHostObject,

			"arrayLike": isArrayLike,

			"nodeLike": isNodeLike,
			"nodeType": isNodeType,

			"element": isElementNode,
			"attribute": isAttributeNode,
			"text": isTextNode,
			"cDataSection": isCDataSectionNode,
			"entityReference":
				isEntityReferenceNode,
			"entity": isEntityNode,
			"processingInstruction":
				isProcessingInstructionNode,
			"comment": isCommentNode,
			"document": isDocument,
			"documentType": isDocumentTypeNode,
			"documentFragment":
				isDocumentFragmentNode,
			"notation": isNotationNode,

			"window": isWindow
		};
	}());
}

