var global = global || this;
if (typeof Utils === "object" && Utils) {
	(function () {
		var commonElements,
			slideIndex,
			slideTimer,
			maxIndex = 3;

		function grabById(
			id
		)
		{
			var result = null;
			// method is part of a "dynamic interface"
			if (Utils.select.byId) {
				result = Utils.select.byId(
					global.document,
					id
				);
			}
			return result;
		}

		function grabNamedImage(
			name
		)
		{
			var result = null;
			// method is part of a "dynamic interface"
			if (Utils.select.images) {
				result = Utils.select.images(
					global.document,
					name
				);
			}
			return result;
		}

		commonElements = (function () {
			var result = {};
			result.link = grabById("slide_link");
			result.slide = grabNamedImage("current_slide");
			return result;
		}());

		function playSlide()
		{
			var slide = commonElements.slide,
				link = commonElements.link;
			if (slide && link) {
				slide.alt = "Feature" + slideIndex;
				slide.src = "images/feature" +
					slideIndex + ".jpg";
				link.href = "http://localhost/feature" +
					slideIndex + ".html";
				link.title = "Feature" + slideIndex;
			}
		}

		function removeTimeout(
			ref
		)
		{
			var key = "clearTimeout",
				result = null;
			if (Utils.is.hostObject) {
				if (Utils.is.hostObject(global[key])) {
					result = global[key](
						ref
					);
				}
			}
			return result;
		}

		function endShow()
		{
			removeTimeout(slideTimer);
			slideTimer = null;
			startShow();
		}

		function makeTimeout(
			callback,
			time
		)
		{
			var key = "setTimeout",
				result = null;
			if (Utils.is.hostObject) {
				if (Utils.is.hostObject(global[key])) {
					result = global[key](
						callback,
						time
					);
				}
			}
			return result;
		}

		function runTimer()
		{
			var timeout;
			if (slideIndex <= maxIndex) {
				timeout = makeTimeout(
					runTimer,
					3000
				);
				if (timeout) {
					slideTimer = timeout;
					playSlide();
					slideIndex += 1;
				}
			} else if (slideIndex > maxIndex) {
				endShow();
			}
			timeout = null;
		}

		function startShow()
		{
			slideIndex = 1;
			runTimer();
		}

		startShow();
	}());
}
