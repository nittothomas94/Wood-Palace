const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/Wood-Crafters')
  .then(() => {
    console.log('DB Connected');
  })
  .catch(e => {
    console.log('error connecting to DB', e);
  });

module.exports = mongoose;
