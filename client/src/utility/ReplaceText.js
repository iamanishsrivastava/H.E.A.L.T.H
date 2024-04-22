import fs from "fs";

// Read the JSON data from the file
fs.readFile("./combined_medicine_data.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Remove '\' from the drug_interactions in each object
    jsonData.forEach((obj) => {
      if (obj.drug_interactions && obj.drug_interactions.includes("\\")) {
        obj.drug_interactions = obj.drug_interactions.replace(/\\/g, "");
      }
    });

    // Write the modified JSON data to the new file
    fs.writeFile(
      "medicine_data.json",
      JSON.stringify(jsonData, null, 2),
      (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return;
        }
        console.log(
          "Backslashes removed from drug_interactions attribute in medicine_data.json"
        );
      }
    );
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
});
