const csv = require('fast-csv');
const fs = require('fs');

const readCsvFile = (data) => new Promise((resolve, reject) => {
  const csvData = [];
  csv
    .parseString(data, { headers: true })
    .on('data', (data) => {
      csvData.push(data);
    })
    .on('end', () => {
      resolve(csvData);
    });
});

const writeToCsvFile = (data) => new Promise((resolve) => {
  // Create a writable stream to the CSV file
  const writableStream = fs.createWriteStream('output.csv');

  // Create a CSV writer
  const csvWriter = csv.format({ headers: true });

  // Write data to the CSV file
  csvWriter.pipe(writableStream);
  data.forEach((row) => csvWriter.write(row));
  csvWriter.end();

  // Listen for the 'finish' event to know when the write operation is complete
  writableStream.on('finish', () => {
    resolve('Data written to file successfully.');
  });
});

const mergeCsvFileData = (csvFiles) => Promise.all(
  csvFiles.map((file) => new Promise((resolve) => {
    const dataArray = [];
    return csv
      .parseString(file.data, { headers: true })
      .on('data', (data) => {
        dataArray.push(data);
      })
      .on('end', () => {
        resolve(dataArray);
      });
  })),
);

module.exports = { readCsvFile, writeToCsvFile, mergeCsvFileData };
