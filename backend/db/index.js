const mongoose = require('mongoose');

require('dotenv').config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DB Connected');
  })
  .catch(e => {
    console.log('error connecting to DB', e);
  });

module.exports = mongoose;
