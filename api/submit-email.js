const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

module.exports = async (req, res) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).json({});
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, language } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Initialize Google Sheets
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_SPREADSHEET_ID, serviceAccountAuth);
    await doc.loadInfo();

    // Get or create the waitlist sheet
    let sheet = doc.sheetsByTitle['Waitlist'];
    if (!sheet) {
      sheet = await doc.addSheet({ 
        title: 'Waitlist',
        headerValues: ['Email', 'Language', 'Date', 'Timestamp']
      });
    }

    // Load existing rows to check for duplicates
    const rows = await sheet.getRows();
    const existingEmails = rows.map(row => row.get('Email'));

    if (existingEmails.includes(email)) {
      return res.status(200).json({ 
        success: true, 
        message: 'Email already registered',
        duplicate: true 
      });
    }

    // Add new row
    const now = new Date();
    await sheet.addRow({
      Email: email,
      Language: language || 'es',
      Date: now.toLocaleDateString(),
      Timestamp: now.toISOString()
    });

    // Get total count
    const updatedRows = await sheet.getRows();
    const totalCount = updatedRows.length;

    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json({ 
      success: true, 
      message: 'Email registered successfully',
      totalCount 
    });

  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(500).json({ 
      error: 'Failed to save email',
      details: error.message 
    });
  }
};