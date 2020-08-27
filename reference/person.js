const person = {
  name: "serin",
  age: 26,
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log("hello");
  }
}
module.exports = { person, Person };
