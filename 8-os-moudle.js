const os = require('os')

// info about current user

 console.log(os.userInfo());

//  sys uptime
console.log(`sys uptime is ${os.uptime()}`);

const currenOS={
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currenOS);