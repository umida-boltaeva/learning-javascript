var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};

function updateRecords(id, prop, value) {
    if (collection.hasOwnProperty(id)) {
        if (prop !== "tracks" && value !== "") {
            collection[id][prop] = value;
        } else if (prop === "tracks" && !collection[id].hasOwnProperty("tracks")) {
            collection[id]["tracks"] = [];
            collection[id]["tracks"].push(value);
        } else if (prop === "tracks" && value !== "") {
            collection[id]["tracks"].push(value);
        } else if (value === "") {
            delete(collection[id][prop]);
        }
    }


    return collection;
}

updateRecords(5439, "artist", "ABBA");
console.log(JSON.stringify(collection));