import express from 'express';
import cors from 'cors';
import connectDB from './db/connection.js';
import recordRoutes from './routes/record.js';
import healthRoutes from './routes/health.js';

const app = express();
app.use(cors());
app.use(express.json());

connectDB().then(db => {
  app.locals.db = db;
  console.log('Database instance stored in app.locals');
}).catch(err => {
  console.error('Error connecting to DB:', err);
  process.exit(1);
});

app.use('/api/records', recordRoutes);
app.use('/health', healthRoutes);

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
