/**
 * 数组去重
 * [2021/6/14]
 */ 

// 测试用例
const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, []];
// => [1, '1', 17, true, false, 'true', 'a', {}, []]

/**
 * 方法一 : 采用Set方法
 */
(function(arr) {
    const set = new Set(arr);
    const newArr = Array.from(set);
    // console.log(newArr);
})(arr);

/**
 * 方法二 : 两层for循环
 */
(function(arr) {
    let len = arr.length;
    for (let i = 0 ; i < len; i++) {
        for (let j = len; j > i; j--) {
            if (arr[j] === arr[i]) {
                arr.splice(j, 1);
                len--;
            }
        }        
    }
    // console.log(arr);
})(arr);

/**
 * 方法三 : 利用indexOf
 */
(function(arr) {
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; i-- ) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.unshift(arr[i])
        }
    }
    // console.log(newArr)
})(arr);

/**
 * 方法四 : 利用include
 */
(function(arr) {
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (!newArr.includes(arr[i])) {
            newArr.unshift(arr[i]);
        }
    }
    // console.log(newArr);
})(arr);
(function(arr) {
    const newArr = [];
    arr.forEach(item => {
        newArr.includes(item) || newArr.push(item)
    })
    console.log(newArr);
})(arr);
/**
 * 方法五 : 利用filter
 */
(function(arr) {
    const newArr = arr.filter((a, index, arr) => {
        return arr.lastIndexOf(a) === index;
    });
    // console.log(newArr);
})(arr);