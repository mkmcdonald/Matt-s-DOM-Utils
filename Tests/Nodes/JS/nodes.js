(function () {
	var commonElements = {
		"test": document.getElementById("test"),
		"start": document.getElementById("start"),
		"stop": document.getElementById("stop"),
		"results": document.getElementById("results"),
		"toy": document.getElementById("military_child")
	},
		childAppended,
		childRemoved,
		elementCreated,
		textNodeCreated,
		commentCreated;

	function assignValues()
	{
		childAppended = Utils.nodes.appendChild(
			commonElements.test,
			commonElements.toy
		);
		childRemoved = Utils.nodes.appendChild(
			commonElements.test,
			commonElements.toy
		);
		elementCreated = Utils.nodes.createElement(
			document,
			"p"
		);
		textNodeCreated = Utils.nodes.createTextNode(
			document,
			"The rain in Spain is quite plain."
		);
		commentCreated = Utils.nodes.createComment(
			document,
			"No comment."
		);
	}

	function createMessage(text)
	{
		var str = String(text);
		if (str === "") {
			str = "[an empty string]";
		}
		return Utils.nodes.createTextNode(
			document,
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
		addMessage(childAppended);
		addMessage(childRemoved);
		addMessage(elementCreated);
		addMessage(textNodeCreated);
		addMessage(commentCreated);
	}

	function clearTest(evt)
	{
		var parent = commonElements.results,
		nodes = parent.childNodes;
		if (nodes) {
			while(nodes.length) {
				parent.removeChild(
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
