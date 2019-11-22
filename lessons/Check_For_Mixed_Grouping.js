let myString = "Eleanor Roosevelt";

let myRegex = /(Eleanor|Franklin)\sRoosevelt/g;

let result = myRegex.test(myString);

console.log(result);