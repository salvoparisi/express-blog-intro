const postsData = require('./data/postsData.js')
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

app.get('/posts/:id', (req, res) =>{
  const posts = postsData.find(pizza=>pizza.id === Number(req.params.id))
  console.log(posts);
  if(!posts){
    return res.status(404).json({
      error: "Not Found"
    })
  }
  return res.json({
    data: posts
  })
  
})
