function repeatStringNumTimes(str, num) {
    let newString = "";
    for (let i = 0; i < num; i++) {
        newString = newString + str;
    }
    return newString;
}

repeatStringNumTimes("abc", 3);
console.log(repeatStringNumTimes("abc", 3));