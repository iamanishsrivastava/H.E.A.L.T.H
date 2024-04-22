import fs from "fs";
import readline from "readline";

// Define the chunk size
const CHUNK_SIZE = 100; // Adjust this value as needed

// Read the existing JSON data from combined_medicine_data.json
const readStream = fs.createReadStream("./draft_medicine_data.json", {
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

// Function to remove extra quotes from the drug_interactions property
function removeExtraQuotes(jsonString) {
  // Find the starting index of the object brackets
  const startIndex = jsonString.indexOf('{');

  // Find the ending index of the object brackets
  const endIndex = jsonString.lastIndexOf('}') + 1;

  // Extract the substring containing the object
  const objectString = jsonString.substring(startIndex, endIndex);

  // Remove any extra double quotes before and after the object brackets
  const cleanedString = jsonString.substring(0, startIndex-1) + objectString + jsonString.substring(endIndex+1);

  return cleanedString;
}

// Function to process and write data in chunks
const processAndWriteChunks = (chunks) => {
  chunks.forEach((chunk, index) => {
    const isLastChunk = index === chunks.length - 1;
    const jsonString = chunk.join('\n'); // Join lines to form a complete JSON string

    try {
      // Remove extra quotes characters from the drug_interactions property
      const cleanedJsonString = removeExtraQuotes(jsonString);

      // Write the cleaned JSON string to the output stream
      writeStream.write(cleanedJsonString, () => {
        // If it's the last chunk, close the write stream
        if (isLastChunk) {
          writeStream.end(() => {
            console.log("Combined data successfully written to medicine_data.json");
          });
        }
      });
    } catch (error) {
      console.error("Error processing chunk:", error);
    }
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
