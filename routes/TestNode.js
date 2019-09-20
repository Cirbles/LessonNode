// 'use strict';
// var abs = function (number) {
//     if (number >= 0){
//         return number;
//     }else {
//         return 0-number;
//     }
// }
// console.log(abs());
// function getB(){
//     if(abs(0)){
//         console.log("真");
//     }else {
//         console.log("假");
//     }
// }
// getB();
// function testArgument() {
//     console.log(arguments[1]);
// }
// testArgument("a","b","c");
//输出规定入参额外的入参部分
// function foo(a,b){
//     var rest = [];
//     if (arguments.length > 2){
//         for (var i=2; i<arguments.length; i++){
//             rest.push(arguments[i]);
//         }
//     }
//
//     console.log('a = ' + a);
//     console.log('b = ' + b);
//     console.log(rest);
// }
// foo("a","b","c");

// function foo(a,b,...rest){
//     console.log(rest);
// }
// foo(1,2,3,4,5,6,7);
// foo(1);

// function foo(){
//     return{
//         name : "foo"
//     };
// }
// console.log(foo());

// function area_of_circle(r,pi){
//     if (pi){
//         return pi*r*r;
//     }else if(pi === 0){
//         return pi*r*r;
//     }else {
//         pi = 3.14;
//         return pi*r*r;
//     }
// }
// console.log(area_of_circle(1,-1));

// function area_of_circle(r,pi){
//     return (pi || 3.14)*r*r;
// }
// console.log(area_of_circle(1,0));

//作用域
// function a(){
//     var a = 1;
//     function b() {
//         var a = 2;
//         console.log(a);
//     }
//     b();
//     console.log(a);
// }
// a();

// function test() {
//     var a = "zhangsan" + "," + b;
//     console.log(a);
//     var b = "lisi";
// }
// test();

// function test() {
//     var a;
//     console.log(a = 1);
// }
// test();

// var MYAPP = {};
// MYAPP.a = 1;
// MYAPP.b = 2;
// MYAPP.test = function () {
//     return MYAPP.a + MYAPP.b;
// }
// console.log(MYAPP.test());

// var MYAPP = {};
// MYAPP.test = function () {
//     for (let i=0; i<100; i++){
//         console.log(i);
//     }
//     i+=100;
//     console.log(i);
// }
// MYAPP.test();

// const PI = 3.14;
// // PI = 3;
// console.log(PI);

//解够阈值
// var [x, y, z] = {"战三", "李四", "王五"};
// console.log('x = ' + x + ', y = ' + y + ', z = ' + z);