function getName(x: any, y: any) {
  return x + y;
}

function Person(name: any, age: Number) {
  name: String;
  age: Number;
}

class Getters {
  name!: String | "zhange";
  sayHello() {
    console.log(this.name);
  }
}
