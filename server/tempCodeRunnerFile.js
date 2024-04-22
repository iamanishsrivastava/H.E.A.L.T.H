// Select the database to use.
use("HEALTH");

// Load JSON data from the file
import jsonData from '../client/res/db/medicine_data.json';

// Insert the JSON data into the collection
db.getCollection("medicine-info").insertMany(jsonData);

// Query the collection to verify insertion
db.getCollection("medicine-info").find();