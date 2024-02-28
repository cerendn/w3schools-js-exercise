let carName = "Volvo";

//let x = 50;

let x = 5;
let y = 10;
document.getElementById("demo").innerHTML = x + y;

let z = x+y;
alert(z);

let firstName = "John", lastName = "Doe", age = 35;

alert(10*5);
alert(10/2);
alert(15%9);//remainder kalan

//Use the correct assignment operator that will result in x being 15 (same as x = x + y).
//x=10; y=5; x+=y;

// let length = 16;          // number
// let lastName = "Johnson"; // string
// const x = {
//   firstName: "John",
//   lastName: "Doe"
// };                        // object

// function myFunction() {
//     alert("Hello World!")
// }
// myFunction();

function myFunction() {
    return "Hello";
}
document.getElementById("demo").innerHTML = myFunction();

const person = {
firstName:"John",
lastName:"Doe",
//country: "Norway"
};
alert(person.firstName);

// const person = {
//     name :"John", age: 50
// };
// alert(person.name + "is" + person.age);


