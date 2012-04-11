global = global || this;
(function () {
	var doc = global.document,
		commonElements = {
			"test": doc.getElementById("test"),
			"start": doc.getElementById("start"),
			"stop": doc.getElementById("stop"),
			"results": doc.getElementById("results")
		},
		bodyReturned,
		byNameWrapped,
		byTagNameWrapped,
		byIdWrapped;

	function assignValues()
	{
		bodyReturned =
			Utils.select.body(doc);
		byNameWrapped = Utils.select.byName(
			doc,
			"control1"
		);
		byTagNameWrapped = Utils.select.byTagName(
			doc,
			"input"
		);
		byIdWrapped = Utils.select.byId(
			doc,
			"test"
		);
	}

	function createMessage(text)
	{
		var str = String(text);
		if (str === "") {
			str = "[an empty string]";
		}
		return Utils.nodes.createTextNode(
			doc,
			str + "\r\n"
		);
	}

	function addMessage(text)
	{
		var isText =
			Utils.nodes.isTextNode(
				text
			),
			par = commonElements.results,
			separator = createMessage("----------");
		text = createMessage(text);
		Utils.nodes.appendChild(
			par,
			text
		);
		Utils.nodes.appendChild(
			par,
			separator
		);
	}

	function runTest(evt)
	{
		assignValues();
		addMessage(bodyReturned);
		addMessage(byNameWrapped);
		addMessage(byTagNameWrapped);
		addMessage(byIdWrapped);
	}

	function clearTest(evt)
	{
		var par = commonElements.results,
			nodes = par.childNodes;
			isHostObject = Utils.host.isObject(nodes);
		if (isHostObject) {
			while(nodes.length) {
				par.removeChild(
					nodes[0]
				);
			}
		}
	}

	function addHandlers()
	{
		commonElements.start.onclick = runTest;
		commonElements.stop.onclick = clearTest;
	}

	addHandlers();
}());
