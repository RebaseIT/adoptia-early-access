export interface WaitlistEntry {
  id: string;
  email: string;
  language: string;
  createdAt: string;
}

// Use different endpoints for development vs production
const API_ENDPOINT = import.meta.env.DEV 
  ? '/api/submit-email' 
  : '/api/submit-email';

export const saveEmail = async (email: string, language: string): Promise<{ success: boolean; totalCount?: number; duplicate?: boolean }> => {
  try {
    // In development, simulate the API call
    if (import.meta.env.DEV) {
      console.log('Development mode: Simulating email submission', { email, language });
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Simulate successful response
      return {
        success: true,
        totalCount: Math.floor(Math.random() * 100) + 1,
        duplicate: false
      };
    }

    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, language }),
    });

    const data = await response.json();
    
    if (response.ok) {
      return {
        success: true,
        totalCount: data.totalCount,
        duplicate: data.duplicate
      };
    } else {
      console.error('API Error:', data);
      return { success: false };
    }
  } catch (error) {
    console.error('Network Error:', error);
    return { success: false };
  }
};

// These functions are kept for the admin panel but will show empty data
// since we're not storing anything locally anymore
export const getEmails = (): WaitlistEntry[] => {
  return [];
};

export const getEmailCount = (): number => {
  return 0;
};

export const clearEmails = (): void => {
  // No-op since we're not using localStorage
};