console.log('String Methods Example');


// const str = 'Hello$World$world!';
const str = 'Hello, World!';


// console.log(str.length); // 13
// console.log(str.toUpperCase()); // 'HELLO, WORLD!'
// console.log(str.toLowerCase()); // 'hello, world!'
// console.log(str.indexOf('World')); // 7
// console.log("Hello World, Hello World".indexOf('World', 10)); // 7
// console.log(str.includes('Hello')); // true
// // console.log(str.slice(0, 5)); // 'Hello'
// console.log(str.replace('World', 'JavaScript')); // 'Hello, JavaScript!'
// console.log(str.replace(/World/ig, 'JavaScript')); // 'Hello, JavaScript!'
// console.log(str.replaceAll('World', 'JavaScript')); // 'Hello, JavaScript!'
// // console.log(str.split('$')); // ['Hello', 'World!']
// console.log(str.split(', ')); // ['Hello', 'World!']
// console.log(str.trim()); // 'Hello, World!'
// console.log(str.at(0)); // 'H'
// console.log(str.charAt(0)); // 'H'
// // console.log(str[0]); // 'H'
// console.log(str.charCodeAt(0)); // 72
// console.log(str.startsWith('Hello')); // true
// console.log(str.endsWith('!')); // true
// console.log(str.concat(' How are you?', ' test')); // 'Hello, World! How are you?'
// console.log(str.repeat(10)); // 'Hello, World!Hello, World!'
// console.log(str.match(/World/)); // ['World']
// console.log(str.search('World')); // 7

// let text = "Hello world!";
// console.log(text);

// console.log(text.slice(0, 5));
// // console.log(text.slice(2, 5));
// // console.log(text.slice(2));
// console.log(text);


// let text = "Hello world!";
// console.log(text);
// console.log(text.substring(1, 4));
// console.log(text.substring(2));
// console.log(text);

let text = "Mr. Blue has a blue house";
console.log(text.search(/blue/i)); // 3
// console.log(text.match(/blue/i)); // ['Blue']

const string = 'Hello, World!';

console.log(string.toUpperCase().split(', ')); // ['HELLO', 'WORLD!']
console.log(string.includes('Hello')); // ['HELLO', 'WORLD!']
