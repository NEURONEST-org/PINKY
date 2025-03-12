import React from 'react';
import { Camera, Music2, Pencil, VolumeX } from 'lucide-react';

interface QuickActionsProps {
  isDarkMode: boolean;
}

export default function QuickActions({ isDarkMode }: QuickActionsProps) {
  const actions = [
    {
      icon: Camera,
      title: 'Face Recognition',
      description: 'Identify family members and friends',
      color: 'bg-blue-500',
    },
    {
      icon: Music2,
      title: 'Music Therapy',
      description: 'Listen to memory-boosting melodies',
      color: 'bg-purple-500',
    },
    {
      icon: Pencil,
      title: 'Journal Entry',
      description: 'Record your thoughts and memories',
      color: 'bg-green-500',
    },
    {
      icon: VolumeX,
      title: 'Voice Notes',
      description: 'Create voice reminders',
      color: 'bg-red-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {actions.map((action, index) => (
        <div
          key={index}
          className={`${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105`}
        >
          <div className={`${action.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
            <action.icon className="h-6 w-6 text-white" />
          </div>
          <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {action.title}
          </h3>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{action.description}</p>
        </div>
      ))}
    </div>
  );
}