if (Utils) {
	(function () {
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

		function isNode(node)
		{
			return !!(node &&
				typeof node.nodeType ===
				"number");
		}

		function isElementNode(node)
		{
			var valid = isNode(node);
			if (valid) {
				return node.nodeType === 1;
			}
			return false;
		}

		function isAttributeNode(node)
		{
			var valid = isNode(node);
			if (valid) {
				return node.nodeType === 2;
			}
			return false;
		}

		function isTextNode(node)
		{
			var valid = isNode(node);
			if (valid) {
				return node.nodeType === 3;
			}
			return false;
		}

		function isCDataSectionNode(node)
		{
			var valid = isNode(node);
			if (valid) {
				return node.nodeType === 4;
			}
			return false;
		}

		function isEntityReferenceNode(node)
		{
			var valid = isNode(node);
			if (valid) {
				return node.nodeType === 5;
			}
			return false;
		}

		function isEntityNode(node)
		{
			var valid = isNode(node);
			if (valid) {
				return node.nodeType === 6;
			}
			return false;
		}

		function isProcessingInstructionNode(
			node
		)
		{
			var valid = isNode(node);
			if (valid) {
				return node.nodeType === 7;
			}
			return false;
		}

		function isCommentNode(node)
		{
			var valid = isNode(node);
			if (valid) {
				return node.nodeType === 8;
			}
			return false;
		}

		function isDocumentNode(node)
		{
			var valid = isNode(node);
			if (valid) {
				return node.nodeType === 9;
			}
			return false;
		}

		function isDocumentTypeNode(node)
		{
			var valid = isNode(node);
			if (valid) {
				return node.nodeType === 10;
			}
			return false;
		}

		function isDocumentFragmentNode(node)
		{
			var valid = isNode(node);
			if (valid) {
				return node.nodeType === 11;
			}
			return false;
		}

		function isNotationNode(node)
		{
			var valid = isNode(node);
			if (valid) {
				return node.nodeType === 12;
			}
			return false;
		}

		function removeNode(node)
		{
			/*
                                Public method with multiple
                                applicative possibilities:
                                can be used as a stand-alone
                                or as a callback for a `traverse*`
                                method; returns a boolean asserting
                                the success of the removal.
			*/
			var isNode = Utils.nodes.isNode(node);
			if (isNode) {
				if (node.parentNode) {
					node.parentNode.removeChild(
						node
					);
					node = null;
					return true;
				}
			}
			return false;
		}

		Utils.nodes = Utils.nodes || {
			"types": nodeTypes,
			"isNode": isNode,
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
			"remove": removeNode
		};
	}());
}
