import React from 'react';
import { Pill, Stethoscope, Bell, Sun, Moon } from 'lucide-react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Sidebar from './Sidebar';



export default function Reminders() {
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

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
    <Sidebar/>
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* <Sidebar/> */}
      {/* Beautiful gradient background */}
      <div
        className={`fixed inset-0  'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'`}
      >
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full  'bg-purple-200/20'`}
              style={{
                width: `${Math.random() * 400 + 100}px`,
                height: `${Math.random() * 400 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}

      <Sidebar/>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="relative max-w-4xl mx-auto px-4 py-12"
      >
        <motion.div
          className={` 'bg-white/90' backdrop-blur-lg rounded-2xl shadow-2xl p-8`}
          variants={itemVariants}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className={`text-2xl font-bold  'text-gray-900'`}>
              Daily Care Reminders
            </h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full  'bg-gray-100'`}
            >
              <Moon className="h-6 w-6 text-purple-400" />
             
            </motion.button>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {categories.map(({ icon: Icon, label, count }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl  'bg-white hover:bg-gray-50' transition-colors duration-200 shadow-lg`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-full  'bg-purple-100'`}>
                    <Icon className={`h-6 w-6  'text-purple-600'`} />
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full  'bg-purple-100 text-purple-800'`}>
                    {count}
                  </span>
                </div>
                <h3 className={`font-medium  'text-gray-900'`}>
                  {label}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Reminders */}
          <div className="space-y-4">
            {reminders.map((reminder, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className={`p-6 rounded-xl  'bg-white hover:bg-gray-50' transition-colors duration-200 shadow-lg`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className={`font-medium text-lg  'text-gray-900'`}>
                    {reminder.title}
                  </h4>
                  <span className={`text-sm px-3 py-1 rounded-full  'bg-purple-100 text-purple-800'`}>
                    {reminder.category}
                  </span>
                </div>
                <p className={`text-sm  'text-gray-600'`}>
                  {reminder.time} • {reminder.recurring || reminder.date}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Add Reminder Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl shadow-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 flex items-center justify-center"
          >
            <Bell className="h-5 w-5 mr-2" />
            Add New Reminder
          </motion.button>
        </motion.div>
      </motion.div>
              </div>
    </>
  );
}