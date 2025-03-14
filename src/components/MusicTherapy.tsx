import React, { useState, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import Sidebar from './Sidebar';



export default function MusicTherapy() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const tracks = [
    {
      title: 'Calming Nature Sounds',
      artist: 'Nature Therapy',
      duration: '5:30',
      url: 'https://example.com/nature-sounds.mp3',
    },
    {
      title: 'Peaceful Piano',
      artist: 'Music Therapy',
      duration: '4:45',
      url: 'https://example.com/peaceful-piano.mp3',
    },
    {
      title: 'Ocean Waves',
      artist: 'Relaxation Sounds',
      duration: '6:15',
      url: 'https://example.com/ocean-waves.mp3',
    },
  ];

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playNext = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  const playPrevious = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  return (
    <>
    <Sidebar/>
    <div className={` '} rounded-xl shadow-lg p-6 mL-60`}>
      <h2 className={`text-xl font-semibold mb-6  'text-gray-900'`}>
        Music Therapy
      </h2>

      <div className={`p-6 rounded-lg  'bg-gray-50' mb-6`}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className={`font-semibold  'text-gray-900'`}>
              {tracks[currentTrack].title}
            </h3>
            <p className={`text-sm  'text-gray-600'`}>
              {tracks[currentTrack].artist}
            </p>
          </div>
            <span className={`text-sm  'text-gray-600'`}>
              {tracks[currentTrack].duration}
          </span>
        </div>

        <div className="flex items-center justify-center space-x-6">
          <button
            onClick={playPrevious}
            className={`p-2 rounded-full  'hover:bg-gray-200'`}
          >
            <SkipBack className={` 'text-gray-600'`} />
          </button>
          <button
            onClick={togglePlay}
            className="p-4 bg-purple-600 rounded-full hover:bg-purple-700"
          >
            {isPlaying ? (
              <Pause className="text-white" />
            ) : (
              <Play className="text-white" />
            )}
          </button>
          <button
            onClick={playNext}
            className={`p-2 rounded-full  'hover:bg-gray-200'`}
          >
            <SkipForward className={` 'text-gray-600'`} />
          </button>
        </div>

        <div className="mt-6 flex items-center space-x-2">
          <Volume2 className={`h-5 w-5  'text-gray-600'`} />
          <input
            type="range"
            min="0"
            max="100"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <div className="space-y-2">
        {tracks.map((track, index) => (
          <button
            key={index}
            onClick={() => setCurrentTrack(index)}
            className={`w-full p-4 rounded-lg flex items-center justify-between ${
              currentTrack === index
                ? 'bg-purple-600 text-white'
                : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center">
              {currentTrack === index && isPlaying ? (
                <Pause className="h-5 w-5 mr-3" />
              ) : (
                <Play className="h-5 w-5 mr-3" />
              )}
              <div className="text-left">
                <p className="font-medium">{track.title}</p>
                <p className={`text-sm  'text-gray-600'`}>
                  {track.artist}
                </p>
              </div>
            </div>
            <span className={`text-sm  'text-gray-600'`}>
              {track.duration}
            </span>
          </button>
        ))}
      </div>

      <audio
        ref={audioRef}
        src={tracks[currentTrack].url}
        onEnded={playNext}
      />
          </div>
          </>
  );
}