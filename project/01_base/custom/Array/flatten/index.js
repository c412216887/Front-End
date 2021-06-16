/**
 * 数组扁平化
 *  [2021-6-14]
 */ 
// 测试用例
const arr = [1, [2, [3, [4, 5]]], 6];
// => [1, 2, 3, 4, 5, 6]

const temp1 = {
    a: "111"
}
const temp2 = {
    b() {
        return;
    }
}
const arr2 = [temp1, [temp2], ];

/**
 * 方法1： 采用Array.prototype.flat()
 */
(function() {
    const result1 = arr.flat(1);
    // => [ 1, 2, [ 3, [ 4, 5 ] ], 6 ]
    const result1_2 = arr2.flat(1);
    // => [ { a: '111' }, { b: [Function: b] } ]
    const result2 = arr.flat(2);
    // => [ 1, 2, 3, [ 4, 5 ], 6 ]
    const result2_2 = arr2.flat(2);
    // => [ { a: '111' }, { b: [Function: b] } ]
    // console.log(result2_2)
})();


/**
 * 方法2：利用正则表达式
 */
(function() {
    const result1 = JSON.stringify(arr).replace(/\[+|\]+/g, "").split(",");
    // => [ '1', '2', '3', '4', '5', '6' ]
    const result2 = JSON.stringify(arr2).replace(/\[+|\]+/g, "").split(",");
    // => [ '{"a":"111"}', '{}' ]
    // console.log(result2)
})();

/**
 * 方法3：使用reduce
 */
function flatDeep(arr) {
    return arr.reduce((a, b) => {
        return a.concat(Array.isArray(b) ? flatDeep(b) : b);
    }, [])
}
(function() {
    const result1 = flatDeep(arr);
    // => [ 1, 2, 3, 4, 5, 6 ]
    const result2 = flatDeep(arr2);
    // console.dir(result2);
})();
