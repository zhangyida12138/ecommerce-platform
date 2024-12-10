// import _ from 'lodash';
// //动态参数arguments,只存在函数里面
// function getSum(){
//   console.log(arguments);
//   let sum=0;
//   for(let i=0;i<arguments.length;i++){
//     sum+=arguments[i];
//   }
//   console.log(sum);
// }
// getSum();
// //剩余参数
// function getSums(a,b,...arr){
//   console.log(arr);



// }
// getSums(1,2,'hello',4,5)

// const arr=[1,2,3,4,5]
// console.log(...arr)
// const obj={
//   arr2:[1,2,3,4],
//   hi:'ok',
//   boolean:true,
//   sum:{
//     aaa:1,
//     ok:'false',
//     c:false,
//   }
// }
// console.log(...obj)

// const fn=(x)=>{
//   console.log(x);

// }
// fn(1)
// const fn=x=>{
// console.log(x);
// }
// fn(2)
// const fn=x=>console.log(x);
// fn(2)
// const fn= x=>x+x
// console.log(fn(2));
// const fn=(uname)=>({name:uname})//返回对象的话，将对象包裹在小括号里面
// console.log(fn('刘德华'));

// const obj={
//   name:'zw',
//   sayHi:()=>{
//     console.log(this);

//   }
// }
// obj.sayHi()

// const obj={
//   uname:'zw',
//   sayHi:function(){
//     let i=10;
//     const count=()=>{
//       console.log(this);
//     }
//     count()
//   }
// }
// obj.sayHi()

const [max, min, avg] = [100, 60, 80];
// console.log(max,min,avg);
// console.log(max);
const arr = [max, min, avg];
// console.log(...arr);
// let a=1;
// let b=2;
// [b,a]=[a,b];
// console.log(a,b);
// arr.map(function(item){
//   console.log(item);

// });
// const[maxs,mins]=(function getValue(){
//   return [100,60]
// })();
// console.log(maxs,mins);

// const [a,b,c,d=0]=[1,2,[3,4]]
// console.log(a,b,c,d);

// const obj={
//   name:'zw',
//   age:'24'
// }
// const{age,name}=obj;
// console.log(name,age);
// const{name,age}={
//   name:'zw',
//   age:18
// }
// console.log(name,age);
// const{name:uname,age}={
//   name:'zw',
//   age:20
// }
// console.log(uname,age);
// const pig={
//   name:'pq',
//   family:{
//     m:'mom',
//     d:'dad',
//     bro:'j'
//   },
//   age:6
// }
// const{name,family:{m,d,bro},age}=pig;
// console.log(name,m,d,bro,age);
// // const{data}=msg
// const arrs =['1','2','3'];
// arrs.forEach(function(item,index){
// console.log(`当前元素时${item}`);
// console.log(`当前元素时${index}`);
// });//只遍历
// arrs.map(function(item,index){
//   console.log(`当前元素时${item}`);
//   console.log(`当前元素时${index}`);
//   })

// let str='';
// goodslist.forEach(item => {
//   {name,age,price}=item;
// });
// document.querySelector(div).innerHTML=str;

// const newArr=arr.filter(function(item){
//   return item>=80;
// })
// const newArr=arr.filter(item=>item>=80);
// console.log(...newArr);

// function Pig(name,age,gender){
//   this.name=name;
//   this.age=age;
//   this.gender=gender;

// }
// const pig=new Pig('佩奇','6','female');
// const pigs=new Pig('佩奇','6','female');
// console.log(pig===pigs);
// const pig={
//   uname:'wei',
//   age:18,
// }
// console.log(Object.keys(pig));
// console.log(Object.values(pig));

// const oo={};
// Object.assign(pig,{pig:true});
// console.log(pig);
// const total=arr.reduce(function(prev,current){
//   return prev+current;
// },10)

// const total=arr.reduce((prev,current)=>prev+current,10)//起始参数的重要性
// console.log(total.toFixed(2));

// const mi=arr.find(item=>item.name==='小米')

// const pig={
//   name:'ok',
// }
// console.log(pig.prototype);

// function Star(){

// }
// Star.prototype={
//   constructor:Star,
//   sing:()=>{
//     console.log('唱歌');
//   },
//   dance:()=>{
//     console.log('跳舞');
//   }
// }
// console.log(Star.prototype);
// const Person={
//   eyes:2,
//   head:1
// }
// function Person(){
//   this.eyes=2;
//   this.head=1;
// }//需要使用构造函数的方法
// function Woman() {

// }
// Woman.prototype=new Person();//使用不同对象进行原型继承
// Woman.prototype.constructor=Woman;
// Woman.prototype.baby=function(){
//   console.log("baby");
// }
// const red =new Woman();
// console.log(red);

// function Man(){
// }
// Man.prototype=Person;//使用不同对象进行原型继承
// Man.prototype.constructor=Man;
// const pink=new Man();
// console.log(pink);

// console.log.apply(Woman.prototype);
// console.log.apply(Man.prototype);

// const obj= {
//   uname:"zw",
//   age:18
// }
// const o=obj;//直接复制的是地址
// console.log(obj.age);
// o.age=20;
// console.log(obj.age);//直接复制对象，修改复制品，原对象也会改变

// 浅拷贝，是拷贝地址
// const o={...obj};
// o.age=20;
// console.log(o);
// console.log(obj);

// const o={}
// Object.assign(o,obj);
// o.age=20;
// console.log(o);
// console.log(obj);

const obj = {
  uname: "zw",
  age: 18,
  family: {
    baby: 'pink'
  },
  hobby: ['足球', '乒乓球'],
}
// const o={};
// Object.assign(o,obj);
// o.family.baby='red'
// console.log(o);
// console.log(obj);//浅拷贝的弊端，浅拷贝是拷贝地址的内容。

// // 深拷贝
// 1.函数递归。在函数内部调用自己，容易栈溢出，要加退出条件return
// function getTime(){
//   document.querySelector('div').innerHTML=new Date().toLocaleString()
//   setTimeout(getTime,1000)
// }
// getTime();
// setInterval(getTime,1000)

// const o={};
// function deepCopy(newObj,oldObj){
//   for(let k in oldObj){
//     //处理数组问题
//     if(oldObj[k] instanceof Array){//！！！！！先判断数组，再判断对象，因为数组也属于对象！！！！！！！
//       newObj[k]=[];
//       deepCopy(newObj[k],oldObj[k])
//     }else if(oldObj[k] instanceof Object){
//       newObj[k]={};
//       deepCopy(newObj[k],oldObj[k]);
//     }
//     else{
//         // k是属性名 oldObj[k]是属性值
// . 语法是静态的
// 如果你使用 oldObj.k，实际上是试图访问一个名为 k 的属性，
// 这只能用于已经知道属性名的情况，而不是在遍历对象时动态生成的键。
//         // newObj[k]===o.uname 用点需要直接写出属性名，所以用[]来表示
//         newObj[k]=oldObj[k];
//     }
//   }
// }
// deepCopy(o,obj);
// console.log(o);


// 2.lodash库里面的cloneDeep
// const o=_.cloneDeep(obj);
// console.log(o);
// o.family.baby='xixi';
// console.log(obj);

// 3.JSON.stringify()实现

// JSON.stringify 把对象转换为json字符串

// console.log(JSON.stringify(obj));
// const o=JSON.parse(JSON.stringify(obj))
// o.family.baby='hello'
// console.log(o);

// function fn(x,y){
//   try {
//     debugger//!!!!用于调试
//     if(!x||!y){
//       throw new Error("没有参数传递进来");//会终止程序
//     }
//   } catch (error) {
//     //拦截错误，提示浏览器提供的错误信息，不中段程序的执行
//     console.log(error.message);
//     //需要加return中断程序
//     // 如果解决不了error可以throw

//   }
//   finally{
//     alert('弹出对话框');//无论是否有错都会执行
//   }
//   return x+y
// }
// console.log(fn());


// 普通函数的调用值决定了this
// 'use strict'//进入严格模式，严格模式指向undefined
// console.log(this);
// function fn(){

// }
// 箭头函数实际上没有this，箭头函数用的this就是最近作用域中的this。
// 改变this的方法，call（），apply(),bind（）,函数调用这些方法
// function fn(x,y) {
//   console.log(this);
//   console.log(x+y);

// }
// const objs={
//   uname:"PublicKeyCredential"
// }
// fn.call(objs,1,2);//调用函数，改变this指向，可以传递参数

// function fn(x,y){
// console.log(this);
// console.log(x+y);

// }
// const objs={
//   age:18
// }
// fn.apply(obj,[1,2])//调用函数，改变this指向，传递的参数必须是数组
// // 返回值就是函数的返回值，本身就是在调用函数
// 求数组最大值
// const maxss=Math.max(1,2,3);
// const maxss=Math.max.apply(Math,arr);
// Math.max(...arr);

// bind不会调用函数，但是能改变函数内部的this
// 语法和call相似，但是不调用函数

// function fn(){
//   console.log(this);
// }
// fn.bind(obj)();//返回值是函数，但是函数中的this是更改过的
// const fun =fn.bind(obj);
// fun()
// const btn=document.querySelector('button');
// btn.addEventListener('click',function(){//这里不能使用箭头函数
//   this.disabled=true;
//   setTimeout(function(){
//     // this.disabled=false;//用不了，因为实际上是window调用
//     //两种选择，这里使用箭头函数，或者使用bind
//     this.disabled=false;
//   }.bind(btn),2000)//再这里进行绑定btn，可以将btn改成this!!
// })

// 防抖debounce 单位时间内，频繁触发事件，只持续最后一次
// 使用场景：搜索框，输入完再搜索

const box = document.querySelector('.box');
let i = 1;
function mouseMove() {
  box.innerHTML = i++;
}
// loadash里面有防抖

// box.addEventListener('mousemove',_.debounce(mouseMove));

// 防抖核心思路：
// 利用定时器，如果鼠标滑动每次有定时器了，就清除定时器
// 没有定时器就开启定时器，存到变量中
// 在定时器里调用要执行的函数
function debounce(fn, delay) {
  let timer = null;
  // return 返回一个匿名函数
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      fn();//加小括号调用
    }, delay)
  }
}


box.addEventListener('mousemove', debounce(mouseMove, 500));

// 节流，单位时间内只执行一次事件，例子技能cd

function throttle(fn, delay) {
  let timer = null;
  return function () {
    if (!timer)
      timer = setTimeout(function () {
        fn();//加小括号调用
        timer = null;//用这个清除计时器
        //当计时器还在运作的时候是无法清除计时器的
        //确保在延迟时间结束后可以再次触发
      }, delay)
  }
}


let is = 0;
const btn = document.querySelector('button');
function buttonClick() {
  is++;
  btn.innerHTML = is;

}

btn.addEventListener('click', throttle(buttonClick, 500));


const objs = {
  _name: 'jack',
  // get name(){
  //   return this.name;
  // },
  // set name(value){
  //   this.name=value;
  // },
}
// console.log(objs.name);
console.log(Object.getOwnPropertyDescriptors(objs._name));

//在css中：表示伪类选择器。例如：hover，：focus等
// ：：表示伪元素选择器，例如：：before，：：first-letter
// 在css的原生属性中例如，background-color，在js中想调用，必须使用backgroundColor这样
//在css中的自定义属性 使用data-开头设置data-user-id，在js中需要这样引用div.dataset.userId
//如果定义的非data-属性，需要使用div。getAttribute（属性名）调用，返回属性值。或者setAttribute()
//css变量，也称css自定义属性，使用--前缀定义的自定义属性，
// 可以定义在任何一个选择器中，一般是.root，局部变量的话只有子代可以使用
// 例子：
// :root {
//   --main-bg-color: #ff6347; /* 定义一个全局的背景色变量 */
//   --main-text-color: #333333; /* 定义一个全局的文本色变量 */
// }

// body {
//   background-color: var(--main-bg-color); /* 使用变量 */
//   color: var(--main-text-color); /* 使用变量 */
// }

// button {
//   background-color: var(--main-bg-color); /* 使用相同变量 */
//   color: white;
// }