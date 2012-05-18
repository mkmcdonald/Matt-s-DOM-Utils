if (Utils) {
	(function () {

		/*
                        Utils.can

                        Description:

                        Various capability tests for core
                        modules that follow.

                        Dependencies:

                        * Utils.types;
                        * Utils.is;
		*/


                /*        PUBLIC METHOD        */


		function canGetName(
			obj
		)
		{
			/*
                                Public method that returns a
                                boolean asserting if a node-like
                                object can "use" the `nodeName`
                                property.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				result = false;
			if (isNodeLike) {
				result = Utils.is.type(
					obj.nodeName,
					"string"
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function canGetValue(
			obj
		)
		{
			/*
                                Public method that returns a
                                boolean asserting if a node-like
                                object can "use" the `nodeValue`
                                property.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				result = false;
			if (isNodeLike) {
				result = Utils.is.type(
					obj.nodeValue,
					"string"
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function canGetOwnerDocument(
			obj
		)
		{
			/*
                                Public method that returns a
                                boolean asserting if a node-like
                                object can "use" the
                                `ownerDocument` property.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				result = false;
			if (isNodeLike) {
				result = Utils.is.document(
					obj.ownerDocument
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		Utils.can = Utils.can || {
			"getName": canGetName,
			"getValue": canGetValue,
			"getOwnerDocument": canGetOwnerDocument
		};
	}());
}

