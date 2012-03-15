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

		function generateTextGetters()
		{
			/*
                                Private method that "generates"
                                an object with keys of `nodeType`s
                                that can "get" text.
			*/
			var getters = {};
			getters[nodeTypes.ELEMENT_NODE] = true;
			getters[nodeTypes.TEXT_NODE] = true;
			getters[nodeTypes.PROCESSING_INSTRUCTION_NODE] = true;
			getters[nodeTypes.COMMENT_NODE] = true;
			getters[nodeTypes.DOCUMENT_FRAGMENT_NODE] = true;
			return getters;
		}

		function canGetText(node)
		{
			/*
                                Public method that returns a
                                boolean asserting if the specified
                                node can "get" textual content.
			*/
			var validNode = isNode(node),
				getters = generateTextGetters();
			if (validNode && getters[node.nodeType]) {
				return true;
			}
			return false;
		}

		function generateTextSetters()
		{
			/*
                                Private method that "generates"
                                an object with keys of `nodeType`s
                                that can "set" text.
			*/
			var setters = {};
			setters[nodeTypes.ELEMENT_NODE] = true;
			setters[nodeTypes.TEXT_NODE] = true;
			setters[nodeTypes.PROCESSING_INSTRUCTION_NODE] = true;
			setters[nodeTypes.COMMENT_NODE] = true;
			setters[nodeTypes.DOCUMENT_FRAGMENT_NODE] = true;
			return setters;
		}

		function canSetText(node)
		{
			/*
                                Public method that returns a
                                boolean asserting if the specified
                                node can "set" textual content.
			*/
			var validNode = isNode(node),
				setters = generateTextSetters();
			if (validNode && setters[node.nodeType]) {
				return true;
			}
			return false;
		}

		function generateNodeParents()
		{
			/*
                                Private method that "generates"
                                an object with keys of `nodeType`s
                                that can append nodes.
			*/
			var parents = {};
			parents[nodeTypes.ELEMENT_NODE] = true;
			parents[nodeTypes.DOCUMENT_NODE] = true;
			parents[nodeTypes.DOCUMENT_FRAGMENT_NODE] = true;
			return parents;
		}

		function canAppendNodes(node)
		{
			/*
                                Public method that returns a
                                boolean asserting if the specified
                                node can append nodes.
			*/
			var validNode = isNode(node),
				parents = generateNodeParents(),
				result = false;
			if (validNode && parents[node.nodeType]) {
				result = true;
			} else if (!parents[node.nodeType]) {
				Utils.errors.throwHeirarchyRequest(
				);
			}
			return result;
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
			"canGetText": canGetText,
			"canSetText": canSetText,
			"canAppendNodes": canAppendNodes
		};
	}());
}
