# Adoptia - AI-Powered Pet Adoption Platform

A beautiful, bilingual landing page for Adoptia with Google Sheets integration for waitlist management.

## Features

- 🌍 Bilingual support (Spanish/English)
- 📧 Email waitlist with Google Sheets integration
- 🎨 Beautiful animations and responsive design
- 📊 Admin panel for managing subscribers
- 🔄 Automatic fallback to local storage

## Google Sheets Setup

### 1. Create a Google Spreadsheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

### 2. Set up Google Service Account
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable the Google Sheets API
4. Go to "Credentials" → "Create Credentials" → "Service Account"
5. Create a service account and download the JSON key file
6. Share your Google Spreadsheet with the service account email (give Editor access)

### 3. Environment Variables
Create a `.env` file with:

```env
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_private_key_here\n-----END PRIVATE KEY-----"
```

### 4. Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add the environment variables in Vercel dashboard
4. Deploy!

## Local Development

```bash
npm install
npm run dev
```

## Admin Panel

Press `Ctrl+Shift+A` to access the admin panel and view local backup data.

## Tech Stack

- React + TypeScript
- Tailwind CSS
- Google Sheets API
- Vercel Functions
- Local Storage (fallback)