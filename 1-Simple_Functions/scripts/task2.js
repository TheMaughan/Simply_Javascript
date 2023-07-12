/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = "Bryce Maughan";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year
let currentDateAndTime = Date();
console.log("It is now "+currentDateAndTime);

let date = new Date();

let year = date.getFullYear(date);

console.log(year);


// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = year;



// Step 5: declare and instantiate a variable to hold the name of your picture
let student = 'images/me.jpg';

// Step 6: copy your image into the "images" folder
document.querySelector('img').setAttribute('src', student);


// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('width', 240);
document.querySelector('img').setAttribute('alt', 'Bryce and Imihaa got Married!!');



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let classes = ['Ice Cream,', 'Sushi,', 'Raman,', 'Sea Food'];
console.log(classes);


// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = classes.join(' ');


// Step 3: declare and instantiate a variable to hold another favorite food
let newItem = 'Authentic Japaneese Raman';


// Step 4: add the variable holding another favorite food to the favorite food array
classes [2] = newItem;
//console.log(classes [2]);


// Step 5: repeat Step 2
document.querySelector('#food').textContent = classes.join(' ');


// Step 6: remove the first element in the favorite foods array
//2 is starting and '1' is how many to take out.
classes.splice(0, 1);


// Step 7: repeat Step 2
document.querySelector('#food').textContent = classes.join(' ');


// Step 8: remove the last element in the favorite foods array
classes.pop();


// Step 7: repeat Step 2
document.querySelector('#food').textContent = classes.join(' ');


//classes.shift();
//document.querySelector('#courses').textContent = classes.join(' ');