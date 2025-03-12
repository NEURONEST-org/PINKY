import React from 'react';
import { Pill, Stethoscope, Bell } from 'lucide-react';

interface RemindersProps {
  isDarkMode: boolean;
}

export default function Reminders({ isDarkMode }: RemindersProps) {
  const categories = [
    { icon: Pill, label: 'Medicine', count: 3 },
    { icon: Stethoscope, label: 'Doctor Visits', count: 1 },
    { icon: Bell, label: 'Other', count: 2 },
  ];

  const reminders = [
    {
      category: 'Medicine',
      title: 'Take morning medication',
      time: '9:00 AM',
      recurring: 'Daily',
    },
    {
      category: 'Doctor Visits',
      title: 'Neurologist appointment',
      time: '2:30 PM',
      date: 'March 15, 2024',
    },
    {
      category: 'Other',
      title: 'Memory exercise session',
      time: '10:00 AM',
      recurring: 'Weekly',
    },
  ];

  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {categories.map(({ icon: Icon, label, count }) => (
          <div
            key={label}
            className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
          >
            <div className="flex items-center justify-between mb-2">
              <Icon className={`h-6 w-6 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              <span className={`text-sm px-2 py-1 rounded-full bg-purple-100 text-purple-800`}>
                {count}
              </span>
            </div>
            <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{label}</h3>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {reminders.map((reminder, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {reminder.title}
              </h4>
              <span
                className={`text-sm px-2 py-1 rounded-full ${
                  isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {reminder.category}
              </span>
            </div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {reminder.time} • {reminder.recurring || reminder.date}
            </p>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center justify-center">
        <Bell className="h-5 w-5 mr-2" />
        Add New Reminder
      </button>
    </div>
  );
}