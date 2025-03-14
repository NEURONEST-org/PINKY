import React, { useState } from 'react';
import { Smartphone, MapPin, Shield } from 'lucide-react';
import Sidebar from './Sidebar';



export default function Safety() {
  const [activeSection, setActiveSection] = useState<'phone' | 'tracker' | 'zones'>('phone');

  const sections = [
    { id: 'phone', icon: Smartphone, label: 'Locate Phone' },
    { id: 'tracker', icon: MapPin, label: 'Locate Tracker' },
    { id: 'zones', icon: Shield, label: 'Safe Zones' },
  ];

  return (
    <>
    <Sidebar/>
    <div className="bg-white rounded-xl shadow-lg p-6 mL-60">
      <div className="flex space-x-4 mb-6">
        {sections.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveSection(id as any)}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeSection === id
                ? 'bg-purple-600 text-white'
                :  'bg-gray-100 text-gray-600'
            }`}
          >
            <Icon className="h-5 w-5 mr-2" />
            {label}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
          className="w-full h-[400px] rounded-lg border-0"
        ></iframe>
      </div>

      {activeSection === 'zones' && (
        <div className="space-y-4">
          <div className="p-4 rounded-lg  bg-gray-50">
            <h3 className="font-semibold mb-2 text-gray-900">
              Home Zone
            </h3>
            <p className="text-sm 'text-gray-600'">
              500m radius around home
            </p>
          </div>
          <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Add New Safe Zone
          </button>
        </div>
      )}
    </div>
    </>
  );
}