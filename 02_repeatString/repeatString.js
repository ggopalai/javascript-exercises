const repeatString = function(s, n) {
    if (n < 0) {
        return 'ERROR'
    }
    res = ''
    for (let i = 0; i < n; i ++) {
        res += s
    }
    return res
};

// Do not edit below this line
module.exports = repeatString;
