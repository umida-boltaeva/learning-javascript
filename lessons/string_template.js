function makeList(arr) {
  "use strict";

  let resultDisplayArray = [];

  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  return resultDisplayArray;
}

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};

console.log(makeList(result.failure));
