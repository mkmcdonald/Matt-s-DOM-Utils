if (Utils) {
	(function () {

		/*
                        Utils.node

                        Description:

                        Various DOM node method wrappers.

                        Dependencies:

                        * Utils.host;
                        * Utils.is;
		*/


                /*        PUBLIC METHOD        */


		function insertBefore(
			par,
			newObj,
			refObj
		)
		{
			/*
                                Public wrapper method for
                                `insertBefore`; returns the wrapper
                                method's result or `null` if not
                                applicable.
			*/
			var validParent = Utils.is.nodeLike(par),
				newIsNode = Utils.is.nodeLike(newObj),
				refIsNode = Utils.is.nodeLike(refObj),
				isHostObject,
				key = "insertBefore",
				result = null;
			if (validParent && newIsNode && refIsNode) {
				isHostObject = Utils.is.hostObject(
					par[key]
				);
				if (isHostObject) {
					result = par[key](
						newObj,
						refObj
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function insertListBefore(
			par,
			list,
			refObj
		)
		{
			/*
                                Public method that takes an
                                array-like object and passes
                                each element to `insertBefore`.
			*/
			var isArrayLike = Utils.is.arrayLike(
				list
			),
				index = 0,
				max,
				result;
			if (isArrayLike) {
				max = list.length;
				while (index < max) {
					insertBefore(
						par,
						list[index],
						refObj
					);
					index += 1;
				}
			}
			return result;
		}


                /*        PUBLIC METHOD        */


                /*        END PUBLIC METHOD        */


		function appendChild(
			par,
			obj
		)
		{
			/*
                                Public wrapper method for
                                `appendChild`; returns the wrapper
                                method's result or `null` if not
                                applicable.
			*/
			var validParent = Utils.is.nodeLike(par),
				validNode = Utils.is.nodeLike(obj),
				isHostObject,
				key = "appendChild",
				result = null;
			if (validParent && validNode) {
				isHostObject = Utils.is.hostObject(
					par[key]
				);
				if (isHostObject) {
					result = par[key](
						obj
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function appendList(
			par,
			list
		)
		{
			/*
                                Public method that takes an
                                array-like object and passes
                                each element to `appendChild`.
			*/
			var isArrayLike = Utils.is.arrayLike(
				list
			),
				index = 0,
				max,
				result;
			if (isArrayLike) {
				max = list.length;
				while (index < max) {
					appendChild(
						par,
						list[index]
					);
					index += 1;
				}
			}
			return result;
		}


                /*        PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function removeChild(
			par,
			obj
		)
		{
			/*
                                Public wrapper method for
                                `removeChild`; returns the wrapper
                                method's result or `null` if not
                                applicable.
			*/
			var validParent = Utils.is.nodeLike(par),
				validNode = Utils.is.nodeLike(obj),
				isHostObject,
				key = "removeChild",
				result = null;
			if (validParent && validNode) {
				isHostObject = Utils.is.hostObject(
					par[key]
				);
				if (isHostObject) {
					result = par[key](
						obj
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function replaceChild(
			par,
			newObj,
			oldObj
		)
		{
			/*
                                Public wrapper method for
                                `replaceChild`; returns the wrapper
                                method's result or `null` if not
                                applicable.
			*/
			var validParent = Utils.is.nodeLike(par),
				newIsNode = Utils.is.nodeLike(newObj),
				oldIsNode = Utils.is.nodeLike(oldObj),
				isHostObject,
				key = "replaceChild",
				result = null;
			if (validParent && newIsNode && oldIsNode) {
				isHostObject = Utils.is.hostObject(
					par[key]
				);
				if (isHostObject) {
					result = par[key](
						newObj,
						oldObj
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function cloneNode(
			obj,
			deep
		)
		{
			/*
                                Public wrapper method for
                                `cloneNode`; returns the wrapper
                                method's result or `null` if not
                                applicable.
			*/
			var isNodeLike = Utils.is.nodeLike(obj),
				isHostObject,
				key = "cloneNode",
				result = null;
			deep = Boolean(deep);
			if (isNodeLike) {
				isHostObject = Utils.is.hostObject(
					obj[key]
				);
				if (isHostObject) {
					result = obj[key](
						obj,
						deep
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getName(
			obj,
			lower
		)
		{
			/*
                                Public wrapper method for
                                `nodeName`; returns the
                                property's result or `null`
                                if not applicable.
			*/
			var canGet = Utils.can.getName(obj),
				lowKey = "toLowerCase",
				upKey = "toUpperCase",
				result = null;
			lower = Boolean(lower);
			if (canGet) {
				result = obj.nodeName;
				if (lower) {
					result = result[lowKey]();
				} else if (!lower) {
					result = result[upKey]();
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function getValue(
			obj
		)
		{
			/*
                                Public wrapper method for
                                `nodeValue`; returns the
                                property's result or `null`
                                if not applicable.
			*/
			var canGet = Utils.can.getValue(obj),
				result = null;
			if (canGet) {
				result = obj.nodeValue;
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		Utils.node = Utils.node || {
			"prepend": insertBefore,
			"prependList": insertListBefore,
			"append": appendChild,
			"appendList": appendList,
			"remove": removeChild,
			"replace": replaceChild,
			"clone": cloneNode,
			"name": getName,
			"value": getValue
		};
	}());
}
