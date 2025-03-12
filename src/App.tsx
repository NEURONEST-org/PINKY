import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import QuickActions from './components/QuickActions';
import Schedule from './components/Schedule';
import Chat from './components/Chat';
import Activities from './components/Activities';
import Journal from './components/Journal';
import Safety from './components/Safety';
import Tasks from './components/Tasks';
import MoodTracker from './components/MoodTracker';
import Reminders from './components/Reminders';
import Recognition from './components/Recognition';
import MusicTherapy from './components/MusicTherapy';
import VoiceNotes from './components/VoiceNotes';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'recognition':
        return <Recognition isDarkMode={isDarkMode} />;
      case 'chat':
        return <Chat isDarkMode={isDarkMode} />;
      case 'activities':
        return <Activities isDarkMode={isDarkMode} />;
      case 'journal':
        return <Journal isDarkMode={isDarkMode} />;
      case 'safety':
        return <Safety isDarkMode={isDarkMode} />;
      case 'tasks':
        return <Tasks isDarkMode={isDarkMode} />;
      case 'mood':
        return <MoodTracker isDarkMode={isDarkMode} />;
      case 'reminders':
        return <Reminders isDarkMode={isDarkMode} />;
      case 'music':
        return <MusicTherapy isDarkMode={isDarkMode} />;
      case 'voice':
        return <VoiceNotes isDarkMode={isDarkMode} />;
      default:
        return (
          <>
            <QuickActions isDarkMode={isDarkMode} />
            <Schedule isDarkMode={isDarkMode} />
          </>
        );
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} />
      
      <div className="ml-64 p-8">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        {renderContent()}
      </div>
    </div>
  );
}

export default App;