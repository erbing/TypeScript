function getName(x: any, y: any) {
  return x + y;
}

function Person(name: any, age: Number) {
  name: String;
  age: Number;
}

class Names {
  names: String | undefined;
  sayHello() {
    console.log(this.names);
  }
}
