const removeFromArray = function(arr) {
    args = Array.from(arguments)
    for (i of args) {
        ind = arr.indexOf(i)
        if (ind > -1) {
            arr.splice(ind, 1)
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
