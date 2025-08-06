// db/connection.js
import { MongoClient, ServerApiVersion } from 'mongodb';

const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    console.log('MongoDB connected!');
    return client.db('employees'); // Use your desired DB name
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    throw err;
  }
}

export default connectDB;
