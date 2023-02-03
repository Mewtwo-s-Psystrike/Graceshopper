require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const router = require('./api');
const cors = require('cors');

app.use(cors());
app.use(morgan("dev")); 
app.use(express.json());

app.use('/api', router);

app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.use((err, req, res, next) => {
    console.error('500 error', err);
    res.status(500).send({ message: 'Something went wrong' });
  });



const PORT = process.env.PORT || 3200;

const client = require('./db/client');
client.connect();

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})

module.exports = app