function diffArray(arr1, arr2) {
    var newArr = [];
    for(let i = 0; i < arr1.length; i++) {
      if(!arr2.some(el => el === arr1[i])){
        newArr.push(arr1[i]);
      }
    }
    for(let i = 0; i < arr2.length; i++) {
      if(!arr1.some(el => el === arr2[i])){
        newArr.push(arr2[i]);
      }
    }
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  