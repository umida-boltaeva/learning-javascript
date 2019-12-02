function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num) + '...';
}

truncateString("Peter Piper picked a peck of pickled peppers", 11);
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));