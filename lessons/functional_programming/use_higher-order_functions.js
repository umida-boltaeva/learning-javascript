const squareList = (arr) => {
    var filteredArr = arr.filter(num => num > 0 && num === parseInt(num));
    return filteredArr.map(el => el * el);

};


const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);