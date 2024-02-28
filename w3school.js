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

//let txt = "Hello World!";
let a = txt.length;
alert(a);

//let txt= "We are \"Vikings\"";
alert(txt);

// let txt = "Hello World!";
// txt = txt.toUpperCase();
//txt=txt.toLowerCase();

//let txt = "I can eat bananas all day";
//let x = txt.slice(10,17);

let txt = "Hello World";
txt = txt.replace("Hello", "Welcome");

const cars = ["Saab", "Volvo", "BMW"];
let q = cars[1];

//const cars = ["Volvo", "Jeep", "Mercedes"];
cars[0]="Ford";
alert (cars.length);

const fruits = ["Banana", "Orange", "Apple"];
fruits.pop();
fruits.push("Kiwi");
fruits.splice(1,2);
fruits.sort();//alfabetik dizer

const d = new Date();
alert(d);
year = d.getFullYear();
month=d.getMonth();
d.setFullYear(2020);

let r = Math.random();

//let x = Math.max(10,20);
//let x =Math.round(5.3);
//let x = Math.sqrt(9);

const age = n;
const voteable = (age<18) ? "Too young" : "Old enough";
alert(voteable);

