function palindrome(str) {
    str = str.toLowerCase().split(/[^a-z0-9]/).join("");
    for(let i=0; i<str.length/2; i++) {
      if(str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  
  
  palindrome("eye");
  