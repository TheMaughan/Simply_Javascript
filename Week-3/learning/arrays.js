// example 1
const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
let element = document.getElementById("myList");
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
const gpaPoints = grades.map(convertGradeToPoints);
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;


const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter((word) => word.length < 6);


// improved luckyNumber
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);