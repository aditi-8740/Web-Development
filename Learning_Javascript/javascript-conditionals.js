// Javascript-conditionals : Executing a block of code when condition is true!
console.log("I am conditional tutorial")

let age=19;
// === operator(equal value and equal type)
// !== operator(not equal value or not equal type)
let a=12345;
let b="12345";
if( a === b ){    console.log("a === b")    }
else{   console.log("a !== b ")}
if( a == b ){    console.log("a == b")    }else{   console.log("a != b ")}
if(age>=18){
    console.log("you can vote!")
}
else{
    console.log("you can't vote ")
}

// nodejs REPL - read,evaluate,print,loop |terminal> node

// Js ternary operator:-   cond ? true : false
let x=10;
(x==10)?console.log("x is 10") : console.log("x is not 10"); 

// SWITCH case statements
let day=100;
switch(day){
    case 10:
    case 0 :
        console.log("sunday");
        break;
    case 1 :
        console.log("monday");
        break;
    case 2 :
        console.log("tuesday");
        break;
    case 3 :
        console.log("wednesday");
        break;
    case 4 :
        console.log("thursday");
        break;
    case 5 :
        console.log("friday");
        break;
    case 6 :
        console.log("saturday");
        break;
    default:
        console.log("A wrong value is entered!");
}

