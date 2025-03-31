import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { LanguageSelector } from './LanguageSelector';
import { getChatResponse } from '../../services/gemini';

interface Message {
  text: string;
  isUser: boolean;
  error?: boolean;
}

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState('en');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const sendWelcomeMessage = async () => {
      if (isLoading) return;
      
      try {
        setIsLoading(true);
        const welcomePrompt = "Please provide a warm welcome message and briefly explain how you can help with financial queries.";
        const response = await getChatResponse(welcomePrompt, language);
        setMessages([{ text: response, isUser: false }]);
      } catch (error) {
        console.error('Welcome message error:', error);
        const errorMessage = await getChatResponse("error", language);
        setMessages([{ text: errorMessage, isUser: false, error: true }]);
      } finally {
        setIsLoading(false);
      }
    };

    sendWelcomeMessage();
  }, [language]);

  const handleSend = async (message: string) => {
    if (!message.trim() || isLoading) return;

    try {
      setIsLoading(true);
      setMessages(prev => [...prev, { text: message, isUser: true }]);

      const response = await getChatResponse(message, language);
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = await getChatResponse("error", language);
      setMessages(prev => [...prev, { text: errorMessage, isUser: false, error: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-gray-800">Financial Assistant</h2>
        <LanguageSelector
          selectedLanguage={language}
          onLanguageChange={setLanguage}
        />
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isUser={message.isUser}
            error={message.error}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t">
        <ChatInput onSend={handleSend} isLoading={isLoading} />
      </div>
    </div>
  );
}