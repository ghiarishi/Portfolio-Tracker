const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const app = express();
const port = 3000;

// Connect to the database
connectDB();

// Import the portfolio routes
const portfolioRoutes = require('./routes/portfolio');

// Use body-parser middleware
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Portfolio Tracker API');
});

// Use the portfolio routes
app.use('/api', portfolioRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
