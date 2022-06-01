const studentsList = document.getElementById("studentslist");
const students = JSON.parse(localStorage.getItem("studentList")) || [];



studentsList.innerHTML = students
.map(student => {
    return `<li class= "registered_student"> ${student.fName} ${student.lName}`;

})
.join("");

