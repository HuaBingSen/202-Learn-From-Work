/**
 * title 在string的原型上自定义一个方法，实现传入字符串能复制自身n遍
 */

let str = "a",
  n = 3;

// 1.第一种方法：挂载到String的原型对象上，只需要传入重复的次数n，遍历n次拼接n次即可
// 字符串自身就能调用该方法了
String.prototype.myRePeat01 = function () {
  let str = "";
  for (let i = 0; i < arguments[0]; i++) {
    str = str + this;
  }
  return str;
};
console.log(str.myRePeat01(n));

//2.第二种方法：挂载到String对象本身，传入字符串str和n，
String.myRePeat02 = function () {
  let str = "";
  for (let i = 0; i < arguments[1]; i++) {
    str = str + arguments[0];
  }
  return str;
};
console.log(String.myRePeat02(str, n));
