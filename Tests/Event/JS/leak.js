var global = global || this;
if (typeof Utils === "object" && Utils) {
	(function () {
		var doc = global.document,

			commonElements,
			tests,
			testIndex,

			score,
			testsRun,

			runTests,

			tester;

		commonElements = (function () {
			var key = "getElementById",
				obj = {};
			obj.test = doc[key]("test");
			obj.start = doc[key]("start");
			obj.stop = doc[key]("stop");
			return obj;
		}());

		doc = null;

		function addElementListener(
			el,
			evt,
			handler,
			capture
		)
		{
			var key = "addElementListener",
				result = null;
			if (Utils.event[key]) {
				result = Utils.event[key](
					el,
					evt,
					handler,
					capture	
				);
			}
			return result;
		}

		function dummyHandler(
			evt
		)
		{
			return this;
		}

		function getBody(
			doc
		)
		{
			var result = null;
			if (Utils.is.hostObject(doc.body)) {
				result = doc.body;
			}
			doc = null;
			return result;
		}

		function addListeners()
		{
			var index = 0;
			for (index; index < 1000; index += 1) {
				addElementListener(
					getBody(
						global.document
					),
					"click",
					dummyHandler,
					false
				);
			}
		}

		function disableStartButton()
		{
			var par = commonElements,
				button = par.start;
			button.disabled = true;
			button.onclick = function () {};
		}

		function startTests(
			evt
		)
		{
			addListeners();
			disableStartButton();
		}

		function removeElementListener(
			el,
			evt,
			handler,
			capture
		)
		{
			var key = "removeElementListener",
				result = null;
			if (Utils.event[key]) {
				result = Utils.event[key](
					el,
					evt,
					handler,
					capture	
				);
			}
			return result;
		}

		function removeListeners()
		{
			var index = 0;
			for (index; index < 1000; index += 1) {
				removeElementListener(
					getBody(
						global.document
					),
					"click",
					dummyHandler,
					false
				);
			}
		}

		function enableStartButton()
		{
			var par = commonElements,
				button = par.start;
			button.disabled = false;
			button.onclick = startTests;
		}

		function endTests(
			evt
		)
		{
			removeListeners();
			enableStartButton();
		}

		function addHandlers()
		{
			var par = commonElements;
			par.start.onclick = startTests;
			par.stop.onclick = endTests;
		}

		addHandlers();
	}());
}

