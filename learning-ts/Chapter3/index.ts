let isNum = Math.random() > 0.5 ? "123" : 10;

//ok
isNum.toString();
//not ok
isNum.toFixed();

//literal
const myName = "JangUiYoung";

//not literal
let yourName = "KimYoungHoon";

let school: "DSU" | null;

school = null; //ok
school = "DSU"; //ok
school = "BDU"; //no ok

let myScore: 233 | undefined;

if (myScore) console.log(myScore.toFixed); // type : number

console.log(myScore.toFixed); // type : number | undefined

// let number = Math.random() > 0.5 ? "123" : 10;

// //ok
// if (number === 10) number.toFixed(1);

// //not ok
// number.toFixed(10);

let myNumber = Math.random() > 0.5 ? "123" : 10;

if (typeof myNumber === "number") {
  myNumber.toFixed(1);
} else {
  myNumber.toString();
}

typeof myNumber === "string" ? myNumber.toString() : myNumber.toFixed(1);

const philosopher = "Hysteria";

let lifespan: number | "ongoing" | "uncertain";

lifespan = 10;
lifespan = "ongoing";
lifespan = "uncertain";

let myFreind: string;
const me = "JUY";
//ok
myFreind = "KYM";
//ok
myFreind = me;
