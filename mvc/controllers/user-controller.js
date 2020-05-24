const User = require('../models/users');

const usr = new User("Raman","Sinha","raman@gmail.com","pwd")

console.log(usr.email)
console.log(usr.pwd)
console.log(usr.getName())




