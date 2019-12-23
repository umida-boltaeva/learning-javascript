function telephoneCheck(str) {
    return str.match(/^1?[- ]?(\d{3}|\(\d{3}\))[- ]?\d{3}[- ]?\d{4}$/g) !== null;
  }
  
  console.log(telephoneCheck("555-555-5555"));
  