export class Student{
    constructor(fname, lname, age, grade){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.grade = grade;
        fullname = function(){
            return this.name + " " + this.lname;
        }

    }
}