const animals = [
	{
	  "name": "Meowsy",
	  "species" : "cat",
	  "foods": {
		"likes": ["tuna", "catnip"],
		"dislikes": ["ham", "zucchini"]
	  }
	},
	{
	  "name": "Barky",
	  "species" : "dog",
	  "foods": {
		"likes": ["bones", "carrots"],
		"dislikes": ["tuna"]
	  }
	},
	{
	  "name": "Purrpaws",
	  "species" : "cat",
	  "foods": {
		"likes": ["mice"],
		"dislikes": ["cookies"]
	  }
	}
  ];


console.log(animals[1].name + ' ' + animals[1].foods.likes[0]);

function sortBy() {
	document.querySelector('#pets').innerHTML = '';
	let sort = document.querySelector('#sortBy').value;
	if (sort = 'petNameAscending') {
		animals.sort(animal_sort_asc);
		outputPets(animals.sort(animal_sort_asc));
	} else if (sort == 'petNameDescending'){
		outputPets(animals.sort(animal_sort_desc));
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

function outputPets() {
	animals.array.forEach(item => {
		let petSection = document.querySelector('#pets');
		let petName = document.createElement('h2');
		let petSpecies = document.createElement('h3');
		petName.textContent = item.name;
		petSpecies.textContent = item.Species;
		petSection.appendChild(petName);
		petSection.appendChild(petSpecies);
	});
}

document.querySelector('#sortBy').addEventListener('change', sortBy);