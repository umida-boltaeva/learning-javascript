const arr = [
    [
        [

            [

                [
                    "Hello"
                ]
            ]
        ]
    ]
];

function countNestedArrays(data) {
    let count = 0;
    while (typeof (data) === 'object' && data[0]) {
        count++;
        data = data[0];
    }

    return count;
}

console.log(countNestedArrays(arr));