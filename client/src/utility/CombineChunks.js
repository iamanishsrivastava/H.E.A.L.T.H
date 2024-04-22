import fs from "fs";

// Function to display a spinning loader
const showLoader = () => {
  const loader = ["|", "/", "-", "\\"];
  let i = 0;
  return setInterval(() => {
    process.stdout.write("\r" + loader[i++]);
    i = i % loader.length;
  }, 100);
};

// Function to combine chunks and write to a single JSON file
const combineChunks = () => {
   // Show loader while combining chunks
   const loaderInterval = showLoader();
   
   const combinedFile = fs.createWriteStream("combined_medicine_data.json");
 
   for (let i = 0; i < 195; i++) {
     const chunk = fs.readFileSync(`medicine_data_chunk${i}.json`, "utf8");
     combinedFile.write(chunk);
   }
 
   combinedFile.end();
   
   // Clear loader once the process is complete
   clearInterval(loaderInterval);
   
   console.log("Combined data successfully written to combined_medicine_data.json");
 };
 
 // Call the function to combine chunks
 combineChunks();