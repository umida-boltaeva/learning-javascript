function findLongestWordLength(str) {
    const stringArray = str.split(" ");

    const orderedArray =
        stringArray.reduce((a, b) => {
            if (b.length > a.length) {
                return b;
            }
            return a;
        });

    return orderedArray.length;
}

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));