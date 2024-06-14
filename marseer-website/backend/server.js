const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const articlesRouter = require('./routes/articles');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/articles', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api/articles', articlesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});