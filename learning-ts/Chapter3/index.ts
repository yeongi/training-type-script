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
