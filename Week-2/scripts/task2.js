/* Lesson 2 */

/* VARIABLES */
let student = 'images/me.jpg';
// Step 1: declare and instantiate a variable to hold your name
document.querySelector('h1').textContent = "Bryce's Bio";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('img').setAttribute('src', student);
document.querySelector('img').setAttribute('width', 240);
document.querySelector('img').setAttribute('alt', 'Bryce and Imihaa got Married!!');
// Step 3: declare and instantiate a variable to hold the current year
let classes = ['CSE121B', 'REL200C', 'ARCH225', 'ARCH290'];
console.log(classes);
//classes [2] = 'WDD230';
//console.log(classes [2]);

//2 is starting and '1' is how many to take out.
//classes.shift();
//document.querySelector('#courses').textContent = classes.join(' ');
classes.splice(2, 2);
document.querySelector('#courses').textContent = classes.join(' ');
//classes.pop();
//document.querySelector('#courses').textContent = classes.join(' ');

// Step 4: place the value of the current year variable into the HTML file

let currentDateAndTime = Date();
console.log("It is now "+currentDateAndTime);

let date = new Date();

let year = date.getFullYear(date);
console.log(year);

// Step 5: declare and instantiate a variable to hold the name of your picture


// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())




/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods


// Step 2: place the values of the favorite foods variable into the HTML file


// Step 3: declare and instantiate a variable to hold another favorite food


// Step 4: add the variable holding another favorite food to the favorite food array


// Step 5: repeat Step 2


// Step 6: remove the first element in the favorite foods array


// Step 7: repeat Step 2


// Step 8: remove the last element in the favorite foods array


// Step 7: repeat Step 2



