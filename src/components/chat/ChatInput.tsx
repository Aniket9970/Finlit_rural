import React, { useState } from 'react';
import { Send, Mic } from 'lucide-react';
import { useVoiceInput } from '../../hooks/useVoiceInput';

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

export function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const { isRecording, transcript, startRecording, stopRecording } = useVoiceInput();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSend(message);
      setMessage('');
    }
  };

  React.useEffect(() => {
    if (transcript) {
      setMessage(transcript);
    }
  }, [transcript]);

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <div className="relative flex-1">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          disabled={isLoading}
        />
        <button
          type="button"
          onClick={isRecording ? stopRecording : startRecording}
          className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full 
            ${isRecording ? 'bg-red-500' : 'bg-gray-100'}`}
        >
          <Mic className={`h-4 w-4 ${isRecording ? 'text-white' : 'text-gray-600'}`} />
        </button>
      </div>
      <button
        type="submit"
        disabled={!message.trim() || isLoading}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 
          disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="h-5 w-5" />
      </button>
    </form>
  );
}