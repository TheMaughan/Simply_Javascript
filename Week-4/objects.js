// courses.js


const myself = {
	name: "Bryce",

}

const aCourse = {
	code: "CSE 121B",
	name: "Javascript Language",
	logo: 'image/logo.png',
	sections: [
		{sectionNum: 1, roomNum: 'STC347', enrolled: 26, days: 'TTh', instructor: 'Sis A'},
		{sectionNum: 2, roomNum: 'STC353', enrolled: 25, days: 'TTh', instructor: 'Bro T'}
	],
	//methood
	showSection: function(){
		console.log('ShowSectoin method ran');
	},
	enrollStudent: function(sectionNum){
		const sectionIndex = this.section.findIndex((item)=> item.sectionNum ==
		sectionNum);
		if (sectionIndex >= 0){
			this.sections[sectionIndex].enrolled++;
			renderSections(this.sections);
		}
	}

  };

console.log(aCourse.name);

document.querySelector('#courseName').textContent = aCourse.name;
document.querySelector('#courseCode').textContent = aCourse.code;

document.querySelector('img').setAttribute('src', aCourse.logo);
document.querySelector('img').setAttribute('alt', aCourse.name);

console.log(aCourse.sections[0].enrolled);

//add an <li> with the first room number:
//function add_room(item) {
//	document.querySelector('#sections').innerHTML = '<li>' + item.roomNum + '</li>';
//}

//aCourse.sections.forEach(add_room)

aCourse.sections.forEach(item => {
	document.querySelector('#sections').innerHTML += '<li>' + item.roomNum + '</li>';
})

aCourse.showSection();

function renderSection(sections) {
	const html = sections.map(
		(section) => `<tr> <td>${section.sectionNum}</td>
		<td>${section.roomNum}</td>
		<td>${section.enrolled}</td>
		<td>${section.days}</td>
		<td>${section.instructor}</td></tr>`
	);
	document.querySelector('#courses').innerHTML = html.join("");
}

document.querySelector('#enrollStudent').addEventListener('click', function (){
	const sectionNum = document.querySelector('#sectionNumber').value;
	aCourse.enrollStudent(sectionNum);
})

setCourseInfo(aCourse);
renderSections(aCourse.sections);