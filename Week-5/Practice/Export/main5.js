import Person, {printName, printAge} from './module.js'

const user = new Person('Sally', 20);

console.log(user);

printName(user);
printAge(user);

import aCourse from './objects.js'

document.querySelector("#enrollStudent").addEventListener("click", function () {
	const sectionNum = document.querySelector("#sectionNumber").value;
	aCourse.enrollStudent(sectionNum);
});

setTimeout(function(){
	console.log('async');
}, 1000);
console.log('synchronous');