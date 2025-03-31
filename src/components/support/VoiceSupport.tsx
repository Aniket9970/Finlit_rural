import React, { useState } from 'react';
import { Mic, Phone, MessageSquare } from 'lucide-react';

export function VoiceSupport() {
  const [isRecording, setIsRecording] = useState(false);
  const [showCallOptions, setShowCallOptions] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-2">
      {showCallOptions && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-2 animate-fade-in">
          <div className="space-y-2">
            <a
              href="tel:18001234567"
              className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Helpline
            </a>
            <button className="flex items-center px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 w-full">
              <MessageSquare className="h-4 w-4 mr-2" />
              Chat with Expert
            </button>
          </div>
        </div>
      )}
      
      <div className="flex space-x-2">
        <button
          onClick={() => setShowCallOptions(!showCallOptions)}
          className="p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700"
        >
          <Phone className="h-6 w-6" />
        </button>
        
        <button
          onClick={() => setIsRecording(!isRecording)}
          className={`p-4 ${
            isRecording ? 'bg-red-500' : 'bg-green-500'
          } text-white rounded-full shadow-lg hover:${
            isRecording ? 'bg-red-600' : 'bg-green-600'
          }`}
        >
          <Mic className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}