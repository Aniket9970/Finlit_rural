import { useState, useCallback } from 'react';

export function useVoiceInput() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');

  const startRecording = useCallback(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'hi-IN'; // Default to Hindi, should be dynamic

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result) => result.transcript)
          .join('');
        setTranscript(transcript);
      };

      recognition.start();
      setIsRecording(true);
    }
  }, []);

  const stopRecording = useCallback(() => {
    setIsRecording(false);
    // Stop recognition logic
  }, []);

  return { isRecording, transcript, startRecording, stopRecording };
}