var global = global || this;
if (typeof Utils === "object" && Utils) {
	(function () {
		function createText(
			doc,
			text
		)
		{
			var result = null;
			if (Utils.create.text) {
				result = Utils.create.text(
					doc,
					text
				);
			}
			return result;
		}

		function appendNode(
			par,
			node
		)
		{
			return Utils.node.append(
				par,
				node
			);
		}

		function appendText(
			par,
			text
		)
		{
			var node = createText(
				global.document,
				text
			);
			if (node) {
				appendNode(
					par,
					node
				);
			}
		}

		function selectBody(
			doc
		)	
		{
			var result = null;
			if (Utils.select.body) {
				result = Utils.select.body(
					doc
				);
			}
			return result;
		}

		function addBodyText(
			text
		)
		{
			var body = selectBody(global.document);
			if (body) {
				appendText(
					body,
					text
				);
			}
		}

		addBodyText("foo\r\n");
		addBodyText("bar\r\n");
		addBodyText("baz\r\n");
	}());
}
