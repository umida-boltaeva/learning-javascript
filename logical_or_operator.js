function testLogicalOr(val) {
    if (val > 10 || val < 5) {
        return "Outside";
    }
    return "Inside";
}

testLogicalOr(15);