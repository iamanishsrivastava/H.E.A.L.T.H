import fs from "fs";
import readline from "readline";

// Define the chunk size
const CHUNK_SIZE = 100; // Adjust this value as needed

// Read the existing JSON data from combined_medicine_data.json
const readStream = fs.createReadStream("../../res/db/medicine_data.json", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("medicine_data.json", {
  encoding: "utf8",
});

// Initialize an array to store combined data
let combinedData = [];

// Create readline interface for reading line by line
const rl = readline.createInterface({
  input: readStream,
  output: process.stdout,
  terminal: false,
});

// Function to process and write data in chunks
const processAndWriteChunks = (chunks) => {
  chunks.forEach((chunk, index) => {
    const isLastChunk = index === chunks.length - 1;
    const jsonString = chunk.join('\n'); // Join lines to form a complete JSON string
    const cleanedJsonString = jsonString.replace(/"preventer"/g, "'preventer'"); // Replace '"good"' with 'good',
    // cleanedJsonString = cleanedJsonString.replace(/"preventer"/g, "'preventer'"); // Replace '"good"' with 'good',
    writeStream.write(cleanedJsonString, () => {
      // If it's the last chunk, close the write stream
      if (isLastChunk) {
        writeStream.end(() => {
          console.log("Combined data successfully written to medicine_data.json");
        });
      }
    });
  });
};

// Read JSON data line by line
let chunk = [];
rl.on("line", (line) => {
  // Check if the line is not empty
  if (line.trim()) {
    // Push the line to the chunk array
    chunk.push(line);
    
    // If the chunk size is reached, push the chunk to the combinedData array and reset it
    if (chunk.length === CHUNK_SIZE) {
      combinedData.push(chunk);
      chunk = [];
    }
  }
});

// When reading is complete
rl.on("close", () => {
  try {
    // Push the remaining chunk to the combinedData array
    if (chunk.length > 0) {
      combinedData.push(chunk);
    }

    // Process and write the chunks
    processAndWriteChunks(combinedData);
  } catch (error) {
    console.error("Error processing combined data:", error);
  }
});