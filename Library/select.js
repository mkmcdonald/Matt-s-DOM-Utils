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

