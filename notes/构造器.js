// 构造器是什么？
// 构造器是用来创建对象并初始化它的特殊函数。在 JavaScript中，构造器通常以函数形式定义，通过 new 关键字调用。
function Person(name, age) {
    this.name = name; // 初始化对象的属性
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
    };
}

const person1 = new Person('Alice', 25);
person1.greet(); // Hello, my name is Alice, and I am 25 years old.

// 构造器的作用是什么？
// 创建对象：每次调用构造器函数都会创建一个新的对象。
// 初始化属性：可以为新对象设置默认属性。
// 复用逻辑：通过构造器实现代码复用。
// 关联原型：对象与原型（prototype）建立关联，以共享方法和属性。

// 为什么要用构造器？
// 对象的批量生成： 构造器简化了同类型对象的创建。
// 代码复用： 构造器避免手动为每个对象写初始化代码。
// 面向对象思想： 构造器是 JavaScript 模拟类的基础，支持原型继承。

// 构造器的底层实现原理：
// 1.创建新对象
const obj={};
// 2.原型连接
obj.__proto__=Constructor.Prototype;
// 3.绑定this
Constructor.call(obj);
// 4.返回对象
// return obj;

// 构造器的本质是一个普通函数
// 构造器与 Object.create() 的区别：
// 使用构造器时，__proto__ 指向的是构造器的 prototype。
// 使用 Object.create() 时，__proto__ 指向传入的原型对象。

//构造器是在原型上的,所以如果要继承,必须先将__proto__绑定到父类的prototype上
//再修改__proto__上的constructor为子类.


//下面是原型链继承关系:
function Animal(name) {//Animal 类有一个构造函数，接收一个 name 属性。
    this.name = name;
}

// 在 Animal.prototype 上定义了 speak 方法，所有继承 Animal 的子类都能访问这个方法。
Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
    Animal.call(this, name); // 调用父类的构造函数
    this.breed = breed;
}

// 设置 Dog 的原型对象指向 Animal 的实例，这样 Dog 会继承 Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // 修正 constructor 为 Dog

// 给 Dog 添加自己的方法
Dog.prototype.bark = function() {
    console.log(`${this.name} barks.`);
};

function Chihuahua(name, breed) {
    Dog.call(this, name, breed); // 调用 Dog 的构造函数
}

// 设置 Chihuahua 的原型对象指向 Dog 的实例
Chihuahua.prototype = Object.create(Dog.prototype);
Chihuahua.prototype.constructor = Chihuahua;

// 给 Chihuahua 添加自己特有的方法
Chihuahua.prototype.specificBehavior = function() {
    console.log(`${this.name} is a small dog.`);
};

function Husky(name, breed) {
    Dog.call(this, name, breed); // 调用 Dog 的构造函数
}

// 设置 Husky 的原型对象指向 Dog 的实例
Husky.prototype = Object.create(Dog.prototype);
Husky.prototype.constructor = Husky;

// 给 Husky 添加自己特有的方法
Husky.prototype.run = function() {
    console.log(`${this.name} runs fast.`);
};

const chihuahua = new Chihuahua('Bella', 'Chihuahua');
const husky = new Husky('Max', 'Husky');

chihuahua.speak(); // Bella makes a sound. (继承自 Animal)
chihuahua.bark();  // Bella barks. (来自 Dog)
chihuahua.specificBehavior(); // Bella is a small dog. (Chihuahua 自己的行为)

husky.speak(); // Max makes a sound. (继承自 Animal)
husky.bark();  // Max barks. (来自 Dog)
husky.run();    // Max runs fast. (Husky 自己的行为)

console.log(chihuahua.__proto__ === Chihuahua.prototype); // true
console.log(husky.__proto__ === Husky.prototype); // true
console.log(husky.__proto__.__proto__ === Dog.prototype); // true
console.log(husky.__proto__.__proto__.__proto__ === Animal.prototype); // true

Dog.prototype.sleep = function() {
    console.log(`${this.name} is sleeping.`);
};

// 现在所有 Dog 的实例都会有 sleep 方法
const dog1 = new Dog('Buddy', 'Golden Retriever');
dog1.sleep(); // Buddy is sleeping.

Animal.prototype.eat = function() {
    console.log(`${this.name} is eating.`);
};

// 现在所有继承 Animal 的类都会有 eat 方法
const animal = new Animal('Elephant');
animal.eat(); // Elephant is eating.

// 使用class的话,可以直接在class里面添加方法,直接就在原型链上,可以使用extend进行继承.