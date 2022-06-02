const studentsList = document.getElementById("studentslist");
const students = JSON.parse(localStorage.getItem("studentList")) || [];



studentsList.innerHTML = students
.map(student => {
    return `<li class= "registered_student popup" onclick="showStudent()"> ${student.fName} ${student.lName}`;

})
.join("");


function showStudent() {
    var popup = document.getElementById("studentpopup");
    popup.classList.toggle("show");
    
}; 