const searchBar = document.querySelector("[type=search]");

const definitionList = document.querySelectorAll("dt");

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
	return definitionList.forEach((dt) => { !arrayOfSearchDefinition.includes(dt.innerHTML) ? dt.parentNode.classList.add("hide") : dt.parentNode.classList.remove("hide") })
}


searchBar.addEventListener("input", (e) =>
updateDefinitionDocument(searchDefinition(e.target.value))
);

searchBar.addEventListener("keypress", (e) => {
	if (e.key == "Enter") {
		e.preventDefault();
		searchBar.blur()
	}
});