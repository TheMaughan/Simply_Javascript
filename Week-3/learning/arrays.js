
//let new_array = arr.map(function callback( currentValue[, index[, array]]) {
	// return element for new_array
//};//[, thisArg])

/* improved luckyNumber
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);

*/
//const steps = ["one", "two", "three"];
//
//function makeList(item){
//	const listElement = document.getElementById("myList");
//
//	listElement.innerHTML += '<li>' + item + '</li>';
//}
//
//steps.forEach(makeList);
//

// example 1
const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
let element = document.getElementById("myList")
element.innerHTML = stepsHtml.join('');



let array1 = [1, 4, 9, 16];
let array2 = array1.map(item => item * 2);

console.log(array2);
console.log(array1);