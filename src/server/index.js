const express = require('express');
const app = express();
const path = require('path');
const db = require('./db/db');

app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('backend');
});

// api routes
app.use('/api', require('./api'));

// error middleware
app.use((err, req, res, next)=> {
  console.error(err);
  res.status(500).send({ message: err. message });
});


const port = process.env.PORT || 3000;

// db.sync()
  // .then(()=> {
    app.listen(port, () => console.log(port));
  // });
