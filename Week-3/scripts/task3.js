/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
const add = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const multi = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

// Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNums() {
    let add1 = parseInt(document.querySelector('#addend1').value);
    let add2 = parseInt(document.querySelector('#addend2').value);
    let result = add(add1, add2);

    // Step 4: Assign the return value to an HTML form element with an ID of sum
    document.querySelector('#sum').value = result;
}
const subNums = (ev) => {
	ev.preventDefault();

    let sub1 = parseInt(document.querySelector('#minuend').value);
    let sub2 = parseInt(document.querySelector('#subtrahend').value);
    let result = sub(sub1, sub2);

    // Step 4: Assign the return value to an HTML form element with an ID of sum
    document.querySelector('#difference').value = result;
}
const multiNums = (ev) => {
	ev.preventDefault();

    let multi1 = parseInt(document.querySelector('#factor1').value);
    let multi2 = parseInt(document.querySelector('#factor2').value);
    let result = multi(multi1, multi2);

    // Step 4: Assign the return value to an HTML form element with an ID of sum
    document.querySelector('#product').value = result;
}
const divNums = (ev) => {
	ev.preventDefault();

    let div1 = parseInt(document.querySelector('#dividend').value);
    let div2 = parseInt(document.querySelector('#divisor').value);
    let result = div(div1, div2);

    // Step 4: Assign the return value to an HTML form element with an ID of sum
    document.querySelector('#quotient').value = result;
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
// This step is at the bottom of the file.

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
//Done

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
//Done

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
//Done

// Step 9: Test all of the mathematical functionality of the task3.html page.
//Looks good!

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let date = new Date();

// Step 2: Declare a variable to hold the current year
let year = date.getFullYear(date);

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
console.log("It is now "+date);

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector('#year').textContent = year;


/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"


document.addEventListener('DOMContentLoaded', ()=>{ //Listen for events after page loads:
    
    document.querySelector('#addNumbers').addEventListener('click', addNums);// Listen for mouse click
	document.querySelector('#subtractNumbers').addEventListener('click', subNums);// Listen for mouse click
	document.querySelector('#multiplyNumbers').addEventListener('click', multiNums);// Listen for mouse click
	document.querySelector('#divideNumbers').addEventListener('click', divNums);// Listen for mouse click
    //document.getElementById('clear').addEventListener('click', clear);// Listen for mouse click
    
	//We'll do live updates later...
	//document.getElementById('addend1').addEventListener('keyup', addNums);// Listen for key release
    //document.getElementById('addend2').addEventListener('keyup', addNums);// Listen for key release
});