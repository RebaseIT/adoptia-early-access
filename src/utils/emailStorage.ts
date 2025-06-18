export interface WaitlistEntry {
  id: string;
  email: string;
  language: string;
  createdAt: string;
}

// Web3Forms access key from environment variables
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export const saveEmail = async (email: string, language: string): Promise<{ success: boolean; totalCount?: number; duplicate?: boolean }> => {
  // Check if access key is configured
  if (!WEB3FORMS_ACCESS_KEY) {
    console.error('Web3Forms access key not configured. Please set VITE_WEB3FORMS_ACCESS_KEY in your .env file.');
    return { success: false };
  }

  try {
    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('email', email);
    formData.append('language', language);
    formData.append('subject', 'New Adoptia Waitlist Signup');
    formData.append('from_name', 'Adoptia Waitlist');
    formData.append('message', `New waitlist signup:\n\nEmail: ${email}\nLanguage: ${language}\nDate: ${new Date().toLocaleString()}`);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        totalCount: 1 // Web3Forms doesn't provide count, so we return 1
      };
    } else {
      console.error('Web3Forms error:', result);
      return { success: false };
    }
  } catch (error) {
    console.error('Error submitting to Web3Forms:', error);
    return { success: false };
  }
};

// These functions are kept for compatibility but return empty data
// since we're not storing anything locally anymore
export const getEmails = (): WaitlistEntry[] => {
  return [];
};

export const getEmailCount = (): number => {
  return 0;
};