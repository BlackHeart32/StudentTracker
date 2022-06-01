const studentfname = document.getElementById("fname");
const studentlname = document.getElementById("lname");
const studentage = document.getElementById("age");
const studentgrade = document.getElementById("grade")
const registerButton = document.getElementById("registerBtn");
const form = document.getElementById("studentform");
const recentStudent = localStorage.getItem("recentStudent");

const studentList = JSON.parse(localStorage.getItem("studentList")) || [];


form.addEventListener("keyup", () =>{
    registerButton.disabled = !studentfname.value || !studentlname.value;
});

newStudent = (e) =>{ 
    e.preventDefault();
    
    const student = {
    fName: fname.value,
    lName: lname.value,
    age: studentage.value,
    grade: studentgrade.value   
    };

    studentList.push(student);

    //studentList.sort((a, b) => b.age - a.score.age);

    localStorage.setItem("studentList", JSON.stringify(studentList));

    
    window.location.assign("index.html")

}