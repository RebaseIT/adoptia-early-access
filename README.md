# Adoptia - AI-Powered Pet Adoption Platform

A beautiful, bilingual landing page for Adoptia with Web3Forms integration for waitlist management.

## Features

- 🌍 Bilingual support (Spanish/English)
- 📧 Email waitlist with Web3Forms integration
- 🎨 Beautiful animations and responsive design
- 📨 Automatic email notifications

## Setup

### Web3Forms Configuration

1. Go to [Web3Forms](https://web3forms.com) and create a free account
2. Create a new form and get your access key
3. Create a `.env` file in the root directory
4. Add your access key: `VITE_WEB3FORMS_ACCESS_KEY=your_actual_access_key`

### Local Development

```bash
# Copy the example environment file
cp .env.example .env
# Edit .env and add your Web3Forms access key
npm install
npm run dev
```

## Features

- **Web3Forms Integration**: Reliable email collection with automatic notifications
- **Duplicate Prevention**: Web3Forms handles duplicate submissions
- **Language Tracking**: Tracks which language users prefer
- **Email Notifications**: Automatic email notifications for new signups

## Tech Stack

- React + TypeScript
- Tailwind CSS
- Web3Forms API
- Lucide React Icons

## Deployment

This is a static site that can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- Surge.sh

Make sure to update the Web3Forms access key before deployment.