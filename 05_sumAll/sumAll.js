const ERROR = 'ERROR'
const sumAll = function(m, n) {
    // negative numbers edge case 
    if (m < 0 || n < 0) {
        return ERROR
    }

    // non-number cases
    if (typeof(m) !== "number" || typeof(n) !== 'number') {
        return ERROR
    }

    // mandating a to be the smaller always.
    a = m <= n ? m : n;
    b = m > n ? m : n;

    sum = 0
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
