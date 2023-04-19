let arrayOfNumbers: number[];

arrayOfNumbers = [1, 2, 3, 4, 5, 6];

// 타입은 string 배열을 반환하는 함수
let createStrings: () => string[];
// 타입은 각각의 string을 반환하는 함수 배열
let stringCreators: (() => string)[];

//타입은 string 또는 number의 배열
let stringOfArrayOfNumbers: string | number[];
//타입은 유니온 타입의 배열
let arrayOfStringOrNumber: string | number[];
