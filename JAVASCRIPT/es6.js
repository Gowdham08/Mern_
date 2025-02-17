// variables -refer javascript.js file

// arrow function
// function testFunction(){
//     console.log("This is ");
// }
// var arrowFunction= () =>{
//     console.log("Arrow Function");
// }
// arrowFunction()
// var testArrowFunction =() => {
//     console.log('Arrow function');
// }

// testArrowFunction(); // Arrow function
// Scoping
// var a=10
// console.log(a);
//  // Scoping starts
// {
//     let a=20;
//     console.log(a);//20
//     let b=30;
//     console.log(b);//30
//     let c=40;
//     console.log(c);//40
//     var e=50;
//     console.log(e);
//     a=30;
//     console.log(a);//30
//     let d=60;
//     console.log(d);//60
// }
// console.log(a);//10
// console.log(e);//50

//type of Scope

//1. Global Scope
//2.Local Scope

// let a=10;
// while(a<12){
//     console.log(a);//20
//     a++;
// }

// // 4.ternary operator
// a=11;

// console.log((a%2)?'Odd':'Even');//Odd
//5. Spread Operator(...)
stud1year=["user1","user2","user3"]
stud2year=["user4","user5","user6"]
stud3year=["user7","user8","user9"]
stud4year=["user10","user11","user12"]
studDB=[...stud1year,...stud2year,...stud3year,...stud4year]
console.log(studDB);
// difference between spread and rest operator


// //6. Rest Operator(...)
// function studentDB(...studDB){
//     console.log(studDB);
// }
// studentDB(studDB)

//7. Destructuring [Array Destructuring,Object Destructuring]
// It is going to destruct the values present on the right side
// var array=[10,20,30,40,50]
// var [a,b,c,d,e]=array;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

//8.Hoisting

console.log(a);
var a=10;
console.log(a);

funHoisting()
// function funHoisting(){
//     console.log(" Checking Function Hoisting");
// }