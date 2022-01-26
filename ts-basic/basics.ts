// 원시 타입: number , string, boolean
// 복잡한 타입 : arrays, objects
// 함수 타입 : parameter

//primitives
let age: number;
//Number -> object type

age = 12;

let userName: string;

userName = "mike";

let isMarreid: boolean;

isMarreid = true;

//null??
// let hobbies: null;
//오류가 발생함
// hobbies = 12;

let hobbies: string[];

hobbies = ["스포츠", "요리", "음악"];

//객체에서 타입을 지정할땐, 객체로 구조를 지정한다.
let person: {
  name: string;
  age: number;
}[];

person = [
  {
    name: "max",
    age: 32,
  },
];
//오류
// person = {
//   isMarreid: false,
// }

//Type inference
// let course: string = "타입스크립트 부시기";

//error
//초기화된 타입으로 타입이 지정이 된다.
// course = 123123;

//mutiple different type : use union type
let course: string | number = "타입스크립트 조지기";

course = 123;

//type alias
type Person = {
  name: string;
  age: number;
};

let student: Person;

// Funcrions & types

function add(a: number, b: number): number | string {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

//generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

//OK
const updateArray = insertAtBeginning(demoArray, 1);
//OK
const stringArray = insertAtBeginning(["1", "2", "3", "q"], "12");
