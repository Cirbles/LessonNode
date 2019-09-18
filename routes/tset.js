// alert("hello world!!!");
// var a = 0;
// var b = 0;
// console.log(a / b);

// var a = 5;
// var b = "6";
// if (a+b === 5){
//     console.log("这个数和5相等");
// }else if (a+b < 5){
//     console.log("这个数小于5");
// }else if(a+b > 5){
//     console.log("这个数大于5");
// }
//
// console.log(isNaN(NaN));
//
// console.log(1/3 === (1 - 2/3));
//
// console.log(Math.abs(1/3 - (1 - 2/3)) < 0.0000001);
//
// var arr = [1,2,3.14,"hello",null,true];
// console.log(arr);
//
// // var sutudents = new Array(1,2,3.14,"hello",null);
// // console.log(sutudents);
// for (var i = 0; i < arr.length; i ++){
//     console.log(arr[i]);
// }

// alert("hello world!!!");
// var a = 0;
// var b = 0;
// console.log(a / b);

// var a = 5;
// var b = "6";
// if (a+b === 5){
//     console.log("这个数和5相等");
// }else if (a+b < 5){
//     console.log("这个数小于5");
// }else if(a+b > 5){
//     console.log("这个数大于5");
// }
//
// console.log(isNaN(NaN));
//
// console.log(1/3 === (1 - 2/3));
//
// console.log(Math.abs(1/3 - (1 - 2/3)) < 0.0000001);
//
// var arr = [1,2,3.14,"hello",null,true];
// console.log(arr);
//
// // var sutudents = new Array(1,2,3.14,"hello",null);
// // console.log(sutudents);
// for (var i = 0; i < arr.length; i ++){
//     console.log(arr[i]);
// }

// var xiaoming = {
//     name:"小明",
//     birth:"2000",
//     "mid-school":"No.1 Middle School",
//     height:"175",
//     weight:"65",
//     score:null
// }
// console.log(xiaoming.name);
// console.log(xiaoming["mid-school"]);
// console.log(xiaoming.ni);
//
// //添加age属性
// xiaoming.age = "20";
// console.log(xiaoming.age);
// console.log(xiaoming);
//
// //删除age这个属性
// delete xiaoming.age;
// console.log(xiaoming);
// console.log("####################")
// delete  xiaoming.age;
// console.log(xiaoming);
//
// //判断某一属性是否存在
// console.log("name" in xiaoming);
// console.log("age" in xiaoming);
//
// //因为toString定义在object对象中，而所有对象最终都会在原型链上指向object，所以xiaoming也拥有toString属性。
// console.log("toString" in xiaoming);
//
// //判断属性是否是自身所有而不是继承获得的
// console.log(xiaoming.hasOwnProperty("toString"));
// console.log(xiaoming.hasOwnProperty("name"));

//JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true，因此上述代码条件判断的结果是true

// function trueOrFalse() {
//     var xiaoming = {
//         name:"小明",
//         birth:"2000",
//         "mid-school":"No.1 Middle School",
//         height:"175",
//         weight:"65",
//         score:null
//     }
//     if (xiaoming.score){
//         console.log("true");
//     }else {
//         console.log("false");
//     }
// }
// trueOrFalse();

// function getBMI(name,height,weight) {
//     var name = name;
//     name = {
//         name:name,
//         height:height,
//         weight:weight
//     };
//     var bmi = name.weight / (name.height * name.height);
//     if (bmi <= 18.5){
//         console.log("姓名:" + name.name);
//         console.log("bmi:" + bmi);
//         console.log("过轻");
//     }else if (bmi > 18.5 && bmi <= 25){
//         console.log("姓名:" + name.name);
//         console.log("bmi:" + bmi);
//         console.log("正常");
//     }else if (bmi > 25 && bmi <= 28){
//         console.log("姓名:" + name.name);
//         console.log("bmi:" + bmi);
//         console.log("过重");
//     }else if (bmi > 28 && bmi <= 32){
//         console.log("姓名:" + name.name);
//         console.log("bmi:" + bmi);
//         console.log("肥胖");
//     }else if (bmi > 32){
//         console.log("姓名:" + name.name);
//         console.log("bmi:" + bmi);
//         console.log("严重肥胖");
//     }
// }
// getBMI("xiaoming",1.73,55);

//以下是页面上的
// 'use strict';
// var height = parseFloat(prompt('请输入身高(m):'));
// var weight = parseFloat(prompt('请输入体重(kg):'));
// console.log(height);
// console.log(weight);
// parseFloat(prompt('请输入'));

//循环

// function getCount() {
//     var a = 0;
//     for (var i=1; i<=100; i++){
//         a = a + i;
//     }
//     console.log(a);
// }
// getCount();

// var arr = ["苹果","香蕉","鸭梨"];
// // var i;
// // var x;
// // for (i=0; i<arr.length; i++){
// //     x = arr[i];
// //     console.log(x);
// // }
//
// var x = 0;
// for (;;){
//     console.log(arr[x]);
//     if (x === 2){
//         break;
//     }
//     x ++;
// }

// var o = {
//     name: 'Jack',
//     age: 20,
//     city: 'Beijing'
// };
// for (var key in o){
//     var n;
//     if (o.hasOwnProperty(key)){
//         // console.log(key);
//         console.log(key + ":" + o[key]);
//     }
//
// }

// var a = ["A","B","C"];
// for (var i in a){
//     console.log(i + ":" + a[i]);
//     // console.log(a[i]);
// }

// var x = 0;
// var n = 100;
// while (n > 0){
//     x = x + n;
//     n = n - 1;
// }
// console.log(x);
// do {
//     x = x + n;
//     n = n - 1;
// }while (n > 0);
// console.log(x);

// var names = ["张三","李四","王五"];
// var scores = [95, 75, 85];
// var nameScores = {};
// for (var i=0; i<names.length; i++){
//     nameScores[names[i]] = scores[i];
// }
// console.log(nameScores);

// var m = new Map([['张三',95],['李四',75],['王五',85]]);
// console.log(m.get("张三"));

// var mp = new Map();
// mp.set('张三',95);
// mp.set('李四',75);
// // if ("王五" in mp){
// if (mp.has("王五")){
//     mp.delete("王五");
// }else {
//     console.log("不存在");
// }
// console.log(mp);
//
// var s = new Set();
// s.add(1);
// s.add(1);
// s.delete(1)
// console.log(s);

var a = ["A","B","C"];

// var s = new Set();
// s.add("张三");
// s.add("李四");
// s.add("王五");
//
// var m = new Map();
// m.set(1,"x");
// m.set(2,"y");
// m.set(3,"z");
//
// for (var x of a){
//     console.log(x);
// }
// console.log("###############");
// for (var x of s){
//     console.log(x);
// }
// console.log("###############");
// for (var x of m){
//     console.log(x);
// }

a.forEach(function (index) {
    console.log(index);
});