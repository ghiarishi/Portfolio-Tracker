const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

// Define a route to get portfolio items
router.get('/portfolio', async (req, res) => {
  try {
    const portfolioItems = await Portfolio.find();
    res.json(portfolioItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Define a route to add a portfolio item
router.post('/portfolio', async (req, res) => {
  const portfolioItem = new Portfolio({
    name: req.body.name,
    value: req.body.value,
  });

  try {
    const newPortfolioItem = await portfolioItem.save();
    res.status(201).json(newPortfolioItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
