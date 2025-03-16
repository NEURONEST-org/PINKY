import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Pill,
  Clock,
  AlertCircle,
  Phone,
  MapPin,
  Shield,
  Heart,
  Calendar,
  User
} from 'lucide-react';
import Sidebar from './Sidebar';

export default function Medication() {
  const medications = [
    {
      category: "Cholinesterase Inhibitors",
      description: "Improve memory & thinking skills",
      drugs: [
        {
          name: "Donepezil (Aricept)",
          usage: "For all dementia stages",
          image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2830&auto=format&fit=crop",
          precautions: [
            "Take with food to reduce nausea",
            "Monitor for dizziness and slow heart rate",
            "Do not stop suddenly without consulting a doctor"
          ]
        },
      
        
        {
          name: "Rivastigmine (Exelon)",
          usage: "For mild to moderate Alzheimer's & Parkinson's dementia",
          image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2830&auto=format&fit=crop",
          precautions: [
            "Take with food to reduce nausea",
            "Monitor for dizziness and slow heart rate",
            "Do not stop suddenly without consulting a doctor"
          ]
        }
      ]
    },
    {
      category: "NMDA Receptor Antagonist",
      description: "Slows disease progression",
      drugs: [
        {
          name: "Memantine (Namenda)",
          usage: "For moderate to severe Alzheimer's",
          image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2830&auto=format&fit=crop",
          precautions: [
            "Avoid alcohol; may worsen side effects",
            "Watch for dizziness, confusion, or headache",
            "Do not crush or split extended-release tablets"
          ]
        }
        
      ]
    }
   
  ];

  const caregivers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Primary Physician",
      contact: "(555) 123-4567",
      location: "Memorial Hospital",
      address: "123 Healthcare Ave, Medical City, MC 12345"
    },
    {
      name: "Michael Chen",
      role: "Primary Caregiver",
      contact: "(555) 987-6543",
      location: "Home Care Services",
      address: "456 Caregiver Lane, Care City, CC 67890"
    }
  ];

  // Animated background particles
  const particles = [...Array(30)].map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 20 + 10,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
  }));

  return (
    <>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pl-72 p-6 relative">
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-blue-400/10"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.initialX}%`,
                top: `${particle.initialY}%`,
              }}
              animate={{
                x: [0, 30, -30, 0],
                y: [0, -20, 20, 0],
                scale: [1, 1.2, 0.8, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
        <Sidebar/>
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Medication Management
              </h1>
            </div>
            <p className="text-gray-600 ml-12">
              Track and manage medications with detailed information and safety precautions
            </p>
          </motion.div>

          {/* Medication Categories */}
          <div className="space-y-12">
            {medications.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-500" />
                  <span>{category.category}</span>
                </h2>
                <p className="text-gray-600 ml-8">{category.description}</p>

                <div className="space-y-8">
                  {category.drugs.map((drug, index) => (
                    <motion.div
                      key={drug.name}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-blue-100"
                    >
                      <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                        <div className="p-6 space-y-4">
                          <h3 className="text-xl font-semibold text-gray-900">{drug.name}</h3>
                          <p className="text-blue-600 font-medium">{drug.usage}</p>
                          <div className="space-y-3">
                            <h4 className="font-medium text-gray-900 flex items-center space-x-2">
                              <AlertCircle className="h-5 w-5 text-amber-500" />
                              <span>Precautions:</span>
                            </h4>
                            <ul className="space-y-2 ml-7">
                              {drug.precautions.map((precaution, i) => (
                                <li key={i} className="text-gray-600 flex items-start space-x-2">
                                  <span className="text-blue-500 mt-1">•</span>
                                  <span>{precaution}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="relative h-64 lg:h-auto">
                          <img
                            src={drug.image}
                            alt={drug.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Caregiver Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-8 text-white shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
              <Heart className="h-6 w-6" />
              <span>Caregiver Information</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caregivers.map((caregiver, index) => (
                <motion.div
                  key={caregiver.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4"
                >
                  <div className="flex items-center space-x-3">
                    <User className="h-6 w-6" />
                    <h3 className="text-xl font-semibold">{caregiver.name}</h3>
                  </div>
                  <p className="text-blue-100">{caregiver.role}</p>
                  <div className="space-y-2">
                    <p className="flex items-center space-x-2">
                      <Phone className="h-5 w-5" />
                      <span>{caregiver.contact}</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span>{caregiver.location}</span>
                    </p>
                    <p className="text-sm text-blue-100 ml-7">{caregiver.address}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}