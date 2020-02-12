'use strict';

const mongoose = require('mongoose');
// const User = require('./user.js');

let MONGODB_URI = 'mongodb://localhost:27017/lab11-auth';
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(MONGODB_URI, options);
// let newUser = new User( { username: 'orob', } , { password: 'orob',} );

require('./app.js').start(3000);
