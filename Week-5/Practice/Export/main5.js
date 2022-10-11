import Person, {printName, printAge} from '.module.js'

const user = new Person('Sally', 20);

console.log(user);

printName(user);
printAge(user);

//import aCourse from './Week4/Practice/objects.js'
//
//document.querySelector("#enrollStudent").addEventListener("click", function () {
//	const sectionNum = document.querySelector("#sectionNumber").value;
//	aCourse.enrollStudent(sectionNum);
//});//