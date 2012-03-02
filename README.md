# Matt's DOM Utils (MDU)

*MDU* is a toolbox for the HTML DOM. By minimally wrapping the DOM,
it encourages—and nurtures—the growth of DOM skills.

## Features

### Classes

*MDU* provides a simple interface for `className` manipulation.
The following methods are exposed:

1. `Utils.classes.add(name, el)`;
2. `Utils.classes.has(name, el)`;
3. `Utils.classes.remove(name, el)`;

See `./Tests/Classes` for examples.

---

### Nodes
*MDU* provides comprehensive node utilities. Each official node
type is provided as a property of `Utils.nodes.types`.

These are the current types listed:

1. `Utils.nodes.types.ELEMENT_NODE`;
2. `Utils.nodes.types.ATTRIBUTE_NODE`;
3. `Utils.nodes.types.TEXT_NODE`;
4. `Utils.nodes.types.CDATA_SECTION_NODE`;
5. `Utils.nodes.types.ENTITY_REFERENCE_NODE`;
6. `Utils.nodes.types.ENTITY_NODE`;
7. `Utils.nodes.types.PROCESSING_INSTRUCTION_NODE`;
8. `Utils.nodes.types.COMMENT_NODE`;
9. `Utils.nodes.types.DOCUMENT_NODE`;
10. `Utils.nodes.types.DOCUMENT_TYPE_NODE`;
11. `Utils.nodes.types.DOCUMENT_FRAGMENT_NODE`;
12. `Utils.nodes.types.NOTATION_NODE`;

Alongside node types is a set of node tests.

First off is a general-purpose "node" test:

1. `Utils.nodes.isNode(node)`;

Following `Utils.nodes.isNode` is a test for every official node
type.

These are the current tests:

1. `Utils.nodes.isElementNode(node)`;
2. `Utils.nodes.isAttributeNode(node)`;
3. `Utils.nodes.isTextNode(node)`;
4. `Utils.nodes.isCDataSectionNode(node)`;
5. `Utils.nodes.isEntityReferenceNode(node)`;
6. `Utils.nodes.isEntityNode(node)`;
7. `Utils.nodes.isProcessingInstructionNode(node)`;
8. `Utils.nodes.isCommentNode(node)`;
9. `Utils.nodes.isDocumentNode(node)`;
10. `Utils.nodes.isDocumentTypeNode(node)`;
11. `Utils.nodes.isDocumentFragmentNode(node)`;
12. `Utils.nodes.isNotationNode(node)`;

Furthermore, a set of manipulative methods is provided.

These are the current methods:

1. `Utils.nodes.removeNode(node)`;

---

### Traversal

*MDU*'s main focus is diverse DOM traversal. Most often, developers
seek to traverse the `childNodes` of a node. Another common task
is retrieving and/or traversing the `children` of a node.

Both tasks are addressed via the following methods:

1. `Utils.traversal.getChildNodes(node)`;
2. `Utils.traversal.traverseChildNodes(node, callback)`;
3. `Utils.traversal.getChildren(node)`;
4. `Utils.traversal.traverseChildren(node, callback)`;
4. `Utils.traversal.clearChildNodes(node)`;
4. `Utils.traversal.clearChildren(node)`;

See `./Tests/Traversal` for examples.

#### Callbacks

Each `traverse*` method expects some form of node(s)
along with a callback. The callback passed will
be called along with the current node being traversed.
The node can be collected depending on the return value
of the callback. If the callback returns exactly `true`,
the node is collected. Conversely, a return value other than
`true` will prevent the node from being collected. This behavior
is meant to work like a white | black list.

For example:

	function pessimisticFilter(node)
	{
		// NONE SHALL PASS!
		return false;
	}

---

## Attributions

### Creator

* Matt McDonald (http://www.fortybelow.ca);

---

### Inspiration

* David Mark & My Library (http://www.cinsoft.net);

---

## Metadata

* Last edited on Thursday March 1st, 2012;
