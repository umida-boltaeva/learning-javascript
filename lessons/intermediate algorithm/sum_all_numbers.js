function sumAll(arr) {
    var min = Math.min(arr[0], arr[1]); //arr[0] < arr[1] ? arr[0] : arr[1];
    var max = Math.max(arr[0], arr[1]); // arr[0] > arr[1] ? arr[0] : arr[1];
    var res = 0;
    for (let i = min; i <= max; i++) {
        res = res + i;
    }
    return res;
}

sumAll([1, 4]);