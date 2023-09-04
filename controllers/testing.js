const {
    readCsvFile,
    writeToCsvFile,
    mergeCsvFileData
} = require('../helpers/csvHandler');
const { utfDecoder } = require('../helpers/textEncoder');

const csvController = async (req, res) => {
    try {
    // read data from csv
        const csvData = await readCsvFile(req.files.file.data);

        const modifiedAddr = csvData.map((data) => {
            const str = data.Registered_Office_Address;
            const str2 = str.replaceAll(/\\/g, '\\');

            data.Registered_Office_Address = utfDecoder(str2);

            return data;
        });

        // write to csv file
        await writeToCsvFile(modifiedAddr);

        res
            .status(201)
            .json({ msg: 'Data successfully append to excel file', data: csvData });
    } catch (e) {
        console.log(e);
    }
};

const mergeCsvFile = async (req, res) => {
    try {
        const files = req.files.file;

        const mergedData = await mergeCsvFileData(files);

        res.status(201).json({
            msg: 'csv file merged successfully',
            mergedData
        });
    } catch (e) {
        console.log(e);
    }
};

const checkUp = (req, res) => {
    try {
        res.status(201).json('api working');
    } catch (e) {
        console.log(e);
    }
};

module.exports = { csvController, checkUp, mergeCsvFile };
