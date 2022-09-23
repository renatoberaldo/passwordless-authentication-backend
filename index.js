const express = require('express');
const app = express();
const cors = require('cors');

const router = require('./src/routes');

app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(3001, () => {
  console.log('Server is Runing!');
});
