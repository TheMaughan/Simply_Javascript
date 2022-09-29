
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


//other array stuff
let array1 = [1, 4, 9, 16];
let array2 = array1.map(item => item * 2);

console.log(array2);
console.log(array1);


const grades = ['A', 'B', 'C'];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === 'A') {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpsPoints = grades.map(convertGradeToPoints);

const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

// example 2
// this is the same thing as above, but with an arrow function
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa = pointsTotal / gpaPoints.length;

// this could be further simplified as
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;