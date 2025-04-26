const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

//DB
require('./db');

// routes
const routes = require('./routes');
app.use('/api', routes);

app.listen(3000, () => {
  console.log('App is Running');
});
