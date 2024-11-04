const express = require('express');
const app = express();
const port = 3000;

const postsController = require('./controllers/posts');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('<h1>Benvenuto nel mio blog!</h1>');
});

app.get('/posts', postsController.index);

app.listen(port, () => {
  console.log(`listening http://localhost:${port}`);
});
