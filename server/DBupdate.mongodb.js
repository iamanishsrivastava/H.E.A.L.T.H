/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("HEALTH");

// Insert the JSON data into the collection
db.getCollection("medicine-info").insertMany(
   [
      {
        "sub_category": "Human Insulin Basal",
        "name": "Human Insulatard 40IU/ml Suspension for Injection",
        "salt_composition": "Insulin Isophane (40IU)",
        "price": "133.93",
        "product_manufactured": "Novo Nordisk India Pvt Ltd",
        "desc": "",
        "side_effects": "Hypoglycemia (low blood glucose level),Injection site allergic reaction,Lipodystrophy (skin thickening or pits at the injection site),Weight gain,Edema (swelling)",
        "drug_interactions": {"drug": ["Benazepril", "Captopril", "Enalapril", "Fosinopril"], "brand": [" Apriace", " Capotril, Aceten, Angiopril", " Enatol, AB-Pril, Inopril", " Fovas"], "effect": ["MODERATE", "MODERATE", "MODERATE", "MODERATE"]},
        "usage": "Usage information not available.",
        "administration": {
          "route": "unknown",
          "timing": "Should be used as advised by your doctor.",
          "frequency": "",
          "duration": "Not available.",
          "important": ""
        },
        "sideEffects": "",
        "precautions": "",
        "storage_ins": "Storage instructions not available.",
        "monitor_req": "Monitoring requirements not specified.",
        "treat_duration": "Treatment duration not available.",
        "contraindications": "Contraindications not available.",
        "dosage": "Dosage information not specified."
      },
      {
        "sub_category": "Human Insulin Basal",
        "name": "Insulin 40IU/ml Injection",
        "salt_composition": "Insulin Isophane (40IU)",
        "price": "121.91",
        "product_manufactured": "Sun Pharmaceutical Industries Ltd",
        "desc": "Insulin 40IU/ml Injection is used to improve blood sugar control in adults and children with type 1 and type 2 diabetes mellitus. It is an intermediate-acting type of insulin that helps to lower blood sugar levels and reduce the chances of developing serious complications of diabetes.Insulin 40IU/ml Injection is often prescribed along with short-acting insulin or other oral diabetes medicines. Your doctor or nurse will teach you the correct way of injecting it under the skin. Don’t stop taking it unless your doctor tells you to. It is only part of a treatment program that should also include a healthy diet, regular exercise, and weight reduction as advised by your doctor.Check your blood sugar levels regularly, keep track of your results and share them with your doctor. This is very important to work out the correct dose of the medicine for you.The most common side effect of this medicine is low blood sugar levels (hypoglycemia). To prevent this, it's important to always inject the correct dose of medicine only, have regular meals, and monitor your blood sugar levels regularly. Drinking excessive alcohol can also lead to a fall in your blood sugar levels. Other side effects include reactions at the injection site like redness or swelling. Repeated puncturing of the same site of the skin may lead to lipodystrophy (skin thickening or pits at the injection site). Some people may gain weight or develop edema (swelling over the whole body due to fluid retention) while taking insulin.Do not use this medicine when you have low blood glucose levels (hypoglycemia). Tell your doctor if you have ever had kidney, liver or heart problems before starting treatment. Pregnant or breastfeeding women should also consult their doctor as the dose may need to be changed.",
        "side_effects": "Hypoglycemia (low blood glucose level),Injection site allergic reaction,Lipodystrophy (skin thickening or pits at the injection site),Weight gain,Edema (swelling)",
        "drug_interactions": {"drug": ["Benazepril", "Captopril", "Enalapril", "Fosinopril"], "brand": [" Apriace", " Capotril, Aceten, Angiopril", " Enatol, AB-Pril, Inopril", " Fovas"], "effect": ["MODERATE", "MODERATE", "MODERATE", "MODERATE"]},
        "usage": "Insulin 40IU/ml Injection is used to improve blood sugar control in adults and children with type 1 and type 2 diabetes mellitus.",
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
        "dosage": "Insulin 40IU/ml Injection is often prescribed along with short-acting insulin or other oral diabetes medicines. This is very important to work out the correct dose of the medicine for you. To prevent this, it's important to always inject the correct dose of medicine only, have regular meals, and monitor your blood sugar levels regularly. Pregnant or breastfeeding women should also consult their doctor as the dose may need to be changed."
      },
      {
        "sub_category": "Human Insulin Basal",
        "name": "Huminsulin N 40IU/ml Injection",
        "salt_composition": "Insulin Isophane (40IU)",
        "price": "133.45",
        "product_manufactured": "Eli Lilly and Company India Pvt Ltd",
        "desc": "Huminsulin N 40IU/ml Injection is used to improve blood sugar control in adults and children with type 1 and type 2 diabetes mellitus. It is an intermediate-acting type of insulin that helps to lower blood sugar levels and reduce the chances of developing serious complications of diabetes.Huminsulin N 40IU/ml Injection is often prescribed along with short-acting insulin or other oral diabetes medicines. Your doctor or nurse will teach you the correct way of injecting it under the skin. Don't stop taking it unless your doctor tells you to. It is only part of a treatment program that should also include a healthy diet, regular exercise, and weight reduction as advised by your doctor.Check your blood sugar levels regularly, keep track of your results and share them with your doctor. This is very important to work out the correct dose of the medicine for you.The most common side effect of this medicine is low blood sugar levels (hypoglycemia). To prevent this, it's important to always inject the correct dose of medicine only, have regular meals, and monitor your blood sugar levels regularly. Drinking excessive alcohol can also lead to a fall in your blood sugar levels. Other side effects include reactions at the injection site like redness or swelling. Repeated puncturing of the same site of the skin may lead to lipodystrophy (skin thickening or pits at the injection site). Some people may gain weight or develop edema (swelling over the whole body due to fluid retention) while taking insulin.Do not use this medicine when you have low blood glucose levels (hypoglycemia). Tell your doctor if you have ever had kidney, liver or heart problems before starting treatment. Pregnant or breastfeeding women should also consult their doctor as the dose may need to be changed.",
        "side_effects": "Hypoglycemia (low blood glucose level),Injection site allergic reaction,Lipodystrophy (skin thickening or pits at the injection site),Weight gain,Edema (swelling)",
        "drug_interactions": {"drug": ["Benazepril", "Captopril", "Enalapril", "Fosinopril"], "brand": [" Apriace", " Capotril, Aceten, Angiopril", " Enatol, AB-Pril, Inopril", " Fovas"], "effect": ["MODERATE", "MODERATE", "MODERATE", "MODERATE"]},
        "usage": "Huminsulin N 40IU/ml Injection is used to improve blood sugar control in adults and children with type 1 and type 2 diabetes mellitus.",
        "administration": {
          "route": "unknown",
          "timing": "Should be used as advised by your doctor.",
          "frequency": "Regular intervals throughout the day",
          "duration": "Not available.",
          "important": "Do not use this medicine when you have low blood glucose levels (hypoglycemia). This is very important to work out the correct dose of the medicine for you. To prevent this, it's important to always inject the correct dose of medicine only, have regular meals, and monitor your blood sugar levels regularly."
        },
        "sideEffects": "Other side effects include reactions at the injection site like redness or swelling.",
        "precautions": "Pregnant or breastfeeding women should also consult their doctor as the dose may need to be changed.",
        "storage_ins": "Storage instructions not available.",
        "monitor_req": "Check your blood sugar levels regularly, keep track of your results and share them with your doctor. To prevent this, it's important to always inject the correct dose of medicine only, have regular meals, and monitor your blood sugar levels regularly.",
        "treat_duration": "Treatment duration not available.",
        "contraindications": "Contraindications not available.",
        "dosage": "Huminsulin N 40IU/ml Injection is often prescribed along with short-acting insulin or other oral diabetes medicines. This is very important to work out the correct dose of the medicine for you. To prevent this, it's important to always inject the correct dose of medicine only, have regular meals, and monitor your blood sugar levels regularly. Pregnant or breastfeeding women should also consult their doctor as the dose may need to be changed."
      },
      {
        "sub_category": "Human Insulin Basal",
        "name": "Insugen-N 40IU/ml Injection",
        "salt_composition": "Insulin Isophane (40IU)",
        "price": "133.36",
        "product_manufactured": "Biocon",
        "desc": "Insugen-N 40IU/ml Injection is used to improve blood sugar control in adults and children with type 1 and type 2 diabetes mellitus. It is an intermediate-acting type of insulin that helps to lower blood sugar levels and reduce the chances of developing serious complications of diabetes.Insugen-N 40IU/ml Injection is often prescribed along with short-acting insulin or other oral diabetes medicines. Your doctor or nurse will teach you the correct way of injecting it under the skin. Don’t stop taking it unless your doctor tells you to. It is only part of a treatment program that should also include a healthy diet, regular exercise, and weight reduction as advised by your doctor.Check your blood sugar levels regularly, keep track of your results and share them with your doctor. This is very important to work out the correct dose of the medicine for you.The most common side effect of this medicine is low blood sugar levels (hypoglycemia). To prevent this, it's important to always inject the correct dose of medicine only, have regular meals, and monitor your blood sugar levels regularly. Drinking excessive alcohol can also lead to a fall in your blood sugar levels. Other side effects include reactions at the injection site like redness or swelling. Repeated puncturing of the same site of the skin may lead to lipodystrophy (skin thickening or pits at the injection site). Some people may gain weight or develop edema (swelling over the whole body due to fluid retention) while taking insulin.Do not use this medicine when you have low blood glucose levels (hypoglycemia). Tell your doctor if you have ever had kidney, liver or heart problems before starting treatment. Pregnant or breastfeeding women should also consult their doctor as the dose may need to be changed.",
        "side_effects": "Hypoglycemia (low blood glucose level),Injection site allergic reaction,Lipodystrophy (skin thickening or pits at the injection site),Weight gain,Edema (swelling)",
        "drug_interactions":{"drug": ["Benazepril", "Captopril", "Enalapril", "Fosinopril"], "brand": [" Apriace", " Capotril, Aceten, Angiopril", " Enatol, AB-Pril, Inopril", " Fovas"], "effect": ["MODERATE", "MODERATE", "MODERATE", "MODERATE"]},
        "usage": "Insugen-N 40IU/ml Injection is used to improve blood sugar control in adults and children with type 1 and type 2 diabetes mellitus.",
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
        "dosage": "Insugen-N 40IU/ml Injection is often prescribed along with short-acting insulin or other oral diabetes medicines. This is very important to work out the correct dose of the medicine for you. To prevent this, it's important to always inject the correct dose of medicine only, have regular meals, and monitor your blood sugar levels regularly. Pregnant or breastfeeding women should also consult their doctor as the dose may need to be changed."  
      },
      {
        "sub_category": "Human Insulin Basal",
        "name": "Insulatard 100IU/ml Flexpen",
        "salt_composition": "Insulin Isophane (100IU/ml)",
        "price": "401.03",
        "product_manufactured": "Novo Nordisk India Pvt Ltd",
        "desc": "Insulatard 100IU/ml Flexpen is used to improve blood sugar control in adults and children with type 1 and type 2 diabetes mellitus. It is an intermediate-acting type of insulin that helps to lower blood sugar levels and reduce the chances of developing serious complications of diabetes.Insulatard 100IU/ml Flexpen is often prescribed along with short-acting insulin or other oral diabetes medicines. Your doctor or nurse will teach you the correct way of injecting it under the skin. Don’t stop taking it unless your doctor tells you to. It is only part of a treatment program that should also include a healthy diet, regular exercise, and weight reduction as advised by your doctor.Check your blood sugar levels regularly, keep track of your results and share them with your doctor. This is very important to work out the correct dose of the medicine for you.The most common side effect of this medicine is low blood sugar levels (hypoglycemia). To prevent this, it's important to always inject the correct dose of medicine only, have regular meals, and monitor your blood sugar levels regularly. Drinking excessive alcohol can also lead to a fall in your blood sugar levels. Other side effects include reactions at the injection site like redness or swelling. Repeated puncturing of the same site of the skin may lead to lipodystrophy (skin thickening or pits at the injection site). Some people may gain weight or develop edema (swelling over the whole body due to fluid retention) while taking insulin.Do not use this medicine when you have low blood glucose levels (hypoglycemia). Tell your doctor if you have ever had kidney, liver or heart problems before starting treatment. Pregnant or breastfeeding women should also consult their doctor as the dose may need to be changed.",
        "side_effects": "Hypoglycemia (low blood glucose level),Injection site allergic reaction,Lipodystrophy (skin thickening or pits at the injection site),Weight gain,Edema (swelling)",
        "drug_interactions": {
          "drug": ["Benazepril", "Captopril", "Enalapril", "Fosinopril"], 
          "brand": [" Apriace", " Capotril, Aceten, Angiopril", " Enatol, AB-Pril, Inopril", " Fovas"], 
          "effect": ["MODERATE", "MODERATE", "MODERATE", "MODERATE"]
        },
        "usage": "Insulatard 100IU/ml Flexpen is used to improve blood sugar control in adults and children with type 1 and type 2 diabetes mellitus.",
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
        "dosage": "Insulatard 100IU/ml Flexpen is often prescribed along with short-acting insulin or other oral diabetes medicines. This is very important to work out the correct dose of the medicine for you. To prevent this, it's important to always inject the correct dose of medicine only, have regular meals, and monitor your blood sugar levels regularly. Pregnant or breastfeeding women should also consult their doctor as the dose may need to be changed."
      },
      {
        "sub_category": "Human Insulin Basal",
        "name": "Huminsulin N 100IU/ml Cartridge",
        "salt_composition": "Insulin Isophane (100IU/ml)",
        "price": "300.90",
        "product_manufactured": "Eli Lilly and Company India Pvt Ltd",
        "desc": "Huminsulin N 100IU/ml Cartridge is used to improve blood sugar control in adults and children with type 1 and type 2 diabetes mellitus. It is an intermediate-acting type of insulin that helps to lower blood sugar levels and reduce the chances of developing serious complications of diabetes. Huminsulin N 100IU/ml Cartridge is often prescribed along with short-acting insulin or other oral diabetes medicines. Your doctor or nurse will teach you the correct way of injecting it under the skin. Don't stop taking it unless your doctor tells you to. It is only part of a treatment program that should also include a healthy diet, regular exercise, and weight reduction as advised by your doctor.Check your blood sugar levels regularly, keep track of your results and share them with your doctor. This is very important to work out the correct dose of the medicine for you.The most common side effect of this medicine is low blood sugar levels (hypoglycemia). To prevent this, it's important to always inject the correct dose of medicine only, have regular meals, and monitor your blood sugar levels regularly. Drinking excessive alcohol can also lead to a fall in your blood sugar levels. Other side effects include reactions at the injection site like redness or swelling. Repeated puncturing of the same site of the skin may lead to lipodystrophy (skin thickening or pits at the injection site). Some people may gain weight or develop edema (swelling over the whole body due to fluid retention) while taking insulin.Do not use this medicine when you have low blood glucose levels (hypoglycemia). Tell your doctor if you have ever had kidney, liver or heart problems before starting treatment. Pregnant or breastfeeding women should also consult their doctor as the dose may need to be changed.",
        "side_effects": "Hypoglycemia (low blood glucose level),Injection site allergic reaction,Lipodystrophy (skin thickening or pits at the injection site),Weight gain,Edema (swelling)",
        "drug_interactions": {"drug": ["Benazepril", "Captopril", "Enalapril", "Fosinopril"], "brand": [" Apriace", " Capotril, Aceten, Angiopril", " Enatol, AB-Pril, Inopril", " Fovas"], "effect": ["MODERATE", "MODERATE", "MODERATE", "MODERATE"]},
        "usage": "Huminsulin N 100IU/ml Cartridge is used to improve blood sugar control in adults and children with type 1 and type 2 diabetes mellitus.",
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
        "dosage": "Huminsulin N 100IU/ml Cartridge is often prescribed along with short-acting insulin or other oral diabetes medicines. This is very important to work out the correct dose of the medicine for you. To prevent this, it's important to always inject the correct dose of medicine only, have regular meals, and monitor your blood sugar levels regularly. Pregnant or breastfeeding women should also consult their doctor as the dose may need to be changed."
      },
      {
        "sub_category": "Human Insulin Basal",
        "name": "Huminsulin N 100IU/ml Injection",
        "salt_composition": "Insulin Isophane (100IU)",
        "price": "416.50",
        "product_manufactured": "Eli Lilly and Company India Pvt Ltd",
        "desc": "Huminsulin N 100IU/ml Injection is used to improve blood sugar control in adults and children with type 1 and type 2 diabetes mellitus. It is an intermediate-acting type of insulin that helps to lower blood sugar levels and reduce the chances of developing serious complications of diabetes.Huminsulin N 100IU/ml Injection is often prescribed along with short-acting insulin or other oral diabetes medicines. Your doctor or nurse will teach you the correct way of injecting it under the skin. Don't stop taking it unless your doctor tells you to. It is only part of a treatment program that should also include a healthy diet, regular exercise, and weight reduction as advised by your doctor.Check your blood sugar levels regularly, keep track of your results and share them with your doctor. This is very important to work out the correct dose of the medicine for you.The most common side effect of this medicine is low blood sugar levels (hypoglycemia). To prevent this, it's important to always inject the correct dose of medicine only, have regular meals, and monitor your blood sugar levels regularly. Drinking excessive alcohol can also lead to a fall in your blood sugar levels. Other side effects include reactions at the injection site like redness or swelling. Repeated puncturing of the same site of the skin may lead to lipodystrophy (skin thickening or pits at the injection site). Some people may gain weight or develop edema (swelling over the whole body due to fluid retention) while taking insulin.Do not use this medicine when you have low blood glucose levels (hypoglycemia). Tell your doctor if you have ever had kidney, liver or heart problems before starting treatment. Pregnant or breastfeeding women should also consult their doctor as the dose may need to be changed.",
        "side_effects": "Hypoglycemia (low blood glucose level),Injection site allergic reaction,Lipodystrophy (skin thickening or pits at the injection site),Weight gain,Edema (swelling)",
        "drug_interactions": {"drug": ["Benazepril", "Captopril", "Enalapril", "Fosinopril"], "brand": [" Apriace", " Capotril, Aceten, Angiopril", " Enatol, AB-Pril, Inopril", " Fovas"], "effect": ["MODERATE", "MODERATE", "MODERATE", "MODERATE"]},
        "usage": "Huminsulin N 100IU/ml Injection is used to improve blood sugar control in adults and children with type 1 and type 2 diabetes mellitus.",
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
        "dosage": "Huminsulin N 100IU/ml Injection is often prescribed along with short-acting insulin or other oral diabetes medicines. This is very important to work out the correct dose of the medicine for you. To prevent this, it's important to always inject the correct dose of medicine only, have regular meals, and monitor your blood sugar levels regularly. Pregnant or breastfeeding women should also consult their doctor as the dose may need to be changed."
      }
   ]
);

// Query the collection to verify insertion
db.getCollection("medicine-info").find();