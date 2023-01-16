function Dog(name) {
  this.name = name;
}

Dog.prototype.say = function () {
  console.log(this.name + "멍멍");
};
var dog = new Dog("백구");
dog.say(); //벡구 멍멍

class Cat {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(this.name + " 야옹");
  }
}
const cat = new Cat("치즈냥이");
cat.say();
