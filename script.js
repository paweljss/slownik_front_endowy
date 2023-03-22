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

const addToSearchList = function (arrayOfsearch) {
	const searchList = document.querySelector("#search-menu ul");
	searchList.innerHTML = "";
	if(arrayOfsearch.length == definitionList.length) return;
	return arrayOfsearch.map((el) => {
		const searchListLi = document.createElement("li");
		searchListLi.textContent = el;
		searchList.appendChild(searchListLi);
	});
};

searchBar.addEventListener("input", (e) =>
	addToSearchList(searchDefinition(e.target.value))
);


searchBar.addEventListener("keypress", (e) => {
	if (e.key == "Enter") {
		e.preventDefault();
		console.log(e.target.value);
	}
});