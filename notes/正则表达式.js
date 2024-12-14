// 自定义对象
const obj = {
    doSomething(a, b) {
      return a + b;
    },
  };
  
  // 使用 Proxy 拦截方法调用
  const proxy = new Proxy(obj, {
    get(target, prop, receiver) {
      const originalMethod = target[prop];
  
      // 如果访问的是方法，则拦截
      if (typeof originalMethod === "function") {
        return function (...args) {
          console.log(`调用方法: ${prop}，参数: ${args}`);
          const result = Reflect.apply(originalMethod, target, args); // 调用原方法
          console.log(`返回值: ${result}`);
          return result;
        };
      }
  
      // 如果不是方法，直接返回属性值
      return Reflect.get(target, prop, receiver);
    },
  });
  
  proxy.doSomething(3, 4); // 调用方法: doSomething，参数: 3,4 -> 返回值: 7