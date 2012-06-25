var global = global || this;
if (typeof Utils === "object" && Utils) {
	(function () {
		var doc = global.document,
			commonElements,
			methods,
			selected,
			MAX_PARAMS;

		function getElements(
			form,
			name
		)
		{
			var key = "namedItem",
				result = null;
			if (Utils.select[key]) {
				result = Utils.select[key](
					form,
					"elements",
					name
				);
			}
			return result;
		}

		commonElements = (function () {
			var obj = {};
			obj.demo = doc.forms.demo;
			obj.method = getElements(
				obj.demo,
				"method_control"
			);
			obj.erase = getElements(
				obj.demo,
				"erase_control"
			);
			return obj;
		}());

		function grabByNameTree()
		{
			return {
				"0": {
					"name": "doc",
					"type": "Document"
				},
				"1": {
					"name": "name",
					"type": "String"
				},
				"length": 2
			};
		}

		function grabByTagNameTree()
		{
			return {
				"0": {
					"name": "caller",
					"type": "Document || Element"
				},
				"1": {
					"name": "tag",
					"type": "String (with quotations)"
				},
				"length": 2
			};
		}

		function grabByClassNameTree()
		{
			return {
				"0": {
					"name": "caller",
					"type": "Document || Element"
				},
				"1": {
					"name": "classes",
					"type": "String (with quotations)"
				},
				"length": 2
			};
		}

		function grabByIdTree()
		{
			return {
				"0": {
					"name": "doc",
					"type": "Document"
				},
				"1": {
					"name": "id",
					"type": "String (with quotations)"
				},
				"length": 2
			};
		}

		function grabQueryTree()
		{
			return {
				"0": {
					"name": "caller",
					"type": "Document || Element"
				},
				"1": {
					"name": "selectors",
					"type": "String (with quotations)"
				},
				"length": 2
			};
		}

		function grabQueryAllTree()
		{
			return {
				"0": {
					"name": "caller",
					"type": "Document || Element"
				},
				"1": {
					"name": "selectors",
					"type": "String (with quotations)"
				},
				"length": 2
			};
		}

		function grabFormsTree()
		{
			return {
				"0": {
					"name": "doc",
					"type": "Document"
				},
				"1": {
					"name": "key",
					"type": "String (with quotations)"
				},
				"length": 2
			};
		}

		function grabAllFormsTree()
		{
			return {
				"0": {
					"name": "doc",
					"type": "Document"
				},
				"length": 1
			};
		}

		methods = {
			"byName": grabByNameTree(),
			"byTagName": grabByTagNameTree(),
			"byClassName": grabByClassNameTree(),
			"byId": grabByIdTree(),
			"query": grabQueryTree(),
			"queryAll": grabQueryAllTree(),
			"forms": grabFormsTree(),
			"allForms": grabAllFormsTree()
		};

		selected = [];

		MAX_PARAMS = 2;

		doc = null;

		function byId(
			doc,
			id
		)
		{
			var result = null;
			if (Utils.select.byId) {
				result = Utils.select.byId(
					doc,
					id
				);
			}
			return result;
		}

		function removeClass(
			obj,
			token
		)
		{
			var result = null;
			if (Utils.classes.remove) {
				result = Utils.classes.remove(
					obj,
					token
				);
			}
			return result;
		}

		function addClass(
			obj,
			token
		)
		{
			var result = null;
			if (Utils.classes.add) {
				result = Utils.classes.add(
					obj,
					token
				);
			}
			return result;
		}

		function modifyParameterWrapper(
			obj,
			index
		)
		{
			var param = byId(
				global.document,
				"param_" + index
			);
			if (param) {
				if (obj) {
					removeClass(
						param,
						"inactive"
					);
				} else if (!obj) {
					addClass(
						param,
						"inactive"
					);
				}
			}
		}

		function setText(
			obj,
			text,
			doc
		)
		{
			var result = null;
			if (Utils.text.set) {
				result = Utils.text.set(
					obj,
					text,
					doc
				);
			}
			return result;
		}

		function modifyParameterName(
			obj,
			index
		)
		{
			var name = byId(
				global.document,
				"param_name_" + index
			),
				text;
			if (name && obj) {
				text = obj.name;
				setText(
					name,
					text,
					global.document
				);
			}
		}

		function modifyParameterType(
			obj,
			index
		)
		{
			var type = byId(
				global.document,
				"param_type_" + index
			),
				text;
			if (type && obj) {
				text = "(" + obj.type + ")";
				setText(
					type,
					text,
					global.document
				);
			}
		}

		function adjustControlStatus(
			control,
			required
		)
		{
			var key = "required";
			if (control) {
				if (typeof control[key] ===
					"boolean") {
					control[key] = required;
				}
			}
		}

		function modifyParameterControl(
			obj,
			index
		)
		{
			var control = byId(
				global.document,
				"param_control_" + index
			),
				required = false;
			if (control && obj) {
				control.value = "";
				required = true;
			}
			adjustControlStatus(
				control,
				required
			);
		}

		function modifyParameter(
			obj,
			index
		)
		{
			modifyParameterWrapper(
				obj,
				index
			);
			modifyParameterName(
				obj,
				index
			);
			modifyParameterType(
				obj,
				index
			);
			modifyParameterControl(
				obj,
				index
			);
		}

		function iterateParameters(
			method
		)
		{
			var max = MAX_PARAMS - 1,
				aux = max,
				diff;
			for (aux; aux > -1; aux -= 1) {
				diff = max - aux;
				modifyParameter(
					method[diff],
					diff
				);
			}
		}

		function displayParameters(
			val
		)
		{
			var method = methods[val];
			if (method) {
				iterateParameters(
					method
				);
			}
		}

		function parametersRequested(
			evt
		)
		{
			displayParameters(
				this.value
			);
		}

		function addControlParam(
			index,
			params
		)
		{
			var control = byId(
				global.document,
				"param_control_" + index
			),
				val;
			if (control) {
				val = control.value;
				params[params.length] = val;
			}
		}

		function grabControlParams()
		{
			var result = [],
				index,
				max = MAX_PARAMS;
			for (index = 0; index < max; index += 1) {
				addControlParam(
					index,
					result
				);
			}
			return result;
		}

		function callMethod(
			key,
			params
		)
		{
			var result = null;
			if (Utils.select[key]) {
				if (params) {
					result = Utils.select[key](
						eval(params[0]),
						eval(params[1]),
						eval(params[2])
					);
				}
			}
			return result;
		}

		function showItem(
			item
		)
		{
			if (item) {
				addClass(
					item,
					"selected"
				);
				selected[selected.length] = item;
			}
		}

		function iterateResult(
			called
		)
		{
			var max = called.length,
				index,
				item;
			for (index = 0; index < max; index += 1 ) {
				item = called[index];
				showItem(
					item
				);
			}
		}

		function isNodeLike(
			obj
		)
		{
			return Utils.is.nodeLike(
				obj
			);
		}

		function isArrayLike(
			obj
		)
		{
			return Utils.is.arrayLike(
				obj
			);
		}

		function displayResult(
			called
		)
		{
			if (called) {
				if (isNodeLike(called)) {
					showItem(
						called
					);
				} else if (isArrayLike(called)) {
					iterateResult(
						called
					);
				}
			}
		}

		function demoSubmitted(
			evt
		)
		{
			var control = commonElements.method,
				method,
				params = grabControlParams(),
				called;
			if (control) {
				method = control.value;
				called = callMethod(
					method,
					params
				);
				if (called) {
					displayResult(
						called
					);
				}
			}
			return false;
		}

		function addDemoHandlers()
		{
			var demo = commonElements.demo;
			if (demo) {
				demo.onsubmit = demoSubmitted;
			}
		}

		function addMethodHandlers()
		{
			var method = commonElements.method,
				key = "onchange";
			if (method) {
				method.onchange = parametersRequested;
				method.onkeyup = parametersRequested;
				method.onmouseup = parametersRequested;
			}
		}

		function eraseResult(
			item
		)
		{
			if (item) {
				removeClass(
					item,
					"selected"
				);
			}
		}

		function eraseRequested(
			evt
		)
		{
			var max = selected.length,
				index,
				item;
			for (index = 0; index < max; index += 1 ) {
				item = selected[index];
				eraseResult(
					item
				);
			}
			selected = [];
		}

		function addEraseHandlers()
		{
			var erase = commonElements.erase;
			if (erase) {
				erase.onclick = eraseRequested;
				erase.onkeyup = eraseRequested;
			}
		}

		function addHandlers()
		{
			addDemoHandlers();
			addMethodHandlers();
			addEraseHandlers();
		}

		addHandlers();
	}());
}
