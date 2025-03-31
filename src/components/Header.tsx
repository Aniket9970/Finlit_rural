import React from 'react';
import { BookOpen, CreditCard, HelpCircle, PhoneCall } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">FinLit Rural</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <LanguageSelector />
            
            <a href="#credit-score" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
              <CreditCard className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Credit Score</span>
            </a>
            
            <a href="#support" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
              <HelpCircle className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Support</span>
            </a>
            
            <a href="tel:18001234567" className="flex items-center px-3 py-2 rounded-md text-sm font-medium bg-green-500 hover:bg-green-600">
              <PhoneCall className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Helpline</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}