var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    var slicedArr = arr.slice();
    return slicedArr.sort(function (a, b) {
        return a - b;
    });
}
console.log(nonMutatingSort(globalArray));

console.log(globalArray);