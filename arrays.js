// // function compare(array1, array2) {
// //     if (array1.length !== array2.length) return false;
// //     for (let i = 0; i < array1.length; i++) {
// //         if (Array.isArray(array1[i]) && Array.isArray(array2[i]))
// //             return compare(array1[i], array2[i]);
// //         if (array1[i] !== array2[i]) return false;
// //     }
// //     return true;
// // }
// // compare([1, [2], 3], [1, [2], 3]);

// function reverse(array) {
//     const out = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         out.push(array.at(i));
//     }
//     return out;
// }
// reverse([1, 2, 3, 4, 5]);

// // function reverse(array) {
// //     const out = [];
// //     for (let i = -1; i >= -array.length; i--) {
// //         out.push(array.at(i));
// //     }
// //     return out;
// // }
// // reverse([1, 2, 3, 4, 5]);

// // function selectOdds(numbers) {
// //     const odd = [];
// //     for (let i = 0; i < numbers.length; i++) {
// //         if (numbers[i] % 2 !== 0) odd.push(numbers.at(i));
// //     }
// //     return odd;
// // }
// // selectOdds([1, 2, 3, 4, 5]);

// // function mapLengths(words) {
// //     const length = [];
// //     for (let i = 0; i < words.length; i++) {
// //         length.push(words[i].length);
// //     }
// //     return length;
// // }
// // mapLengths(["kanchan", "hello", "hi"]);

// // function filterAbove(array, threshold) {
// //     const above = [];
// //     for (let i = 0; i < array.length; i++) {
// //         if (array[i] > threshold) above.push(array.at(i));
// //     }
// //     return above;
// // }

// // filterAbove([1, 2, 5, 6, 7, 8], 5);

// // function filterBelow(array, threshold) {
// //     const Below = [];
// //     for (let i = 0; i < array.length; i++) {
// //         if (array[i] < threshold) Below.push(array.at(i));
// //     }
// //     return Below;
// // }

// // filterBelow([1, 2, 5, 6, 7, 8], 5);

// // function findIndex(array, element) {
// //     for (let i = 0; i < array.length; i++) {
// //         if (element === array[i]) return i;
// //     }
// //     return -1;
// // }
// // findIndex(["kanchan", "hello", "hello"], "hello");

// // function findLastIndex(array, element) {
// //     for (let i = array.length; i >= 0; i--) {
// //         if (element === array[i]) return i;
// //     }
// //     return -1;
// // }
// // findLastIndex(["kanchan", "hello", "hello"], "hello");

// // function fibonacci(num) {
// //     const fibo = [];
// //     let a = 0;
// //     let b = 1;
// //     for (let i = 0; i < num; i++) {
// //         fibo.push(a);
// //         const c = a + b;
// //         a = b;
// //         b = c;
// //     }
// //     return fibo;
// // }
// // fibonacci(6);

// // function fibonacci(num) {
// //     const fibo = [];
// //     let a = 0;
// //     let b = 1;
// //     for (let i = 0; i < num; i++) {
// //         fibo.unshift(a);
// //         const c = a + b;
// //         a = b;
// //         b = c;
// //     }
// //     return fibo;
// // }
// // fibonacci(6);

// // function sumMatrix(matrix) {
// //     let sum = 0;
// //     for (let i = 0; i < matrix.length; i++) {
// //         for (let j = 0; j < matrix[i].length; j++) {
// //             sum += matrix[i][j];
// //         }
// //     }
// //     return sum;
// // }
// // sumMatrix([
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9],
// // ]);

// //switch------------>>>>>>>>>>>>>>>

// // const day = 4;
// // switch (day) {
// //     case 1:
// //         console.log("Monday");
// //         break;
// //     case 2:
// //         console.log("tuesday");
// //         break;
// //     case 3:
// //         console.log("wednesday");
// //         break;
// //     case 4:
// //         console.log("thursday");
// //         break;
// //     case 5:
// //         console.log("Friday");
// //         break;
// //     case 6:
// //         console.log("saturday");
// //         break;
// //     case 7:
// //         console.log("sunday");
// //         break;
// //     default:
// //         console.log("not a vaild number");
// // }

// const day = 3;
// switch (day) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log("weekdays");
//         break;

//     case 6:
//     case 7:
//         console.log("weekend");
//         break;

//     default:
//         console.log("invalid");
// }

// const operation = "*";
// const a = 10;
// const b = 2;
// switch (operation) {
//     case "+":
//         console.log(a, operation, b + " = ", a + b);
//         break;
//     case "-":
//         console.log(a, operation, b + " = ", a - b);
//         break;
//     case "*":
//         console.log(a, operation, b + " = ", a * b);
//         break;
//     case "/":
//         console.log(a, operation, b + " = ", a / b);
//         break;
//     case "%":
//         console.log(a, operation, b + " = ", a % b);
//         break;

//     default:
//         console.log("operator not found!!!");
//         break;
// }

// const fruits = ["apple", "banana", "orange"];
// for (const fruit of fruits) {
//     console.log(fruit.length);
// }

// const scores = {
//     Anu: 10,
//     Rahul: 20,
//     Meera: 30,
// };
// let sum = 0;
// for (const a of Object.values(scores)) {
//     sum += a;
// }
// console.log(sum);

// const device = {
//     brand: "Acme",
//     model: "X1",
//     year: 2025,
//     working: true,
// };
// let count = 0;
// for (const a of Object.keys(device)) {
//     count += 1;
// }
// console.log(count);

const numbers = [10, 20, 30, 40, 50];
for (const num of numbers) {
    console.log(num);
}
for (const num in numbers) {
    console.log(num);
}
