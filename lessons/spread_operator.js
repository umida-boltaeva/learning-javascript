const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
arr2.push('JUNE');
arr2 = ["DEC", ...arr1];
console.log(arr2);