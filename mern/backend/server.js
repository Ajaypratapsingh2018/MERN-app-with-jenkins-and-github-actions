// server.js
import express from 'express';
import cors from 'cors';
import connectDB from './db/connection.js';
import recordRoutes from './routes/record.js';

const PORT = process.env.PORT || 5050;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB()
  .then((db) => {
    app.locals.db = db;

    // Routes
    app.use('/record', recordRoutes);

    // Root route
    app.get('/', (req, res) => {
      res.send('Backend is running on port ' + PORT);
    });

    // Start server
    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection failed, exiting...');
    process.exit(1);
  });
