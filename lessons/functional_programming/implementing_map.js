var s = [23, 65, 98, 5];
var a = [1, 2, 3];

Array.prototype.myMap = function (callback) {
    var newArray = [];

    this.forEach(number => {
        newArray.push(callback(number));
    });
    return newArray;

};

var new_s = s.myMap(function (item) {
    return item * 2;
});
console.log(new_s);

var new_a = a.myMap(function (item) {
    return item + 10;
});
console.log(new_a);