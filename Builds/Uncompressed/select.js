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
				result = false;
			if (isNodeLike(obj)) {
				result = typeof types[obj.nodeType] !==
					"undefined";
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

