const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method return ths system uptime in seconds
const uptime = os.uptime();

// method return cpus information
const cpus = os.cpus();

// method returns home dir
const homedir = os.homedir();

// method returns platform in which node.js is running
const platform = os.platform();

const currentOS = {
    name: os.type(),
    platform: os.platform(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    uptime: os.uptime(),
    cpus: os.cpus()
}
console.log(currentOS);
