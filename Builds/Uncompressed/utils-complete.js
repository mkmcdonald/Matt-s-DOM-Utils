/**
 * Copyright (C) 2012 Matt McDonald.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @see http://www.fortybelow.ca/projects/JavaScript/Utils/
 */

var Utils = Utils || {},
	global = this;

/**
 * @title Matt's DOM Utils
 * @see http://www.fortybelow.ca/projects/JavaScript/Utils/
 *
 * @description
 * A collection of widely tested DOM utilities and modules
 * that work in a maximal amount of environments.
 *
 * @author Matt McDonald
 * @contact ["Utils".toLowerCase();]@fortybelow.ca
 * @see http://www.fortybelow.ca
 */

if (typeof Utils === "object" && Utils) {
	(function () {

               /**
                * @module
                * Utils.raise
                *
                * @description
                * DOM Level 4-compliant custom errors and
                * methods to "raise" (throw) them.
                *
                * @dependencies
                * * null
                */

               /**
                * @public `Utils.raise.types`.
                *
                * @description
                * Object exposing errors.
                *
                * @see DOM Level 4 Spec 3.3 (Error types).
                */

		var errorTypes = {
			"INDEX_SIZE_ERROR": "The index is not in " +
				"the allowed range.",
			"HEIRARCHY_REQUEST_ERROR": "The operation " +
				"would yield an incorrect node " +
				"tree.",
			"WRONG_DOCUMENT_ERROR": "The object is in " +
				"the wrong document.",
			"INVALID_CHARACTER_ERROR": "The string " +
				"contains invalid characters.",
			"NO_MODIFICATION_ALLOWED_ERROR": "The " +
				"object can not be modified.",
			"NOT_FOUND_ERROR": "The object can not be " +
				"found here.",
			"NOT_SUPPORTED_ERROR": "The operation is " +
				"not supported.",
			"INVALID_STATE_ERROR": "The object is in " +
				"an invalid state.",
			"SYNTAX_ERROR": "The string did not match " +
				"the expected pattern.",
			"INVALID_MODIFICATION_ERROR": "The object " +
				"can not be modified in this way.",
			"NAMESPACE_ERROR": "The operation is not " +
				"allowed by Namespaces in XML.",
			"INVALID_ACCESS_ERROR": "The object does " +
				"not support the operation or " +
				"argument.",
			"TYPE_MISMATCH_ERROR": "The type of the " +
				"object does not match the " +
				"expected type.",
			"SECURITY_ERROR": "The operation is " +
				"insecure.",
			"NETWORK_ERROR": "A network error " +
				"occurred.",
			"ABORT_ERROR": "The operation was " +
				"aborted.",
			"URL_MISMATCH_ERROR": "The given URL " +
				"does not match another URL.",
			"QUOTA_EXCEEDED_ERROR": "The quota has " +
				"been exceeded.",
			"TIMEOUT_ERROR": "The operation timed " +
				"out.",
			"INVALID_NODE_TYPE_ERROR": "The supplied " +
				"node is incorrect or has an " +
				"incorrect ancestor for this " +
				"operation.",
			"DATA_CLONE_ERROR": "The object can not " +
				"be cloned."
		};

               /**
                * @public `Utils.raise.indexSize`.
                */

		function raiseIndexSize()
		{
			throw new Error(
				errorTypes.INDEX_SIZE_ERROR
			);
		}

               /**
                * @public `Utils.raise.heirarchyRequest`.
                */

		function raiseHeirarchyRequest()
		{
			throw new Error(
				errorTypes.HEIRARCHY_REQUEST_ERROR
			);
		}

               /**
                * @public `Utils.raise.wrongDocument`.
                */

		function raiseWrongDocument()
		{
			throw new Error(
				errorTypes.WRONG_DOCUMENT_ERROR
			);
		}

               /**
                * @public `Utils.raise.invalidCharacter`.
                */

		function raiseInvalidCharacter()
		{
			throw new Error(
				errorTypes.INVALID_CHARACTER_ERROR
			);
		}

               /**
                * @public `Utils.raise.noModificationAllowed`.
                */

		function raiseNoModificationAllowed()
		{
			var key = "NO_MODIFICATION_ALLOWED_ERROR";
			throw new Error(
				errorTypes[key]
			);
		}

               /**
                * @public `Utils.raise.notFound`.
                */

		function raiseNotFound()
		{
			throw new Error(
				errorTypes.NOT_FOUND_ERROR
			);
		}

               /**
                * @public `Utils.raise.notSupported`.
                */

		function raiseNotSupported()
		{
			throw new Error(
				errorTypes.NOT_SUPPORTED_ERROR
			);
		}

               /**
                * @public `Utils.raise.invalidState`.
                */

		function raiseInvalidState()
		{
			throw new Error(
				errorTypes.INVALID_STATE_ERROR
			);
		}

               /**
                * @public `Utils.raise.syntax`.
                */

		function raiseSyntax()
		{
			throw new Error(
				errorTypes.SYNTAX_ERROR
			);
		}

               /**
                * @public `Utils.raise.invalidModification`.
                */

		function raiseInvalidModification()
		{
			throw new Error(
				errorTypes.INVALID_MODIFICATION_ERROR
			);
		}

               /**
                * @public `Utils.raise.namespace`.
                */

		function raiseNamespace()
		{
			throw new Error(
				errorTypes.NAMESPACE_ERROR
			);
		}

               /**
                * @public `Utils.raise.invalidAccess`.
                */

		function raiseInvalidAccess()
		{
			throw new Error(
				errorTypes.INVALID_ACCESS_ERROR
			);
		}

               /**
                * @public `Utils.raise.typeMismatch`.
                */

		function raiseTypeMismatch()
		{
			throw new Error(
				errorTypes.TYPE_MISMATCH_ERROR
			);
		}

               /**
                * @public `Utils.raise.security`.
                */

		function raiseSecurity()
		{
			throw new Error(
				errorTypes.SECURITY_ERROR
			);
		}

               /**
                * @public `Utils.raise.network`.
                */

		function raiseNetwork()
		{
			throw new Error(
				errorTypes.NETWORK_ERROR
			);
		}

               /**
                * @public `Utils.raise.abort`.
                */

		function raiseAbort()
		{
			throw new Error(
				errorTypes.ABORT_ERROR
			);
		}

               /**
                * @public `Utils.raise.urlMismatch`.
                */

		function raiseUrlMismatch()
		{
			throw new Error(
				errorTypes.URL_MISMATCH_ERROR
			);
		}

               /**
                * @public `Utils.raise.quotaExceeded`.
                */

		function raiseQuotaExceeded()
		{
			throw new Error(
				errorTypes.QUOTA_EXCEEDED_ERROR
			);
		}

               /**
                * @public `Utils.raise.timeout`.
                */

		function raiseTimeout()
		{
			throw new Error(
				errorTypes.TIMEOUT_ERROR
			);
		}

               /**
                * @public `Utils.raise.invalidNodeType`.
                */

		function raiseInvalidNodeType()
		{
			throw new Error(
				errorTypes.INVALID_NODE_TYPE_ERROR
			);
		}

               /**
                * @public `Utils.raise.dataClone`.
                */

		function raiseDataClone()
		{
			throw new Error(
				errorTypes.DATA_CLONE_ERROR
			);
		}

		Utils.raise = Utils.raise || {
			"types": errorTypes,

			"indexSize": raiseIndexSize,
			"heirarchyRequest":
				raiseHeirarchyRequest,
			"wrongDocument": raiseWrongDocument,
			"invalidCharacter":
				raiseInvalidCharacter,
			"noModificationAllowed":
				raiseNoModificationAllowed,
			"notFound": raiseNotFound,
			"notSupported": raiseNotSupported,
			"invalidState": raiseInvalidState,
			"syntax": raiseSyntax,
			"invalidModification":
				raiseInvalidModification,
			"namespace": raiseNamespace,
			"invalidAccess": raiseInvalidAccess,
			"typeMismatch": raiseTypeMismatch,
			"security": raiseSecurity,
			"network": raiseNetwork,
			"abort": raiseAbort,
			"urlMismatch": raiseUrlMismatch,
			"quotaExceeded": raiseQuotaExceeded,
			"timeout": raiseTimeout,
			"invalidNodeType":
				raiseInvalidNodeType,
			"dataClone": raiseDataClone
		};
	}());
}

if (typeof Utils === "object" && Utils) {
	(function () {

               /**
                * @module
                * Utils.types
                *
                * @description
                * Documented `nodeType` property values.
                *
                * @see DOM 4 Spec 5.3 (Node, nodeType).
                *
                * @dependencies
                * * null
                */

               /**
                * @public `Utils.types`.
                *
                * @description
                * Object of documented `nodeType`s.
                *
                * @see DOM 4 Spec 5.3 (Node, nodeType).
                */

		Utils.types = Utils.types || {
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
	}());
}

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
if (typeof Utils === "object" && Utils) {
	(function () {

               /**
                * @module
                * Utils.create
                *
                * @description
                * Various creation method wrappers.
                *
                * @dependencies
                * * null
                */

		var hostTypes,

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
                * Variable containing the current document
                * node-like object.
                */

		doc = global.document;

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
			var key = "createElement";
			return doc[key](
				tag
			);
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
			if (isHostObject(doc[key])) {
				result = createElementNode;
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
			var key = "createElementNS";
			return doc[key](
				uri,
				name
			);
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
			if (isHostObject(doc[key])) {
				result = createElementNodeNS;
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
			var key = "createTextNode";
			return doc[key](
				text
			);
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
			if (isHostObject(doc[key])) {
				result = createTextNode;
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
			var key = "createProcessingInstruction";
			return doc[key](
				target,
				text
			);
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
			if (isHostObject(doc[key])) {
				result = createPINode;
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
			var key = "createComment";
			return doc[key](
				text
			);
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
			if (isHostObject(doc[key])) {
				result = createCommentNode;
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
			if (isHostObject(doc[key])) {
				result = true;
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
			var key = "createDocumentFragment";
			return doc[key]();
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

if (typeof Utils === "object" && Utils) {
	(function () {

               /**
                * @module
                * Utils.traverse
                *
                * @description
                * Various methods used to traverse document tree
                * nodes.
                *
                * @dependencies
                * * null
                */

		var doc,

			hostTypes,
			nodeTypes,

			getChildren,

			getChildNodes;

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
                * Method that returns an array-like object of
                * `childNodes` collected from a node-like object;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to access.
                */

		function getNodes(
			obj
		)
		{
			var key = "childNodes",
				result = null;
			if (isNodeLike(obj)) {
				if (isHostObject(obj[key])) {
					result = makeArray(
						obj[key]
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.traverse.getNodes`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure)
                * `getNodes` or `null` * if not applicable.
                *
                * @param obj Object
                * An node-like object to access.
                *
                * @see `getNodes`.
                */

		getChildNodes = (function () {
			var key = "childNodes",
				result = null;
			if (isHostObject(doc[key])) {
				result = getNodes;
			}
			return result;
		}());

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
                * @public `Utils.traverse.linear`.
                *
                * @description
                * Method that traverses an array-like object,
                * calling a callback on each element; results are
                * returned as an array-like object.
                *
                * @param obj Array
                * An array-like object to traverse.
                *
                * @param callback Function
                * A function to call.
                */

		function traverseLinear(
			obj,
			callback
		)
		{
			var max,
				aux,
				diff,
				result = [];
			if (isArrayLike(obj)) {
				max = obj.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					pushCallback(
						obj[diff],
						callback,
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
                * Wrapper method that wraps `getChildNodes`;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to access.
                *
                * @see `getChildNodes`.
                */

		function wrapChildNodes(
			obj
		)
		{
			var result = null;
			if (getChildNodes) {
				result = getChildNodes(
					obj
				);
			}
			return result;
		}

               /**
                * @public `Utils.traverse.nodes`.
                *
                * @description
                * Method that traverses a node-like object's
                * `childNodes` (via `traverseLinear`), calling a
                * callback on each node-like object; results are
                * returned as an array-like object.
                *
                * @param obj Object
                * A node-like object to source `childNodes` from.
                *
                * @param callback Function
                * A function to call.
                *
                * @see `traverseLinear`.
                */

		function traverseChildNodes(
			obj,
			callback
		)
		{
			var result = [];
			if (typeof callback === "function") {
				result = traverseLinear(
					wrapChildNodes(obj),
					callback
				);
			}
			return result;
		}

               /**
                * @private
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
                * @private
                *
                * @description
                * Method used as a callback for `traverse*`; removes
                * a node-like object from the document tree; returns
                * `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to remove.
                */

		function clearNode(
			obj
		)
		{
			var result = null;
			if (isNodeLike(obj)) {
				removeChild(
					obj.parentNode,
					obj
				);
			}
			return result;
		}

               /**
                * @public `Utils.traverse.clearNodes`.
                *
                * @description
                * Method that clears a node-like object's
                * `childNodes` (via `traverseChildNodes`),
                * returning them upon successful removal;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to clear `childNodes` from.
                *
                * @see `traverseChildNodes`.
                */

		function clearChildNodes(
			obj
		)
		{
			var result = null;
			if (isNodeLike(obj)) {
				result = traverseChildNodes(
					obj,
					clearNode
				);
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
                * @description
                * Method used as a callback for `traverse*`; returns
                * a boolean asserting if the specified node-like
                * object passed is an element node-like object.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function filterElementNode(
			obj
		)
		{
			var result = false;
			if (isElement(obj)) {
				result = true;
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that collects the specified
                * element node-like object's `children` as an
                * array-like object; returns `null` if not
                * applicable.
                *
                * @param obj Object
                * An element node-like object to traverse.
                *
                * @see `traverseLinear`.
                */

		function forkChildren(
			obj
		)
		{
			return traverseLinear(
				wrapChildNodes(obj),
				filterElementNode
			);
		}

               /**
                * @private
                *
                * @description
                * Helper method that collects the specified
                * element node-like object's `children` via its
                * `children` property as an array-like object;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to traverse.
                */

		function getNativeChildren(
			obj
		)
		{
			var key = "children",
				result = null;
			if (isElement(obj)) {
				if (isHostObject(obj[key])) {
					result = makeArray(
						obj[key]
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if `obj`
                * can access the `children` property.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function canGetChildren(
			obj
		)
		{
			var result = false;
			if (isElement(obj)) {
				result = isHostObject(
					obj.children
				);
			}
			return result;
		}

               /**
                * @public `Utils.traverse.getElements`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) an
                * array-like object of element node-like objects
                * from an element node-like object; returns `null`
                * if not applicable.
                *
                * @see `getNativeChildren`.
                * @see `forkChildren`.
                */

		getChildren = (function () {
			var canGet,
				result;
			if (doc) {
				canGet = canGetChildren(
					doc.body
				);
				result = forkChildren;
				if (canGet) {
					result = getNativeChildren;
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method that wraps `getChildren`;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to traverse.
                *
                * @see `getChildren`.
                */

		function wrapChildren(
			obj
		)
		{
			var result = null;
			if (getChildren) {
				result = getChildren(
					obj
				);
			}
			return result;
		}

               /**
                * @public `Utils.traverse.elements`.
                *
                * @description
                * Method that traverses an element node-like object's
                * `children` (via `traverseLinear`), calling a
                * callback on each element node-like object; results
                * are returned as an array-like object.
                *
                * @param obj Object
                * An element node-like object to traverse.
                *
                * @param callback Function
                * A function to call.
                *
                * @see `traverseLinear`.
                */

		function traverseChildren(
			obj,
			callback
		)
		{
			var result = [];
			if (typeof callback === "function") {
				result = traverseLinear(
					wrapChildren(obj),
					callback
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method used as a callback for `traverse*`; returns
                * a boolean asserting if the specified node-like
                * object passed is an element node-like object and
                * can be removed.
                *
                * @param obj Object
                * An element node-like object to assert.
                */

		function removeElementNode(
			obj
		)
		{
			var result = false;
			if (isElement(obj)) {
				result = clearNode(
					obj
				);
			}
			return result;
		}

               /**
                * @public `Utils.traverse.clearElements`.
                *
                * @description
                * Method that clears an element node-like object's
                * `children`, returning them upon successful
                * removal; returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to clear `children`
                * from.
                *
                * @see `traverseChildren`.
                */

		function clearChildren(
			obj
		)
		{
			var result = null;
			if (isNodeLike(obj)) {
				result = traverseChildren(
					obj,
					removeElementNode
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that adds a node-like object and an
                * array-like object (tree) to an array-like object.
                *
                * @param obj Object
                * A node-like object to add.
                *
                * @param tree Array
                * An array-like object (tree) to add.
                *
                * @param par Array
                * An array-like object to modify.
                *
                * @see `collectChildNodeTree`.
                */

		function addTree(
			obj,
			tree,
			par
		)
		{
			var result;
			par[par.length] = obj;
			if (tree.length) {
				par[par.length] = tree;
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method returning a boolean asserting if a
                * node-like object can be traversed via its
                * `childNodes` property.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function canTraverse(
			obj
		)
		{
			var result = false;
			if (isNodeLike(obj)) {
				result = isHostObject(
					obj.childNodes
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Recursive method that returns an array-like object
                * from a node-like object's subtree.
                * 
                *
                * @param obj Object
                * A node-like object to traverse.
                */

		function collectChildNodeTree(
			obj
		)
		{
			var max,
				aux,
				diff,
				tree,
				result = [];
			if (canTraverse(obj)) {
				max = obj.childNodes.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					tree = collectChildNodeTree(
						obj.childNodes[diff]
					);
					addTree(
						obj.childNodes[diff],
						tree,
						result
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.traverse.getNodeTree`.
                *
                * @description
                * Method that collects an array-like object from
                * the specified node-like object's subtree; returns
                * `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to traverse.
                */

		function getChildNodeTree(
			obj
		)
		{
			var key = "childNodes",
				result = null;
			if (isNodeLike(obj)) {
				if (isHostObject(obj[key])) {
					result = collectChildNodeTree(
						obj
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.traverse.nodeTree`.
                *
                * @description
                * Method that traverses the specified node-like
                * object's subtree, calling a callback on each
                * node-like object; results are returned as an
                * array-like object.
                *
                * @param obj Object
                * A node-like object to traverse.
                *
                * @param callback Function
                * A function to call.
                *
                * @param result Array
                * An array-like object used to collect callback
                * results.
                */

		function traverseChildNodeTree(
			obj,
			callback,
			result
		)
		{
			// FIXME: get this <= 20 lines
			var max,
				aux,
				diff;
			result = result || [];
			if (canTraverse(obj)) {
				max = obj.childNodes.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					traverseChildNodeTree(
						obj.childNodes[diff],
						callback,
						result
					);
					pushCallback(
						obj.childNodes[diff],
						callback,
						result
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.traverse.recursive`.
                *
                * @description
                * Recursive method that traverses an array-like
                * object, calling a callback on each element; results
                * are returned as an array-like object.
                *
                * @param obj Array
                * An array-like object to traverse.
                *
                * @param callback Function
                * A function to call.
                *
                * @param result Array
                * An array-like object used to collect callback
                * results.
                */

		function traverseRecursive(
			obj,
			callback,
			result
		)
		{
			// FIXME: get this <= 20 lines
			var max,
				aux,
				diff;
			result = result || [];
			if (isArrayLike(obj)) {
				max = obj.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					traverseRecursive(
						obj[diff],
						callback,
						result
					);
					pushCallback(
						obj[diff],
						callback,
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
                * Helper method that passes the specified node-like
                * object and a specific array-like object for
                * processing if the specified node-like object
                * is an element node-like object.
                *
                * @param obj Object
                * A node-like object to add.
                *
                * @param tree Array
                * An array-like object to add.
                *
                * @param collection Array
                * An array-like object to modify.
                */

		function addRecursiveChild(
			obj,
			tree,
			collection
		)
		{
			var result;
			if (isElement(obj)) {
				addTree(
					obj,
					tree,
					collection
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Recursive method that traverses the specified
                * element node-like object's subtree and returns an
                * array-like object of element node-like objects.
                *
                * @param obj Object
                * An element node-like object to traverse.
                */

		function collectChildrenTree(
			obj
		)
		{
			var max,
				aux,
				diff,
				tree,
				result = [];
			if (canTraverse(obj)) {
				max = obj.childNodes.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					tree = collectChildrenTree(
						obj.childNodes[diff]
					);
					addRecursiveChild(
						obj.childNodes[diff],
						tree,
						result
					);
				}
			}
			return result;
		}

               /**
                * @public `Utils.traverse.getElementTree`.
                *
                * @description
                * Recursive method that returns an array-like object
                * containing element node-like objects from the
                * specified element node-like object's subtree;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * An element node-like object to traverse.
                */

		function getChildrenTree(
			obj
		)
		{
			var key = "childNodes",
				result = null;
			if (isNodeLike(obj)) {
				if (isHostObject(obj[key])) {
					result = collectChildrenTree(
						obj
					);
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that passes the specified node-like
                * object for processing if the specified node-like
                * object is an element node-like object.
                *
                * @param obj Object
                * A node-like object to add.
                *
                * @param callback Function
                * An function to call.
                *
                * @param collection Array
                * An array-like object to modify.
                */

		function handleRecursiveChild(
			obj,
			callback,
			collection
		)
		{
			var result;
			if (isElement(obj)) {
				pushCallback(
					obj,
					callback,
					collection
				);
			}
			return result;
		}

               /**
                * @public `Utils.traverse.elementTree`.
                *
                * @description
                * Method that traverses an element node-like object's
                * subtree, calling a callback only on each element
                * node-like object in the subtree; results are
                * returned as an array-like object.
                *
                * @param obj Object
                * An element node-like object to traverse.
                *
                * @param callback Function
                * A function to call.
                *
                * @param result Array
                * An array-like object used to collect callback
                * results.
                */

		function traverseChildrenTree(
			obj,
			callback,
			result
		)
		{
			// FIXME: get this <= 20 lines
			var max,
				aux,
				diff;
			result = result || [];
			if (canTraverse(obj)) {
				max = obj.childNodes.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					traverseChildrenTree(
						obj.childNodes[diff],
						callback,
						result
					);
					handleRecursiveChild(
						obj.childNodes[diff],
						callback,
						result
					);
				}
			}
			return result;
		}

		doc = null;

		Utils.traverse = Utils.traverse || {
			"getNodes": getChildNodes,

			"linear": traverseLinear,
			"nodes": traverseChildNodes,
			"clearNodes": clearChildNodes,

			"getElements": getChildren,
			"elements": traverseChildren,
			"clearElements": clearChildren,

			"getNodeTree": getChildNodeTree,

			"nodeTree": traverseChildNodeTree,

			"recursive": traverseRecursive,

			"getElementTree": getChildrenTree,
			"elementTree": traverseChildrenTree
		};
	}());
}

if (typeof Utils === "object" && Utils) {
	(function () {

               /**
                * @module
                * Utils.text
                *
                * @description
                * DOM Level 4-style `textContent` implementation.
                *
                * @see DOM 4 Spec section 5.3 (Node, textContent).
                *
                * @dependencies
                * * null
                */

		var doc,

			hostTypes,
			nodeTypes,

			textGetters,
			textGetterDecisions,

			textSetters,

			createText,

			textSetterDecisions,

			valueSetters;

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
                * @private
                *
                * @description
                * Helper method for `traverse*` methods; calls
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
                * @private
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
                * @private
                *
                * @description
                * Method used as a callback for `traverse*`; removes
                * a node-like object from the document tree; returns
                * `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to remove.
                */

		function clearNode(
			obj
		)
		{
			var result = null;
			if (isNodeLike(obj)) {
				removeChild(
					obj.parentNode,
					obj
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that clears a node-like object's
                * `childNodes`.
                *
                * @param obj Object
                * A node-like object to clear `childNodes` from.
                */

		function clearChildNodes(
			obj
		)
		{
			var result;
			if (isNodeLike(obj)) {
				while (obj.firstChild) {
					clearNode(
						obj.firstChild
					);
				}
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
                * @private
                *
                * @closure
                *
                * @description
                * Variable containing keys of `nodeType` values
                * that can retrieve text.
                *
                * @see `Utils.types`.
                */

		textGetters = (function () {
			var result = {};
			result[nodeTypes.ELEMENT_NODE] = true;
			result[nodeTypes.TEXT_NODE] = true;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				true;
			result[nodeTypes.COMMENT_NODE] = true;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] =
				true;
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified node-like object can retrieve textual
                * content.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function canGetText(
			obj
		)
		{
			var getters = textGetters,
				result = false;
			if (isNodeLike(obj)) {
				if (getters[obj.nodeType]) {
					result = true;
				}
			}
			return result;
		}

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
                * specified object is a text node-like object.
                *
                * @param obj Object
                * An object to assert.
                */

		function isText(
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
                * @private
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

		function getNodeValue(
			obj
		)
		{
			var key = "nodeValue",
				result = null;
			if (isNodeLike(obj)) {
				if (typeof obj[key] === "string") {
					result = obj[key];
				}
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method used as a callback for `traverse*`; returns
                * the `nodeValue` property value for the specified
                * node-like object if it is a text node-like object;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function filterTextData(
			obj
		)
		{
			var result = null;
			if (isText(obj)) {
				result = getNodeValue(
					obj
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that retrieves the `nodeValue`
                * property value of a node-like object; returns
                * `null` if not applicable.
                *
                * @param obj Object
                * A text node-like object to use.
                *
                * @see `getText`.
                */

		function grabText(
			obj
		)
		{
			return getNodeValue(
				obj
			);
		}
               /**
                * @private
                *
                * @description
                * Method returning a boolean asserting if a
                * node-like object can be traversed via its
                * `childNodes` property.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function canTraverse(
			obj
		)
		{
			var result = false;
			if (isNodeLike(obj)) {
				result = isHostObject(
					obj.childNodes
				);
			}
			return result;
		}
               /**
                * @public `Utils.traverse.nodeTree`.
                *
                * @description
                * Method that traverses the specified node-like
                * object's subtree, calling a callback on each
                * node-like object; results are returned as an
                * array-like object.
                *
                * @param obj Object
                * A node-like object to traverse.
                *
                * @param callback Function
                * A function to call.
                *
                * @param result Array
                * An array-like object used to collect callback
                * results.
                */

		function traverseChildNodeTree(
			obj,
			callback,
			result
		)
		{
			// FIXME: get this <= 20 lines
			var max,
				aux,
				diff;
			result = result || [];
			if (canTraverse(obj)) {
				max = obj.childNodes.length - 1;
				for (aux = max; aux > -1; aux -= 1) {
					diff = max - aux;
					traverseChildNodeTree(
						obj.childNodes[diff],
						callback,
						result
					);
					pushCallback(
						obj.childNodes[diff],
						callback,
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
                * Helper method that concatenates the `nodeValue`
                * property value of text node-like objects
                * in the specified node-like object's subtree;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to traverse.
                *
                * @see `getText`.
                */

		function collectText(
			obj
		)
		{
			var nodes,
				result = null;
			if (isNodeLike(obj)) {
				nodes = traverseChildNodeTree(
					obj,
					filterTextData
				);
				result = nodes.join(
					""
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Object containing decisions for specific
                * `nodeType` values pertaining to the retrieval of
                * textual content.
                */

		textGetterDecisions = (function () {
			var result = {};
			result[nodeTypes.ELEMENT_NODE] = collectText;
			result[nodeTypes.TEXT_NODE] = grabText;
			result[nodeTypes.COMMENT_NODE] = grabText;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] =
				collectText;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				grabText;
			return result;
		}());

               /**
                * @public `Utils.text.get`.
                *
                * @description
                * Method that returns a concatenated string
                * consisting of `nodeValue` property values of text
                * node-like objects from the specified node-like
                * object's subtree or the `nodeValue` property value
                * of the node-like object itself; returns `null` if
                * not applicable.
                *
                * @param obj Object
                * A node-like object to retrieve textual content
                * from.
                *
                * @see DOM 4 Spec section 5.3 (`Node::textContent`,
                * getting).
                */

		function getText(
			obj
		)
		{
			var decisions = textGetterDecisions,
				decision,
				result = null;
			if (canGetText(obj)) {
				decision = decisions[obj.nodeType];
				if (typeof decision === "function") {
					result = decision(
						obj
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
                * Object containing keys of `nodeType` values that
                * can overwrite text.
                *
                * @see `Utils.types`.
                */

		textSetters = (function () {
			var result = {};
			result[nodeTypes.ELEMENT_NODE] = true;
			result[nodeTypes.TEXT_NODE] = true;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				true;
			result[nodeTypes.COMMENT_NODE] = true;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] =
				true;
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns a boolean asserting if the
                * specified node can overwrite textual content.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function canSetText(
			obj
		)
		{
			var setters = textSetters,
				result = false;
			if (isNodeLike(obj)) {
				if (setters[obj.nodeType]) {
					result = true;
				}
			}
			return result;
		}

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
			var key = "createTextNode";
			return doc[key](
				text
			);
		}

               /**
                * @private
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
			if (isHostObject(doc[key])) {
				result = createTextNode;
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Wrapper method that wraps `createText`;
                * returns `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to create a text
                * node-like object in.
                *
                * @param text String
                * A string representing the `nodeValue` of the
                * text node-like object to be created.
                */

		function wrapCreateText(
			doc,
			text
		)
		{
			var result = null;
			if (createText) {
				result = createText(
					doc,
					text
				);
			}
			return result;
		}

               /**
                * @private
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
                * @private
                *
                * @description
                * Helper method that returns the result of the
                * creation and suffixion of a text node-like object
                * to the specified node-like object; returns `null`
                * if not applicable.
                *
                * @param obj Object
                * A node-like object to append the created text node
                * like object to.
                *
                * @param text String
                * A string containing textual content to add.
                *
                * @param doc Object
                * A document node-like object used to create a text
                * node-like object.
                */

		function appendText(
			obj,
			text,
			doc
		)
		{
			var node,
				result = null;
				node = wrapCreateText(
					doc,
					text
				);
				result = appendChild(
					obj,
					node
				);
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that clears the specified
                * node-like object's subtree and appends a text
                * node-like object with a specific string;
                * returns the textual content added or `null` if not
                * applicable.
                *
                * @param obj Object
                * A node-like object to traverse.
                *
                * @param text String
                * A string containing textual content to add.
                *
                * @param doc Object
                * A document node-like object used to create a text
                * node-like object.
                *
                * @see `setText`.
                */

		function overrideText(
			obj,
			text,
			doc
		)
		{
			var textNode,
				result = null;
			if (isNodeLike(obj)) {
				clearChildNodes(
					obj
				);
				textNode = appendText(
					obj,
					text,
					doc
				);
				result = getNodeValue(
					textNode
				);
			}
			return result;
		}

               /**
                * @private
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

		function setNodeValue(
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
                * Helper method that replaces the `nodeValue`
                * property value of the specified node-like object
                * with a specific string.
                *
                * @param text String
                * A string containing textual content to add.
                *
                * @param obj Object
                * A node-like object to replace the `nodeValue`
                * property value of.
                *
                * @see `setText`.
                */

		function replaceText(
			obj,
			text
		)
		{
			return setNodeValue(
				obj,
				text
			);
		}

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Object containing decisions for specific
                * `nodeType` values pertaining to the replacement
                * textual content.
                */

		textSetterDecisions = (function () {
			var result = {};
			result[nodeTypes.ELEMENT_NODE] =
				overrideText;
			result[nodeTypes.TEXT_NODE] =
				replaceText;
			result[nodeTypes.COMMENT_NODE] =
				replaceText;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] =
				overrideText;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				replaceText;
			return result;
		}());

               /**
                * @public `Utils.text.set`.
                *
                * @description
                * Method that returns a string consisting of textual
                * content that replaces existing textual content;
                * returns `null` if not applicable.
                *
                * @param obj Object
                * A node-like object to replace the textual content
                * of.
                *
                * @param text String
                * A string containing the textual content to act as
                * a replacement.
                *
                * @param doc Document
                * A document node-like object to create a text
                * node-like object with.
                *
                * @see DOM 4 Spec section 5.3 (`Node::textContent`,
                * setting).
                */

		function setText(
			obj,
			text,
			doc
		)
		{
			var decisions = textSetterDecisions,
				decision,
				result = null;
			if (canSetText(obj)) {
				decision = decisions[obj.nodeType];
				if (typeof decision === "function") {
					result = decision(
						obj,
						text,
						doc
					);
				}
			}
			return result;
		}

		doc = null;

		Utils.text = Utils.text || {
			"get": getText,
			"set": setText
		};
	}());
}

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


if (typeof Utils === "object" && Utils) {
	(function () {

               /**
                * @module
                * Utils.select
                *
                * @description
                * Various selection wrappers.
                *
                * @dependencies
                * * null
                */

		var doc,

			hostTypes,

			getElementsByName,

			nodeTypes,

			getElementsByTagName,

			isDocument,

			getElementsByTagNameNS,
			getElementsByClassName,
			getElementById,

			getHead,
			getBody,

			selectorTypes,

			querySelector,
			querySelectorAll,
			getImages,
			getAllImages,
			getEmbeds,
			getAllEmbeds,
			getLinks,
			getAllLinks,
			getForms,
			getAllForms,
			getScripts,
			getAllScripts,
			getApplets,
			getAllApplets,
			getAnchors,
			getAllAnchors;

               /**
                * @private
                *
                * @closure
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
                * Method that returns a closure that wraps the
                * specified key, and calls it as a method.
                *
                * @param method String
                * A string containing the key to call as a method of
                * a document node-like object.
                */

		function getByName(
			method
		)
		{
			var key = method;
			return function (doc, name) {
				return makeArray(
					doc[key](name)
				);
			};
		}

               /**
                * @public `Utils.select.byName`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns an array-like object
                * of node-like objects that match the specified
                * "name"; returns `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                *
                * @param name String
                * A string containing the "name" to find.
                */

		getElementsByName = (function () {
			var key = "getElementsByName",
				result = null;
			if (isHostObject(doc[key])) {
				result = getByName(
					key
				);
			}
			return result;
		}());

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
                * @description
                * Method that returns a boolean asserting if the
                * specified object is the current document.
                *
                * @param obj Object
                * An object to assert.
                */

		function isAlmostDocument(
			obj
		)
		{
			return obj === global.document;
		}

               /**
                * @private
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
                * @see `isAlmostDocument`.
                */

		isDocument = (function () {
			var result = isDocumentNode;
			if (!isNodeLike(doc)) {
				result = isAlmostDocument;
			}
			return result;
		}());

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
                * @description
                * Method that returns a closure that wraps the
                * specified key, and calls it as a method.
                *
                * @param method String
                * A string containing the key to call as a method of
                * a document node-like object or an element
                * node-like object.
                */

		function getByTagName(
			method
		)
		{
			var key = method;
			return function (caller, tag) {
				var result = null;
				if (isDocument(caller) ||
					isElement(caller)) {
					result = makeArray(
						caller[key](tag)
					);
				}
				return result;
			};
		}

               /**
                * @public `Utils.select.byTagName`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns an array-like object
                * of node-like objects that match the specified
                * "tag"; returns `null` if not applicable.
                *
                * @param caller Object
                * A document node-like object or element node-like
                * object to access.
                *
                * @param tag String
                * A string containing the "tag" to find.
                */

		getElementsByTagName = (function () {
			var key = "getElementsByTagName",
				result = null;
			if (isHostObject(doc[key])) {
				result = getByTagName(
					key
				);
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns a closure that wraps the
                * specified key, and calls it as a method.
                *
                * @param method String
                * A string containing the key to call as a method of
                * a document node-like object or an element
                * node-like object.
                */

		function getByTagNameNS(
			method
		)
		{
			var key = method;
			return function (caller, local, ns) {
				var result = null;
				if (isDocument(caller) ||
					isElement(caller)) {
					result = makeArray(
						caller[key](local, ns)
					);
				}
				return result;
			};
		}

               /**
                * @public `Utils.select.byTagNameNS`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns an array-like object
                * of node-like objects that match the specified
                * "namespace" and/or "local name"; returns `null`
                * if not applicable.
                *
                * @param caller Object
                * A document node-like object or element node-like
                * object to access.
                *
                * @param local String
                * A string containing the "local name" to find.
                *
                * @param ns String
                * A string containing the "namespace" to find.
                */

		getElementsByTagNameNS = (function () {
			var key = "getElementsByTagNameNS",
				result = null;
			if (isHostObject(doc[key])) {
				result = getByTagNameNS(
					key
				);
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns a closure that wraps the
                * specified key, and calls it as a method.
                *
                * @param method String
                * A string containing the key to call as a method of
                * a document node-like object or an element
                * node-like object.
                */

		function getByClassName(
			method
		)
		{
			var key = method;
			return function (caller, names) {
				var result = null;
				if (isDocument(caller) ||
					isElement(caller)) {
					result = makeArray(
						caller[key](names)
					);
				}
				return result;
			};
		}

               /**
                * @public `Utils.select.byClassName`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns an array-like object
                * of node-like objects that match the specified
                * "class name(s)"; returns `null` if not applicable.
                *
                * @param caller Object
                * A document node-like object or element node-like
                * object to access.
                *
                * @param names String
                * A string containing the "class name(s)" to find.
                */

		getElementsByClassName = (function () {
			var key = "getElementsByClassName",
				result = null;
			if (isHostObject(doc[key])) {
				result = getByClassName(
					key
				);
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns a closure that wraps the
                * specified key, and calls it as a method.
                *
                * @param method String
                * A string containing the key to call as a method of
                * a document node-like object.
                */

		function getById(
			method
		)
		{
			var key = method;
			return function (doc, id) {
				return doc[key](id);
			};
		}

               /**
                * @public `Utils.select.byId`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns a node-like object. 
                * that matches the specified "id"; returns `null` if
                * not applicable.
                *
                * @param doc Object
                * A document node-like object object to access.
                *
                * @param id String
                * A string containing the "id" to find.
                */

		getElementById = (function () {
			var key = "getElementById",
				result = null;
			if (isHostObject(doc[key])) {
				result = getById(
					key
				);
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns the "head" element node-like
                * object for the specified document; returns
                * `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		function getNativeHead(
			doc
		)
		{
			return doc.head;
		}

               /**
                * @private
                *
                * @description
                * Method that returns the "head" element node-like
                * object for the specified document; returns
                * `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		function forkHead(
			doc
		)
		{
			var heads,
				result = null;
			heads = getElementsByTagName(
				doc,
				"head"
			);
			if (isArrayLike(heads)) {
				result = heads[0];
			}
			return result;
		}

               /**
                * @public `Utils.select.head`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) the
                * "head" element node-like object for the specified
                * document node-like object; returns `null` if not
                * applicable.
                *
                * @see `getNativeHead`.
                * @see `forkHead`.
                */

		getHead = (function () {
			var key = "getElementsByTagName",
				result = null;
			if (isHostObject(doc.head)) {
				result = getNativeHead;
			} else if (isHostObject(doc[key])) {
				result = forkHead;
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns the "body" element node-like
                * object for the specified document; returns
                * `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		function getNativeBody(
			doc
		)
		{
			return doc.body;
		}

               /**
                * @private
                *
                * @description
                * Method that returns the "body" element node-like
                * object for the specified document; returns
                * `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		function forkBody(
			doc
		)
		{
			var bodies,
				result = null;
			bodies = getElementsByTagName(
				doc,
				"body"
			);
			if (isArrayLike(bodies)) {
				result = bodies[0];
			}
			return result;
		}

               /**
                * @public `Utils.select.body`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns (via a closure) the
                * "body" element node-like object for the specified
                * document node-like object; returns `null` if not
                * applicable.
                *
                * @see `getNativeBody`.
                * @see `forkBody`.
                */

		getBody = (function () {
			var key = "getElementsByTagName",
				result = null;
			if (isHostObject(doc.body)) {
				result = getNativeBody;
			} else if (isHostObject(doc[key])) {
				result = forkBody;
			}
			return result;
		}());

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Object containing applicable `nodeType` property
                * values for `querySelector*`.
                */

		selectorTypes = (function () {
			var result = {};
			result[nodeTypes.ELEMENT_NODE] = true;
			result[nodeTypes.DOCUMENT_NODE] = true;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] = true;
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Helper method that returns a boolean asserting if
                * a node-like object can call `querySelector*`.
                *
                * @param obj Object
                * A node-like object to assert.
                */

		function canCallSelectors(
			obj
		)
		{
			var types = selectorTypes,
				u = "undefined",
				result = false;
			if (isNodeLike(obj)) {
				result = types[obj.nodeType] !==
					global[u];
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a closure that wraps the
                * specified key, and calls it as a method.
                *
                * @param method String
                * A string containing the key to call as a method of
                * a node-like object.
                */

		function getQuerySelector(
			method
		)
		{
			var key = method;
			return function (caller, selectors) {
				var result = null;
				if (canCallSelectors(caller)) {
					result = caller[key](
						selectors
					);
				}
				return result;
			};
		}

               /**
                * @public `Utils.select.query`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns a node-like object. 
                * that matches the specified "selectors"; returns
                * `null` if not applicable.
                *
                * @param caller Object
                * A node-like object object to access.
                *
                * @param selectors String
                * A string containing the "selectors" to find.
                */

		querySelector = (function () {
			var key = "querySelector",
				result = null;
			if (canCallSelectors(doc)) {
				if (isHostObject(doc[key])) {
					result = getQuerySelector(
						key
					);
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Method that returns a closure that wraps the
                * specified key, and calls it as a method.
                *
                * @param method String
                * A string containing the key to call as a method of
                * a node-like object.
                */

		function getQuerySelectorAll(
			method
		)
		{
			var key = method;
			return function (caller, selectors) {
				var result = null;
				if (canCallSelectors(caller)) {
					result = makeArray(
						caller[key](selectors)
					);
				}
				return result;
			};
		}

               /**
                * @public `Utils.select.queryAll`.
                *
                * @closure
                *
                * @description
                * Wrapper method that returns an array-like object
                * of node-like objects that match the specified
                * "selectors"; returns `null` if not applicable.
                *
                * @param caller Object
                * A node-like object object to access.
                *
                * @param selectors String
                * A string containing the "selectors" to find.
                */

		querySelectorAll = (function () {
			var key = "querySelectorAll",
				result = null;
			if (canCallSelectors(doc)) {
				if (isHostObject(doc[key])) {
					result = getQuerySelectorAll(
						key
					);
				}
			}
			return result;
		}());

               /**
                * @private
                *
                * @description
                * Helper method that converts an `HTMLCollection` to
                * an array-like object if necessary and returns it.
                *
                * @param items Object
                * An array-like or node-like object to examine.
                */

		function adjustItems(
			items
		)
		{
			var result = items;
			if (!isNodeLike(items) &&
				isArrayLike(items)) {
				result = makeArray(
					items
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns a closure that wraps the
                * specified collection, and converts it to an
                * array-like object.
                *
                * @param collection String
                * A string containing the key to access as a
                * property of a document node-like object.
                */

		function getDocumentCollection(
			collection
		)
		{
			var key = collection;
			return function (doc) {
				return makeArray(
					doc[key]
				);
			};
		}

               /**
                * @private
                *
                * @description
                * Method that returns a closure that wraps the
                * specified key; returns `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                *
                * @param key String
                * A string containing the key to access as a
                * property of a document node-like object.
                */

		function wrapCollection(
			doc,
			key
		)
		{
			var result = null;
			if (isHostObject(doc[key])) {
				result = getDocumentCollection(
					key
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns node-like objects from an
                * `HTMLCollection` based upon a key; returns `null`
                * if not applicable.
                *
                * @param collection String
                * A string containing the key to access as a
                * property of a document node-like object.
                */

		function getNamedDocumentItem(
			collection
		)
		{
			var key = collection;
			return function (doc, name) {
				return adjustItems(
					doc[key][name]
				);
			};
		}

               /**
                * @private
                *
                * @description
                * Method that returns a closure that wraps the
                * specified key; returns `null` if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                *
                * @param key String
                * A string containing the key to access as a
                * property of a document node-like object.
                */

		function wrapNamedItems(
			doc,
			key
		)
		{
			var result = null;
			if (isHostObject(doc[key])) {
				result = getNamedDocumentItem(
					key
				);
			}
			return result;
		}

               /**
                * @public `Utils.select.images`.
                *
                * @description
                * Method that returns an array-like object
                * containing the node-like objects that match the
                * specified "name" in a specific document node-like
                * object's `images` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                *
                * @param name String
                * A string containing the "name" to find.
                */

		getImages = (function () {
			return wrapNamedItems(
				doc,
				"images"
			);
		}());

               /**
                * @public `Utils.select.allImages`.
                *
                * @description
                * Method that returns an array-like object
                * containing the specified document node-like
                * object's `images` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		getAllImages = (function () {
			return wrapCollection(
				doc,
				"images"
			);
		}());

               /**
                * @public `Utils.select.embeds`.
                * @public `Utils.select.plugins`.
                *
                * @description
                * Method that returns an array-like object
                * containing the node-like objects that match the
                * specified "name" in a specific document node-like
                * object's `embeds` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                *
                * @param name String
                * A string containing the "name" to find.
                */

		getEmbeds = (function () {
			return wrapNamedItems(
				doc,
				"embeds"
			);
		}());

               /**
                * @public `Utils.select.allEmbeds`.
                * @public `Utils.select.allPlugins`.
                *
                * @description
                * Method that returns an array-like object
                * containing the specified document node-like
                * object's `embeds` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		getAllEmbeds = (function () {
			return wrapCollection(
				doc,
				"embeds"
			);
		}());

               /**
                * @public `Utils.select.links`.
                *
                * @description
                * Method that returns an array-like object
                * containing the node-like objects that match the
                * specified "name" in a specific document node-like
                * object's `links` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                *
                * @param name String
                * A string containing the "name" to find.
                */

		getLinks = (function () {
			return wrapNamedItems(
				doc,
				"links"
			);
		}());

               /**
                * @public `Utils.select.allLinks`.
                *
                * @description
                * Method that returns an array-like object
                * containing the specified document node-like
                * object's `links` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		getAllLinks = (function () {
			return wrapCollection(
				doc,
				"links"
			);
		}());

               /**
                * @public `Utils.select.forms`.
                *
                * @description
                * Method that returns an array-like object
                * containing the node-like objects that match the
                * specified "name" in a specific document node-like
                * object's `forms` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                *
                * @param name String
                * A string containing the "name" to find.
                */

		getForms = (function () {
			return wrapNamedItems(
				doc,
				"forms"
			);
		}());

               /**
                * @public `Utils.select.allForms`.
                *
                * @description
                * Method that returns an array-like object
                * containing the specified document node-like
                * object's `forms` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		getAllForms = (function () {
			return wrapCollection(
				doc,
				"forms"
			);
		}());

               /**
                * @public `Utils.select.scripts`.
                *
                * @description
                * Method that returns an array-like object
                * containing the node-like objects that match the
                * specified "name" in a specific document node-like
                * object's `scripts` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                *
                * @param name String
                * A string containing the "name" to find.
                */

		getScripts = (function () {
			return wrapNamedItems(
				doc,
				"scripts"
			);
		}());

               /**
                * @public `Utils.select.allScripts`.
                *
                * @description
                * Method that returns an array-like object
                * containing the specified document node-like
                * object's `scripts` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		getAllScripts = (function () {
			return wrapCollection(
				doc,
				"scripts"
			);
		}());

               /**
                * @public `Utils.select.applets`.
                *
                * @description
                * Method that returns an array-like object
                * containing the node-like objects that match the
                * specified "name" in a specific document node-like
                * object's `applets` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                *
                * @param name String
                * A string containing the "name" to find.
                */

		getApplets = (function () {
			return wrapNamedItems(
				doc,
				"applets"
			);
		}());

               /**
                * @public `Utils.select.allApplets`.
                *
                * @description
                * Method that returns an array-like object
                * containing the specified document node-like
                * object's `applets` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		getAllApplets = (function () {
			return wrapCollection(
				doc,
				"applets"
			);
		}());

               /**
                * @public `Utils.select.anchors`.
                *
                * @description
                * Method that returns an array-like object
                * containing the node-like objects that match the
                * specified "name" in a specific document node-like
                * object's `anchors` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                *
                * @param name String
                * A string containing the "name" to find.
                */

		getAnchors = (function () {
			return wrapNamedItems(
				doc,
				"anchors"
			);
		}());

               /**
                * @public `Utils.select.allAnchors`.
                *
                * @description
                * Method that returns an array-like object
                * containing the specified document node-like
                * object's `anchors` `HTMLCollection`; returns `null`
                * if not applicable.
                *
                * @param doc Object
                * A document node-like object to access.
                */

		getAllAnchors = (function () {
			return wrapCollection(
				doc,
				"anchors"
			);
		}());

               /**
                * @public `Utils.select.namedItem`.
                *
                * @description
                * Method that returns either a node-like object or
		* an array-like object representing the specified
		* name result of a specific `HTMLCollection`.
                *
                * @param obj Object
                * A node-like object to access.
                *
                * @param key String
                * A string containing the key to access as a
                * property of a node-like object.
                *
                * @param name String
                * A string containing the name to access
                * from the specified collection.
                */

		function getNamedItem(
			obj,
			key,
			name
		)
		{
			var result = null;
			if (obj && isHostObject(obj[key])) {
				result = adjustItems(
					obj[key][name]
				);
			}
			return result;
		}

               /**
                * @public `Utils.select.collection`.
                *
                * @description
                * Method that returns an `HTMLCollection` from the
                * specified object converted to an array-like object.
                *
                * @param obj Object
                * A node-like object to access.
                *
                * @param key String
                * A string containing the key to access as a
                * property of a node-like object.
                */

		function getCollection(
			obj,
			key
		)
		{
			var result = null;
			if (obj && isHostObject(obj[key])) {
				result = makeArray(
					obj[key]
				);
			}
			return result;
		}

		doc = null;

		Utils.select = Utils.select || {
			"byName": getElementsByName,

			"byTagName": getElementsByTagName,
			"byTagNameNS": getElementsByTagNameNS,

			"byClassName": getElementsByClassName,

			"byId": getElementById,

			"query": querySelector,
			"queryAll": querySelectorAll,

			"body": getBody,
			"head": getHead,

			"images": getImages,
			"allImages": getAllImages,

			"embeds": getEmbeds,
			"allEmbeds": getAllEmbeds,

			"plugins": getEmbeds,
			"allPlugins": getAllEmbeds,

			"links": getLinks,
			"allLinks": getAllLinks,

			"forms": getForms,
			"allForms": getAllForms,

			"scripts": getScripts,
			"allScripts": getAllScripts,
		
			"applets": getApplets,
			"allApplets": getAllApplets,

			"anchors": getAnchors,
			"allAnchors": getAllAnchors,

			"namedItem": getNamedItem,
			"collection": getCollection
		};
	}());
}

if (typeof Utils === "object" && Utils) {

	Utils.event = Utils.event || {};

       /**
        * @public
        *
        * @description
        * Object containing custom `this` values
        * for use with bound event handlers.
        */

	Utils.event.these = {};

       /**
        * @public
        *
        * @description
        * Object containing all event handlers
        * created via this module.
        */

	Utils.event.handlers = {};

	(function () {

               /**
                * @module
                * Utils.event
                *
                * @description
                *
                * @dependencies
                * * null
                */

		var hostTypes,

			doc,

			canCall,

			handlerId,

			canGetParentWindow,
			canGetDefaultView,

			isWindow,

			addWindowListener,
			removeWindowListener,

			nodeTypes,

			isDocument,

			docEl,

			addDocumentListener,
			removeDocumentListener,

			addElementListener,
			removeElementListener;

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
                * @description
                * Variable containing the current document
                * node-like object.
                */

		doc = global.document;

               /**
                * @private
                *
                * @description
                * Boolean asserting if `Function.prototype.call`
                * is available.
                */

		canCall = typeof Function.prototype.call ===
			"function";

               /**
                * @private
                *
                * @description
                * Number representing the numeric index for the
                * next event handler created via this module.
                */

		handlerId = 0;

               /**
                * @private
                *
                * @description
                * Method that returns the stored `this` value
                * corresponding to the specified numeric index.
                *
                * @param id Number
                * A numeric key to access.
                */

		function getThisValue(
			id
		)
		{
			var t = "these";
			return Utils.event[t][id];
		}

               /**
                * @private
                *
                * @description
                * Method that returns the unbound event handler
                * corresponding to the specified numeric index.
                *
                * @param id Number
                * A numeric key to access.
                */

		function getUnboundHandler(
			id
		)
		{
			var h = "handlers",
				u = "unbound";
			return Utils.event[h][id][u];
		}

               /**
                * @private
                *
                * @description
                * Method that returns a bound event handler created
                * from the implicit unbound event handler
                * corresponding to the specified numeric index.
                *
                * @param id Number
                * A numeric key to access.
                */

		function generateBoundHandler(
			id
		)
		{
			return function (evt) {
				return getUnboundHandler(id).call(
					getThisValue(id),
					evt
				);
			};
		}

               /**
                * @private
                *
                * @description
                * Method that returns a bound event handler created
                * from the specified numeric index, and attaches
                * a numeric id property to the handler; returns
                * `null` if not applicable.
                *
                * @param id Number
                * A numeric key to access.
                */

		function createBoundHandler(
			id
		)
		{
			var result = null;
			if (canCall) {
				result = generateBoundHandler(
					id
				);
				result.handlerId = handlerId;
				handlerId += 1;
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Helper method that creates a bound event handler
                * and a new "row" in the event handlers table along
                * with a new "row" in the `this` values table.
                *
                * @param handler Function
                * An unbound event handler to bind.
                *
                * @param thisValue *
                * A value to bind to pass the unbound event handler
                * as the value of the `this` keyword.
                */

		function createHandlerRow(
			handler,
			thisValue
		)
		{
			var h = "handlers",
				id = handlerId,
				t = "these",
				b = "bound";
			Utils.event[h][id] = {
				"unbound": handler,
				"bound": createBoundHandler(id)
			};
			Utils.event[t][id] = thisValue;
			handler = null;
			thisValue = null;
			return Utils.event[h][id][b];
		}

               /**
                * @public `Utils.event.bindHandler`
                *
                * @description
                * Method that creates a bound event handler from
                * the specified unbound event handler and a
                * specific value for the `this` keyword; returns
                * the unbound handler if not applicable.
                *
                * @param handler Function
                * An unbound event handler to bind.
                *
                * @param thisValue *
                * A value to bind to pass the unbound event handler
                * as the value of the `this` keyword.
                */

		function bindHandler(
			handler,
			thisValue
		)
		{
			var u = "undefined";
			if (handler && typeof handler ===
				"function") {
				if (handler.handlerId === global[u]) {
					return createHandlerRow(
						handler,
						thisValue
					);
				}
			}
			thisValue = null;
			return handler;
		}

		Utils.event.bindHandler = bindHandler;

               /**
                * @private
                *
                * @description
                * Method that deletes the "row" corresponding
                * to the specified numeric index in the event
                * handlers "table".
                *
                * @param id Number
                * A numeric index to access.
                */

		function removeHandlerRow(
			id
		)
		{
			var e = "event",
				h = "handlers",
				obj = Utils[e][h],
				u = "undefined",
				result = false;
			if (obj[id] !== global[u]) {
				result = delete obj[id];
			}
			obj = null;
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that deletes the "row" corresponding
                * to the specified numeric index in the `this`
                * keyword values "table".
                *
                * @param id Number
                * A numeric index to access.
                */

		function removeThisValue(
			id
		)
		{
			var e = "event",
				t = "these",
				obj = Utils[e][t],
				u = "undefined",
				result = false;
			if (obj[id] !== global[u]) {
				result = delete obj[id];
			}
			obj = null;
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that deletes the "rows" corresponding
                * to the specified numeric index in both the event
                * handlers "table" and the `this` keyword values
                * "table".
                *
                * @param id Number
                * A numeric index to access.
                */

		function clearHandlerData(
			id
		)
		{
			var result;
			removeHandlerRow(
				id
			);
			removeThisValue(
				id
			);
			return result;
		}

               /**
                * @public `Utils.event.unbindHandler`
                *
                * @description
                * Method that unbinds a bound event handler from
                * the specified bound event handler and removes
                * its corresponding "rows" from both the event
                * handlers and `this` keyword values "tables";
                * returns `null` if not applicable.
                *
                * @param bound Function
                * An bound event handler to unbind.
                */

		function unbindHandler(
			bound
		)
		{
			var result = null;
			if (bound && typeof bound ===
				"function") {
				if (typeof bound.handlerId ===
					"number") {
					result = getUnboundHandler(
						bound.handlerId
					);
					clearHandlerData(
						bound.handlerId
					);
				}
			}
			bound = null;
			return result;
		}

		Utils.event.unbindHandler = unbindHandler;

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
			return obj === global;
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
                * @private
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

               /**
                * @private
                *
                * @description
                * Method that adds an event listener to the
                * specified EventTarget object.
                *
                * @param obj Object
                * An EventTarget object to add a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase will be
                * utilised for the event.
                *
                * @see DOM Level 2+ Events Spec
                */

		function addEvent(
			obj,
			evt,
			handler,
			capture
		)
		{
			var key = "addEventListener",
				result;
			obj[key](
				evt,
				handler,
				capture
			);
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that adds an event listener to the
                * specified Window object; returns `null` if not
                * applicable.
                *
                * @param win Object
                * A Window object to add a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase will be
                * utilised for the event.
                */

		function addWindowEvent(
			win,
			evt,
			handler,
			capture
		)
		{
			var result = null;
			if (isWindow(win)) {
				result = addEvent(
					win,
					evt,
					handler,
					capture
				);
			}
			win = null;
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that attaches an event listener to the
                * specified object.
                *
                * @param obj Object
                * An object to attach a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                *
                * @see MSDN, attachEvent
                */

		function attachEvent(
			obj,
			evt,
			handler
		)
		{
			var key = "attachEvent",
				result;
			obj[key](
				"on" + evt,
				handler
			);
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that attaches an event listener to the
                * specified Window object; returns `null` if not
                * applicable.
                *
                * @param win Object
                * A Window object to add a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                */

		function attachWindowEvent(
			win,
			evt,
			handler
		)
		{
			var result = null;
			if (isWindow(win)) {
				result = attachEvent(
					win,
					evt,
					handler
				);
			}
			win = null;
			return result;
		}

               /**
                * @public `Utils.event.addWindowListener`
                *
                * @closure
                *
                * @description
                * Wrapper method that returns a method that adds an
                * event listener to the specified Window object;
                * returns `null` if not applicable.
                *
                * @param win Object
                * A Window object to add a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase will be
                * utilised for the event.
                *
                * @see `addWindowEvent`.
                * @see `attachWindowEvent`.
                */

		addWindowListener = (function () {
			var aEL = "addEventListener",
				aE = "attachEvent",
				result = null;
			if (isHostObject(global.window[aEL])) {
				result = addWindowEvent;
			} else if (isHostObject(global.window[aE])) {
				result = attachWindowEvent;
			}
			return result;
		}());

		Utils.event.addWindowListener =
			addWindowListener;

               /**
                * @private
                *
                * @description
                * Method that removes an event listener from the
                * specified EventTarget object.
                *
                * @param obj Object
                * An EventTarget object to remove a listener from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase was used
                * for the specified listener.
                *
                * @see DOM Level 2+ Events Spec
                */

		function removeEvent(
			obj,
			evt,
			handler,
			capture
		)
		{
			var key = "removeEventListener",
				result;
			obj[key](
				evt,
				handler,
				capture
			);
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that removes an event listener from the
                * specified Window object; returns `null` if not
                * applicable.
                *
                * @param win Object
                * A Window object to remove a listener from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase was used
                * for the specified listener.
                */

		function removeWindowEvent(
			win,
			evt,
			handler,
			capture
		)
		{
			var result = null;
			if (isWindow(win)) {
				result = removeEvent(
					win,
					evt,
					handler,
					capture
				);
			}
			win = null;
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that detaches an event listener from the
                * specified object.
                *
                * @param obj Object
                * An object to detach a listener from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                *
                * @see MSDN, attachEvent
                */

		function detachEvent(
			obj,
			evt,
			handler
		)
		{
			var key = "detachEvent",
				result;
			obj[key](
				"on" + evt,
				handler
			);
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that detaches an event listener from the
                * specified Window object; returns `null` if not
                * applicable.
                *
                * @param win Object
                * A Window object to detach a listener from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                */

		function detachWindowEvent(
			win,
			evt,
			handler
		)
		{
			var result = null;
			if (isWindow(win)) {
				result = detachEvent(
					win,
					evt,
					handler
				);
			}
			win = null;
			return result;
		}

               /**
                * @public `Utils.event.removeWindowListener`
                *
                * @closure
                *
                * @description
                * Wrapper method that returns a method that removes
                * an event listener from the specified Window object;
                * returns `null` if not applicable.
                *
                * @param win Object
                * A Window object to remove a listener from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase was used
                * for the specified listener.
                *
                * @see `removeWindowEvent`.
                * @see `detachWindowEvent`.
                */

		removeWindowListener = (function () {
			var rEL = "removeEventListener",
				dE = "detachEvent",
				result = null;
			if (isHostObject(global.window[rEL])) {
				result = removeWindowEvent;
			} else if (isHostObject(global.window[dE])) {
				result = detachWindowEvent;
			}
			return result;
		}());

		Utils.event.removeWindowListener =
			removeWindowListener;

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
                * @closure
                *
                * @description
                * Wrapper method that returns a boolean asserting if
                * the specified object is a document node-like
                * object or the current document.
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
                * @private
                *
                * @description
                * Method that adds an event listener to the
                * specified Document node-like object; returns
                * `null` if not applicable.
                *
                * @param doc Object
                * A Document node-like object to add a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase will be
                * utilised for the event.
                */

		function addDocumentEvent(
			doc,
			evt,
			handler,
			capture
		)
		{
			var result = null;
			if (isDocument(doc)) {
				result = addEvent(
					doc,
					evt,
					handler,
					capture
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that attaches an event listener to the
                * specified Document node-like object; returns
                * `null` if not applicable.
                *
                * @param doc Object
                * A Document node-like object to add a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                */

		function attachDocumentEvent(
			doc,
			evt,
			handler
		)
		{
			var result = null;
			if (isDocument(doc)) {
				result = attachEvent(
					doc,
					evt,
					handler
				);
			}
			return result;
		}

               /**
                * @public `Utils.event.addDocumentListener`
                *
                * @closure
                *
                * @description
                * Wrapper method that returns a method that adds an
                * event listener to the specified Document node-like
                * object; returns `null` if not applicable.
                *
                * @param doc Object
                * A Document node-like object to add a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase will be
                * utilised for the event.
                *
                * @see `addDocumentEvent`.
                * @see `attachDocumentEvent`.
                */

		addDocumentListener = (function () {
			var aEL = "addEventListener",
				aE = "attachEvent",
				result = null;
			if (isHostObject(doc[aEL])) {
				result = addDocumentEvent;
			} else if (isHostObject(doc[aE])) {
				result = attachDocumentEvent;
			}
			return result;
		}());

		Utils.event.addDocumentListener =
			addDocumentListener;

               /**
                * @private
                *
                * @description
                * Method that removes an event listener from the
                * specified Document node-like object; returns
                * `null` if not applicable.
                *
                * @param doc Object
                * A Document node-like object to remove a listener
                * from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase was used
                * for the specified listener.
                */

		function removeDocumentEvent(
			doc,
			evt,
			handler,
			capture
		)
		{
			var result = null;
			if (isDocument(doc)) {
				result = removeEvent(
					doc,
					evt,
					handler,
					capture
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that detaches an event listener from the
                * specified Document node-like object; returns
                * `null` if not applicable.
                *
                * @param doc Object
                * A Document node-like object to detach a listener
                * from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                */

		function detachDocumentEvent(
			doc,
			evt,
			handler
		)
		{
			var result = null;
			if (isDocument(doc)) {
				result = detachEvent(
					doc,
					evt,
					handler
				);
			}
			return result;
		}

               /**
                * @public `Utils.event.removeDocumentListener`
                *
                * @closure
                *
                * @description
                * Wrapper method that returns a method that removes
                * an event listener from the specified Document
                * node-like object; returns `null` if not applicable.
                *
                * @param doc Object
                * A Document node-like object to remove a listener
                * from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase was used
                * for the specified listener.
                *
                * @see `removeDocumentEvent`.
                * @see `detachDocumentEvent`.
                */

		removeDocumentListener = (function () {
			var rEL = "removeEventListener",
				dE = "detachEvent",
				result = null;
			if (isHostObject(doc[rEL])) {
				result = removeDocumentEvent;
			} else if (isHostObject(doc[dE])) {
				result = detachDocumentEvent;
			}
			return result;
		}());

		Utils.event.removeDocumentListener =
			removeDocumentListener;

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
                * @private
                *
                * @description
                * Method that adds an event listener to the
                * specified Element node-like object; returns
                * `null` if not applicable.
                *
                * @param el Object
                * An Element node-like object to add a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase will be
                * utilised for the event.
                */

		function addElementEvent(
			el,
			evt,
			handler,
			capture
		)
		{
			var result = null;
			if (isElementNode(el)) {
				result = addEvent(
					el,
					evt,
					handler,
					capture
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that attaches an event listener to the
                * specified Element node-like object; returns
                * `null` if not applicable.
                *
                * @param el Object
                * An Element node-like object to add a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                */

		function attachElementEvent(
			el,
			evt,
			handler
		)
		{
			var result = null;
			if (isElementNode(el)) {
				result = attachEvent(
					el,
					evt,
					handler
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @closure
                *
                * @description
                * Wrapper method that returns the current document's
                * root Element node-like object; returns `null` if not
                * applicable.
                */

		docEl = (function () {
			var key = "documentElement",
				result = null;
			if (isHostObject(doc[key])) {
				result = doc[key];
			}
			return result;
		}());

               /**
                * @public `Utils.event.addElementListener`
                *
                * @closure
                *
                * @description
                * Wrapper method that returns a method that adds an
                * event listener to the specified Element node-like
                * object; returns `null` if not applicable.
                *
                * @param doc Object
                * An Element node-like object to add a listener to.
                *
                * @param evt String
                * A string containing the event to listen for.
                *
                * @param handler Function
                * A function to act as a callback for the event
                * listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase will be
                * utilised for the event.
                *
                * @see `addElementEvent`.
                * @see `attachElementEvent`.
                */

		addElementListener = (function () {
			var aEL = "addEventListener",
				aE = "attachEvent",
				result = null;
			if (docEl) {
				if (isHostObject(docEl[aEL])) {
					result = addElementEvent;
				} else if (isHostObject(docEl[aE])) {
					result = attachElementEvent;
				}
			}
			return result;
		}());

		Utils.event.addElementListener =
			addElementListener;

               /**
                * @private
                *
                * @description
                * Method that removes an event listener from the
                * specified Element node-like object; returns
                * `null` if not applicable.
                *
                * @param doc Object
                * An Element node-like object to remove a listener
                * from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase was used
                * for the specified listener.
                */

		function removeElementEvent(
			el,
			evt,
			handler,
			capture
		)
		{
			var result = null;
			if (isElementNode(el)) {
				result = removeEvent(
					el,
					evt,
					handler,
					capture
				);
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that detaches an event listener from the
                * specified Element node-like object; returns
                * `null` if not applicable.
                *
                * @param doc Object
                * An Element node-like object to detach a listener
                * from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                */

		function detachElementEvent(
			el,
			evt,
			handler
		)
		{
			var result = null;
			if (isElementNode(el)) {
				result = detachEvent(
					el,
					evt,
					handler
				);
			}
			return result;
		}

               /**
                * @public `Utils.event.removeElementListener`
                *
                * @closure
                *
                * @description
                * Wrapper method that returns a method that removes
                * an event listener from the specified Element
                * node-like object; returns `null` if not applicable.
                *
                * @param doc Object
                * An Element node-like object to remove a listener
                * from.
                *
                * @param evt String
                * A string containing the event that was listened
                * for.
                *
                * @param handler Function
                * A function representing the callback for the
                * event listener.
                *
                * @param capture Boolean
                * A boolean asserting if the capture phase was used
                * for the specified listener.
                *
                * @see `removeElementEvent`.
                * @see `detachElementEvent`.
                */

		removeElementListener = (function () {
			var rEL = "removeEventListener",
				dE = "detachEvent",
				result = null;
			if (docEl) {
				if (isHostObject(docEl[rEL])) {
					result = removeElementEvent;
				} else if (isHostObject(docEl[dE])) {
					result = detachElementEvent;
				}
			}
			return result;
		}());

		Utils.event.removeElementListener =
			removeElementListener;

               /**
                * @public `Utils.event.getObject`
                *
                * @description
                * Method that returns the event object for the
                * specified Event object.
                *
                * @param evt Object
                * An Event object to return.
                */

		function getEventObject(
			evt
		)
		{
			var result = evt;
			if (isHostObject(global.event)) {
				result = global.event;
			}
			return result;
		}

		Utils.event.getObject = getEventObject;

               /**
                * @private
                *
                * @description
                * Method that returns the target for the passed
                * Event object; returns `null` if not applicable.
                *
                * @param evt Object
                * An Event object to access.
                */

		function getPassedTarget(
			evt
		)
		{
			var key = "target",
				result = null;
			if (evt && isHostObject(evt[key])) {
				result = evt[key];
			}
			return result;
		}

               /**
                * @private
                *
                * @description
                * Method that returns the target for the global
                * event object; returns `null` if not applicable.
                */

		function getGlobalTarget()
		{
			var key = "srcElement",
				result = null;
			if (isHostObject(global.event[key])) {
				result = global.event[key];
			}
			return result;
		}

               /**
                * @public `Utils.event.getTarget`
                *
                * @description
                * Method that returns the target for the specified
                * Event object.
                *
                * @param evt Object
                * An Event object to access.
                *
                * @see `getPassedTarget`.
                * @see `getGlobalTarget`.
                */

		function getEventTarget(
			evt
		)
		{
			var result = getPassedTarget(
				evt
			);
			if (isHostObject(global.event)) {
				result = getGlobalTarget();
			}
			return result;
		}

		Utils.event.getTarget = getEventTarget;

		doc = null;
		docEl = null;
	}());
}

