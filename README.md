# Matt's DOM Utils (MDU)

*MDU* is a toolbox for the HTML DOM. By minimally wrapping the DOM,
it encourages—and nurtures—the growth of DOM skills.

## Features

### Errors

*MDU* provides error messages based upon the DOM 4 spec.

#### Types

1. `Utils.errors.types.INDEX_SIZE_ERROR`;
2. `Utils.errors.types.HEIRARCHY_REQUEST_ERROR`;
3. `Utils.errors.types.WRONG_DOCUMENT_ERROR`;
4. `Utils.errors.types.INVALID_CHARACTER_ERROR`;
5. `Utils.errors.types.NO_MODIFICATION_ALLOWED_ERROR`;
6. `Utils.errors.types.NOT_FOUND_ERROR`;
7. `Utils.errors.types.NOT_SUPPORTED_ERROR`;
8. `Utils.errors.types.INVALID_STATE_ERROR`;
9. `Utils.errors.types.SYNTAX_ERROR`;
10. `Utils.errors.types.INVALID_MODIFICATION_ERROR`;
11. `Utils.errors.types.NAMESPACE_ERROR`;
12. `Utils.errors.types.INVALID_ACCESS_ERROR`;
13. `Utils.errors.types.TYPE_MISMATCH_ERROR`;
14. `Utils.errors.types.SECURITY_ERROR`;
15. `Utils.errors.types.NETWORK_ERROR`;
16. `Utils.errors.types.ABORT_ERROR`;
17. `Utils.errors.types.URL_MISMATCH_ERROR`;
18. `Utils.errors.types.QUOTA_EXCEEDED_ERROR`;
19. `Utils.errors.types.TIMEOUT_ERROR`;
20. `Utils.errors.types.INVALID_NODE_TYPE_ERROR`;
21. `Utils.errors.types.DATA_CLONE_ERROR`;

---

#### Throwing Errors

Each provided error can by thrown via its corresponding method.

1. `Utils.errors.throwIndexSize()`;
2. `Utils.errors.throwHeireachyRequest()`;
3. `Utils.errors.throwWrongDocument()`;
4. `Utils.errors.throwInvalidCharacter()`;
5. `Utils.errors.throwNoModificationAllowed()`;
6. `Utils.errors.throwNotFound()`;
7. `Utils.errors.throwNotSupported()`;
8. `Utils.errors.throwInvalidState()`;
9. `Utils.errors.throwSyntax()`;
10. `Utils.errors.throwInvalidModification()`;
11. `Utils.errors.throwNamespace()`;
12. `Utils.errors.throwInvalidAccess()`;
13. `Utils.errors.throwTypeMismatch()`;
14. `Utils.errors.throwSecurity()`;
15. `Utils.errors.throwNetwork()`;
16. `Utils.errors.throwAbort()`;
17. `Utils.errors.throwURLMismatch()`;
18. `Utils.errors.throwQuotaExceeded()`;
19. `Utils.errors.throwTimeout()`;
20. `Utils.errors.throwInvalidNodeType()`;
21. `Utils.errors.throwDataClone()`;

### Nodes

*MDU* provides comprehensive node utilities that cover every
official `nodeType`.

#### Types

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

----

#### Tests

`Utils.nodes` contains a wide variety of tests pertaining to
nodes, their properties and their expected behavior.

##### Node Tests

1. `Utils.nodes.isNode(node)`;

---

##### Type Tests

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

---

##### Text Tests

1. `Utils.nodes.canGetText`;
2. `Utils.nodes.canSetText`;

---

### Classes

*MDU* provides a DOM Level 4 spec-compliant `classList`
implementation.

#### Retrieval

1. `Utils.classes.list(node)`;
2. `Utils.classes.item(node)`;

#### Tests

1. `Utils.classes.contains(token, node)`;

---

#### Manipulation

1. `Utils.classes.add(token, node)`;
2. `Utils.classes.remove(token, node)`;
3. `Utils.classes.toggle(token, node)`;

---

See [./Tests/Classes](./Tests/Classes "Class Tests")
for examples.

---

### Traversal

*MDU*'s main focus is diverse DOM traversal. This is provided
in a multitude of ways.

#### Array-like Object Traversal

1. `Utils.traversal.makeLinearArray(nodes[, index])`;

#### Ancestor Traversal

1. `Utils.traversal.getAncestorList(node)`;
2. `Utils.traversal.isAncestor(parent, node)`;

---

#### Manipulative Methods/Callbacks

1. `Utils.nodes.remove(node)`;

---

#### `childNodes` Traversal

1. `Utils.traversal.getChildNodes(node)`;
2. `Utils.traversal.traverseChildNodes(node, callback)`;
3. `Utils.traversal.clearChildNodes(node)`;

---

#### `children` Traversal

1. `Utils.traversal.getChildren(node)`;
2. `Utils.traversal.traverseChildren(node, callback)`;
3. `Utils.traversal.clearChildren(node)`;

---

#### Text Traversal

1. `Utils.traversal.getText(node)`;
2. `Utils.traversal.setText(text, node)`;

---

#### Callbacks

Each `traverse*` method expects some form of node(s)
along with a callback. The callback passed will
be called along with the current node being traversed.

##### Returning

The return value of the callback is stored. Depending
on the value, something can be added to the collection.

###### "Falsey" Value

	// `node` will be ignored
	function pessimisticFilter(node)
	{
		// NONE SHALL PASS!
		return false;
	}

###### True

	// `node` will be collected
	function optimisticFilter(node)
	{
		// Sure, come on in
		return true;
	}

###### "Truthy" Value

	// return value will be collected
	function textFilter(node)
	{
		var isText = Utils.nodes.isTextNode(node);
		if (isText) {
			return node.nodeValue;
		}
		return false;
	}

See [./Tests/Traversal](./Tests/Traversal "Traversal Tests")
for examples.

---

## Attributions

### Creator

* [Matt McDonald](http://www.fortybelow.ca "fortybelow.ca");

---

### Inspiration

* [David Mark & My Library](http://www.cinsoft.net "cinsoft.net");

---

## Metadata

* Last edited on Wednesay March 14th, 2012;
