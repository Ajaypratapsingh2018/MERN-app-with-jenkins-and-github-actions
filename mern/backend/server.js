import express from 'express';
import cors from 'cors';
import records from './routes/record.js';

const PORT = process.env.PORT || 5050;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/record', records);

// Root route for testing
app.get('/', (req, res) => {
  res.send(' Backend is running on port ' + PORT);
});

// Start the Express server
app.listen(PORT, () => {
  console.log(` Server listening at http://localhost:${PORT}`);
});
