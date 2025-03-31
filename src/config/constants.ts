// API Keys and Configuration
export const GEMINI_API_KEY = 'AIzaSyAxrOXnVOZpJr5MbB9zBznSxIFB1qOWfD8';

// Safety check for API key
if (!GEMINI_API_KEY) {
  console.error('Missing Gemini API key!');
}