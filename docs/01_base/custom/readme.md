# 手写代码
> 通过手写JavaScript代码打牢JavaScript的基本功

## 数组扁平化

**概念** ：将一个多维数组变为一个一维数组

```javascript
const arr = [1, [2, [3, [4, 5]]], 6];
// => [1, 2, 3, 4, 5, 6]
```

1. 使用Array.prototype.flat()

   > flat()会按照

2. 利用正则

   > 将数组转换成JSON字符串，然后使用replace()将[]替换为""

3. 使用Array.prototype.reduce()
4. 函数递归

## 数组去重

```js
const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];
// => [1, '1', 17, true, false, 'true', 'a', {}, []]
```

1.  利用Set
2.  两层for循环+splice
3.  利用indexOf
4.  利用include
5.  利用filter
6.  利用Map

## 类数组转化为数组

>类数组 ：具有length属性，但是不具有数据原型上的方法
>
>常见的类数组 ：arguments，DOM操作方法返回的结果

1.  Array.from()
2.  Array.prototype.slice.call()
3.  扩展运算符
4.  利用concat

## Array.prototype.filter()

## Array.prototype.map()

## Array.prototype.forEach()

## Array.prototype.reduce()

## Function.prototype.apply()

## Function.prototype.call()

## Function.prototype.bind()

## debounce(防抖)

> 防抖：

## throttle(节流)

> 节流：

## 函数柯里化

> 函数柯里化 ：将一个接受多个参数的函数变为接受一个参数返回一个函数的固定形式。

```js
// 经典面试题
// 实现 add(1)(2)(3)(4) = 10; add(1)(2, 3, 4)(2) = 9;
```

## 模拟new操作

## instanceof

> instanceof : 

## 原型继承

## Object.is

## Object.assign

## 深拷贝

## Promise

## Promise.all

## Promise.race

## Promise并行限制

> 实现有并行限制的Promise调度器问题

## JSONP

## AJAX

## event模块

> 实现node中回调函数的机制，node中回调函数其实是内部使用了观察者模式

## 图像的懒加载

## 滚动加载

> 滚动的页面底部，进行后续操作

## 渲染几万条数据不卡住页面

> 渲染大数据时，合理使用createDocumentFragment和requestAnimationFrame，将操作切分为一小段一小段执行

## 打印出当前网页使用了多少种HTLML元素

## 将虚拟DOM转化为真实DOM结构

> 放在vue模块，该部分分为模块编译和Diff算法

## 模板字符串解析问题

