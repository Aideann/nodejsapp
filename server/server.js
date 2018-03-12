const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Adrian',
    age: 21
  }, {
    name: 'Matt',
    age: 27
  }, {
    name: 'Michal',
    age: 27
  }]);
});

app.listen(3000);
module.exports.app = app;
