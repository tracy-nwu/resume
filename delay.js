// const delay = (timeout, cb) => {
//   setTimeout(() => {
//     cb();
//   }, timeout);
// };

// console.log("hi");
// delay(1000, () => {
//   console.log("hello");
//   delay(1000, () => {
//     console.log("world..1");
//     delay(1000, () => {
//       console.log("world..2");
//       delay(1000, () => {
//         console.log("world..3");
//       });
//     });
//   });
// });

// const delayPromise = timeout => {
//   return new Promise((resolve, reject) => {
//     resolve();
//   });
// };
// delayPromise(1000).then(res => {
//   console.log("promise");
// });

//lesson-1

console.log("es5 = es2009 ;es6 = es2015 ;es =ecamscript");

//lesson-2
let a11 = 1;
a1 = 2;
const aa = [];
const bb = {};
aa.push("aa");
bb.name = "bb";
console.log(a1, aa, bb);
// lesson-3
const c = {
  a: "aaa",
  b: "bbb"
};
const { a, b } = c;
// lesson-4
console.log(
  `hello world
    aa:${aa}
    bb:${bb}
    `
);
// lesson-6
console.log(Number.parseInt("222"));

// lesson-7
const function1 = (name = "fengxiang") => {
  console.log("function internal:", name);
  return name + " ***  ";
};
console.log(function1("luochangwei"), "love", function1());
