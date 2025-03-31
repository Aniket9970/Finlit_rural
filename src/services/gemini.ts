import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_API_KEY } from '../config/constants';
import { SUPPORTED_LANGUAGES } from '../config/languages';

// Initialize Gemini with error handling
let genAI: GoogleGenerativeAI;
try {
  genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
} catch (error) {
  console.error('Failed to initialize Gemini AI:', error);
  throw new Error('AI service initialization failed');
}

// Error messages for each supported language
const ERROR_MESSAGES: Record<string, string> = {
  as: 'কারিকৰী সমস্যা। অনুগ্ৰহ কৰি কিছু সময়ৰ পিছত চেষ্টা কৰক।',
  bn: 'প্রযুক্তিগত সমস্যা। অনুগ্রহ করে কিছুক্ষণ পর আবার চেষ্টা করুন।',
  gu: 'ટેકનિકલ સમસ્યા. કૃપા કરી થોડી વાર પછી ફરી પ્રયાસ કરો.',
  hi: 'तकनीकी समस्या। कृपया कुछ देर बाद पुनः प्रयास करें।',
  kn: 'ತಾಂತ್ರಿಕ ತೊಂದರೆ. ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಸಮಯದ ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
  ml: 'സാങ്കേതിക പ്രശ്നം. ദയവായി കുറച്ച് സമയത്തിന് ശേഷം വീണ്ടും ശ്രമിക്കുക.',
  mr: 'तांत्रिक समस्या. कृपया काही वेळाने पुन्हा प्रयत्न करा.',
  ne: 'प्राविधिक समस्या। कृपया केही समयपछि पुन: प्रयास गर्नुहोस्।',
  or: 'ଟେକ୍ନିକାଲ୍ ସମସ୍ୟା। ଦୟାକରି କିଛି ସମୟ ପରେ ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ।',
  pa: 'ਤਕਨੀਕੀ ਸਮੱਸਿਆ। ਕਿਰਪਾ ਕਰਕੇ ਕੁਝ ਦੇਰ ਬਾਅਦ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।',
  ta: 'தொழில்நுட்ப சிக்கல். சிறிது நேரம் கழித்து மீண்டும் முயற்சிக்கவும்.',
  te: 'సాంకేతిక సమస్య. దయచేసి కొంత సమయం తర్వాత మళ్ళీ ప్రయత్నించండి.',
  ur: 'تکنیکی مسئلہ۔ براہ کرم کچھ دیر بعد دوبارہ کوشش کریں۔',
  en: 'Technical issue. Please try again in a moment.',
};

export async function getChatResponse(prompt: string, languageCode: string): Promise<string> {
  try {
    if (!prompt?.trim()) {
      throw new Error('Empty prompt');
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const language = SUPPORTED_LANGUAGES.find(lang => lang.code === languageCode)?.name || 'English';
    
    const systemPrompt = `
      You are a financial advisor specializing in rural financial literacy.
      Respond in ${language} language only.
      Keep responses clear and simple, using terms that rural users can understand.
      If using financial terms, explain them in simple language.
      also each time when you are telling the answer tell them related to credit score or the affects of credit score the consiquences of not having a good credit score.the future of the credit score and how it can affect the future of the person.
      
      User's question: ${prompt}
    `.trim();
    
    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    const text = response.text();
    
    if (!text?.trim()) {
      throw new Error('Empty text response');
    }
    
    return text;
  } catch (error) {
    console.error('Gemini API Error:', error);
    return ERROR_MESSAGES[languageCode] || ERROR_MESSAGES['en'];
  }
}