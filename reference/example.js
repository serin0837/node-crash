console.log("Hello From Node.js...");

console.log(__dirname, __filename);

const { person, Person } = require("./person");

const person1 = new Person("serin", 26);
person1.greeting();
