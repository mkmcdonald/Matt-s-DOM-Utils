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

