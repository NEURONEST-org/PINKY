import React from "react";
import { Link } from "react-router-dom";
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
} from "lucide-react";
import { SignInButton } from '@clerk/clerk-react';
import { UserButton } from '@clerk/clerk-react';


export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-72 bg-pink-50 text-gray-800 shadow-lg overflow-y-auto p-8">

      {/* Sidebar Header */}
      <UserButton />
      <div className="flex items-center space-x-3 mb-10">
        <Brain className="h-10 w-10 text-pink-500" />
        <h1 className="text-2xl font-bold text-pink-700">NeuroNest</h1>
        {/* <button className="bg-pink-500 text-white px-6 py-1 rounded-2xl " component="SignInButton">Sign in</button> */}
        
       
      </div>

      {/* Navigation Buttons */}
      <nav className="space-y-4">
        <Link to="/">
          <button className="w-full flex items-center px-8 py-4 text-sm bg-gradient-to-r from-pink-100 to-pink-200 hover:from-pink-200 hover:to-pink-300 text-pink-800 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
            <Home className="h-5 w-5 mr-4" />
            Home
          </button>
        </Link>

        <Link to="/recognition">
          <button className="w-full flex items-center px-8 py-4 text-sm bg-gradient-to-r from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 text-purple-800 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
            <Camera className="h-5 w-5 mr-4" />
            Recognition
          </button>
        </Link>

        <Link to="/safety-zones">
          <button className="w-full flex items-center px-8 py-4 text-sm bg-gradient-to-r from-rose-100 to-rose-200 hover:from-rose-200 hover:to-rose-300 text-rose-800 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
            <Map className="h-5 w-5 mr-4" />
            Safety Zones
          </button>
        </Link>

        <Link to="/activities">
          <button className="w-full flex items-center px-8 py-4 text-sm bg-gradient-to-r from-orange-100 to-orange-200 hover:from-orange-200 hover:to-orange-300 text-orange-800 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
            <Gamepad2 className="h-5 w-5 mr-4" />
            Activities
          </button>
        </Link>

        <Link to="/chat">
          <button className="w-full flex items-center px-8 py-4 text-sm bg-gradient-to-r from-fuchsia-100 to-fuchsia-200 hover:from-fuchsia-200 hover:to-fuchsia-300 text-fuchsia-800 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
            <MessageCircle className="h-5 w-5 mr-4" />
            Chat
          </button>
        </Link>

        <Link to="/tasks">
          <button className="w-full flex items-center px-8 py-4 text-sm bg-gradient-to-r from-red-100 to-red-200 hover:from-red-200 hover:to-red-300 text-red-800 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
            <Calendar className="h-5 w-5 mr-4" />
            Tasks
          </button>
        </Link>

        <Link to="/medication">
          <button className="w-full flex items-center px-8 py-4 text-sm bg-gradient-to-r from-amber-100 to-amber-200 hover:from-amber-200 hover:to-amber-300 text-amber-800 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
            <Pill className="h-5 w-5 mr-4" />
            Medication
          </button>
        </Link>

        <Link to="/mood-tracker">
          <button className="w-full flex items-center px-8 py-4 text-sm bg-gradient-to-r from-violet-100 to-violet-200 hover:from-violet-200 hover:to-violet-300 text-violet-800 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
            <Smile className="h-5 w-5 mr-4" />
            Mood Tracker
          </button>
        </Link>

        <Link to="/reminders">
          <button className="w-full flex items-center px-8 py-4 text-sm bg-gradient-to-r from-sky-100 to-sky-200 hover:from-sky-200 hover:to-sky-300 text-sky-800 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
            <Clock className="h-5 w-5 mr-4" />
            Reminders
          </button>
        </Link>

        <Link to="/music-therapy">
          <button className="w-full flex items-center px-8 py-4 text-sm bg-gradient-to-r from-indigo-100 to-indigo-200 hover:from-indigo-200 hover:to-indigo-300 text-indigo-800 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
            <Music className="h-5 w-5 mr-4" />
            Music Therapy
          </button>
        </Link>

        <Link to="/voice-notes">
          <button className="w-full flex items-center px-8 py-4 text-sm bg-gradient-to-r from-teal-100 to-teal-200 hover:from-teal-200 hover:to-teal-300 text-teal-800 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
            <Mic className="h-5 w-5 mr-4" />
            Voice Notes
          </button>
        </Link>

        <Link to="/settings">
          <button className="w-full flex items-center px-8 py-4 text-sm bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
            <Settings className="h-5 w-5 mr-4" />
            Settings
          </button>
        </Link>
      </nav>
    </div>
  );
}
