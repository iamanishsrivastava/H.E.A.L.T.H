import re

# Sample JSON data with incorrect formatting
data = [
    {
        "sub_category": "Human Insulin Basal",
        "name": "Insulatard NOVOLET 100IU Suspension for Injection",
        "salt_composition": "Insulin Isophane (100IU)",
        "price": "",
        "product_manufactured": "Novo Nordisk India Pvt Ltd",
        "drug_interactions": "{"drug": ["Benazepril", "Captopril", "Enalapril", "Fosinopril"], "brand": [" Apriace", " Capotril, Aceten, Angiopril", " Enatol, AB-Pril, Inopril", " Fovas"], "effect": ["MODERATE", "MODERATE", "MODERATE", "MODERATE"]}",
        "usage": "Insulatard NOVOLET 100IU Suspension for Injection is used to improve blood sugar control in adults and children with type 1 and type 2 diabetes mellitus.",
        "administration": {
            "route": "unknown",
            "timing": "Should be used as advised by your doctor.",
            "frequency": "Regular intervals throughout the day",
            "duration": "Not available.",
            "important": "Do not use this medicine when you have low blood glucose levels (hypoglycemia). This is very important to work out the correct dose of the medicine for you.  To prevent this, it's important to always inject the correct dose of medicine only, have regular meals, and monitor your blood sugar levels regularly."
        },
        "sideEffects": "Other side effects include reactions at the injection site like redness or swelling.",
        "precautions": "Pregnant or breastfeeding women should also consult their doctor as the dose may need to be changed.",
        "storage_ins": "Storage instructions not available.",
        "monitor_req": "Check your blood sugar levels regularly, keep track of your results and share them with your doctor. To prevent this, it's important to always inject the correct dose of medicine only, have regular meals, and monitor your blood sugar levels regularly.",
        "treat_duration": "Treatment duration not available.",
        "contraindications": "Contraindications not available.",
        "dosage": "Insulatard NOVOLET 100IU Suspension for Injection is often prescribed along with short-acting insulin or other oral diabetes medicines. This is very important to work out the correct dose of the medicine for you. To prevent this, it's important to always inject the correct dose of medicine only, have regular meals, and monitor your blood sugar levels regularly. Pregnant or breastfeeding women should also consult their doctor as the dose may need to be changed."
    }
]

# Function to remove unnecessary double quotes from the "drug_interactions" attribute
def remove_quotes(json_data):
    for item in json_data:
        if "drug_interactions" in item:
            item["drug_interactions"] = re.sub(r'\"(drug|brand|effect)\":', r'\1:', item["drug_interactions"])
    return json_data

# Remove unnecessary double quotes from the "drug_interactions" attribute
corrected_data = remove_quotes(data)

# Print the corrected JSON data
print(corrected_data)