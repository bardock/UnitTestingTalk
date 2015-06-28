/* Loads external files into specified container element.
 * It's based on this issue: https://github.com/gnab/remark/issues/150
 * Pass source as string and macros are not working when using slides separator (---) inside a file.
 */
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