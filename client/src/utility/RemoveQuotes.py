import json

# Load the JSON data from the file
with open('./draft_medicine_data.json', 'r', encoding='utf-8') as file:
    data = file.readlines()

# Remove double quotes from the value of the "drug_interactions" attribute
corrected_data = []
for line in data:
    if '"drug_interactions"' in line:
        # Find the starting index of the object brackets
        startIndex = line.find('{')
        # Find the ending index of the object brackets
        endIndex = line.rfind('}') + 1
        # Extract the substring containing the object
        objectString = line[startIndex:endIndex]
        # Remove any extra double quotes before and after the object brackets
        cleanedString = line[:startIndex-1] + objectString + line[endIndex+1:]
        corrected_data.append(cleanedString)
    else:
        corrected_data.append(line)

# Save the corrected data back to the file
with open('./medicine_data.json', 'w', encoding='utf-8') as file:
    file.writelines(corrected_data)

print("Double quotes removed from the value of 'drug_interactions' attribute.")