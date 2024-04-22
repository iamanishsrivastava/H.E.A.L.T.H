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

// Example usage:
const jsonString = `"drug_interactions": "{"drug": ["Benazepril", "Captopril", "Enalapril", "Fosinopril"], "brand": [" Apriace", " Capotril, Aceten, Angiopril", " Enatol, AB-Pril, Inopril", " Fovas"], "effect": ["MODERATE", "MODERATE", "MODERATE", "MODERATE"]}",`;
const cleanedJsonString = removeExtraQuotes(jsonString);
console.log(cleanedJsonString);