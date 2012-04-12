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
        jslint browser: true, sloppy: true,
        white: true, maxerr: 50, indent: 8
*/

if (Utils) {
	(function () {

		/*
                        Utils.errors

                        Description:

                        DOM Level 4-compliant custom errors and
                        methods to throw them.

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
				"cannot be modified.",
			"NOT_FOUND_ERROR": "The object cannot be " +
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


		function throwIndexSize()
		{
			throw new Error(
				errorTypes.INDEX_SIZE_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function throwHeirarchyRequest()
		{
			throw new Error(
				errorTypes.HEIRARCHY_REQUEST_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function throwWrongDocument()
		{
			throw new Error(
				errorTypes.WRONG_DOCUMENT_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function throwInvalidCharacter()
		{
			throw new Error(
				errorTypes.INVALID_CHARACTER_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function throwNoModificationAllowed()
		{
			var key = "NO_MODIFICATION_ALLOWED_ERROR";
			throw new Error(
				errorTypes[key]
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function throwNotFound()
		{
			throw new Error(
				errorTypes.NOT_FOUND_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function throwNotSupported()
		{
			throw new Error(
				errorTypes.NOT_SUPPORTED_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function throwInvalidState()
		{
			throw new Error(
				errorTypes.INVALID_STATE_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function throwSyntax()
		{
			throw new Error(
				errorTypes.SYNTAX_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function throwInvalidModification()
		{
			throw new Error(
				errorTypes.INVALID_MODIFICATION_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function throwNamespace()
		{
			throw new Error(
				errorTypes.NAMESPACE_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function throwInvalidAccess()
		{
			throw new Error(
				errorTypes.INVALID_ACCESS_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function throwTypeMismatch()
		{
			throw new Error(
				errorTypes.TYPE_MISMATCH_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function throwSecurity()
		{
			throw new Error(
				errorTypes.SECURITY_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function throwNetwork()
		{
			throw new Error(
				errorTypes.NETWORK_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function throwAbort()
		{
			throw new Error(
				errorTypes.ABORT_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function throwURLMismatch()
		{
			throw new Error(
				errorTypes.URL_MISMATCH_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function throwQuotaExceeded()
		{
			throw new Error(
				errorTypes.QUOTA_EXCEEDED_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function throwTimeout()
		{
			throw new Error(
				errorTypes.TIMEOUT_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function throwInvalidNodeType()
		{
			throw new Error(
				errorTypes.INVALID_NODE_TYPE_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function throwDataClone()
		{
			throw new Error(
				errorTypes.DATA_CLONE_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


		Utils.errors = Utils.errors || {
			"types": errorTypes,

			"throwIndexSize": throwIndexSize,
			"throwHeirarchyRequest":
				throwHeirarchyRequest,
			"throwWrongDocument": throwWrongDocument,
			"throwInvalidCharacter":
				throwInvalidCharacter,
			"throwNoModificationAllowed":
				throwNoModificationAllowed,
			"throwNotFound": throwNotFound,
			"throwNotSupported": throwNotSupported,
			"throwInvalidState": throwInvalidState,
			"throwSyntax": throwSyntax,
			"throwInvalidModification":
				throwInvalidModification,
			"throwNamespace": throwNamespace,
			"throwInvalidAccess": throwInvalidAccess,
			"throwTypeMismatch": throwTypeMismatch,
			"throwSecurity": throwSecurity,
			"throwNetwork": throwNetwork,
			"throwAbort": throwAbort,
			"throwURLMismatch": throwURLMismatch,
			"throwQuotaExceeded": throwQuotaExceeded,
			"throwTimeout": throwTimeout,
			"throwInvalidNodeType":
				throwInvalidNodeType,
			"throwDataClone": throwDataClone
		};
	}());
}

if (Utils) {
	(function () {

		/*
                        Utils.host

                        Description:

                        Host object tests.

                        Dependencies:

                        * null;
		*/


                /*        PUBLIC METHOD        */


		function isHostObject(obj)
		{
			var result = false;
			if (typeof obj === "object" ||
				typeof obj === "function") {
				result = true;
			}
			return result;
		}


                /*        END PUBLIC METHOD */


		Utils.host = Utils.host || {
			"isObject": isHostObject
		};
	}());
}

if (Utils) {
	(function () {

		/*
                        Utils.nodes

                        Description:

                        DOM node tests along with various
                        method wrappers.

                        Dependencies:

                        * Utils.host;
		*/

		/*
                        Public  object of documented `nodeType`s.
                        See the DOM 4 Spec 5.3 (Node, nodeType).
		*/

		var nodeTypes = {
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


                /*        PUBLIC METHOD        */


		function isNode(node)
		{
			/*
                                Public method that returns a
                                boolean asserting if `node` is
                                not falsey and has a numeric
                                `nodeType` property.
			*/
			return !!(node &&
				typeof node.nodeType ===
				"number");
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isNodeType(
			node,
			type
		)
		{
			/*
                                Public method that returns a
                                boolean asserting if `node` is
                                of type (via `nodeType`) `type`.
			*/
			var valid = isNode(node),
				result = false;
			type = Number(type);
			if (valid) {
				result = node.nodeType === type;
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isElementNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.ELEMENT_NODE;
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isAttributeNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.ATTRIBUTE_NODE;
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isTextNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.TEXT_NODE;
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isCDataSectionNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.CDATA_SECTION_NODE;
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isEntityReferenceNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var key = "ENTITY_REFERENCE_NODE",
				type = nodeTypes[key];
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isEntityNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.ENTITY_NODE;
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isProcessingInstructionNode(
			node
		)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var key = "PROCESSING_INSTRUCTION_NODE",
				type = nodeTypes[key];
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isCommentNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.COMMENT_NODE;
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isDocumentNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.DOCUMENT_NODE;
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isDocumentTypeNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.DOCUMENT_TYPE_NODE;
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isDocumentFragmentNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var key = "DOCUMENT_FRAGMENT_NODE",
				type = nodeTypes[key];
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isNotationNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.NOTATION_NODE;
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


		function generateTextGetterKeys()
		{
			/*
                                Keys for `generateTextGetters`
			*/
			return [
				"ELEMENT_NODE",
				"TEXT_NODE",
				"COMMENT_NODE",
				"PROCESSING_INSTRUCTION_NODE",
				"DOCUMENT_FRAGMENT_NODE"
			];
		}

		function generateTextGetters()
		{
			/*
                                Private method that "generates"
                                an object with keys of `nodeType`s
                                that can "get" text.
			*/
			var keys = generateTextGetterKeys(),
				key,
				result = {};
			for (key in keys) {
				// you win this time JSLint
				if (keys.hasOwnProperty(key)) {
					result[key] = true;
				}
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function canGetText(node)
		{
			/*
                                Public method that returns a
                                boolean asserting if the specified
                                node can "get" textual content.
			*/
			var validNode = isNode(node),
				getters = generateTextGetters(),
				getter,
				result = false;
			if (validNode) {
				getter = getters[node.nodeType];
				if (getter) {
					result = true;
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function generateTextSetterKeys()
		{
			/*
                                Keys for `generateTextSetters`
			*/
			return [
				"ELEMENT_NODE",
				"TEXT_NODE",
				"COMMENT_NODE",
				"PROCESSING_INSTRUCTION_NODE",
				"DOCUMENT_FRAGMENT_NODE"
			];
		}

		function generateTextSetters()
		{
			/*
                                Private method that "generates"
                                an object with keys of `nodeType`s
                                that can "set" text.
			*/
			var keys = generateTextSetterKeys(),
				key,
				result = {};
			for (key in keys) {
				// you win this time JSLint
				if (keys.hasOwnProperty(key)) {
					result[key] = true;
				}
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function canSetText(node)
		{
			/*
                                Public method that returns a
                                boolean asserting if the specified
                                node can "set" textual content.
			*/
			var validNode = isNode(node),
				setters = generateTextSetters(),
				setter,
				result = false;
			if (validNode) {
				setter = setters[node.nodeType];
				if (setter) {
					result = true;
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


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
			var isDocument = isDocumentNode(doc),
				key = "createElement",
				isHostObject,
				result = null;
			tag = String(tag);
			if (isDocument) {
				isHostObject = Utils.host.isObject(
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
			var isDocument = isDocumentNode(doc),
				key = "createElementNS",
				isHostObject,
				result = null;
			ns = String(ns);
			tag = String(tag);
			if (isDocument) {
				isHostObject = Utils.host.isObject(
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
			var isDocument = isDocumentNode(doc),
				key = "createDocumentFragment",
				isHostObject,
				result = null;
			if (isDocument) {
				isHostObject = Utils.host.isObject(
					doc[key]
				);
				if (isHostObject) {
					result = doc[key]();
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
			var isDocument = isDocumentNode(doc),
				key = "createTextNode",
				isHostObject,
				result = null;
			text = String(text);
			if (isDocument) {
				isHostObject = Utils.host.isObject(
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
			var isDocument = isDocumentNode(doc),
				key = "createComment",
				isHostObject,
				result = null;
			text = String(text);
			if (isDocument) {
				isHostObject = Utils.host.isObject(
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
			var isDocument = isDocumentNode(doc),
				key = "createProcessingInstruction",
				isHostObject,
				result = null;
			target = String(target);
			text = String(text);
			if (isDocument) {
				isHostObject = Utils.host.isObject(
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


		function appendChild(
			par,
			node
		)
		{
			/*
                                Public wrapper method for
                                `appendChild`; returns the wrapper
                                method's result or `null` if not
                                applicable.
			*/
			var validParent = Utils.nodes.isNode(par),
				validNode = Utils.nodes.isNode(node),
				isHostObject,
				key = "appendChild",
				result = null;
			if (validParent && validNode) {
				isHostObject = Utils.host.isObject(
					par[key]
				);
				if (isHostObject) {
					result = par[key](
						node
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function removeChild(
			par,
			node
		)
		{
			/*
                                Public wrapper method for
                                `removeChild`; returns the wrapper
                                method's result or `null` if not
                                applicable.
			*/
			var validParent = Utils.nodes.isNode(par),
				validNode = Utils.nodes.isNode(node),
				isHostObject,
				key = "removeChild",
				result = null;
			if (validParent && validNode) {
				isHostObject = Utils.host.isObject(
					par[key]
				);
				if (isHostObject) {
					result = par[key](
						node
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		Utils.nodes = Utils.nodes || {
			"types": nodeTypes,

			"isNode": isNode,
			"isNodeType": isNodeType,
			"isElementNode": isElementNode,
			"isAttributeNode": isAttributeNode,
			"isTextNode": isTextNode,
			"isCDataSectionNode": isCDataSectionNode,
			"isEntityReferenceNode":
				isEntityReferenceNode,
			"isEntityNode": isEntityNode,
			"isProcessingInstructionNode":
				isProcessingInstructionNode,
			"isCommentNode": isCommentNode,
			"isDocumentNode": isDocumentNode,
			"isDocumentTypeNode": isDocumentTypeNode,
			"isDocumentFragmentNode":
				isDocumentFragmentNode,
			"isNotationNode": isNotationNode,

			"canGetText": canGetText,
			"canSetText": canSetText,

			"createElement": createElement,
			"createElementNS": createElementNS,
			"createDocumentFragment":
				createDocumentFragment,
			"createTextNode": createTextNode,
			"createComment": createComment,
			"createProcessingInstruction":
				createProcessingInstruction,

			"appendChild": appendChild,
			"removeChild": removeChild
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

                        * Utils.host;
                        * Utils.nodes;
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
				result = [],
				node;
			if (obj && obj.length) {
				index = obj.length - 1;
				while (index > -1) {
					node = obj[index];
					result.unshift(node);
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
                        Utils.select

                        Description:

                        Selection wrappers.

                        Dependencies:

                        * Utils.host;
                        * Utils.nodes;
                        * Utils.helpers;
		*/

		function makeLinearArray(obj)
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
			name = String(name);
			var isDoc = Utils.nodes.isDocumentNode(doc),
				key = "getElementsByName",
				canUse,
				result = null;
			if (isDoc) {
				canUse = Utils.host.isObject(
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
			tag = String(tag);
			var isDoc = Utils.nodes.isDocumentNode(caller),
				isElement = Utils.nodes.isElementNode(
					caller
				),
				key = "getElementsByTagName",
				canUse,
				result = null;
			if (isDoc || isElement) {
				canUse = Utils.host.isObject(
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
			local = String(local);
			ns = String(ns);
			var isDoc = Utils.nodes.isDocumentNode(caller),
				isElement = Utils.nodes.isElementNode(
					caller
				),
				key = "getElementsByTagNameNS",
				canUse,
				result = null;
			if (isDoc || isElement) {
				canUse = Utils.host.isObject(
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
			names = String(names);
			var isDoc = Utils.nodes.isDocumentNode(caller),
				isElement = Utils.nodes.isElementNode(
					caller
				),
				key = "getElementsByClassName",
				canUse,
				result = null;
			if (isDoc || isElement) {
				canUse = Utils.host.isObject(
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
			id = String(id);
			var isDoc = Utils.nodes.isDocumentNode(doc),
				key = "getElementById",
				canUse,
				result = null;
			if (isDoc) {
				canUse = Utils.host.isObject(
					doc[key]
				);
				if (canUse) {
					result = doc[key](id);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function generateSelectorTypes()
		{
			/*
                                Private method that generates an
                                object containing applicable
                                `nodeTypes` for `querySelector*`;
			*/
			var types = Utils.nodes.types,
				result = {};
			result[types.ELEMENT_NODE] = true;
			result[types.DOCMENT_NODE] = true;
			result[types.DOCUMENT_FRAGMENT_NODE] = true;
			return result;
		}

		function canCallSelectors(node)
		{
			/*
                                Private helper method for
                                `querySelector*`; returns a boolean
                                asserting if `node` can call
                                `querySelector*`.
			*/
			var isNode = Utils.nodes.isNode(node),
				types = generateSelectorTypes(),
				value,
				result = false;
			if (isNode) {
				value = types[node.nodeType];
				result = typeof value !==
					undefined;
			}
			return result;
		}


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
			selectors = String(selectors);
			var canCall = canCallSelectors(caller),
				key = "querySelector",
				canUse,
				result = null;
			if (canCall) {
				canUse = Utils.host.isObject(
					caller[key]
				);
				if (canUse) {
					result = caller[key](
						selectors)
					;
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
			selectors = String(selectors);
			var canCall = canCallSelectors(caller),
				key = "querySelectorAll",
				canUse,
				result = null;
			if (canCall) {
				canUse = Utils.host.isObject(
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


		function forkHead(doc)
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
				);
			if (typeof heads === "object" &&
				heads.length) {
				result = heads[0];
			}
			return result;
		}	


                /*        PUBLIC METHOD        */


		function getHead(doc)
		{
			/*
                                Public method that returns
                                the specified document's `head`
                                element; returns `null` if not
                                applicable.
			*/
			var isDoc = Utils.nodes.isDocumentNode(doc),
				headProp,
				result = null;
			if (isDoc) {
				headProp = Utils.host.isObject(
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


		function forkBody(doc)
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
				);
			if (typeof bodies === "object" &&
				bodies.length) {
				result = bodies[0];
			}
			return result;
		}	


                /*        PUBLIC METHOD        */


		function getBody(doc)
		{
			/*
                                Public method that returns
                                the specified document's `body`
                                element; returns `null` if not
                                applicable.
			*/
			var isDoc = Utils.nodes.isDocumentNode(doc),
				bodyProp,
				result = null;
			if (isDoc) {
				bodyProp = Utils.host.isObject(
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


                /*        END PUBLIC METHOD */


		Utils.select = Utils.select || {
			"byName": getElementsByName,

			"byTagName": getElementsByTagName,
			"byTagNameNS": getElementsByTagNameNS,

			"byClassName": getElementsByClassName,

			"byId": getElementById,

			"query": querySelector,
			"queryAll": querySelectorAll,

			"body": getBody,
			"head": getHead
		};
	}());
}

