function findTheLongestWordLength(str) {
    const stringArray = str.split(" ");
    const orderedArray = stringArray.sort((a, b) => {
        return a.length < b.length;
    });
    return orderedArray[0].length;
}

findTheLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(findTheLongestWordLength("The quick brown fox jumped over the lazy dog"));