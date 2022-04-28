module.exports.items = ['item1','item2','item3'];

const sayBye = (name) => {
    console.log(`Bye from ${name}`);
}

module.exports.byeGreeting = sayBye;