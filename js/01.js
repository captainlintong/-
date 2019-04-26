// 2、用js实现点击标签实现，弹出标签里的内容
var litwo = document.querySelector('.litwo')
litwo.onclick = function (e) {
  var a = e.target
  if (a.nodeName == 'A') {
    alert(a.innerText)
  }
}

// 3、用js实现对象简单继承的例子
// 父类
function Person() {
  this.name = '我是人类'
}
Person.prototype.eat = function () {
  console.log('我会吃饭...');
}
//原型继承·
//优点：可以完美继承方法， 使用简单，好理解
//缺点：无法完美继承属性， 原型链多了一层，并且这一层没什么用
function Student() {
  this.name = '乔鳕鱼'
}
Student.prototype = new Person

//借用构造函数继承·
//优点：直接把属性变成自己的了
//缺点：没有父类原型上是东西
function Student2() {
  Person.call(this)
}
var s = new Student2

// 组合继承
//优点：属性继承过来变成自己的了，原型也继承过来了
//确定：第一层原型没有用，继承的原型多走一步
function Student3() {
  Person.call(this)
}
Student3.prototype = new Person
var ss = new Student

// 5、用js把“早上好”转换成“早-上-号”
var a = '早上好'
var b = a.split('')
var c = b.join('-')
console.log(c);
