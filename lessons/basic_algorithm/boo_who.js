function booWho(bool) {
    if (bool === true || bool === false) {
        return true;
    }
    return false;
}

booWho(null);
console.log(booWho(null));

//OR

function booWho(bool) {
    return typeof (bool) === 'boolean';
}

booWho(null);
console.log(booWho(null));