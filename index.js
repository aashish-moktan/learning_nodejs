const { john, harry } = require('./names');
const sayHi = require("./utils");
const { byeGreeting, items } = require('./alternative');

sayHi(john);
sayHi(harry);
byeGreeting(john);
byeGreeting(harry);
console.log(items);
console.log(items.length);