function unroll(squareArray) {

    const l = squareArray.length;

    const unrolled = [];

    if (l === 1) {
        return squareArray;
    };

    for (let m = 0, n = l - 1; m <= n; m++, n--) {
        //right
        for (let i = m; i <= n; i++) {
            unrolled.push(squareArray[m][i]);
        }
        //down
        for (let i = m + 1; i <= n; i++) {
            unrolled.push(squareArray[i][n]);
        }
        //left
        for (let i = n - 1; i >= m; i--) {
            unrolled.push(squareArray[n][i]);
        }
        //up
        for (let i = n - 1; i >= m + 1; i--) {
            unrolled.push(squareArray[i][m]);
        }
    }

    return unrolled;
}

module.exports = unroll;
