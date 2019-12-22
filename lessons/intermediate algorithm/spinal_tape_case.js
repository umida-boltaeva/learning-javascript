function spinalCase(str) {
    var splitString = str.trim().toLowerCase().split(/\W/);
    var dashConcat = (acc, elem) => acc + "-" + elem;
     return splitString.reduce(dashConcat);
   }
   
   spinalCase('This Is Spinal Tap');
   