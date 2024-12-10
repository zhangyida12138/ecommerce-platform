//构造函数时通过new 关键字调用的特殊函数，用于创建对象实例，通常首字母大写命名，内部使用this指向新创建的对象。
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Alice", 25);
console.log(person1); // Person { name: 'Alice', age: 25 }
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

person1.greet(); // Hello, my name is Alice

/*
 * 特点：
构造函数的实例会自动继承其原型上的方法。
与new关键字绑定
new会自动床架按一个空对象并将其连接到构造函数的prototype。
调用构造函数并绑定this为新对象
返回新对象
 */


// 工厂函数是一个普通函数,用于返回新创建的对象,不需要使用new关键字调用,通常通过返回值返回对象实例

function createPerson(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(`Hello, my name is ${this.name}`);
        },
    };
}

const person2 = createPerson("Bob", 30);
console.log(person2); // { name: 'Bob', age: 30, greet: [Function: greet] }

function createCounter() {
    let count = 0;
    return {
        increment() {
            count++;
        },
        getCount() {
            return count;
        },
    };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1

/*
*特点:
灵活性:工厂函数可以轻松地创建私有属性,利用闭包隐藏细节实现
没有原型链:工厂函数创建对象不会继承其他对象地原型,方法每次都会被重新创建.
方法被内嵌到每个对象实例中
*/

// 构造函数使用场景:
// 1.在线购物平台的商品类,可能需要对每个商品创建一个对象,同时需要为每个商品提供相同的方法,如计算折扣后的价格,这些方法可以挂载在原型链上,以节省内存.
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.getDiscountedPrice = function (discountRate) {
    return this.price * (1 - discountRate);
};
const product1 = new Product('lattop', 1000);
const product2 = new Product('phone', 500);
console.log(product1.getDiscountedPrice(0.1));
console.log(product2.getDiscountedPrice(0.2));

// 2.在一个后台个管理系统中,不同的额用户可能有不同的权力,通过构造函数和原型继承,可以实现这种层级结构.

function User(name, role) {
    this.name = name;
    this.role = role;
}
/*
    function User(name, age) {
    if (!(this instanceof User)) {
        return new User(name, age); // 自动调用 new
    }
    this.name = name;
    this.age = age;
    }
  防止忘记使用new关键字,可以像上面那样设置
 */


User.prototype.getPermissions = function () {
    return "Base permissions"
};

function Admin(name) {
    User.call(this, name, "Admin");
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.getPermissions = function () {
    return "Admin Permission";
};

const user1 = new User("Alice", "user");
const admin1 = new Admin("Bob");

console.log(user1.getPermissions());
console.log(admin1.getPermissions());
console.log("这以上是构造函数");


// 工厂函数的使用场景:
// 1.需要创建具有私有属性的对象,例如在银行系统中,每个账户都有余额,但是只能通过特定方法访问,不能被外部直接修改.
// 如果需要隐藏对象内部实现细节,并提供严格的访问接口,工厂函数是最佳选择.
function createAccount(initalBalance) {
    let balance = initalBalance;
    return {
        deposit(amount) {
            balance += amount;
        },
        withdraw(amount) {
            if (amount > balance) {
                console.log("Insufficient funds");
            } else {
                balance -= amount;
            }
        },
        getBalance() {
            return balance;
        },
    };
}
const account1 = createAccount(100);
account1.deposit(50);
console.log(account1.getBalance());
account1.withdraw(200);
console.log(account1.getBalance());

//在这个工厂函数中,使用new并不不会改变函数的行为,因此不建议使用new.
// 使用new容易导致代码混淆
const acc = new createAccount(200);//不建议
console.log(acc.getBalance());
acc.deposit(200);
acc.withdraw(130);
console.log(acc.getBalance());

// 2.可以实现动态生成简单对象,灵活性高,易于修改,但是扩展性差,而且没有类型安全,容易出错,适合小型项目.
function createFromField(type, label) {
    if (type === 'text') {
        return {
            type,
            label,
            render() {
                console.log(`<label>${label}</label><input type="text" />`);
            },
        };
    } else if (type === 'select') {
        return {
            type,
            label,
            render() {
                console.log(`<label>${label}</label><select><option>Option 1</option></select>`);
            },
        };
    }
}
const textField = createFormField("text", "Username");
const selectField = createFormField("select", "Country");

textField.render(); // 输出：<label>Username</label><input type="text" />
selectField.render(); // 输出：<label>Country</label><select><option>Option 1</option></select>

// 动态生成对象这个也可通过多态进行实现,创建抽象类,分别实现不同方法
// 定义不同的组件类
class TextField {
    constructor(label) {
        this.label = label;
    }
    render() {
        console.log(`<label>${this.label}</label><input type="text" />`);
    }
}

class SelectField {
    constructor(label) {
        this.label = label;
    }
    render() {
        console.log(`<label>${this.label}</label><select><option>Option 1</option></select>`);
    }
}

// 组件工厂函数，根据输入返回不同组件实例
function createComponent(type, label) {
    if (type === 'text') {
        return new TextField(label);
    } else if (type === 'select') {
        return new SelectField(label);
    } else {
        throw new Error('Unknown component type');
    }
}