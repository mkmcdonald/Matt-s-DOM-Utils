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

