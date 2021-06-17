const { GoogleSpreadsheet } = require('google-spreadsheet');

  const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
  const SHEET_ID = process.env.REACT_APP_SHEET_ID;
  const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
  const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;
    
    exports.handler = async (event, context, callback) => {
      try { 
        const doc = new GoogleSpreadsheet(SPREADSHEET_ID)
        await doc.useServiceAccountAuth({
              client_email: CLIENT_EMAIL,
              private_key: PRIVATE_KEY.replace(/\\n/g, '\n'),
            });
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[SHEET_ID];
        const data = JSON.parse(event.body);
        await sheet.addRow(data);

        callback(null, {
          // return null to show no errors
          statusCode: 200, // http status code
          body: JSON.stringify({
            message: `row added`,
          }),
        });
      } catch (e) {
        callback(null, {
          // return null to show no errors
          statusCode: 500, // http status code
          body: e.toString(),
        });
      }
    }