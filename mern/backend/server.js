import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware to parse JSON
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => res.status(200).send('OK'));

// MongoDB connection with retry logic
const connectWithRetry = () => {
  console.log('Attempting MongoDB connection...');
  console.log('MONGO_URI from env:', process.env.MONGO_URI); // Debug log

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log('MongoDB connected successfully');
      startServer();
    })
    .catch((err) => {
      console.error(`MongoDB connection failed: ${err.message}`);
      console.log('Retrying in 5 seconds...');
      setTimeout(connectWithRetry, 5000);
    });
};

// Start Express server
function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\nGracefully shutting down...');
  await mongoose.connection.close();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\nReceived SIGTERM, closing connections...');
  await mongoose.connection.close();
  process.exit(0);
});

// Start the first connection attempt
connectWithRetry();
