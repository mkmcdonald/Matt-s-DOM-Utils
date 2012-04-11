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
				canUse,
				result = null;
			if (isDoc) {
				canUse = Utils.host.isObject(
					document.body
				);
				if (canUse) {
					result = document.body;
				}
			}
			return result;
		}

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
				value = caller[key],
				canUse,
				result = null;
			if (isDoc || isElement) {
				canUse = Utils.host.isObject(
					value
				);
				if (canUse) {
					result = makeLinearArray(
						value(local, ns)
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


                /*        END PUBLIC METHOD */


		Utils.select = Utils.select || {
			"body": getBody,

			"byName": getElementsByName,

			"byTagName": getElementsByTagName,
			"byTagNameNS": getElementsByTagNameNS,

			"byId": getElementById
		};
	}());
}

