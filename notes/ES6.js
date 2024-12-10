// yield和生成器
// yield是生成器中的一部分，用于暂停函数的指向，可以在稍后继续执行函数。生成器函数使用function*来定义，yield用于在函数中暂停执行，并将一个值返回给 调用者，直到下一次继续执行。
// 生成器函数的返回值是一个迭代器对象，该对象可以通过.next（）方法来控制执行进度。

// 定义生成器函数
function* generatorFunction() {
    console.log('Start');
    yield 1;  // 暂停，返回1
    console.log('Middle');
    yield 2;  // 暂停，返回2
    console.log('End');
    return 3;  // 返回值并结束生成器
  }
  
  // 创建生成器实例
  const gen = generatorFunction();
  
  console.log(gen.next()); // { value: 1, done: false }
  console.log(gen.next()); // { value: 2, done: false }
  console.log(gen.next()); // { value: 3, done: true }
  
// 2.迭代器
// 迭代器是一种设计模式，允许我们顺序访问一个集合（数组，字符串等）中的每一个元素，而不需要暴露集合的内部结构。
// 迭代器本质上是一个对象，必须实现next（）方法，这个方法返回一个对象，这个对象包含两个属性value：当前迭代值，done布尔值，表示是否已经迭代完所有元素。
const arr = [1, 2, 3];

// 1. 获取数组的迭代器对象
const iterator = arr[Symbol.iterator]();

// 2. 使用 next() 方法获取迭代的值
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

//Symbol是一种新的基本数据类型，表示独一无二的值。本身是一种原始数据类型，类似于字符串，数字，布尔值等。

// 如何创建Symbol
const sym1 = Symbol();
const sym2 = Symbol();

console.log(sym1 === sym2); // false，每个 Symbol 都是唯一的

// Symbol 可以有描述（description），用于调试或日志记录
const sym3 = Symbol("description");
console.log(sym3); // Symbol(description)

// 内置的symbol，用于为语言你内部行为自定义，例如：
// Symbol.iterator:定义对象的默认迭代器
// Symbol.toStringTag：自定义对象的toString返回值
// Symbol.hasInstance：自定义instanceof操作符的行为。

// Symbol.iterator
const iterable = {
  [Symbol.iterator]: function () {
    let step = 0;
    return {
      next() {
        step++;
        if (step <= 3) {
          return { value: step, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (const val of iterable) {
  console.log(val); // 输出 1, 2, 3
}

// Symbol.toStringTag
const obj = {
  [Symbol.toStringTag]: "CustomObject",
};
console.log(obj.toString()); // [object CustomObject]

//设置对象不可修改的方法：
// Object.seal()，不允许增加，删除，但是可以修改。嵌套层不受影响
// Object.freeze()，不允许增加，删除，修改，嵌套层也不可以修改。
// Object.preventExtensions（），不允许增加，但是可以修改和删除。
// Object.defineProperty（），可以在里面设置
Object.defineProperty(obj, 'name', {
  value: 'John',
  writable: false,  // 设置为不可修改
  enumerable: true,
  configurable: false,  // 设置为不可删除或重新定义
});
// Object.defineProperties() 方法中，writable、enumerable 和 configurable 等属性并不是必须显式定义的，它们有默认值。具体来说：

// writable：默认值是 false，即属性不可写。
// enumerable：默认值是 false，即属性不可枚举（即不能通过 for...in 或 Object.keys() 遍历）。
// configurable：默认值是 false，即属性不可删除，且无法修改其特性。