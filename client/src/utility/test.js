const jsonString = `
{
  "desc": "Ezetimide 10mg Tablet is a medicine used to treat high cholesterol. This medicine helps by lowering "bad" cholesterol (LDL) levels in blood. Cholesterol is a fatty substance that builds up in your blood vessels and causes narrowing, which may lead to a heart attack or stroke.Ezetimide 10mg Tablet should be taken in the dose and duration as advised by the doctor. You can take it at any time of day but try to take it at the same time each day. Most people with high cholesterol do not feel ill, but if you stop taking this medicine, your condition could get worse. This may lead to your cholesterol levels rising up again and increase your risk of heart disease and stroke.It is important to have your cholesterol levels checked regularly. This medicine is only one part of a treatment program which should also include a healthy diet, regular exercise, smoking cessation, moderation of alcohol intake and weight reduction. You can eat normally while taking this medicine, but try to avoid foods that are high in fat.Common side effects of this medicine include joint pain and diarrhea. Before taking this medicine its better to let your doctor know about all the other medicines that are prescribed to you. This medicine should be taken with caution if you are suffering from any kidney or liver disease. Also, pregnant women and breastfeeding mothers should not take this medicine without consulting the doctor."
}
`;

const cleanedJsonString = jsonString.replace(/"bad"/g, "'bad'");
console.log(cleanedJsonString);
