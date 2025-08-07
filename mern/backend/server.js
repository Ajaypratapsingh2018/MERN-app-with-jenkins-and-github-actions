require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const healthRoute = require('./routes/health');

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(express.json());

// Routes
app.use('/health', healthRoute);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => console.error('MongoDB connection error:', err));
