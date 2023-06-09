const searchBar = document.querySelector("[type=search]");

const definitionList = document.querySelectorAll("dt");

const asideListOfTerms = document.querySelectorAll("#asiade-list-of-terms li");

const clearButton = document.querySelector("#clear");

const main = document.querySelector("main");

const showElements = function (dt) {
	dt.parentNode.classList.remove("hide");
};

const searchDefinition = function (eTargetValue) {
	const regex = new RegExp("^" + eTargetValue, "i");
	let arrOfMatch = [];
	for (const el of definitionList) {
		if (regex.test(el.innerHTML)) {
			arrOfMatch.push(el.innerHTML);
		}
	}
	return arrOfMatch;
};

const updateDefinitionDocument = function (arrayOfSearchDefinition) {

		return definitionList.forEach((dt) => {
			!arrayOfSearchDefinition.includes(dt.innerHTML)
				? dt.parentNode.classList.add("hide")
				: showElements(dt);
		});

};

searchBar.addEventListener("input", (e) =>
	updateDefinitionDocument(searchDefinition(e.target.value))
);

searchBar.addEventListener("keypress", (e) => {
	if (e.key == "Enter") {
		e.preventDefault();
		searchBar.blur();
	}
});

clearButton.addEventListener("click", () => {
	searchBar.value = "";
	definitionList.forEach((dt) => {
		showElements(dt);
	});
});

for (const asideLi of asideListOfTerms) {
	asideLi.addEventListener("click", (e) => {
		searchBar.value = e.target.innerText;
		updateDefinitionDocument([searchBar.value]);
	});
}

const header = document.querySelector("header");

document.addEventListener("scroll", () => {
	if (window.scrollY > 0 && window.innerWidth > 760) {
		header.classList.add("small");
	} else {
		header.classList.remove("small");
	}
});

header.addEventListener("click", (e) => {

	if (e.clientX < 38 && e.clientY < 45) {
		aside.classList.add("show");
	}
});

const aside = document.querySelector("aside");

aside.addEventListener("click", (e) => {

	if (e.clientX < 38 && e.clientY < 45) {
		aside.classList.remove("show");
	}
});

