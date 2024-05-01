// for , while , do-while ,for-in , for-of loop
let a=1;
for (let i = 0; i < 10 ; i++) {
    console.log(a+i);
}

let obj={
    name : "Aditi Sharma",
    role : "programmer" , 
    company : "XYZ company"
}
obj["role"] = "Programmer";
for (const key in obj) {
        // const element = obj[key];
        console.log(obj[key]);
}
for (const iterator of "Aditi Sharma") {
    console.log(iterator)
}

let j=0;
while (j<5) {
    console.log(j);
    j++;
}
// do {
//     console.log(j);
//     j++;
// } while (j<5);

// has-on property