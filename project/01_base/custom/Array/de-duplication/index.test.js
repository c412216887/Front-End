const { fn1, fn2, fn3, fn4_1, fn4_2, fn5 } = require("./index.ts");

// 测试数据
const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, []];
// 预期结果
const result = [1, '1', 17, true, false, 'true', 'a', {}, []];
describe("数组去重", () => {
    test("fn1", () => {
        expect(fn1(arr)).toEqual(result);
    });
    test("fn2", () => {
        expect(fn2(arr)).toEqual(result);
    });
    test("fn3", () => {
        expect(fn3(arr)).toEqual(result);
    });
    test("fn4_1", () => {
        expect(fn4_1(arr)).toEqual(result);
    });
    test("fn4_2", () => {
        expect(fn4_2(arr)).toEqual(result);
    })
    test("fn5", () => {
        expect(fn5(arr)).toEqual(result);
    })
})