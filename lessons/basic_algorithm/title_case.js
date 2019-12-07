function titleCase(str) {
    let sentence = str.toLowerCase().split(" ");
    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);

    }
    return sentence.join(" ");
}

titleCase("I'm a little tea pot");

console.log(titleCase("I'm a little tea pot"));