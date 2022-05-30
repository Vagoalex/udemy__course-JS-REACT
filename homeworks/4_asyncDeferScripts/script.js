const body = document.body;

function loadScript(src) {
	const script = document.createElement('script');
	script.src = src;
	script.async = false;
	body.append(script);
}
loadScript('./test.js');
loadScript('./test2.js');
