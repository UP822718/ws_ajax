async function doFetchIt() {
	const response = await fetch('message.txt');
	const text = await response.text();
	const dt = document.getElementById("dynamicText1");
	dt.textContent = text;
}

function pageLoaded() {
	const btn = document.getElementById("fetchit");
	btn.addEventListener('click', doFetchIt);
}


window.addEventListener("load", pageLoaded);

