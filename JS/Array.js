// const str = "hello\n\t\t\tworld";
// const str = "hello";
// const str1 = "hello";
// const str = `${str1}
//              world`;

// const strObj = new String("hello");

// console.log(typeof strObj);
// console.log(typeof str);

// accessing strings
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);

// console.log(str.at(-1));
// console.log(str.at(-2));
// console.log(str.at(-3));
// console.log(str.at(-4));
// console.log(str.at(-5));

// Immutable
// str[0] = "A";

// console.log(str);

// let array = new Array("abc", "xox");
let array = [1, 3, 5, 7, 8, 9, 5];
// let obj = { name: "abc", age: 10 };

// console.log(array);
// console.log(typeof array);

// console.log(obj);
// console.log(typeof obj);

// accessing array

// console.log(array[0], "array[0]");
// console.log(array[1], "array[1]");
// console.log(array[-1], "array[-1]");

// console.log(array.at(0), "array.at(0)");
// console.log(array.at(1), "array.at(1)");
// console.log(array.at(-1), "array.at(-1)");
// console.log(array.at(-2), "array.at(-2)");

// array[0] = 10;
// array[1] = 20;

// console.log(array);

// console.log(array[0]); // Output: 10
// console.log(array[1]); // Output: 20

// array.push(1);
// array.push(2);
// array.pop();

// console.log(array);
// console.log(typeof array);

// iterate

// ✔
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// ✔
// for (let i of array) console.log(i);

// ❌
// Array.prototype.something = "something";
// for (let i in array) console.log(i);
