function sentensify(str) {

    var newStr = str.split(/\W/);
    return newStr.join(" ");

}
console.log(sentensify("May-the-force-be-with-you"));