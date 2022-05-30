import { Student } from "./Student.js";

const studentfname = document.getElementById("fname");
const studentlname = document.getElementById("lname");
const registerBtn = document.getElementById("registerBtn");
const form = document.getElementById("studentform");

form.addEventListener("keyup", () =>{
    registerBtn.disabled = !studentfname.value || !studentlname.value;
});

register = (e) =>{
    e.preventDefault();

    const newstudent = Student(fname, lname, 5, 6);

    console.log(newstudent.fullname());
}