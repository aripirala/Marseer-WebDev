const express = require('express');
const Article = require('../models/Article');

const router = express.Router();

// Get all articles
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get recommendations for a category
router.get('/recommendations/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const recommendations = await Article.find({ category }).limit(5);
    res.json(recommendations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new article
router.post('/', async (req, res) => {
  const newArticle = new Article(req.body);

  try {
    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;