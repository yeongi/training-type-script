// let poetLater: {
//   born: number;
//   name: string;
// };

// //ok
// poetLater = {
//   born: 1923,
//   name: "tailer swain",
// };

// type profile = {
//   born: number;
//   name: string;
// };

// let poetLater: profile;

// poetLater = {
//   born: 1923,
//   name: "tailer swain",
// };

// type WithFirstName = {
//   firstName: string;
// };

// type WithLastName = {
//   lastName: string;
// };

// const hasBorn = {
//   firstName: "Jang",
//   lastName: "uiYeong",
// };

// let withFirstName: WithFirstName = hasBorn;
// let withLastName: WithLastName = hasBorn;

// console.log(withFirstName, withLastName);

// let baby: { firstName: string };
// let myBaby: hasBorn = { firstName: "Jang", lastName: "uiYeong" };
// baby = myBaby;

// type HasBorn = {
//   firstName: string;
//   lastName: string;
// };

// type BabyProfile = {
//   sex?: string;
//   profile: HasBorn;
// };

// const boyBaby = {
//   sex: "male",
//   profile: {
//     firstName: "Jang",
//     lastName: "uiYeong",
//   },
// };

// const baby = {
//   profile: {
//     firstName: "Jang",
//     lastName: "uiYeong",
//   },
// };

// /////

// // type PoemWithPage = {
// //   name: string;
// //   pages: number;
// //   type: "pages";
// // };

// // type PoemWithRhymes = {
// //   name: string;
// //   rhymes: boolean;
// //   type: "rhymes";
// // };

// // type Poem = PoemWithPage | PoemWithRhymes;

// // const poem: Poem =
// //   Math.random() > 0.5
// //     ? { name: "작은것들을 위한 시 ", pages: 120, type: "pages" }
// //     : { name: "작은것들을 위한 시 ", rhymes: true, type: "rhymes" };

// // if (poem.type === "pages") {
// //   poem.pages; // type : PoemWithPage
// // } else {
// //   poem.rhymes; // type : PoemWithRhymes
// // }

// ////

// type PoemWithPage = {
//   name: string;
//   pages: number;
// };

// type PoemWithRhymes = {
//   name: string;
//   rhymes: boolean;
// };

// type MyPoem = PoemWithPage & PoemWithRhymes;
