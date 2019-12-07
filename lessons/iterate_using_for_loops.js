function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let includesElem = false;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === elem) {
                includesElem = true;
                break;
            }
        }
        if (!includesElem) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


console.log(filteredArray([
    [3, 2, 3],
    [1, 6, 3],
    [3, 13, 26],
    [19, 3, 9]
], 3));