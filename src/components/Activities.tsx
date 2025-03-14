import React, { useState } from 'react';
import { Gamepad2, Dumbbell, Cog as Yoga } from 'lucide-react';
import Sidebar from './Sidebar';


export default function Activities() {
  const [activeCategory, setActiveCategory] = useState<'games' | 'exercise' | 'meditation'>('games');

  const categories = [
    { id: 'games', icon: Gamepad2, label: 'Games' },
    { id: 'exercise', icon: Dumbbell, label: 'Exercise' },
    { id: 'meditation', icon: Yoga, label: 'Meditation' },
  ];

  const activities = {
    games: [
      { title: 'Memory Match', description: 'Match pairs of cards to train your memory', duration: '10 min' },
      { title: 'Word Association', description: 'Connect related words and concepts', duration: '15 min' },
      { title: 'Pattern Recognition', description: 'Find and complete visual patterns', duration: '10 min' },
    ],
    exercise: [
      { title: 'Gentle Stretching', description: 'Easy stretches for flexibility', duration: '15 min' },
      { title: 'Chair Yoga', description: 'Yoga exercises you can do while seated', duration: '20 min' },
      { title: 'Balance Training', description: 'Simple exercises to improve balance', duration: '10 min' },
    ],
    meditation: [
      { title: 'Guided Relaxation', description: 'Follow along with calming instructions', duration: '10 min' },
      { title: 'Breathing Exercise', description: 'Focus on your breath for inner peace', duration: '5 min' },
      { title: 'Body Scan', description: 'Progressive relaxation technique', duration: '15 min' },
    ],
  };

  return (
    <>
    <Sidebar/>
    <div className={` 'bg-white' rounded-xl shadow-lg p-6 ml-60`}>
      <div className="flex space-x-4 mb-6">
        {categories.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveCategory(id as any)}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeCategory === id
                ? 'bg-purple-600 text-white'
                : `'bg-gray-100 text-gray-600'`
            }`}
          >
            <Icon className="h-5 w-5 mr-2" />
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities[activeCategory].map((activity, index) => (
          <div
            key={index}
            className={` 'bg-gray-50' rounded-lg p-6 hover:shadow-lg transition-shadow`}
          >
            <h3 className={`text-lg font-semibold mb-2  'text-gray-900'`}>
              {activity.title}
            </h3>
            <p className={`mb-4  'text-gray-600'`}>
              {activity.description}
            </p>
            <div className="flex items-center justify-between">
              <span className={`text-sm  'text-gray-500'`}>
                {activity.duration}
              </span>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                Start
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}