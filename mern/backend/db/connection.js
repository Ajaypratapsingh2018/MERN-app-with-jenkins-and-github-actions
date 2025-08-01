import { MongoClient, ServerApiVersion } from 'mongodb';

const URI = 'mongodb://mongodb:27017';

async function connectDB() {
  const client = new MongoClient(URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
    return client.db('employees');
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default connectDB;