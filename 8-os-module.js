const os = require('os')

//user info
const user = os.userInfo()
console.log(user)

//system uptime in sec
console.log(`System uptime ${os.uptime()} seconds`)


const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem(),
}

console.log(currentOS)