"use strict";
function getName(x, y) {
    return x + y;
}
function Person(name, age) {
    name: String;
    age: Number;
}
class Getters {
    sayHello() {
        console.log(this.name);
    }
}
