let text = "<h1>Winter is coming</h1>";

let myRegex = /<h[a-z]*?1>/gi;

let result = text.match(myRegex);

console.log(result);