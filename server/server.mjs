// server/server.mjs

import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import { username, password, clusterUrl, databaseName } from "./config.mjs";
import cors from 'cors';
import path from 'path'; // Import path module

const __dirname = path.resolve(); // Get current directory

const app = express();

// Allow requests from all origins
app.use(cors(
  {
    origin: ["https://medicare-anishamsri.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
  }
));

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

// Serve the index.html file from the 'dist' folder
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html'); // Set the correct MIME type
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Serve JavaScript files with the correct MIME type
app.get('*.js', (req, res, next) => {
  res.set('Content-Type', 'application/javascript');
  next();
});

// Serve the React client-side application
app.use(express.static(path.join(__dirname, 'dist')));

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
export default app; // Export the app for Vercel