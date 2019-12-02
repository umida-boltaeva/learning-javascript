function largestOfFour(arr) {
    const largestNumber = [0, 0, 0, 0];
    for (let i = 0; i < arr.length; i++) {
        largestNumber[i] = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber[i]) {
                largestNumber[i] = arr[i][j];
            }
        }
    }
    return largestNumber;
}
``
largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
]);

console.log(largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
]));