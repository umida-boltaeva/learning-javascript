function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

confirmEnding("Connor", "n");

console.log(confirmEnding("Connor", "n"));