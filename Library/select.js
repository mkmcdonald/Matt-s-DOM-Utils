if (Utils) {
	(function () {

		/*
                        Utils.select

                        Description:

                        Selection wrappers.

                        Dependencies:

                        * Utils.host;
                        * Utils.helpers;
                        * Utils.nodes;
                        * Utils.is;
		*/

		var nodeTypes = Utils.types;

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
			var isDoc = Utils.is.document(doc),
				key = "getElementsByName",
				canUse,
				result = null;
			name = String(name);
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
			tag = String(tag);
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
			local = String(local);
			ns = String(ns);
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
			names = String(names);
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
			id = String(id);
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

		function canCallSelectors(node)
		{
			/*
                                Private helper method for
                                `querySelector*`; returns a boolean
                                asserting if `node` can call
                                `querySelector*`.
			*/
			var isNode = Utils.is.node(node),
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
			var canCall = canCallSelectors(caller),
				key = "querySelector",
				canUse,
				result = null;
			selectors = String(selectors);
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
			var canCall = canCallSelectors(caller),
				key = "querySelectorAll",
				canUse,
				result = null;
			selectors = String(selectors);
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

