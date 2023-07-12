/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a string
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
const myInfo = {
	code: "CSE 121B",
	name: "Bryce Maughan",
	logo: 'images/me.jpg',
	foods: ['Sushi', 'Raman', 'Briskett', 'Steak', 'Ice-Cream'],
	hobbies: ['Reading', 'Games', 'Fishing', 'Sleeping'],
// Step 6: Add another property named placesLived with a value of an empty array
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived
	Lived: [
		{
		id: 1,
		city: 'Provo',
		state: 'Utah',
		years: '5 years'
		},
		{
		id: 2,
		city: 'Shelley',
		state: 'Idaho',
		years: '6 months'
		},
		{
		id: 3,
		city: 'Springville',
		state: 'Utah',
		years: '2 years'
		},
		{
		id: 4,
		city: 'Iona',
		state: 'Idaho',
		years: '2 years'
		},
		{
		id: 5,
		city: 'Rigby',
		state: 'Idaho',
		years: '6 years'
		},
		{
		id: 6,
		city: 'Sugar-Salem',
		state: 'Idaho',
		years: '5 years'
		},
		{
		id: 7,
		city: 'Rexburg',
		state: 'Idaho',
		years: '6 years'
		},
	],
};


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = myInfo.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('src', myInfo.logo);
document.querySelector('#photo').setAttribute('alt', myInfo.name);
document.querySelector('#photo').setAttribute('width', 240);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
myInfo.foods.forEach(foodie => {
	document.querySelector('#favorite-foods').innerHTML += '<li>' + foodie + '</li>';
})

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
myInfo.hobbies.forEach(goodie => {
	document.querySelector('#hobbies').innerHTML += '<li>' + goodie + '</li>';
})

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
myInfo.Lived.forEach(locations => {
	document.querySelector('#places-lived').innerHTML += 
	'<dt>' + locations.city + ', ' + locations.state + '</dt>' +
	'<dd>' + locations.years + '</dd>';
})
