import React from 'react';
import { MessageSquare, User, AlertTriangle } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  error?: boolean;
}

export function ChatMessage({ message, isUser, error }: ChatMessageProps) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex items-start max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex-shrink-0 ${isUser ? 'ml-2' : 'mr-2'}`}>
          {isUser ? (
            <User className="h-8 w-8 text-indigo-600" />
          ) : error ? (
            <AlertTriangle className="h-8 w-8 text-red-600" />
          ) : (
            <MessageSquare className="h-8 w-8 text-green-600" />
          )}
        </div>
        <div className={`rounded-lg px-4 py-2 ${
          isUser ? 'bg-indigo-100 text-indigo-900' : 
          error ? 'bg-red-100 text-red-900' :
          'bg-green-100 text-green-900'
        }`}>
          <p className="text-sm whitespace-pre-wrap">{message}</p>
        </div>
      </div>
    </div>
  );
}