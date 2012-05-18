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
                        Utils.traverse

                        Description:

                        Various methods used to traverse DOM
                        nodes.

                        Dependencies:

                        * Utils.types;
                        * Utils.helpers;
                        * Utils.is;
                        * Utils.can;
                        * Utils.node;
			* Utils.create;
		*/

		var nodeTypes = Utils.types;

		function generateTextGetters()
		{
			/*
                                Private method that "generates"
                                an object with keys of `nodeType`s
                                that can "get" text.
			*/
			var result = {};
			result[nodeTypes.ELEMENT_NODE] = true;
			result[nodeTypes.TEXT_NODE] = true;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				true;
			result[nodeTypes.COMMENT_NODE] = true;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] =
				true;
			return result;
		}

		function canGetText(
			obj
		)
		{
			/*
                                Private method that returns a
                                boolean asserting if the specified
                                node can "get" textual content.
			*/
			var validNode = Utils.is.nodeLike(obj),
				getters = generateTextGetters(),
				getter,
				result = false;
			if (validNode) {
				getter = getters[obj.nodeType];
				if (getter) {
					result = true;
				}
			}
			return result;
		}

		function generateTextSetters()
		{
			/*
                                Private method that "generates"
                                an object with keys of `nodeType`s
                                that can "set" text.
			*/
			var result = {};
			result[nodeTypes.ELEMENT_NODE] = true;
			result[nodeTypes.TEXT_NODE] = true;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				true;
			result[nodeTypes.COMMENT_NODE] = true;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] =
				true;
			return result;
		}

		function canSetText(
			obj
		)
		{
			/*
                                Private method that returns a
                                boolean asserting if the specified
                                node can "set" textual content.
			*/
			var validNode = Utils.is.nodeLike(obj),
				setters = generateTextSetters(),
				setter,
				result = false;
			if (validNode) {
				setter = setters[obj.nodeType];
				if (setter) {
					result = true;
				}
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function getAncestorList(
			obj
		)
		{
			/*
                                Public method that builds a linked
                                list of ancestors from a node-like
                                object to the top of the document
                                tree (`document`); returns null if
                                not applicable.

                                Example result (`obj` is
                                `document.body`):

                                {
                                        "parent": {
                                                "parent": null,
                                                "value": [`document`]
                                        },
                                        "value": [`documentElement`]
                                }
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				key = "parent",
				result = null;
			if (isNodeLike) {
				if (obj.parentNode) {
					result = {};
					result.value = obj.parentNode;
					result[key] = getAncestorList(
						obj.parentNode
					);
				} else if (!obj.parentNode) {
					result = null;
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function listContainsNode(
			list,
			obj
		)
		{
			/*
                                Private method returning
                                a boolean asserting a if a linked
                                list (preferably created via
                                `getAncestorList`) contains a
                                node-like object.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				key = "parent",
				result = false;
			if (isNodeLike) {
				while (list) {
					if (list.value === obj) {
						result = true;
						break;
					}
					list = list[key];
				}
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function isAncestor(
			par,
			obj
		)
		{
			/*
                                Public method returning a boolean
                                asserting if a given node-like
                                object is an ancestor of another
                                node-like object (via
                                `listContainsNode`.)
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				list,
				result = false;
			if (isNodeLike) {
				list = getAncestorList(obj);
				result = listContainsNode(
					list,
					par
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function canTraverseList(
			list
		)
		{
			/*
                                Private helper method for
                                `traverseList`; returns a boolean
                                asserting if a linked list can be
                                traversed.
			*/
			var isObj = Utils.is.type(list, "object"),
				hasVal,
				result = false;
			if (list && isObj) {
				hasVal = Utils.is.type(
					list.value,
					"object"
				);
				result = hasVal;
			}
			return result;
		}

		function pushCallback(
			obj,
			callback,
			result
		)
		{
			/*
                                Private helper method for `traverse*`
                                methods; calls callback with
                                a node-like object passed.
			*/
			var isCallback = Utils.is.type(
					callback,
					"function"
				),
				called;
			if (isCallback) {
				called = callback(obj);
				if (called === true) {
					result.push(obj);
				} else if (called) {
					result.push(called);
				}
			}
		}


                /*        PUBLIC METHOD        */


		function traverseList(
			list,
			callback
		)
		{
			/*
                                Public method that traverses a
                                linked list, running a callback
                                on each node in the list.
			*/
			var canUse = canTraverseList(list),
				key = "parent",
				result = [];
			if (canUse) {
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


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function traverseAncestors(
			obj,
			callback
		)
		{
			/*
                                Public method that traverses
                                a node-like object's "ancestor
                                list" (via `traverseLinkedList`).
			*/
			var isCallback = Utils.is.type(
					callback,
					"function"
				),
				list,
				result = [];
			if (isCallback) {
				list = getAncestorList(obj);
				result = traverseList(
					list,
					callback
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function makeLinearArray(
			obj
		)
		{
			/*
                                Private wrapper for
                                `Utils.helpers.makeLinearArray`.
			*/
			return Utils.helpers.makeLinearArray(
				obj
			);
		}


                /*        PUBLIC METHOD        */


		function getChildNodes(
			obj
		)
		{
			/*
                                Public method that exposes a
                                static array of `childNodes`
                                collected from a node-like object;
                                returns `null` if not applicable.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				key = "childNodes",
				isHostObject,
				result = null;
			if (isNodeLike) {
				isHostObject = Utils.is.hostObject(
					obj[key]
				);
				if (isHostObject) {
					result = makeLinearArray(
						obj[key]
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function unshiftCallback(
			obj,
			callback,
			result
		)
		{
			/*
                                Private helper method for `traverse*`
                                methods; calls callback with
                                a node-like object passed.
			*/
			var isCallback = Utils.is.type(
					callback,
					"function"
				),
				called;
			if (isCallback) {
				called = callback(obj);
				if (called === true) {
					result.unshift(obj);
				} else if (called) {
					result.unshift(called);
				}
			}
		}


                /*        PUBLIC METHOD        */


		function traverseLinear(
			obj,
			callback
		)
		{
			/*
                                Public method that traverses
                                an array-like object, running
                                a callback on each node in the
                                array.
			*/
			var isArrayLike = Utils.is.arrayLike(obj),
				index,
				node,
				result = [];
			if (isArrayLike) {
				index = obj.length - 1;
				while (index > -1) {
					node = obj[index];
					unshiftCallback(
						node,
						callback,
						result
					);
					index -= 1;
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function traverseChildNodes(
			obj,
			callback
		)
		{
			/*
                                Public method that traverses
                                a node-like object's `childNodes`
                                (via `traverseLinear`).
			*/
			var isCallback = Utils.is.type(
					callback,
					"function"
				),
				nodes,
				result = [];
			if (isCallback) {
				nodes = getChildNodes(obj);
				result = traverseLinear(
					nodes,
					callback
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function removeNode(
			obj
		)
		{
			/*
                                Private method used as a callback
                                for `traverse*`; removes a node-like
                                object from the document tree;
                                returns `null` if not applicable.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				result = null;
			if (isNodeLike) {
				Utils.node.remove(
					obj.parentNode,
					obj
				);
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function clearChildNodes(
			obj
		)
		{
			/*
                                Public method that clears a
                                a node-like object's `childNodes`,
                                returning them upon successful
                                removal; returns `null` if not
                                applicable.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				result = null;
			if (isNodeLike) {
				result = traverseChildNodes(
					obj,
					removeNode
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function forkNativeChildren(
			obj
		)
		{
			/*
                                Private helper method that
                                collects a node-like object's
                                "native" `children` as a static
                                array; returns `null` if not
                                applicable.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				isHostObject,
				result = null;
			if (isNodeLike) {
				isHostObject = Utils.is.hostObject(
					obj.children
				);
				if (isHostObject) {
					result = makeLinearArray(
						obj.children
					);
				}
			}
			return result;
		}

		function filterElementNode(
			obj
		)
		{
                        /*
                                Private callback method intended
                                to be used in conjunction with
                                `traverse*` methods; returns `true`
                                if node-like object passed is an
                                element node; returns `false`
                                otherwise.
                        */
			var isElementNode =
				Utils.is.element(
					obj
				),
				result = false;
			if (isElementNode) {
				result = true;
			}
			return result;
		}

		function canGetChildren(
			obj
		)
		{
			/*
                                Private method that returns a
                                boolean asserting if `obj` can
                                "use" the `children` property.
			*/
			var isElement = Utils.is.element(obj),
				result = false;
			if (isElement) {
				result = Utils.is.hostObject(
					obj.children
				);
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function getChildren(
			obj
		)
		{
			/*
                                Public method that collects a
                                static array of `children` (via
                                `makeArray`) from a node-like
                                object ; returns `null` if not
                                applicable.
			*/
			var canGet = canGetChildren(obj),
				nodes = [],
				result = null;
			if (canGet) {
				result = forkNativeChildren(
					obj
				);
			} else if (!canGet) {
				nodes = getChildNodes(
					obj
				);
				result = traverseLinear(
					nodes,
					filterElementNode
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function traverseChildren(
			obj,
			callback
		)
		{
			/*
                                Public method that traverses
                                a node-like object's `children`
                                (via `traverseLinear`);
			*/
			var isCallback = Utils.is.type(
					callback,
					"function"
				),
				nodes,
				result = [];
			if (isCallback) {
				nodes = getChildren(obj);
				result = traverseLinear(
					nodes,
					callback
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function removeElementNode(
			obj
		)
		{
                        /*
                                Private callback method intended
                                to be used in conjunction with
                                `traverse*` methods; returns `true`
                                if node-like object passed is an
                                element node and can be removed;
                                returns `false` otherwise.
                        */
			var isElementNode =
				Utils.is.element(
					obj
				),
				result = false;
			if (isElementNode) {
				result = Utils.node.remove(
					obj
				);
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function clearChildren(
			obj
		)
		{
			/*
                                Public method that clears a
                                a node-like object's `children`,
                                returning them upon successful
                                removal; returns `null` if not
                                applicable.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				result = null;
			if (isNodeLike) {
				result = traverseChildren(
					obj,
					removeElementNode
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function filterTextData(
			obj
		)
		{
			/*
                                Private callback method intended
                                to be used in conjunction with
                                `traverse*` methods; returns
                                `node.nodeValue` if node-like
                                object passed is a text node;
                                returns `false` otherwise.
			*/
			var validNode =
				Utils.is.text(obj),
				result = false;
			if (validNode) {
				result = obj.nodeValue;
			}
			return result;
		}

		function grabText(
			obj
		)
		{
			/*
                                Private helper method for
                                `getText` that gets the
                                `nodeValue` property of a
                                node-like object; returns `null`
                                if not applicable. For more, see
                                `getText`.
			*/
			var canGet = Utils.can.getValue(obj),
				result = null;
			if (canGet) {
				result = obj.nodeValue;
			}
			return result;
		}

		function addChildNodeTree(
			tree,
			obj,
			par
		)
		{
			/*
                                Private helper method for
                                `collectChildNodeTree`; returns
                                a boolean asserting if the tree
                                passed could be added.
			*/
			var result;
			if (tree.length) {
				par.unshift(tree);
			}
			par.unshift(obj);
			return result;
		}

		function canTraverse(
			obj
		)
		{
			/*
                                Private method returning a
                                boolean asserting if a node-like
                                object can be traversed via
                                `node.childNodes`.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				result = false;
			if (isNodeLike) {
				result = Utils.is.hostObject(
					obj.childNodes
				);
			}
			return result;
		}

		function collectChildNodeTree(
			obj
		)
		{
			/*
                                Private recursive method
                                that takes a node-like object and
                                creates an array from its "childNode
                                tree"; returns `null` if not
                                applicable.
			*/
			var hasNodes = canTraverse(obj),
				index = -1,
				tree,
				result = [];
			if (hasNodes) {
				index = obj.childNodes.length - 1;
				while (index > -1) {
					tree = collectChildNodeTree(
						obj.childNodes[index]
					);
					addChildNodeTree(
						tree,
						obj.childNodes[index],
						result
					);
					index -= 1;
				}
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function getChildNodeTree(
			obj
		)
		{
			/*
                                Public method that collects a
                                static array of `childNodes` (via
                                `makeArray`) from a node-like object;
                                returns `null` if not applicable.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				isHostObject,
				result = null;
			if (isNodeLike) {
				isHostObject = Utils.is.hostObject(
					obj.childNodes
				);
				if (isHostObject) {
					result = collectChildNodeTree(
						obj
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function handleRecursiveTree(
			obj,
			callback,
			par
		)
		{
			/*
                                Private helper method for
                                recursive `traverse*` methods.
			*/
			var result;
			unshiftCallback(
				obj,
				callback,
				par		
			);
			return result;
		}


                /*        PUBLIC METHOD        */


		function traverseRecursive(
			obj,
			callback,
			result
		)
		{
			/*
                                Public recursive method that
                                traverses an array-like object,
                                running a callback on each item
                                in the array-like object.
			*/
			var isArrayLike = Utils.is.arrayLike(obj),
				index = -1;
			result = result || [];
			if (isArrayLike) {
				index = obj.length - 1;
				while (index > -1) {
					traverseRecursive(
						obj[index],
						callback,
						result
					);
					handleRecursiveTree(
						obj[index],
						callback,
						result
					);
					index -= 1;
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function traverseChildNodeTree(
			obj,
			callback,
			result
		)
		{
			/*
                                Public method that traverses
                                a node-like object's `childNode`
                                tree.
			*/
			var hasNodes = canTraverse(obj),
				index = -1;
			result = result || [];
			if (hasNodes) {
				index = obj.childNodes.length - 1;
				while (index > -1) {
					traverseChildNodeTree(
						obj.childNodes[index],
						callback,
						result
					);
					handleRecursiveTree(
						obj.childNodes[index],
						callback,
						result
					);
					index -= 1;
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function collectText(
			obj
		)
		{
			/*
                                Private helper method for
                                `getText` that recursively
                                concatenates the `nodeValue`
                                property of text node-like objects
                                (via `traverseRecursive`);
                                returns `null` if not applicable.
                                For more, see `getText`.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				nodes,
				result = null;
			if (isNodeLike) {
				nodes = getChildNodeTree(
					obj
				);
				nodes = traverseRecursive(
					nodes,
					filterTextData
				);
				result = nodes.join("");
			}
			return result;
		}

		function grabTextGetterTable()
		{
			/*
                                Private method that returns a
                                decision table based upon
                                accepted `nodeType`s for "getting"
                                textual content.
			*/
			var result = {};
			result[nodeTypes.ELEMENT_NODE] = collectText;
			result[nodeTypes.TEXT_NODE] = grabText;
			result[nodeTypes.COMMENT_NODE] = grabText;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] =
				collectText;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				grabText;
			return result;
		}


                /*        PUBLIC METHOD        */


		function getText(
			obj
		)
		{
			/*
                                Public method that exposes a
                                string consisting of concatenated
                                or singular text node-like object
                                data from the `nodeValue` property
                                (via `traverseRecursive`); returns
                                `null` if not applicable. See
                                the DOM 4 Spec section 5.3
                                (`Node.textContent`, getting)
                                for more.
			*/
			var canGet = canGetText(obj),
				decisions = grabTextGetterTable(),
				decision,
				isDecision,
				result = null;
			if (canGet) {
				decision = decisions[obj.nodeType];
				isDecision = Utils.is.type(
					decision,
					"function"
				);
				if (isDecision) {
					result = decision(obj);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function overrideText(
			text,
			obj,
			doc
		)
		{
			/*
                                Private helper method for
                                `setText` that overrides
                                existing `childNodes` with a
                                text node-like object; returns
                                `null` if not applicable. For more,
                                see `setText`.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				isDoc = Utils.is.document(doc),
				textNode,
				result = null;
			text = String(text);
			if (isNodeLike && isDoc) {
				textNode = Utils.create.text(
					doc,
					text
				);
				clearChildNodes(obj);
				Utils.node.append(
					obj,
					textNode
				);
				result = text;
			}
			return result;
		}

		function replaceText(
			text,
			obj
		)
		{
			/*
                                Private helper method for
                                `setText` that replaces
                                the `nodeValue` property of a
                                node-like object with `text`;
                                returns `null` if not
                                applicable. For more, see
                                `setText`.
			*/
			var canGetValue = Utils.can.getValue(
					obj
				),
				result = null;
			text = String(text);
			if (canGetValue) {
				obj.nodeValue = text;
				result = obj.nodeValue;
			}
			return result;
		}

		function grabTextSetterTable()
		{
			/*
                                Private method that returns a
                                decision table based upon
                                accepted `nodeType`s for "setting"
                                textual content.
			*/
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
		}


                /*        PUBLIC METHOD        */


		function setText(
			text,
			obj,
			doc
		)
		{
			/*
                                Public method that either
                                sets the `nodeValue` property of
                                a text node-like object or the
                                descendants of a node-like object;
                                returns `null` if not applicable.
                                See the DOM 4 Spec section 5.3
                                (`Node::textContent`, setting)
                                for more.
			*/
			var canSet = canSetText(obj),
				decisions = grabTextSetterTable(),
				decision,
				isDecision,
				result = null;
			if (canSet) {
				decision = decisions[obj.nodeType];
				isDecision = Utils.is.type(
					decision,
					"function"
				);
				if (isDecision) {
					result = decision(
						text,
						obj,
						doc
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		Utils.traverse = Utils.traverse || {
			"getAncestors": getAncestorList,
			"isAncestor": isAncestor,
			"list": traverseList,
			"ancestors": traverseAncestors,

			"getChildNodes": getChildNodes,

			"linear": traverseLinear,
			"childNodes": traverseChildNodes,
			"clearChildNodes": clearChildNodes,

			"getChildren": getChildren,
			"children": traverseChildren,
			"clearChildren": clearChildren,

			"getChildNodeTree": getChildNodeTree,

			"recursive": traverseRecursive,
			"childNodeTree": traverseChildNodeTree,

			"getText": getText,
			"setText": setText
		};
	}());
}

