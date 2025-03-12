import React from 'react';
import {
  Brain,
  Home,
  Camera,
  Map,
  Gamepad2,
  MessageCircle,
  Calendar,
  Pill,
  Smile,
  Clock,
  Settings,
  Music,
  Mic
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
}

export default function Sidebar({ activeTab, setActiveTab, isDarkMode }: SidebarProps) {
  const navItems = [
    { icon: Home, label: 'Dashboard', id: 'dashboard' },
    { icon: Camera, label: 'Recognition', id: 'recognition' },
    { icon: Map, label: 'Safety Zones', id: 'safety' },
    { icon: Gamepad2, label: 'Activities', id: 'activities' },
    { icon: MessageCircle, label: 'Chat', id: 'chat' },
    { icon: Calendar, label: 'Tasks', id: 'tasks' },
    { icon: Pill, label: 'Medication', id: 'medication' },
    { icon: Smile, label: 'Mood Tracker', id: 'mood' },
    { icon: Clock, label: 'Reminders', id: 'reminders' },
    { icon: Music, label: 'Music Therapy', id: 'music' },
    { icon: Mic, label: 'Voice Notes', id: 'voice' },
    { icon: Settings, label: 'Settings', id: 'settings' },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg overflow-y-auto`}>
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <Brain className={`h-8 w-8 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
          <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>NeuroNest</h1>
        </div>
      </div>

      <nav className="mt-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center px-6 py-3 text-sm ${
              activeTab === item.id
                ? `${isDarkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-900'}`
                : `${isDarkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}