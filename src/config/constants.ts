// API Keys and Configuration
export const GEMINI_API_KEY = 'Put your key here';

// Safety check for API key
if (!GEMINI_API_KEY) {
  console.error('Missing Gemini API key!');
}
