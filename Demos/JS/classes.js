var global = global || this;
if (typeof Utils === "object" && Utils) {
	(function () {
		var doc = global.document,
			commonElements,
			methods,
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
			obj.tokens = byId(
				doc,
				"tokens"
			);
			obj.result = byId(
				doc,
				"result"
			);
			return obj;
		}());

		function grabContainsTree()
		{
			return {
				"0": {
					"name": "obj",
					"type": "Element"
				},
				"1": {
					"name": "token",
					"type": "String (with quotations)"
				},
				"length": 2
			};
		}

		function grabContainsListTree()
		{
			return {
				"0": {
					"name": "obj",
					"type": "Element"
				},
				"1": {
					"name": "tokens",
					"type": "Array"
				},
				"length": 2
			};
		}

		function grabAddTree()
		{
			return {
				"0": {
					"name": "obj",
					"type": "Element"
				},
				"1": {
					"name": "token",
					"type": "String (with quotations)"
				},
				"length": 2
			};
		}

		function grabAddListTree()
		{
			return {
				"0": {
					"name": "obj",
					"type": "Element"
				},
				"1": {
					"name": "tokens",
					"type": "Array"
				},
				"length": 2
			};
		}

		function grabRemoveTree()
		{
			return {
				"0": {
					"name": "obj",
					"type": "Element"
				},
				"1": {
					"name": "token",
					"type": "String (with quotations)"
				},
				"length": 2
			};
		}

		function grabRemoveListTree()
		{
			return {
				"0": {
					"name": "obj",
					"type": "Element"
				},
				"1": {
					"name": "tokens",
					"type": "Array"
				},
				"length": 2
			};
		}

		function grabToggleTree()
		{
			return {
				"0": {
					"name": "obj",
					"type": "Element"
				},
				"1": {
					"name": "token",
					"type": "String (with quotations)"
				},
				"length": 2
			};
		}

		function grabToggleListTree()
		{
			return {
				"0": {
					"name": "obj",
					"type": "Element"
				},
				"1": {
					"name": "tokens",
					"type": "Array"
				},
				"length": 2
			};
		}

		function grabItemTree()
		{
			return {
				"0": {
					"name": "obj",
					"type": "Element"
				},
				"1": {
					"name": "index",
					"type": "Number"
				},
				"length": 2
			};
		}

		function grabGetTree()
		{
			return {
				"0": {
					"name": "obj",
					"type": "Element"
				},
				"length": 1
			};
		}

		methods = {
			"contains": grabContainsTree(),
			"containsList": grabContainsListTree(),
			"add": grabAddTree(),
			"addList": grabAddListTree(),
			"remove": grabRemoveTree(),
			"removeList": grabRemoveListTree(),
			"toggle": grabToggleTree(),
			"toggleList": grabToggleListTree(),
			"item": grabItemTree(),
			"get": grabGetTree()
		};

		MAX_PARAMS = 2;

		doc = null;

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
			if (Utils.classes[key]) {
				if (params) {
					result = Utils.classes[key](
						eval(params[0]),
						eval(params[1])
					);
				}
			}
			return result;
		}

		function joinArray(
			ar,
			delim
		)
		{
			var result = null;
			if (typeof Array.prototype.join ===
				"function") {
				result = ar.join(
					delim
				);
			}
			return result;
		}

		function showTokens(
			tokens
		)
		{
			var display = commonElements.tokens;
			tokens = joinArray(
				tokens,
				", "
			);
			if (tokens) {
				tokens = "[" + tokens + "]";
			} else if (tokens === "") {
				tokens = "[]";
			}
			setText(
				display,
				tokens,
				global.document
			);
		}

		function iterateTokens(
			tokens
		)
		{
			var max = tokens.length,
				index,
				item,
				list = [];
			for (index = 0; index < max; index += 1 ) {
				item = tokens[index];
				list[list.length] = item;
			}
			showTokens(
				list
			);
		}

		function addResult(
			called
		)
		{
			var display = commonElements.result;
			setText(
				display,
				called,
				global.document
			);
		}

		function getClasses(
			obj
		)
		{
			var result = null;
			if (Utils.classes.get) {
				result = Utils.classes.get(
					obj
				);
			}
			return result;
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
			obj,
			called
		)
		{
			var tokens = getClasses(obj);
			if (isArrayLike(tokens)) {
				iterateTokens(
					tokens
				);
				addResult(
					called
				);
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
				displayResult(
					eval(params[0]),
					called
				);
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

		function eraseResult()
		{
			var display = commonElements.result;
			setText(
				display,	
				"",
				global.document
			);
		}

		function eraseTokens()
		{
			var display = commonElements.tokens;
			setText(
				display,	
				"",
				global.document
			);
		}

		function eraseRequested(
			evt
		)
		{
			eraseTokens();
			eraseResult();
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
