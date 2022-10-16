//const animals = [
//	{
//	  "name": "Meowsy",
//	  "species" : "cat",
//	  "foods": {
//		"likes": ["tuna", "catnip"],
//		"dislikes": ["ham", "zucchini"]
//	  }
//	},
//	{
//	  "name": "Barky",
//	  "species" : "dog",
//	  "foods": {
//		"likes": ["bones", "carrots"],
//		"dislikes": ["tuna"]
//	  }
//	},
//	{
//	  "name": "Purrpaws",
//	  "species" : "cat",
//	  "foods": {
//		"likes": ["mice"],
//		"dislikes": ["cookies"]
//	  }
//	}
//  ];

const purl = 'https://learnwebcode.github.io/json-example/animals-1.json';

async function getPets(purl) {
	const results = await fetch(purl);
	console.log(results);
	if (results.ok) {
		const data = await results.json();
		console.log(data[0].name);
		outputPets(data);
	}
}

//console.log(animals[1].name + ' ' + animals[1].foods.likes[0]);

function sortBy() {
	document.querySelector('#pets').innerHTML = '';
	let sort = document.querySelector('#sortBy').value;
	if (sort = 'petNameAscending') {
		purl.sort(animal_sort_asc);
		outputPets(purl.sort(animal_sort_asc));
	} else if (sort == 'petNameDescending'){
		outputPets(purl.sort(animal_sort_desc));
	}
}


function animal_sort_asc(a, b) {
	if (a.name < b.name) {
		return -1;
	}
	else if (a.name > b.name) {
		return 1;
	}
	else {
		return 0;
	}
}

function animal_sort_desc(a, b) {
	if (a.name < b.name) {
		return 1;
	}
	else if (a.name > b.name) {
		return -1;
	}
	else {
		return 0;
	}
}

//function outputPets() {
//	animals.forEach(item => {
//		let petSection = document.querySelector('#pets');
//		let petName = document.createElement('h2');
//		let petSpecies = document.createElement('h3');
//		petName.textContent = item.name;
//		petSpecies.textContent = item.Species;
//		petSection.appendChild(petName);
//		petSection.appendChild(petSpecies);
//	});
//}

//document.querySelector('#sortBy').addEventListener('change', sortBy);



function outputPets(data) {
	data.forEach(item => {
		let petSection = document.querySelector('#pets');
		let petName = document.createElement('h2');
		let petSpecies = document.createElement('h3');
		petName.textContent = item.name;
		petSpecies.textContent = item.Species;
		petSection.appendChild(petName);
		petSection.appendChild(petSpecies);
		console.log(data[1].name);
	});
}

getPets(purl);

document.querySelector('#pets').addEventListener('change', outputPets);