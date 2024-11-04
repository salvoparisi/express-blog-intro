const postsData = require('../data/postsData');

index = (req, res) => {
  res.json({
    count: posts.length,
    posts: posts
  });
};

show = (req, res) =>{
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
  
}

module.exports={
  index,
  show
}
