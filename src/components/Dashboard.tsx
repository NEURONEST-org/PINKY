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
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Sidebar from './Sidebar';
import { SignInButton } from '@clerk/clerk-react';
import { BackgroundBeams } from './ui/background-beams';

export default function Dashboard() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  // Image slideshow with high-quality dementia care related images
  const images = [
    "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=3271&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=2671&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1661769167673-cfdb37f156d8?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1682094069738-19a65f3145b9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop"
  ];
  
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, []);

  // Enhanced floating particles
  const particles = [...Array(40)].map((_, i) => ({
    id: i,
    size: Math.random() * 12 + 4,
    duration: Math.random() * 25 + 15,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.2,
  }));
  
  const features = [
    {
      icon: Brain,
      title: 'Cognitive Support',
      description: 'Advanced AI algorithms provide personalized cognitive exercises and memory enhancement activities.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Camera,
      title: 'Smart Recognition',
      description: 'Cutting-edge facial recognition helps identify loved ones and maintain social connections.',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: Album,
      title: 'Memory Archive',
      description: 'Create and preserve precious memories with our digital life story book feature.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: MessageSquare,
      title: 'Communication Hub',
      description: 'Stay connected with family through voice messages and easy-to-use video calls.',
      gradient: 'from-rose-500 to-orange-500',
    },
    {
      icon: Clock,
      title: 'Care Schedule',
      description: 'Smart scheduling system for medications, appointments, and daily activities.',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: Users,
      title: 'Family Network',
      description: 'Connect caregivers and family members in a supportive digital community.',
      gradient: 'from-teal-500 to-blue-500',
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Sidebar />
      
      {/* Main content with proper spacing for sidebar */}
      <BackgroundBeams/>
      <div className="ml-16 md:ml-64">
        {/* Animated background with enhanced particles */}
        

        {/* Sign In Button */}
        <div className="absolute top-4 right-4 z-50">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/80 backdrop-blur-sm p-1 rounded-full shadow-lg"
          >
            <SignInButton>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                Sign In
              </button>
            </SignInButton>
          </motion.div>
        </div>

        {/* Hero Section */}
        <motion.section
          style={{ scale }}
          className="min-h-screen flex flex-col items-center justify-center px-4 md:px-12 lg:px-24 py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              CareCompanion
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-12 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering dementia care with intelligent technology and compassionate support
            </motion.p>

            {/* Enhanced Image Slideshow */}
            <div className="relative w-full h-[300px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Slideshow Controls */}
              <div className="absolute inset-x-0 bottom-0 flex justify-between items-center p-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevImage}
                  className="p-2 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-all"
                >
                  <ChevronLeft size={24} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextImage}
                  className="p-2 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-all"
                >
                  <ChevronRight size={24} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Features Grid */}
        <section className="py-20 px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: "-100px" }}
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Transforming Care Through Innovation
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    translateY: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className="p-8 rounded-2xl bg-white/90 backdrop-blur-lg shadow-xl border border-pink-100 overflow-hidden relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className="p-4 rounded-2xl inline-block bg-gradient-to-br from-purple-100 to-pink-100 mb-6">
                      <feature.icon className={`h-8 w-8 bg-gradient-to-br ${feature.gradient} [&>path]:fill-white`} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Video Demo Section */}
        <section className="py-20 px-4 md:px-12 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              See CareCompanion in Action
            </h2>
            <motion.div
              className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-white/90 backdrop-blur-lg p-8 border border-pink-100"
              whileHover={{ scale: 1.01 }}
            >
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
                <p className="text-2xl text-gray-600">
                  Interactive Demo Coming Soon
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 md:px-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center bg-white/90 backdrop-blur-lg rounded-3xl p-16 shadow-2xl border border-pink-100 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Start Your Care Journey Today
              </h2>
              <p className="text-xl mb-10 text-gray-600">
                Join thousands of families who trust CareCompanion to provide compassionate, intelligent care for their loved ones
              </p>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-xl font-semibold shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Begin Free Trial
              </motion.button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}