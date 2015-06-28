function loadSources(container, urls) {
	var xmlhttp = new XMLHttpRequest();

	for (var i = 0; i < urls.length; i++) {
		xmlhttp.open('GET', urls[i], false);
		xmlhttp.send();

		container.innerHTML += "\n" + xmlhttp.responseText;
		
		if (i + 1 < urls.length) {
		  container.innerHTML += "\n---\n"
		}
	};
}