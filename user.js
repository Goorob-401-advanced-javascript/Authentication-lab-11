







'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let SECRET = 'coolsecret';

let db = {};
let users = {};

users.save = async function (record) {

  if (!db[record.username]) {
    record.password = await bcrypt.hashSync(record.password, 5);

    db[record.username] = record;
    return record;
  }

  return Promise.reject();
}

users.authenticateBasic = async function(user,pass) {
  let valid = await bcrypt.compare(pass, db[user].password);
  return valid ? db[user] : Promise.reject();
}

users.generateToken = function(user) {
  let token = jwt.sign({ username: user.username}, SECRET);
  return token;
}

users.list = () => db;

module.exports = users;
// 'use strict';
// // npm install jsonwebtoken
// //   npm install bcryptjs
// //  npm install base-64 
// const bcrypt = require('bcryptjs'); 
// const jwt = require('jsonwebtoken');
// let SECRET ='coolsecret';
// let db ={};
// let users = {};
// users.save = async function (record){
//     if(!db[record.username]){
//         record.password = await bcrypt.hashSync(record.password ,5);  // here we hashing  the password so that mean it will not be readable for 
//         db[record.username] = record ;
//         return record ;
//     }
//     return Promise.reject() ;
// }


// users.authenticateBasic = async function(user , pass){
//     let valid = await bcrypt.compare(pass , db[user].password);
//     return valid ? db[user] : Promise.reject() ;
// } 
// users.generateToken = function(user){
//     let token = jwt.sign({ username : user.username},SECRET); //sign : two factor layer which says who am i what is my secret code 
//     return token ;
// }
// users.list =()=> db ;

// module.exports = users ;


