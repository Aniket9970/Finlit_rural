import React from 'react';
import { Volume2, Pause } from 'lucide-react';

interface AudioButtonProps {
  label: string;
  audioUrl?: string;
}

export function AudioButton({ label, audioUrl }: AudioButtonProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    // Audio playback logic here
  };

  return (
    <button
      onClick={toggleAudio}
      className="flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition-colors"
      aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
    >
      {isPlaying ? (
        <Pause className="h-5 w-5 mr-2" />
      ) : (
        <Volume2 className="h-5 w-5 mr-2" />
      )}
      {label}
    </button>
  );
}