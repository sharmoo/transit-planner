function cutString(string) {
    return string
        // blow up the string into an Array of characters
        .split("")
        // convert that array into another array of [character, index % 3] tuples
        .map((c,i) => [c, i % 3])
        // filter for only the tuples with index % 3 == 2 (every third character)
        .filter(tuple => tuple[1] == 2)
        // reduce them back down into one string: prev is our result as we build it, curr is the current tuple
        .reduce((prev, curr) => prev + curr[0], "")
}

module.exports = {
    cutString
}