if (Utils) {
	(function () {

		/*
                        Utils.helpers

                        Description:

                        Various helper methods for common tasks.

                        Dependencies:

                        * Utils.is;
		*/


                /*        PUBLIC METHOD        */


		function makeLinearArray(
			obj
		)
		{
			/*
                                Public method that
                                takes an iterable object and
                                creates an array.
			*/
			var index,
				arrayLike = Utils.is.arrayLike(
					obj
				),
				result = [],
				node;
			if (arrayLike) {
				result.length = obj.length;
				index = obj.length - 1;
				while (index > -1) {
					node = obj[index];
					result[index] = node;
					index -= 1;
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		Utils.helpers = Utils.helpers || {
			"makeLinearArray": makeLinearArray
		};
	}());
}

