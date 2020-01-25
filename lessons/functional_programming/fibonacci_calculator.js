function fibonacciGenerator (n) {
    var result = [0];
   if (n === 1){
       return result;
   }
   result.push(1);
   if(n === 2) {
       return result;
   }
   for(var i = 3; i <= n; i++) {
       var nextElem = result[i - 2] + result[i - 3];
       result.push(nextElem);
   }
   return result;
}

console.log(fibonacciGenerator(10));

