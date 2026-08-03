console.log("Hello, World!");
console.log("");

console.log("Add Two Numbers");
let a = 10;
let b = 20;
console.log("Sum =", a + b);
console.log("");

console.log("Even or Odd");
let num = 15;
if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}
console.log("");

console.log("Largest of Three Numbers");
let x = 12;
let y = 45;
let z = 30;
let largest = x;
if (y > largest) {
    largest = y;
}
if (z > largest) {
    largest = z;
}
console.log("Largest =", largest);
console.log("");

console.log("Reverse String");
let text = "JavaScript";
let reverse = text.split("").reverse().join("");
console.log(reverse);
console.log("");

console.log("Palindrome");
let word = "madam";
let reversedWord = word.split("").reverse().join("");
if (word === reversedWord) {
    console.log(word + " is Palindrome");
} else {
    console.log(word + " is Not Palindrome");
}
console.log("");

console.log("Factorial");
let number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log("Factorial =", factorial);
console.log("");

console.log("Multiplication Table");
let table = 5;
for (let i = 1; i <= 10; i++) {
    console.log(table + " x " + i + " = " + table * i);
}
console.log("");

console.log("Sum of Array");
let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum =", sum);
console.log("");

console.log("Largest Element in Array");
let arr = [12, 45, 78, 23, 99, 10];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log("Largest Element =", max);
console.log("");

console.log("Count Vowels");
let sentence = "JavaScript Programming";
let vowels = "aeiouAEIOU";
let count = 0;
for (let i = 0; i < sentence.length; i++) {
    if (vowels.includes(sentence[i])) {
        count++;
    }
}
console.log("sentence is ", sentence);
console.log("Total Vowels =", count);
console.log("");

console.log("Fibonacci Series");
let n = 10;
let first = 0;
let second = 1;
console.log(first);
console.log(second);
for (let i = 3; i <= n; i++) {
    let third = first + second;
    console.log(third);
    first = second;
    second = third;
}
console.log("");

console.log("Prime Number");
let primeNumber = 17;
let isPrime = true;
for (let i = 2; i < primeNumber; i++) {
    if (primeNumber % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(primeNumber + " is Prime");
} else {
    console.log(primeNumber + " is Not Prime");
}
console.log("");

console.log("Count Even and Odd");
let values = [2, 5, 8, 11, 16, 19, 20];
let even = 0;
let odd = 0;
for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}
console.log("Even =", even);
console.log("Odd =", odd);
console.log("");

console.log("Remove Duplicate Elements");
let duplicate = [1, 2, 2, 3, 4, 4, 5, 5];
let unique = [...new Set(duplicate)];
console.log(unique);
console.log("");