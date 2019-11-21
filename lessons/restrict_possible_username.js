let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2,}\d*$/i;
let result = userCheck.test(username);
console.log(result);