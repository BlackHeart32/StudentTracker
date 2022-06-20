const studentsList = document.getElementById("studentslist");
const students = JSON.parse(localStorage.getItem("studentList")) || [];
const studentInfo = document.getElementById("studentinfo");

studentsArray = [];

studentsList.innerHTML = students
.map(student => {
    studentsArray.push(student);
    return `<li class= "registered_student popup" onclick="showStudent()"> ${student.fName} ${student.lName}`;

})
.join("");


function showStudent() {
    const student = document.getElementsByClassName("registered_student");
    const info = document.getElementById("studentinfo");
    
    

    info.innerHTML = `<p>${studentsArray[1][fName]}</p>`
    
}; 
