(function() {
// console.log(1 + 2 + '3')

// class MyClass {}
// console.log(typeof MyClass)

// console.log(typeof a)
// console.log(typeof b)

// var a = 3
// let b = 3

var name = "outer"
var obj = {
  Name: "inner",
  getName: function () {
    return function () {
      return this.name
    }
  }
}
console.log(obj.getName()())




})()
