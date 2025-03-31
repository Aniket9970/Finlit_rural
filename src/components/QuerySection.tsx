import React from 'react';
import { ChatContainer } from './chat/ChatContainer';

export function QuerySection() {
  return (
    <section id="support" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Need Help?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Ask our AI assistant anything about loans, credit scores, or financial management
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <ChatContainer />
        </div>
      </div>
    </section>
  );
}