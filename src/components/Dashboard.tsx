import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Camera,
  MessageSquare,
  Album,
  Heart,
  Clock,
  Bell,
  Users,
} from 'lucide-react';
import Sidebar from './Sidebar';



export default function Dashboard() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  // Image slideshow
  const images = [
    "https://media.istockphoto.com/id/513438669/photo/family-hugging-outdoors.jpg?s=612x612&w=is&k=20&c=X_kjgGeHXM1eyjYYyS2593RUipKmPIThM0yGZIW0vls=",
    "https://plus.unsplash.com/premium_photo-1723662035695-3023b5e550b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1726862990789-37855c97a0f3?q=80&w=845&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Floating particles
  const particles = [...Array(30)].map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    duration: Math.random() * 20 + 10,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
  }));
  
  const features = [
    {
      icon: Brain,
      title: 'Memory Support',
      description: 'AI-powered assistance to help maintain cognitive function and daily routines.',
    },
    {
      icon: Camera,
      title: 'Face Recognition',
      description: 'Advanced facial recognition to help identify family members and friends.',
    },
    {
      icon: Album,
      title: 'Personal Album',
      description: 'Digital memory book with important photos and life stories.',
    },
    {
      icon: MessageSquare,
      title: 'Voice Messages',
      description: 'Record and play voice notes from loved ones for emotional connection.',
    },
    {
      icon: Clock,
      title: 'Daily Reminders',
      description: 'Customizable alerts for medications, appointments, and daily activities.',
    },
    {
      icon: Users,
      title: 'Family Connection',
      description: 'Stay connected with family through an integrated communication platform.',
    },
  ];

  return (
    <>
    <Sidebar/>
    <div className="relative items-center flex-grow">
      {/* Animated background with particles */}

      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
          {/* Floating particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-white/40 backdrop-blur-sm"
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
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>


      </div>

      

      {/* Hero Section with Image Slideshow */}
      <motion.section
        style={{ scale }}
        className="min-h-screen flex flex-col items-center justify-center relative px-32 py-20 "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            CareCompanion
          </motion.h1>
          <motion.p
            className="text-xl mb-12 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering dementia care with intelligent technology and compassionate support
          </motion.p>

          {/* Image Slideshow */}
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt="Elderly care"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section with Enhanced Animations */}
      <section className="py-20 px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, translateY: -5 }}
                className="p-6 rounded-xl bg-white/80 backdrop-blur-lg shadow-xl border border-pink-100"
              >
                <div className="p-3 rounded-full inline-block bg-gradient-to-br from-purple-100 to-pink-100 mb-4">
                  <feature.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            See How It Works
          </h2>
          <motion.div
            className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white/80 backdrop-blur-lg p-4 border border-pink-100"
            whileHover={{ scale: 1.01 }}
          >
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
              <p className="text-lg text-gray-600">
                demo video
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-lg rounded-2xl p-12 shadow-2xl border border-pink-100"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Join thousands of families who trust CareCompanion for their loved ones
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-lg font-semibold shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </section>
    </div>
    </>
  );
}