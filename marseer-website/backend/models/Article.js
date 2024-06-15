const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  tags: [String],
  featured: { type: Boolean, default: false},
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;