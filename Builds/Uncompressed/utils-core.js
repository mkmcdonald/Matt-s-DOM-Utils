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
	global = global || this;


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

/*
        jslint sloppy: true, white: true, maxerr: 1,
        indent: 8
*/

/*
        jshint forin: true, noarg: true, noempty: true,
        eqeqeq: true, bitwise: true, undef: true, curly: true,
        indent: 8, maxerr: 1
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
                * * Utils.types
                */

		var nodeTypes = Utils.types,
			hostTypes,

			doc,

			isDocument;

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
                * @closure
                *
                * @description
                * Object containing the current document
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
                * @public `Utils.is.type`.
                *
                * @description
                * Method that returns a boolean asserting
                * if the specified value returns a specific
                * string from a `typeof` check.
                *
                * @param val *
                * A value to use for a `typeof` check.
                *
                * @param type String
                * A string to assert for equality against the
                * `typeof` check.
                */

		function isType(
			val,
			type
		)
		{
			return typeof val === type;
		}

               /**
                * @public `Utils.is.hostObject`.
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

		doc = null;

		Utils.is = Utils.is || {
			"type": isType,

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
			"notation": isNotationNode
		};
	}());
}

if (typeof Utils === "object" && Utils) {
	(function () {

               /**
                * @module
                * Utils.helpers
                *
                * @description
                * Various helper methods for common tasks.
                *
                * @dependencies
                * * Utils.is
                */

		var isArrayLike = Utils.is.arrayLike;

               /**
                * @public `Utils.helpers.makeArray`.
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

		Utils.helpers = Utils.helpers || {
			"makeArray": makeArray
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
                * * Utils.is
                */

		var nodeTypes = Utils.types,
			isNodeLike = Utils.is.nodeLike,
			isHostObject = Utils.is.hostObject,
			isArrayLike = Utils.is.arrayLike,

			valueSetters;

		valueSetters = (function () {
			var result = {};
			result[nodeTypes.TEXT_NODE] = true;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				true;
			result[nodeTypes.COMMENT_NODE] = true;
			return result;
		}());

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
                * Wrapper method for `appendChild`; returns the
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

