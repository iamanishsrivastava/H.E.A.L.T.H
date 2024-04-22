import fs from "fs";

// Read the existing JSON data from data.json
const jsonData = fs.readFileSync("./data.json");
const data = JSON.parse(jsonData);

// Function to extract usage information from the description
const extractUsage = (desc) => {
   // Define keywords and phrases related to usage
   const usageKeywords = ["used", "taken for", "prescribed for", "indicated for"];
   
   // Regular expression pattern to match sentences containing usage keywords
   const regexPattern = new RegExp(`[^.!?]*(?:${usageKeywords.join('|')})[^.!?]*[.!?]?`, 'gi');
   
   // Find matches in the description
   const matches = desc.match(regexPattern);
   
   // Join the matched sentences into one string
   const usageInfo = matches ? matches.join(' ') : 'Usage information not available.';
   
   // Return the extracted usage information
   return usageInfo.trim();
 };
 
 // Function to extract administration instructions
 const extractAdministration = (desc) => {
   // Initialize variables to store administration details
   let route = "";
   let timing = "";
   let frequency = "";
   let duration = "";
   let important = "";
 
   // Extract route information
   if (desc.includes("external use")) {
     route = "external";
   } else if (desc.includes("oral administration")) {
     route = "oral";
   } else if (desc.includes("intravenous administration")) {
     route = "intravenous";
   } else if (desc.includes("intramuscular administration")) {
     route = "intramuscular";
   } else {
     route = "unknown";
   }
 
   // Extract timing information
   let timingIndex = desc.indexOf("preferably at");
   if (timingIndex !== -1) {
     const timingEndIndex = desc.indexOf(".", timingIndex);
     timing = desc.substring(timingIndex, timingEndIndex + 1).trim();
   } else {
     // If neither phrase is found
     timing = "Should be used as advised by your doctor.";
   }
 
   // Extract frequency information
   const frequencyIndex = desc.indexOf("regularly");
   if (frequencyIndex !== -1) {
     const frequencyContext = desc.substring(
       frequencyIndex - 30,
       frequencyIndex + 30
     ); // Extract surrounding text for more context
     if (frequencyContext.includes("every day")) {
       frequency = "Once daily";
     } else if (frequencyContext.includes("twice a day")) {
       frequency = "Twice daily";
     } else if (frequencyContext.includes("three times a day")) {
       frequency = "Three times daily";
     } else if (frequencyContext.includes("four times a day")) {
       frequency = "Four times daily";
     } else {
       frequency = "Regular intervals throughout the day";
     }
   }
 
   // Extract duration information
   const durationIndex = desc.indexOf("full course of treatment");
   if (durationIndex !== -1) {
     duration = desc.substring(
       durationIndex,
       desc.indexOf(".", durationIndex) + 1
     );
   } else {
     duration = "Not available.";
   }
 
   // Extract important notes
   const importantIndex = desc.indexOf("Do not");
   if (importantIndex !== -1) {
     important = desc.substring(
       importantIndex,
       desc.indexOf(".", importantIndex) + 1
     );
   }
 
   // Check for additional important notes containing certain keywords
   const additionalImportant = desc.match(
     /(?:[^.!?]*\b(?:crucial|important|critical|too early)[^.!?]+[.!?])/gi
   );
   if (additionalImportant) {
     important += additionalImportant.join(" ");
   }
 
   // Return administration details
   return {
     route,
     timing,
     frequency,
     duration,
     important,
   };
 };
 
 // Function to extract side effects
 const extractSideEffects = (desc) => {
   // Initialize variable to store side effects
   let sideEffects = "";
 
   // Regular expression pattern to match the sentence containing "side effects" or "may cause"
   const regex = /[^.!?]*?(side effects|may cause)[^.!?]*?[.!?]/gi;
 
   // Execute the regex on the description
   const matches = desc.match(regex);
 
   // Check if any matches were found
   if (matches && matches.length > 0) {
     // Join the matched sentences into one string
     sideEffects = matches.join(" ");
   }
 
   // Return side effects details
   return sideEffects.trim();
 };
 
 // Function to extract precautions
 const extractPrecautions = (desc) => {
   // Initialize variable to store precautions
   let precautions = "";
 
   // Keywords indicating precautions
   const precautionKeywords = [
     "precaution",
     "should not",
     "avoid",
     "consult",
     "inform",
     "before taking",
     "let your doctor know",
     "allergic to",
   ];
 
   // Find sentences containing precaution keywords
   const regex = new RegExp(
     `[^.!?]*(?:${precautionKeywords.join("|")})[^.!?]*[.!?]`,
     "gi"
   );
   const matches = desc.match(regex);
 
   // Join the matched sentences into one string
   if (matches && matches.length > 0) {
     precautions = matches.join(" ");
   }
 
   // Return precautions
   return precautions.trim();
 };
 
 // Function to extract storage instructions
 const extractStorageInstructions = (desc) => {
   // Define keywords indicating storage instructions
   const storageKeywords = ["store", "keep", "sunlight", "heat", "moisture"];
 
   // Phrases commonly associated with storage instructions
   const storagePhrases = ["cool, dry place", "away from"];
 
   // Regular expression pattern to match sentences containing storage keywords and phrases
   const regexPattern = new RegExp(
     `(?:[^.!?]*?(?:${storageKeywords.join(
       "|"
     )})[^.!?]*?(?:${storagePhrases.join("|")})[^.!?]*[.!?]?)`,
     "gi"
   );
 
   // Find matches in the description
   const matches = desc.match(regexPattern);
 
   // Join the matched sentences into one string
   const storageInstructions = matches
     ? matches.join(" ")
     : "Storage instructions not available.";
 
   // Return the extracted storage instructions
   return storageInstructions.trim();
 };
 
 // Function to extract monitoring requirements
 const extractMonitoringRequirements = (desc) => {
   // Define keywords indicating monitoring requirements
   const monitoringKeywords = [
     "monitor",
     "check",
     "observe",
     "assess",
     "evaluate",
   ];
 
   // Phrases commonly associated with monitoring requirements
   const monitoringPhrases = [
     "regularly",
     "periodically",
     "frequently",
     "as needed",
     "when necessary",
   ];
 
   // Regular expression pattern to match sentences containing monitoring keywords and phrases
   const regexPattern = new RegExp(
     `(?:[^.!?]*?(?:${monitoringKeywords.join(
       "|"
     )})[^.!?]*?(?:${monitoringPhrases.join("|")})[^.!?]*[.!?]?)`,
     "gi"
   );
 
   // Find matches in the description
   const matches = desc.match(regexPattern);
 
   // Join the matched sentences into one string
   const monitoringRequirements = matches
     ? matches.join("")
     : "Monitoring requirements not specified.";
 
   // Return the extracted monitoring requirements
   return monitoringRequirements.trim();
 };
 
 // Function to extract treatment duration
 const extractTreatmentDuration = (desc) => {
    // Define keywords indicating treatment duration
    const durationKeywords = ["treatment duration", "full course of treatment", "finish the full course", "should take it regularly", "should not stop taking", "stay on the diet and exercise program"];
  
    // Regular expression pattern to match sentences containing duration keywords
    const regexPattern = new RegExp(`[^.!?]*(?:${durationKeywords.join('|')})[^.!?]*[.!?]?`, 'gi');
  
    // Find matches in the description
    const matches = desc.match(regexPattern);
  
    // Join the matched sentences into one string
    const treatmentDuration = matches ? matches.join('') : 'Treatment duration not available.';
  
    // Return the extracted treatment duration
    return treatmentDuration.trim();
  };
 
 // Function to extract contraindications
 const extractContraindications = (desc) => {
    // Define keywords and phrases indicating contraindications
    const contraindicationKeywords = ["inform your doctor if", "avoid taking this medicine if", "should not take this medicine if", "contraindications include", "do not use this medicine if"];
  
    // Regular expression pattern to match sentences containing contraindication keywords
    const regexPattern = new RegExp(`[^.!?]*(?:${contraindicationKeywords.join('|')})[^.!?]*[.!?]?`, 'gi');
  
    // Find matches in the description
    const matches = desc.match(regexPattern);
  
    // Join the matched sentences into one string
    const contraindications = matches ? matches.join('') : 'Contraindications not available.';
  
    // Return the extracted contraindications
    return contraindications.trim();
 };
 
 // Function to extract dosage information
 const extractDosage = (desc) => {
    // Define keywords and phrases related to dosage
    const dosageKeywords = ["dose", "dosage", "take", "administer", "prescribed"];
    
    // Regular expression pattern to match sentences containing dosage keywords
    const regexPattern = new RegExp(`[^.!?]*(?:${dosageKeywords.join('|')})[^.!?]*[.!?]?`, 'gi');
    
    // Find matches in the description
    const matches = desc.match(regexPattern);
    
    // Join the matched sentences into one string
    const dosageInfo = matches ? matches.join('') : 'Dosage information not specified.';
    
    // Return the extracted dosage information
    return dosageInfo.trim();
  };

// Loop through each object in the data array and update attributes
data.forEach((item) => {
  item.usage = extractUsage(item.desc);
  item.administration = extractAdministration(item.desc);
  item.sideEffects = extractSideEffects(item.desc);
  item.precautions = extractPrecautions(item.desc);
  item.storage_ins = extractStorageInstructions(item.desc);
  item.monitor_req = extractMonitoringRequirements(item.desc);
  item.treat_duration = extractTreatmentDuration(item.desc);
  item.contraindications = extractContraindications(item.desc);
  item.dosage = extractDosage(item.desc);
});

// Function to chunk the data and stringify each chunk
const chunkAndStringifyData = (data, chunkSize) => {
   const chunks = [];
   for (let i = 0; i < data.length; i += chunkSize) {
     chunks.push(JSON.stringify(data.slice(i, i + chunkSize), null, 2));
   }
   return chunks;
 };
 
 // Chunk and stringify the data
 const chunkSize = 1000; // Adjust the chunk size as needed
 const stringifiedChunks = chunkAndStringifyData(data, chunkSize);
 
 // Write each chunk to the file
 stringifiedChunks.forEach((chunk, index) => {
   fs.writeFileSync(`medicine_data_chunk${index}.json`, chunk);
 });
 
 console.log("Data successfully written to medicine_data.json");