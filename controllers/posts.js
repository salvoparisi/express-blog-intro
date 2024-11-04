const posts = require('../data/postsData');

exports.index = (req, res) => {
  res.json({
    count: posts.length,
    posts: posts
  });
};
