import fs from 'fs';
import csv from 'csv-parser';

const results = [];

fs.createReadStream('../../res/db/medicine_data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    fs.writeFileSync('data.json', JSON.stringify(results, null, 2));
    console.log('CSV file successfully converted to JSON.');
  });