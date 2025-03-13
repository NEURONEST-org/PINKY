import React, { useState } from 'react';
import { Mic, Camera, Book } from 'lucide-react';
import Sidebar from './Sidebar';



export default function Journal() {
  const [activeSection, setActiveSection] = useState<'audio' | 'photo' | 'memory'>('audio');

  const sections = [
    { id: 'audio', icon: Mic, label: 'Audio Journal' },
    { id: 'photo', icon: Camera, label: 'Photo Journal' },
    { id: 'memory', icon: Book, label: 'Memory Album' },
  ];

  return (
    <>
    <Sidebar/>
    <div className={` 'bg-white' rounded-xl shadow-lg p-6`}>
      <div className="flex space-x-4 mb-6">
        {sections.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveSection(id as any)}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeSection === id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <Icon className="h-5 w-5 mr-2" />
            {label}
          </button>
        ))}
      </div>

      {activeSection === 'audio' && (
        <div className="text-center py-12">
          <Mic className={`h-16 w-16 mx-auto mb-4  'text-gray-600'`} />
          <button className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700">
            Start Recording
          </button>
        </div>
      )}

      {activeSection === 'photo' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <button
            className={`h-48 rounded-lg flex items-center justify-center  'bg-gray-100'`}
          >
            <Camera className={`h-8 w-8  'text-gray-600'`} />
          </button>
          {/* Add more photo placeholders here */}
        </div>
      )}

      {activeSection === 'memory' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className={`h-48 rounded-lg  'bg-gray-100' p-4`}
            >
              <div className="h-full flex items-center justify-center">
                <Book className={`h-8 w-8  'text-gray-600'`} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}