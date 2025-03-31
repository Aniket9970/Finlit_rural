import React from 'react';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'hi', name: 'हिंदी' },
  { code: 'mr', name: 'मराठी' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'en', name: 'English' }
];

export function LanguageSelector() {
  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center space-x-2">
        <Globe className="h-5 w-5 text-gray-100" />
        <select 
          className="bg-transparent text-white border-none focus:ring-0 cursor-pointer text-sm"
          defaultValue="hi"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code} className="text-gray-900">
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}