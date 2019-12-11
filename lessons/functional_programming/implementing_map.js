var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    var newArray = [];

    s.forEach(number => {
        newArray.push(number * 2);
    });
    return newArray;

};

var new_s = s.myMap(function (item) {
    return item * 2;
});