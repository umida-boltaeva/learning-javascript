function testLogicalAnd(val) {

    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

testLogicalAnd(50);
console.log(testLogicalAnd(50));