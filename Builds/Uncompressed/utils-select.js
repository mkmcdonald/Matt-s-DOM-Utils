var Utils = Utils || {},
	global = this;
/*
        Matt's DOM Utils

        Description:

        A collection of widely-tested DOM utilities and modules
        that work in a maximal amount of environments.

        Contact:

        Matt McDonald
        [firstName.toLowerCase();]@fortybelow.ca
        http://www.fortybelow.ca
*/
/*
        jslint sloppy: true,
        white: true, maxerr: 1, indent: 8
*/

/*
        jshint forin:true, noarg:true, noempty:true, eqeqeq:true,
        bitwise:true, undef:true, curly:true, indent:4, maxerr:50
*/

if (Utils) {
	(function () {

		/*
                        Utils.raise

                        Description:

                        DOM Level 4-compliant custom errors and
                        methods to "raise" (throw) them.

                        Dependencies:

                        * null;
		*/

		/*
                        Public object exposing errors as specified
                        in the DOM Level 4 Spec 3.3 (Error types).
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


                /*        PUBLIC METHOD        */


		function raiseIndexSize()
		{
			throw new Error(
				errorTypes.INDEX_SIZE_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseHeirarchyRequest()
		{
			throw new Error(
				errorTypes.HEIRARCHY_REQUEST_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseWrongDocument()
		{
			throw new Error(
				errorTypes.WRONG_DOCUMENT_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseInvalidCharacter()
		{
			throw new Error(
				errorTypes.INVALID_CHARACTER_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseNoModificationAllowed()
		{
			var key = "NO_MODIFICATION_ALLOWED_ERROR";
			throw new Error(
				errorTypes[key]
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseNotFound()
		{
			throw new Error(
				errorTypes.NOT_FOUND_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseNotSupported()
		{
			throw new Error(
				errorTypes.NOT_SUPPORTED_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseInvalidState()
		{
			throw new Error(
				errorTypes.INVALID_STATE_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseSyntax()
		{
			throw new Error(
				errorTypes.SYNTAX_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseInvalidModification()
		{
			throw new Error(
				errorTypes.INVALID_MODIFICATION_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseNamespace()
		{
			throw new Error(
				errorTypes.NAMESPACE_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseInvalidAccess()
		{
			throw new Error(
				errorTypes.INVALID_ACCESS_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseTypeMismatch()
		{
			throw new Error(
				errorTypes.TYPE_MISMATCH_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseSecurity()
		{
			throw new Error(
				errorTypes.SECURITY_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseNetwork()
		{
			throw new Error(
				errorTypes.NETWORK_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseAbort()
		{
			throw new Error(
				errorTypes.ABORT_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseURLMismatch()
		{
			throw new Error(
				errorTypes.URL_MISMATCH_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseQuotaExceeded()
		{
			throw new Error(
				errorTypes.QUOTA_EXCEEDED_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseTimeout()
		{
			throw new Error(
				errorTypes.TIMEOUT_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseInvalidNodeType()
		{
			throw new Error(
				errorTypes.INVALID_NODE_TYPE_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseDataClone()
		{
			throw new Error(
				errorTypes.DATA_CLONE_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


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
			"urlMismatch": raiseURLMismatch,
			"quotaExceeded": raiseQuotaExceeded,
			"timeout": raiseTimeout,
			"invalidNodeType":
				raiseInvalidNodeType,
			"dataClone": raiseDataClone
		};
	}());
}

if (Utils) {
	(function () {

		/*
                        Utils.types

                        Description:

                        Documented `nodeType`s. See the DOM 4
                        Spec 5.3 (Node, nodeType).

                        Dependencies:

                        * null;
		*/

		/*
                        Public object of documented `nodeType`s.
                        See the DOM 4 Spec 5.3 (Node, nodeType).
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

if (Utils) {
	(function () {

		/*
                        Utils.helpers

                        Description:

                        Various helper methods for common tasks.

                        Dependencies:

                        * Utils.is;
		*/


                /*        PUBLIC METHOD        */


		function makeLinearArray(
			obj
		)
		{
			/*
                                Public method that
                                takes an iterable object and
                                creates an array.
			*/
			var index,
				arrayLike = Utils.is.arrayLike(
					obj
				),
				result = [],
				node;
			if (arrayLike) {
				result.length = obj.length;
				index = obj.length - 1;
				while (index > -1) {
					node = obj[index];
					result[index] = node;
					index -= 1;
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		Utils.helpers = Utils.helpers || {
			"makeLinearArray": makeLinearArray
		};
	}());
}

if (Utils) {
	(function () {

		/*
                        Utils.is

                        Description:

                        Various tests

                        Dependencies:

                        * Utils.types;
		*/

		var nodeTypes = Utils.types;


                /*        PUBLIC METHOD        */


		function isType(
			val,
			type
		)
		{
			/*
                                Public method that returns a
                                boolean asserting if `val`
                                returns `type` from a typeof`
                                check.
			*/
			type = String(type);
			return typeof val === type;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isHostObject(
			obj
		)
		{
			/*
                                Public method that returns a
                                boolean asserting if `obj`
                                resembles a host object (by having
                                a "type" of "object", "function" or
                                "unknown".)
			*/
			var isObj,
				isFunc,
				isUnknown,
				result = false;
			isObj = isType(obj, "object");
			isFunc = isType(obj, "function");
			isUnknown = isType(obj, "unknown");
			if (isObj || isFunc || isUnknown) {
				result = true;
			}
			return result;
		}


                /*        END PUBLIC METHOD */


                /*        PUBLIC METHOD        */


		function isArrayLike(
			obj
		)
		{
			/*
                                Public method that returns a
                                boolean asserting if `obj`
                                is array-like.
			*/
			var isObj = isHostObject(obj),
				result = false;
			if (obj && isObj) {
				result = isType(
					obj.length,
					"number"
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isNodeLike(
			obj
		)
		{
			/*
                                Public method that returns a
                                boolean asserting if `obj`
                                is node-like.
			*/
			var isObj = isHostObject(obj),
				result = false;
			if (obj && isObj) {
				result = isType(
					obj.nodeType,
					"number"
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isNodeType(
			obj,
			type
		)
		{
			/*
                                Public method that returns a
                                boolean asserting if a node-like
                                object has a certain value for
                                the `nodeType` property.
			*/
			var valid = isNodeLike(obj),
				result = false;
			type = Number(type);
			if (valid) {
				result = obj.nodeType === type;
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isElementNode(
			obj
		)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.ELEMENT_NODE;
			return isNodeType(obj, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isAttributeNode(
			obj
		)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.ATTRIBUTE_NODE;
			return isNodeType(obj, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isTextNode(
			obj
		)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.TEXT_NODE;
			return isNodeType(obj, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isCDataSectionNode(
			obj
		)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.CDATA_SECTION_NODE;
			return isNodeType(obj, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isEntityReferenceNode(
			obj
		)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var key = "ENTITY_REFERENCE_NODE",
				type = nodeTypes[key];
			return isNodeType(obj, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isEntityNode(
			obj
		)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.ENTITY_NODE;
			return isNodeType(obj, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isProcessingInstructionNode(
			obj
		)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var key = "PROCESSING_INSTRUCTION_NODE",
				type = nodeTypes[key];
			return isNodeType(obj, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isCommentNode(
			obj
		)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.COMMENT_NODE;
			return isNodeType(obj, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isDocumentNode(
			obj
		)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.DOCUMENT_NODE;
			return isNodeType(obj, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isDocumentTypeNode(
			obj
		)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.DOCUMENT_TYPE_NODE;
			return isNodeType(obj, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isDocumentFragmentNode(
			obj
		)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var key = "DOCUMENT_FRAGMENT_NODE",
				type = nodeTypes[key];
			return isNodeType(obj, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isNotationNode(
			obj
		)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.NOTATION_NODE;
			return isNodeType(obj, type);
		}


                /*        END PUBLIC METHOD        */


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
			"document": isDocumentNode,
			"documentType": isDocumentTypeNode,
			"documentFragment":
				isDocumentFragmentNode,
			"notation": isNotationNode
		};
	}());
}

if (Utils) {
	(function () {

		/*
                        Utils.can

                        Description:

                        Various capability tests for core
                        modules that follow.

                        Dependencies:

                        * Utils.types;
                        * Utils.is;
		*/


                /*        PUBLIC METHOD        */


		function canGetName(
			obj
		)
		{
			/*
                                Public method that returns a
                                boolean asserting if a node-like
                                object can "use" the `nodeName`
                                property.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				result = false;
			if (isNodeLike) {
				result = Utils.is.type(
					obj.nodeName,
					"string"
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function canGetValue(
			obj
		)
		{
			/*
                                Public method that returns a
                                boolean asserting if a node-like
                                object can "use" the `nodeValue`
                                property.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				result = false;
			if (isNodeLike) {
				result = Utils.is.type(
					obj.nodeValue,
					"string"
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function canGetOwnerDocument(
			obj
		)
		{
			/*
                                Public method that returns a
                                boolean asserting if a node-like
                                object can "use" the
                                `ownerDocument` property.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				result = false;
			if (isNodeLike) {
				result = Utils.is.document(
					obj.ownerDocument
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		Utils.can = Utils.can || {
			"getName": canGetName,
			"getValue": canGetValue,
			"getOwnerDocument": canGetOwnerDocument
		};
	}());
}

if (Utils) {
	(function () {

		/*
                        Utils.node

                        Description:

                        Various DOM node method wrappers.

                        Dependencies:

                        * Utils.host;
                        * Utils.is;
		*/


                /*        PUBLIC METHOD        */


		function insertBefore(
			par,
			newObj,
			refObj
		)
		{
			/*
                                Public wrapper method for
                                `insertBefore`; returns the wrapper
                                method's result or `null` if not
                                applicable.
			*/
			var validParent = Utils.is.nodeLike(par),
				newIsNode = Utils.is.nodeLike(newObj),
				refIsNode = Utils.is.nodeLike(refObj),
				isHostObject,
				key = "insertBefore",
				result = null;
			if (validParent && newIsNode && refIsNode) {
				isHostObject = Utils.is.hostObject(
					par[key]
				);
				if (isHostObject) {
					result = par[key](
						newObj,
						refObj
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function appendChild(
			par,
			obj
		)
		{
			/*
                                Public wrapper method for
                                `appendChild`; returns the wrapper
                                method's result or `null` if not
                                applicable.
			*/
			var validParent = Utils.is.nodeLike(par),
				validNode = Utils.is.nodeLike(obj),
				isHostObject,
				key = "appendChild",
				result = null;
			if (validParent && validNode) {
				isHostObject = Utils.is.hostObject(
					par[key]
				);
				if (isHostObject) {
					result = par[key](
						obj
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function removeChild(
			par,
			obj
		)
		{
			/*
                                Public wrapper method for
                                `removeChild`; returns the wrapper
                                method's result or `null` if not
                                applicable.
			*/
			var validParent = Utils.is.nodeLike(par),
				validNode = Utils.is.nodeLike(obj),
				isHostObject,
				key = "removeChild",
				result = null;
			if (validParent && validNode) {
				isHostObject = Utils.is.hostObject(
					par[key]
				);
				if (isHostObject) {
					result = par[key](
						obj
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function replaceChild(
			par,
			newObj,
			oldObj
		)
		{
			/*
                                Public wrapper method for
                                `replaceChild`; returns the wrapper
                                method's result or `null` if not
                                applicable.
			*/
			var validParent = Utils.is.nodeLike(par),
				newIsNode = Utils.is.nodeLike(newObj),
				oldIsNode = Utils.is.nodeLike(oldObj),
				isHostObject,
				key = "replaceChild",
				result = null;
			if (validParent && newIsNode && oldIsNode) {
				isHostObject = Utils.is.hostObject(
					par[key]
				);
				if (isHostObject) {
					result = par[key](
						newObj,
						oldObj
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function cloneNode(
			obj,
			deep
		)
		{
			/*
                                Public wrapper method for
                                `cloneNode`; returns the wrapper
                                method's result or `null` if not
                                applicable.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				isHostObject,
				key = "cloneNode",
				result = null;
			deep = Boolean(deep);
			if (isNodeLike) {
				isHostObject = Utils.is.hostObject(
					obj[key]
				);
				if (isHostObject) {
					result = obj[key](
						obj,
						deep
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getName(
			obj,
			lower
		)
		{
			/*
                                Public wrapper method for
                                `nodeName`; returns the
                                property's result or `null`
                                if not applicable.
			*/
			var canGet = Utils.can.getName(obj),
				lowKey = "toLowerCase",
				upKey = "toUpperCase",
				result = null;
			lower = Boolean(lower);
			if (canGet) {
				result = obj.nodeName;
				if (lower) {
					result = result[lowKey]();
				} else if (!lower) {
					result = result[upKey]();
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getValue(
			obj
		)
		{
			/*
                                Public wrapper method for
                                `nodeValue`; returns the
                                property's result or `null`
                                if not applicable.
			*/
			var canGet = Utils.can.getValue(obj),
				result = null;
			if (canGet) {
				result = obj.nodeValue;
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		Utils.node = Utils.node || {
			"prepend": insertBefore,
			"append": appendChild,
			"remove": removeChild,
			"replace": replaceChild,
			"clone": cloneNode,
			"name": getName,
			"value": getValue
		};
	}());
}

if (Utils) {
	(function () {

		/*
                        Utils.create

                        Description:

                        DOM creation method wrappers.

                        Dependencies:

                        * Utils.is;
                        * Utils.node;
		*/


                /*        PUBLIC METHOD        */


		function createElement(
			doc,
			tag
		)
		{
			/*
                                Public wrapper method for
                                `createElement`; returns the
                                wrapper method's result or `null`
                                if not applicable.
			*/
			var isDocument = Utils.is.document(doc),
				key = "createElement",
				isHostObject,
				result = null;
			tag = String(tag);
			if (isDocument) {
				isHostObject = Utils.is.hostObject(
					doc[key]
				);
				if (isHostObject) {
					result = doc[key](
						tag
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function createElementNS(
			doc,
			ns,
			tag
		)
		{
			/*
                                Public wrapper method for
                                `createElementNS`; returns the
                                wrapper method's result or `null`
                                if not applicable.
			*/
			var isDocument = Utils.is.document(doc),
				key = "createElementNS",
				isHostObject,
				result = null;
			ns = String(ns);
			tag = String(tag);
			if (isDocument) {
				isHostObject = Utils.is.hostObject(
					doc[key]
				);
				if (isHostObject) {
					result = doc[key](
						ns,
						tag
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function createTextNode(
			doc,
			text
		)
		{
			/*
                                Public wrapper method for
                                `createTextNode`; returns the
                                wrapper method's result or `null`
                                if not applicable.
			*/
			var isDocument = Utils.is.document(doc),
				key = "createTextNode",
				isHostObject,
				result = null;
			text = String(text);
			if (isDocument) {
				isHostObject = Utils.is.hostObject(
					doc[key]
				);
				if (isHostObject) {
					result = doc[key](
						text
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function createProcessingInstruction(
			doc,
			target,
			text
		)
		{
			/*
                                Public wrapper method for
                                `createTextNode`; returns the
                                wrapper method's result or `null`
                                if not applicable.
			*/
			var isDocument = Utils.is.document(doc),
				key = "createProcessingInstruction",
				isHostObject,
				result = null;
			target = String(target);
			text = String(text);
			if (isDocument) {
				isHostObject = Utils.is.hostObject(
					doc[key]
				);
				if (isHostObject) {
					result = doc[key](
						target,
						text
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function createComment(
			doc,
			text
		)
		{
			/*
                                Public wrapper method for
                                `createComment`; returns the
                                wrapper method's result or `null`
                                if not applicable.
			*/
			var isDocument = Utils.is.document(doc),
				key = "createComment",
				isHostObject,
				result = null;
			text = String(text);
			if (isDocument) {
				isHostObject = Utils.is.hostObject(
					doc[key]
				);
				if (isHostObject) {
					result = doc[key](
						text
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function createDocumentFragment(
			doc
		)
		{
			/*
                                Public wrapper method for
                                `createDocumentFragment`; returns
                                the wrapper method's result or
                                `null` if not applicable.
			*/
			var isDocument = Utils.is.document(doc),
				key = "createDocumentFragment",
				isHostObject,
				result = null;
			if (isDocument) {
				isHostObject = Utils.is.hostObject(
					doc[key]
				);
				if (isHostObject) {
					result = doc[key]();
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		Utils.create = Utils.create || {
			"element": createElement,
			"elementNS": createElementNS,
			"text": createTextNode,
			"processingInstruction":
				createProcessingInstruction,
			"comment": createComment,
			"documentFragment":
				createDocumentFragment
		};
	}());
}
if (Utils) {
	(function () {

		/*
                        Utils.select

                        Description:

                        Selection wrappers.

                        Dependencies:

                        * Utils.types;
                        * Utils.helpers;
                        * Utils.is;
                        * Utils.can;
		*/

		var nodeTypes = Utils.types;

		function generateSelectorTypes()
		{
			/*
                                Private method that generates an
                                object containing applicable
                                `nodeTypes` for `querySelector*`;
			*/
			var result = {};
			result[nodeTypes.ELEMENT_NODE] = true;
			result[nodeTypes.DOCMENT_NODE] = true;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] = true;
			return result;
		}

		function canCallSelectors(
			obj
		)
		{
			/*
                                Private helper method for
                                `querySelector*`; returns a boolean
                                asserting if a node-like object can
                                call `querySelector*`.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				types = generateSelectorTypes(),
				value,
				result = false;
			if (isNodeLike) {
				value = types[obj.nodeType];
				result = Utils.is.type(
					value,
					"undefined"
				);
			}
			return result;
		}

		function makeLinearArray(
			obj
		)
		{
			/*
				Private wrapper for
				`Utils.helpers.makeLinearArray`.
			*/
			return Utils.helpers.makeLinearArray(obj);
		}


                /*        PUBLIC METHOD        */


		function getElementsByName(
			doc,
			name
		)
		{
			/*
                                Public wrapper method for
                                `getElementsByName`; returns
                                `null` if not applicable.
			*/
			var isDoc = Utils.is.document(doc),
				key = "getElementsByName",
				canUse,
				result = null;
			name = String(name);
			if (isDoc) {
				canUse = Utils.is.hostObject(
					doc[key]
				);
				if (canUse) {
					result = makeLinearArray(
						doc[key](name)
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD */


                /*        PUBLIC METHOD        */


		function getElementsByTagName(
			caller,
			tag
		)
		{
			/*
                                Public wrapper method for
                                `getElementsByTagName`; returns
                                `null` if not applicable.
			*/
			var isDoc = Utils.is.document(caller),
				isElement = Utils.is.element(
					caller
				),
				key = "getElementsByTagName",
				canUse,
				result = null;
			tag = String(tag);
			if (isDoc || isElement) {
				canUse = Utils.is.hostObject(
					caller[key]
				);
				if (canUse) {
					result = makeLinearArray(
						caller[key](tag)
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD */


                /*        PUBLIC METHOD        */


		function getElementsByTagNameNS(
			caller,
			local,
			ns
		)
		{
			/*
                                Public wrapper method for
                                `getElementsByTagNameNS`; returns
                                `null` if not applicable.
			*/
			var isDoc = Utils.is.document(caller),
				isElement = Utils.is.element(
					caller
				),
				key = "getElementsByTagNameNS",
				canUse,
				result = null;
			local = String(local);
			ns = String(ns);
			if (isDoc || isElement) {
				canUse = Utils.is.hostObject(
					caller[key]
				);
				if (canUse) {
					result = makeLinearArray(
						caller[key](local, ns)
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD */


                /*        PUBLIC METHOD        */


		function getElementsByClassName(
			caller,
			names
		)
		{
			/*
                                Public wrapper method for
                                `getElementsByClassName`; returns
                                `null` if not applicable.
			*/
			var isDoc = Utils.is.document(caller),
				isElement = Utils.is.element(
					caller
				),
				key = "getElementsByClassName",
				canUse,
				result = null;
			names = String(names);
			if (isDoc || isElement) {
				canUse = Utils.is.hostObject(
					caller[key]
				);
				if (canUse) {
					result = makeLinearArray(
						caller[key](names)
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD */


                /*        PUBLIC METHOD        */


		function getElementById(
			doc,
			id
		)
		{
			/*
                                Public wrapper method for
                                `getElementById`; returns `null`
                                if not applicable.
			*/
			var isDoc = Utils.is.document(doc),
				key = "getElementById",
				canUse,
				result = null;
			id = String(id);
			if (isDoc) {
				canUse = Utils.is.hostObject(
					doc[key]
				);
				if (canUse) {
					result = doc[key](id);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function querySelector(
			caller,
			selectors
		)
		{
			/*
                                Public wrapper method for
                                `querySelector`; returns `null`
                                if not applicable.
			*/
			var canCall = canCallSelectors(
					caller
				),
				key = "querySelector",
				canUse,
				result = null;
			selectors = String(selectors);
			if (canCall) {
				canUse = Utils.is.hostObject(
					caller[key]
				);
				if (canUse) {
					result = caller[key](
						selectors
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD */


                /*        PUBLIC METHOD        */


		function querySelectorAll(
			caller,
			selectors
		)
		{
			/*
                                Public wrapper method for
                                `querySelectorAll`; returns `null`
                                if not applicable.
			*/
			var canCall = canCallSelectors(
					caller
				),
				key = "querySelectorAll",
				canUse,
				result = null;
			selectors = String(selectors);
			if (canCall) {
				canUse = Utils.is.hostObject(
					caller[key]
				);
				if (canUse) {
					result = makeLinearArray(
						caller[key](selectors)
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD */


		function forkHead(
			doc
		)
		{
			/*
                                Private helper method
                                that forks for `document.head`;
                                returns `null` if not applicable.
			*/
			var result = null,
				heads = getElementsByTagName(
					doc,
					"head"
				),
				isArrayLike = Utils.is.arrayLike(
					heads
				);
			if (isArrayLike) {
				result = heads[0];
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function getHead(
			doc
		)
		{
			/*
                                Public method that returns
                                the specified document's `head`
                                element; returns `null` if not
                                applicable.
			*/
			var isDoc = Utils.is.document(doc),
				headProp,
				result = null;
			if (isDoc) {
				headProp = Utils.is.hostObject(
					global.document.head
				);
				if (headProp) {
					result = global.document.head;
				} else if (!headProp) {
					result = forkHead(doc);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD */


		function forkBody(
			doc
		)
		{
			/*
                                Private helper method that forks
                                for `document.body`; returns
                                `null` if not applicable.
			*/
			var result = null,
				bodies = getElementsByTagName(
					doc,
					"body"
				),
				isArrayLike = Utils.is.arrayLike(
					bodies
				);
			if (isArrayLike) {
				result = bodies[0];
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function getBody(
			doc
		)
		{
			/*
                                Public method that returns
                                the specified document's `body`
                                element; returns `null` if not
                                applicable.
			*/
			var isDoc = Utils.is.document(doc),
				bodyProp,
				result = null;
			if (isDoc) {
				bodyProp = Utils.is.hostObject(
					global.document.body
				);
				if (bodyProp) {
					result = global.document.body;
				} else if (!bodyProp) {
					result = forkBody(doc);
				}
			}
			return result;
		}

		function adjustItems(
			items
		)
		{
			/*
                                Private helper that converts
                                an `HTMLCollection` to a "static"
                                array if necessary; the result is
                                then returned.
			*/
			var isNodeLike = Utils.is.nodeLike(items),
				isArrayLike = Utils.is.arrayLike(
					items
				),
				result = items;
			if (!isNodeLike && isArrayLike) {
				result = makeLinearArray(items);
			}
			return result;
		}

		function getCollection(
			doc,
			key
		)
		{
			/*
                                Private method that returns
                                an `HTMLCollection` as a "static"
                                array; returns `null` if not
                                applicable.
			*/
			var isDoc = Utils.is.document(doc),
				canUse,
				result = null;
			key = String(key);
			if (isDoc) {
				canUse = Utils.is.hostObject(
					doc[key]
				);
				if (canUse) {
					result = adjustItems(
						doc[key]
					);
				}
			}
			return result;
		}

		function getNamedItems(
			doc,
			key,
			name
		)
		{
			/*
                                Private method that returns
                                nodes from an HTMLCollection
                                based upon a string key,
                                which is usually the `id`
                                or `name` property of a node;
                                returns `null` if not applicable.
			*/
			var isDoc = Utils.is.document(doc),
				canUse,
				result = null;
			key = String(key);
			name = String(name);
			if (isDoc) {
				canUse = Utils.is.hostObject(
					doc[key]
				);
				if (canUse) {
					result = adjustItems(
						doc[key][name]
					);
				}
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function getImages(
			doc,
			key
		)
		{
			/*
                                Public method that returns
                                the specified document's
                                `images` `HTMLCollection` as
                                a "static" array; returns `null`
                                if not applicable.
			*/
			return getNamedItems(
				doc,
				"images",
				key
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getAllImages(
			doc
		)
		{
			/*
                                Public method that returns
                                the specified document's
                                `images` `HTMLCollection` as
                                a "static" array; returns `null`
                                if not applicable.
			*/
			return getCollection(
				doc,
				"images"
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getEmbeds(
			doc,
			key
		)
		{
			/*
                                Public method that returns
                                the specified document's
                                `embeds`/`plugins` `HTMLCollection`
                                as a "static" array; returns `null`
                                if not applicable.
			*/
			return getNamedItems(
				doc,
				"embeds",
				key
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getAllEmbeds(
			doc
		)
		{
			/*
                                Public method that returns
                                the specified document's
                                `embeds` `HTMLCollection` as
                                a "static" array; returns `null`
                                if not applicable.
			*/
			return getCollection(
				doc,
				"embeds"
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getLinks(
			doc,
			key
		)
		{
			/*
                                Public method that returns
                                the specified document's
                                `links` `HTMLCollection` as
                                a "static" array; returns `null`
                                if not applicable.
			*/
			return getNamedItems(
				doc,
				"links",
				key
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getAllLinks(
			doc
		)
		{
			/*
                                Public method that returns
                                the specified document's
                                `links` `HTMLCollection` as
                                a "static" array; returns `null`
                                if not applicable.
			*/
			return getCollection(
				doc,
				"links"
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getForms(
			doc,
			key
		)
		{
			/*
                                Public method that returns
                                the specified document's
                                `forms` `HTMLCollection` as
                                a "static" array; returns `null`
                                if not applicable.
			*/
			return getNamedItems(
				doc,
				"forms",
				key
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getAllForms(
			doc
		)
		{
			/*
                                Public method that returns
                                the specified document's
                                `forms` `HTMLCollection` as
                                a "static" array; returns `null`
                                if not applicable.
			*/
			return getCollection(
				doc,
				"forms"
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getScripts(
			doc,
			key
		)
		{
			/*
                                Public method that returns
                                the specified document's
                                `scripts` `HTMLCollection` as
                                a "static" array; returns `null`
                                if not applicable.
			*/
			return getNamedItems(
				doc,
				"scripts",
				key
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getAllScripts(
			doc
		)
		{
			/*
                                Public method that returns
                                the specified document's
                                `scripts` `HTMLCollection` as
                                a "static" array; returns `null`
                                if not applicable.
			*/
			return getCollection(
				doc,
				"scripts"
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getApplets(
			doc,
			key
		)
		{
			/*
                                Public method that returns
                                the specified document's
                                `applets` `HTMLCollection` as
                                a "static" array; returns `null`
                                if not applicable.
			*/
			return getNamedItems(
				doc,
				"applets",
				key
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getAllApplets(
			doc
		)
		{
			/*
                                Public method that returns
                                the specified document's
                                `applets` `HTMLCollection` as
                                a "static" array; returns `null`
                                if not applicable.
			*/
			return getCollection(
				doc,
				"applets"
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getAnchors(
			doc,
			key
		)
		{
			/*
                                Public method that returns
                                the specified document's
                                `anchors` `HTMLCollection` as
                                a "static" array; returns `null`
                                if not applicable.
			*/
			return getNamedItems(
				doc,
				"anchors",
				key
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getAllAnchors(
			doc
		)
		{
			/*
                                Public method that returns
                                the specified document's
                                `anchors` `HTMLCollection` as
                                a "static" array; returns `null`
                                if not applicable.
			*/
			return getCollection(
				doc,
				"anchors"
			);
		}


                /*        END PUBLIC METHOD        */


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
			"allAnchors": getAllAnchors
		};
	}());
}

