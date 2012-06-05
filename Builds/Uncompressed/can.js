if (Utils) {
	(function () {

               /**
                * @module
                * Utils.can
                *
                * @description
                * Various capability tests for core modules that
                * follow.
                *
                * @dependencies
                * * Utils.is
                */

		var isNodeLike = Utils.is.nodeLike;

               /**
                * @public `Utils.can.getName`.
                *
                * @description
                * Method that returns a boolean asserting if a
                * specified object can retrieve the `nodeName`
                * property.
                *
                * @param obj Object
                * An object to assert.
                */

		function canGetName(
			obj
		)
		{
			var result = false;
			if (isNodeLike(obj)) {
				result = typeof obj.nodeName ===
					"string";
			}
			return result;
		}

               /**
                * @public `Utils.can.getValue`.
                *
                * @description
                * Method that returns a boolean asserting if a
                * specified object can retrieve the `nodeValue`
                * property.
                *
                * @param obj Object
                * An object to assert.
                */

		function canGetValue(
			obj
		)
		{
			var result = false;
			if (isNodeLike(obj)) {
				result = typeof obj.nodeValue ===
					"string";
			}
			return result;
		}

		Utils.can = Utils.can || {
			"getName": canGetName,
			"getValue": canGetValue
		};
	}());
}

