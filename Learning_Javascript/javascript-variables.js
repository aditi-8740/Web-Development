console.log("hello! I'm learning js")
let a=5;  //**
a= a+1;  //allowed!
var b=6;
var c="harry";
console.log(a+b+5)  
console.log(typeof a, typeof b , typeof c)

{// Inside Block
    let a=567;  //** can try changing let=var here
    console.log(a);
}
console.log(a)

var _a=55;
// var 55a=55; not allowed

const a1=5;
// a1= a1+1;  Assignment to constant variable,Invalid!

// DATA TYPES:
let x="aditi sharma";
let y=22;
let z =3.567;
const p=true;
let q=undefined;
let r = null;
console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

let m="strings";
let n= 11+2+m;
console.log(n , typeof n)
// OBJECTS
let obj = {
    name: "aditi",
    "job code" :3400,
    is_handsome: true
}
// Accessing Object Properties 
// person.lastName;
// person["lastName"];
console.log(obj);
obj["salary"]=10000
console.log(obj)
obj.salary="100 crores"
console.log(obj)

const obj1 = {
    name: "himanshu",
    "job code" :6400,
}
console.log(obj1)
obj1.is_handsome= true;
obj1["name"]= "himanshu sharma";
console.log(obj1)

// word-meaning dictionary of 5 words
let dictionary= {
    word1:"hello",
    word2:"world",
    word3: "what",
    word4:"create",
    word5:"why"
}

console.log(dictionary);
console.log("the fourth word is "+ dictionary.word4)
dictionary.word4="how"
console.log(dictionary)
console.log("the fourth word is "+ dictionary.word4)
