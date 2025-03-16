import React, { useState, useRef } from 'react';
import { FileText, Mic, Calendar, Clock, Plus, Square, Play, Pause } from 'lucide-react';

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  timestamp: string;
  type: 'text' | 'voice';
  voiceDuration?: string;
  audioUrl?: string;
}

export default function Journal() {
  const [isNewEntry, setIsNewEntry] = useState(false);
  const [entryType, setEntryType] = useState<'text' | 'voice'>('text');
  const [newEntry, setNewEntry] = useState({ title: '', content: '' });
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const entries: JournalEntry[] = [
    {
      id: '1',
      title: 'Morning Walk',
      content: 'Had a lovely walk in the park today. Saw many birds and flowers in bloom.',
      timestamp: 'Today, 10:30 AM',
      type: 'text'
    },
    {
      id: '2',
      title: 'Family Visit',
      content: 'Sarah and the grandkids came over for lunch. We had a wonderful time together.',
      timestamp: 'Yesterday, 2:15 PM',
      type: 'text'
    },
    {
      id: '3',
      title: 'Memory from Childhood',
      content: 'Remembered the summer vacation at the lake when I was 10 years old.',
      timestamp: '3 days ago, 7:45 PM',
      type: 'text'
    },
    {
      id: '4',
      title: "Doctor's Appointment",
      content: '',
      timestamp: 'Last week, 11:20 AM',
      type: 'voice',
      voiceDuration: '1:24'
    }
  ];

  const stats = {
    totalEntries: 12,
    thisWeek: 4,
    textEntries: 8,
    voiceEntries: 4,
    streak: 3
  };

  const topics = ['Family', 'Memories', 'Health', 'Activities', 'Nature'];

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
      };

      mediaRecorder.start();
      setIsRecording(true);
      
      // Start timer
      let time = 0;
      timerRef.current = window.setInterval(() => {
        time += 1;
        setRecordingTime(time);
      }, 1000);
    } catch (err) {
      console.error('Error accessing microphone:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
      
      // Stop timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const renderVoiceRecorder = () => (
    <div className="border rounded-lg p-6 mb-6 bg-gray-50">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Mic className="w-5 h-5 text-indigo-600" />
          <span className="font-medium">Voice Recording</span>
        </div>
        <span className="text-gray-600">{formatTime(recordingTime)}</span>
      </div>

      {audioUrl && (
        <div className="mb-4">
          <audio ref={audioRef} src={audioUrl} onEnded={() => setIsPlaying(false)} />
          <button
            onClick={togglePlayback}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? 'Pause' : 'Play'} Recording
          </button>
        </div>
      )}

      <button
        onClick={isRecording ? stopRecording : startRecording}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
          isRecording
            ? 'bg-red-50 text-red-600 hover:bg-red-100'
            : 'bg-indigo-600 text-white hover:bg-indigo-700'
        }`}
      >
        {isRecording ? (
          <>
            <Square className="w-4 h-4" /> Stop Recording
          </>
        ) : (
          <>
            <Mic className="w-4 h-4" /> Start Recording
          </>
        )}
      </button>
    </div>
  );

  const renderNewEntryForm = () => (
    <div className="bg-white rounded-2xl p-8 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <FileText className="w-6 h-6" />
        <h2 className="text-2xl font-bold">New Journal Entry</h2>
      </div>
      <p className="text-gray-600 mb-6">Create a new journal entry</p>
      
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setEntryType('text')}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
            entryType === 'text'
              ? 'bg-indigo-50 text-indigo-700'
              : 'bg-gray-50 text-gray-600'
          }`}
        >
          <FileText className="w-5 h-5" />
          Text Entry
        </button>
        <button
          onClick={() => setEntryType('voice')}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
            entryType === 'voice'
              ? 'bg-indigo-50 text-indigo-700'
              : 'bg-gray-50 text-gray-600'
          }`}
        >
          <Mic className="w-5 h-5" />
          Voice Entry
        </button>
      </div>

      <input
        type="text"
        placeholder="Entry Title"
        value={newEntry.title}
        onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
        className="w-full mb-4 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {entryType === 'voice' ? (
        renderVoiceRecorder()
      ) : (
        <textarea
          placeholder="Write your thoughts here..."
          value={newEntry.content}
          onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
          className="w-full h-48 mb-6 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
        />
      )}

      <div className="flex justify-end gap-4">
        <button
          onClick={() => {
            setIsNewEntry(false);
            setAudioUrl(null);
            setRecordingTime(0);
            if (timerRef.current) {
              clearInterval(timerRef.current);
            }
          }}
          className="px-6 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            // Handle save logic here
            setIsNewEntry(false);
            setAudioUrl(null);
            setRecordingTime(0);
          }}
          className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Save Entry
        </button>
      </div>
    </div>
  );

  const renderEntryList = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Journal Entries</h2>
          </div>
          <p className="text-gray-600 mb-6">Record your thoughts and memories</p>

          <div className="space-y-6">
            {entries.map((entry) => (
              <div key={entry.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{entry.title}</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{entry.timestamp}</span>
                  </div>
                </div>
                
                {entry.type === 'voice' ? (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mic className="w-4 h-4" />
                    <span>Voice recording ({entry.voiceDuration})</span>
                  </div>
                ) : (
                  <p className="text-gray-600 mb-4">{entry.content}</p>
                )}

                <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                  View Full Entry
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsNewEntry(true)}
            className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800"
          >
            <Plus className="w-5 h-5" />
            New Journal Entry
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Entry Summary</h2>
          <p className="text-gray-600 mb-6">Track your journaling progress</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-50 rounded-xl p-4">
              <div className="text-3xl font-bold text-indigo-700">{stats.totalEntries}</div>
              <div className="text-sm text-gray-600">Total Entries</div>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <div className="text-3xl font-bold text-green-700">{stats.thisWeek}</div>
              <div className="text-sm text-gray-600">This Week</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-700">{stats.textEntries}</div>
              <div className="text-sm text-gray-600">Text Entries</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-700">{stats.voiceEntries}</div>
              <div className="text-sm text-gray-600">Voice Entries</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Popular Topics</h2>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100 cursor-pointer"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Journaling Streak</h2>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-indigo-600">{stats.streak}</span>
            <span className="text-gray-600">days in a row</span>
          </div>
          <p className="text-gray-500 text-sm mt-2">Keep writing to increase your streak!</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Journal</h1>
          <p className="text-gray-600">Record thoughts, memories, and daily experiences</p>
        </div>

        {isNewEntry ? renderNewEntryForm() : renderEntryList()}
      </div>
    </div>
  );
}