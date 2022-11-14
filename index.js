function findMatching(array, string) {
    return array.filter(function(arrayName) {
        return arrayName.toUpperCase()===string.toUpperCase();
    })
}
function fuzzyMatch(array, string) {
    return array.filter(function(arrayName) {
        return arrayName.startsWith(string);
    })
}
function matchName(array, string) {
    return array.filter(function(arrayName) {
        return arrayName.name===string;
    })
}
