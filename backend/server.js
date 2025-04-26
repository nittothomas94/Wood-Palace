const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const port = process.env.PORT;
//DB
require('./db');

// routes
const routes = require('./routes');
app.use('/api', routes);

app.listen(port, () => {
  console.log('App is Running');
});
