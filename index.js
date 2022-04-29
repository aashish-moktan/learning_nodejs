const path = require('path');

const filePath = path.join('public','data','student.json');
console.log(filePath);

// basename 
const base = path.basename(filePath);
console.log(base);

// extension
const ext = path.extname(filePath);
console.log(ext);

// dirname
const dirname = path.dirname(ext);
console.log(dirname);

// absolute path
const absolute = path.resolve(__dirname, 'public', 'data','student.json');
console.log(absolute);