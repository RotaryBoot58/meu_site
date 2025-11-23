const languageButton = document.querySelector('button');

languageButton.addEventListener("click", (event) => {
	switch(languageButton.dataset.language)
	{
		case "pt":
			window.location.href = "portuguese.html"
			break;

		case "en":
			window.location.href = "/"
			break;
	}
});
