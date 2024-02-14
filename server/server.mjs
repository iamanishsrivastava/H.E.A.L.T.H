// server/server.mjs

import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import { username, password, clusterUrl, databaseName } from "./config.mjs";
import cors from 'cors';

const app = express();
const port = 5170;

// Allow requests from all origins
app.use(cors());

// MongoDB connection URI
const uri = `mongodb+srv://${username}:${password}@${clusterUrl}/${databaseName}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Connect to MongoDB
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

connectToDatabase();

// API endpoint to fetch medicine data
app.get("/api/medicine", async (req, res) => {
  try {
    const db = client.db(databaseName);
    const collection = db.collection("medicine");
    const medicines = await collection.find().toArray();
    res.json(medicines);
  } catch (err) {
    console.error("Error fetching medicine data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});