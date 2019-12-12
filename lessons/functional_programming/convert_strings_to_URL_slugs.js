var globalTitle = " Winter Is Coming";

function urlSlug(title) {
    var splitStr = title.trim().toLowerCase().split(" ");
    var dashConcat = (acc, elem) => acc + "-" + elem;
    return splitStr.reduce(dashConcat);

}


var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

console.log("'" + winterComing + "'");