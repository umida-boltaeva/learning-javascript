function phoneticLookup(val) {
    var result = "";

    //     switch (val) {
    //         case "alpha":
    //             result = "Adams";
    //             break;
    //         case "bravo":
    //             result = "Boston";
    //             break;
    //         case "charlie":
    //             result = "Chicago";
    //             break;
    //         case "delta":
    //             result = "Denver";
    //             break;
    //         case "echo":
    //             result = "Easy";
    //             break;
    //         case "foxtrot":
    //             result = "Frank";
    //     }
    //     return result;
    // }

    // phoneticLookup("charlie");

    // Using objects instead of switch or conditionals
    var phoneticLookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    };
}
result = phoneticLookup("charlie");
console.log(result);