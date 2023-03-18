const searchBar = document.querySelector("[type=search]");

const definitionList = document.querySelectorAll("dt");

const searchDefinition = function (e_target_value) {
	const regex = new RegExp("^" + e_target_value, "i");
	let arrOfMatch = [];
	for (const el of definitionList) {
		if (regex.test(el.innerHTML)) {
			arrOfMatch.push(el.innerHTML);
		}
	}
	return arrOfMatch;
};

searchBar.addEventListener("input", (e) =>
	console.log(searchDefinition(e.target.value))
);
