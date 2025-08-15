import { MongoClient, ServerApiVersion } from "mongodb";

const URI = process.env.MONGODB_URI || "mongodb://mern-mongo:27017/employees";

const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();
  await client.db().command({ ping: 1 });
  console.log("MongoDB connected!");
} catch (err) {
  console.error("Failed to connect to MongoDB:", err);
}

const dbName = process.env.MONGO_DB_NAME || "employees";
let db = client.db(dbName);

export default db;
