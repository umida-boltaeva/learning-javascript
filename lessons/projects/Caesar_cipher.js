function rot13(str) { // LBH QVQ VG!
    let codeA = "A".charCodeAt(0),
      codeZ = "Z".charCodeAt(0),
      res = '',
      temp,
      currCode;
    for(let i = 0; i < str.length; i++) {
      currCode = str.charCodeAt(i);
      if(currCode >= codeA && currCode <= codeZ) {
        temp = currCode - 13;
        if(temp >= codeA){
          res += String.fromCharCode(temp);
        }else{
          res += String.fromCharCode(codeZ +1 - (codeA-temp));
        }
      }
      else{
        res += str[i];
      }
    }
    return res;
  }
  
  
  console.log(rot13("LBH QVQ VG!"));
  