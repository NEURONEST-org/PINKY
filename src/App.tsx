import React, { useState, useEffect } from 'react';
import {
  Brain,
  Camera,
  MapPin,
  GamepadIcon,
  Music,
  Users,
  BookText,
  Bell,
  MessageCircle,
  Moon,
  Sun,
  Home,
  AlertCircle,
  Calendar,
  Clock,
  Heart,
  Trophy,
  Target,
  Smile,
  Frown,
  Meh,
  Angry,
  BrainCircuit,
  Map,
  Headphones,
  Puzzle,
  MessageSquare,
  UserPlus,
  Settings,
  LogOut
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const showAlert = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ease-in-out ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-blue-50 to-purple-50 text-gray-900'}`}>
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 animate-slideIn">
          <div className={`px-6 py-3 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <p className="text-sm font-medium">{notificationMessage}</p>
          </div>
        </div>
      )}

      {/* Top Navigation */}
      <nav className={`fixed top-0 w-full transition-all duration-300 ease-in-out ${darkMode ? 'bg-gray-800 border-b border-gray-700' : 'bg-white/80 backdrop-blur-md border-b border-gray-200'} shadow-lg z-50`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <Brain className="w-8 h-8 text-indigo-400 dark:text-indigo-300 transition-transform duration-300 ease-in-out group-hover:rotate-12" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 dark:from-indigo-300 dark:to-purple-300 bg-clip-text text-transparent transition-all duration-300 ease-in-out group-hover:scale-105">NeuroNest</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300 transition-transform duration-300 hover:rotate-180" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600 transition-transform duration-300 hover:rotate-180" />
              )}
            </button>
            <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg transform-gpu">
              <AlertCircle className="w-4 h-4" />
              <span className="font-semibold">SOS</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Navigation */}
      <div className={`fixed left-0 top-16 h-full w-16 transition-colors duration-300 ease-in-out ${darkMode ? 'bg-gray-800 border-r border-gray-700' : 'bg-white/80 backdrop-blur-md border-r border-gray-200'} shadow-lg flex flex-col items-center py-4 space-y-6`}>
        <NavButton icon={<Home />} label="Home" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
        <NavButton icon={<Camera />} label="Recognition" active={activeTab === 'recognition'} onClick={() => setActiveTab('recognition')} />
        <NavButton icon={<MapPin />} label="Safety" active={activeTab === 'safety'} onClick={() => setActiveTab('safety')} />
        <NavButton icon={<GamepadIcon />} label="Activities" active={activeTab === 'activities'} onClick={() => setActiveTab('activities')} />
        <NavButton icon={<Music />} label="Music" active={activeTab === 'music'} onClick={() => setActiveTab('music')} />
        <NavButton icon={<Users />} label="Social" active={activeTab === 'social'} onClick={() => setActiveTab('social')} />
        <NavButton icon={<BookText />} label="Journal" active={activeTab === 'journal'} onClick={() => setActiveTab('journal')} />
        <NavButton icon={<Bell />} label="Reminders" active={activeTab === 'reminders'} onClick={() => setActiveTab('reminders')} />
        <NavButton icon={<MessageCircle />} label="Chat" active={activeTab === 'chat'} onClick={() => setActiveTab('chat')} />
      </div>

      {/* Main Content Area */}
      <main className="ml-16 pt-16 p-6">
        <div className="container mx-auto">
          <DashboardContent 
            activeTab={activeTab} 
            darkMode={darkMode} 
            showAlert={showAlert}
          />
        </div>
      </main>
    </div>
  );
}

function NavButton({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`p-3 rounded-lg transition-all duration-300 ease-in-out transform-gpu hover:scale-110 group relative ${
        active 
          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-110' 
          : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
      }`}
    >
      <div className="transition-transform duration-300 ease-in-out group-hover:rotate-12">
        {icon}
      </div>
      <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {label}
      </span>
    </button>
  );
}

function DashboardContent({ activeTab, darkMode, showAlert }) {
  const moodEmojis = [
    { icon: <Smile className="w-8 h-8 text-green-500 dark:text-green-400" />, label: 'Happy' },
    { icon: <Meh className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />, label: 'Neutral' },
    { icon: <Frown className="w-8 h-8 text-blue-500 dark:text-blue-400" />, label: 'Sad' },
    { icon: <Angry className="w-8 h-8 text-red-500 dark:text-red-400" />, label: 'Angry' },
  ];

  const handleMoodSelect = (mood) => {
    showAlert(`Mood recorded: ${mood}`);
  };
  
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <DashboardCard 
                icon={<Trophy className="w-6 h-6 text-yellow-500 dark:text-yellow-400" />}
                title="Daily Streak" 
                value="5 days"
                subtitle="Keep going strong!" 
                darkMode={darkMode}
              />
              <DashboardCard 
                icon={<Target className="w-6 h-6 text-green-500 dark:text-green-400" />}
                title="Tasks Completed" 
                value="8/10"
                subtitle="Almost there!" 
                darkMode={darkMode}
              />
              <DashboardCard 
                icon={<Heart className="w-6 h-6 text-red-500 dark:text-red-400" />}
                title="Wellness Score" 
                value="92%"
                subtitle="Excellent condition" 
                darkMode={darkMode}
              />
              <DashboardCard 
                icon={<BrainCircuit className="w-6 h-6 text-purple-500 dark:text-purple-400" />}
                title="Memory Score" 
                value="85%"
                subtitle="Keep exercising" 
                darkMode={darkMode}
              />
            </div>
            
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} shadow-lg animate-scaleIn`}>
              <h3 className="text-xl font-semibold mb-4">Today's Schedule</h3>
              <div className="space-y-4">
                <ScheduleItem 
                  time="9:00 AM" 
                  title="Morning Medicine"
                  status="completed"
                  darkMode={darkMode}
                />
                <ScheduleItem 
                  time="10:30 AM" 
                  title="Memory Exercise"
                  status="upcoming"
                  darkMode={darkMode}
                />
                <ScheduleItem 
                  time="2:00 PM" 
                  title="Virtual Family Meeting"
                  status="upcoming"
                  darkMode={darkMode}
                />
              </div>
            </div>
            
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} shadow-lg animate-scaleIn`}>
              <h3 className="text-xl font-semibold mb-4">How are you feeling?</h3>
              <div className="flex justify-around">
                {moodEmojis.map((mood, index) => (
                  <button
                    key={index}
                    onClick={() => handleMoodSelect(mood.label)}
                    className="flex flex-col items-center space-y-2 transition-all duration-300 hover:scale-110 focus:scale-110 focus:outline-none"
                  >
                    {mood.icon}
                    <span className="text-sm font-medium">{mood.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 'safety':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} shadow-lg`}>
              <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <Map className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
                <span>Safe Zone Settings</span>
              </h3>
              <div className="space-y-4">
                <button 
                  onClick={() => showAlert('Safe zone updated!')}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-lg transition-all duration-300 hover:shadow-lg transform-gpu hover:scale-105"
                >
                  Update Safe Zone
                </button>
              </div>
            </div>
          </div>
        );

      case 'activities':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            <ActivityCard
              icon={<Puzzle />}
              title="Memory Games"
              description="Exercise your mind with fun puzzles"
              onClick={() => showAlert('Starting memory game...')}
              darkMode={darkMode}
            />
            <ActivityCard
              icon={<Headphones />}
              title="Music Therapy"
              description="Relax with therapeutic melodies"
              onClick={() => showAlert('Playing music therapy session...')}
              darkMode={darkMode}
            />
            <ActivityCard
              icon={<Brain />}
              title="Cognitive Training"
              description="Enhance your mental abilities"
              onClick={() => showAlert('Starting cognitive training...')}
              darkMode={darkMode}
            />
          </div>
        );

      case 'chat':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            <ChatCard
              name="Support Group"
              lastMessage="Join today's session at 3 PM"
              onClick={() => showAlert('Joining support group chat...')}
              darkMode={darkMode}
            />
            <ChatCard
              name="Family Chat"
              lastMessage="Mom: How are you feeling today?"
              onClick={() => showAlert('Opening family chat...')}
              darkMode={darkMode}
            />
            <ChatCard
              name="Caregiver"
              lastMessage="Your medication reminder for 2 PM"
              onClick={() => showAlert('Opening caregiver chat...')}
              darkMode={darkMode}
            />
          </div>
        );

      case 'recognition':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            <div className={`p-6 rounded-xl transition-all duration-300 ease-in-out transform-gpu hover:scale-105 ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} shadow-lg`}>
              <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <Camera className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
                <span>Face Recognition</span>
              </h3>
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-600 dark:from-gray-600 dark:to-gray-500 rounded-lg mb-4 flex items-center justify-center">
                <Camera className="w-12 h-12 text-gray-300 dark:text-gray-400" />
              </div>
              <button 
                onClick={() => showAlert('Starting face recognition...')}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-3 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg transform-gpu hover:scale-105 font-medium"
              >
                Start Recognition
              </button>
            </div>
            <div className={`p-6 rounded-xl transition-all duration-300 ease-in-out transform-gpu hover:scale-105 ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} shadow-lg`}>
              <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <BrainCircuit className="w-6 h-6 text-purple-500 dark:text-purple-400" />
                <span>Object Recognition</span>
              </h3>
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-600 dark:from-gray-600 dark:to-gray-500 rounded-lg mb-4 flex items-center justify-center">
                <BrainCircuit className="w-12 h-12 text-gray-300 dark:text-gray-400" />
              </div>
              <button 
                onClick={() => showAlert('Starting object recognition...')}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg transform-gpu hover:scale-105 font-medium"
              >
                Identify Object
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className="animate-fadeIn flex items-center justify-center h-64">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>This feature is under development</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 transition-all duration-300 ease-in-out bg-gradient-to-r from-indigo-400 to-purple-400 dark:from-indigo-300 dark:to-purple-300 bg-clip-text text-transparent animate-slideIn">
        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
      </h2>
      {renderContent()}
    </div>
  );
}

function ActivityCard({ icon, title, description, onClick, darkMode }) {
  return (
    <div
      onClick={onClick}
      className={`${
        darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'
      } rounded-xl shadow-lg p-6 transition-all duration-300 ease-in-out transform-gpu hover:scale-105 hover:shadow-xl cursor-pointer`}
    >
      <div className="flex items-center space-x-3 mb-3">
        <div className="text-indigo-500 dark:text-indigo-400">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        {description}
      </p>
    </div>
  );
}

function ChatCard({ name, lastMessage, onClick, darkMode }) {
  return (
    <div
      onClick={onClick}
      className={`${
        darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'
      } rounded-xl shadow-lg p-6 transition-all duration-300 ease-in-out transform-gpu hover:scale-105 hover:shadow-xl cursor-pointer`}
    >
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white">
          {name[0]}
        </div>
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} truncate`}>
        {lastMessage}
      </p>
    </div>
  );
}

function DashboardCard({ icon, title, value, subtitle, darkMode }) {
  return (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-100 text-gray-900'} rounded-xl shadow-lg p-6 transition-all duration-300 ease-in-out transform-gpu hover:scale-105 hover:shadow-xl border`}>
      <div className="flex items-center space-x-3 mb-3">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 dark:from-indigo-300 dark:to-purple-300 bg-clip-text text-transparent">
        {value}
      </p>
      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>{subtitle}</p>
    </div>
  );
}

function ScheduleItem({ time, title, status, darkMode }) {
  return (
    <div className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 ease-in-out ${
      status === 'completed' 
        ? darkMode ? 'bg-green-900/20' : 'bg-green-50'
        : darkMode ? 'bg-gray-700/20' : 'bg-gray-50'
    }`}>
      <div className="flex-shrink-0">
        <Clock className={`w-5 h-5 ${
          status === 'completed' 
            ? 'text-green-500 dark:text-green-400' 
            : darkMode ? 'text-gray-400' : 'text-gray-500'
        }`} />
      </div>
      <div className="flex-grow">
        <p className="font-medium">{title}</p>
        <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{time}</p>
      </div>
      <div className="flex-shrink-0">
        {status === 'completed' ? (
          <span className="text-green-500 dark:text-green-400 text-sm font-medium">✓ Done</span>
        ) : (
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Upcoming</span>
        )}
      </div>
    </div>
  );
}

export default App;