/**
 * 数组去重
 * [2021/6/14]
 */ 

/**
 * 方法一 : 采用Set方法
 */
exports.fn1 = function (arr: any[]) {
    const set = new Set(arr);
    const newArr = Array.from(set);
    return newArr;
};

/**
 * 方法二 : 两层for循环
 */
exports.fn2 = function(arr: any[]) {
    // 为了不污染测试数据，将数据浅拷贝一份
    const newArr = Array.from(arr);
    let len = newArr.length;
    for (let i = 0 ; i < len; i++) {
        for (let j = len; j > i; j--) {
            if (newArr[j] === newArr[i]) {
                newArr.splice(j, 1);
                len--;
            }
        }        
    }
    return newArr;
};

/**
 * 方法三 : 利用indexOf
 */
exports.fn3 = function(arr: any[]) {
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; i-- ) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.unshift(arr[i])
        }
    }
    return newArr;
};

/**
 * 方法四 : 利用include
 */
exports.fn4_1 = function(arr: any[]) {
    const newArr: any[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (!newArr.includes(arr[i])) {
            newArr.unshift(arr[i]);
        }
    }
    return newArr;
};
exports.fn4_2 = function(arr: any[]) {
    const newArr: any[] = [];
    arr.forEach(item => {
        newArr.includes(item) || newArr.push(item)
    })
    return newArr;
};
/**
 * 方法五 : 利用filter
 */
exports.fn5 = function(arr: unknown[]) {
    const newArr = arr.filter((a, index, arr) => {
        return arr.lastIndexOf(a) === index;
    }) as unknown[];
    return newArr;
};