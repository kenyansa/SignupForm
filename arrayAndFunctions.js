//Lecture 4: With Kelvin Onkundi
// Declaring objects using Object Constructors
this.age = 500;
this.firstName = "Carol" //if commented, it will return undefined.
const person = new Object()
person.age = 38;
person.firstName = "Justine"
person.getAllDetails = function(){
    console.log(this.firstName + " " + this.age);
}
person.getSomeDetails= ()=>{
    console.log(this.firstName + " "+ this.age)
}
person.getAllDetails()
person.getSomeDetails()

//second way of doing things =>Declaring objects using curly braces
// const cat = {}
// cat.name = "Lion"
// console.log(cat)
//Iterating over objects
const students = {
    1: {
        name: "Justine"
    },
    2: {
        name:"Joy"
    },
    3: {
        name: "Kaka"
    },
}

for(const key in students){
    const property = students[key]
    console.log(property)
}
const studentDetails = Object.values(students).map((student) =>`Hi I am ${student.name}`)