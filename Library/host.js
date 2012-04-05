if (Utils) {
	(function () {

		/*
                        Utils.host

                        Description:

                        Host object tests.

                        Dependencies:

                        * null;
		*/


                /*        PUBLIC METHOD        */


		function isHostObject(obj)
		{
			var result = false;
			if (typeof obj === "object" ||
				typeof obj === "function") {
				result = true;
			}
			return result;
		}


                /*        END PUBLIC METHOD */


		Utils.host = Utils.host || {
			"isObject": isHostObject
		};
	}());
}

