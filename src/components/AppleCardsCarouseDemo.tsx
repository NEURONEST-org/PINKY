"use client";

import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import { Image } from "lucide-react";
import logo from './logo-png.png'

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-10">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-500 dark:text-neutral-100 font-sans">
        Get to know your NeuroNest.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {    
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
              Dementia patients struggle with memory loss, daily task management, and recognizing loved ones. Traditional reminders are ineffective, and there are safety concerns such as wandering. Additionally, emotional well-being and cognitive stimulation are often neglected.
              </span>{" "}
              NeuroNest is an AI-powered mobile/web application that provides adaptive reminders, facial recognition, emergency tracking, and emotional well-being support to help dementia patients and caregivers manage daily life efficiently.


            </p>
            <img
              src={logo}
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Personalized Memory Bank 🏞️",
    title: " AI-powered memory recall by recognizing",
    src: "https://images.unsplash.com/photo-1528569937393-ee892b976859?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Smart Object Recognition 📷",
    title:  "AI will identify the strangers .",
    src: "https://media.istockphoto.com/id/1168365129/photo/authentication-by-facial-recognition-concept-biometric-security-system.jpg?s=2048x2048&w=is&k=20&c=JwPYe0TPiH4JQUe5Z5g59Iq2AQE7MsW302d9YN4l4gc=",
    content: <DummyContent />,
  },
  {
    category: "Safety & Emergency Features 🚨",
    title: "Caregivers can set safe zones ",
    src: "https://media.istockphoto.com/id/662948926/photo/women-hands-holding-phone-with-application-call-taxi-on-screen.jpg?s=2048x2048&w=is&k=20&c=0QolN5h2P8v4u_fLTslZSQQGWURifq724sz4DULkzyY=",
    content: <DummyContent />,
  },

  {
    category: "Cognitive Training Games 🎮",
    title: "Minds games for sharpeness of the mind.",
    src: "https://images.unsplash.com/photo-1619976336288-38db38e4c503?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Caregiver & Family Features  👨‍⚕️",
    title: "Medication Progress Tracking and Progress Reports",
    src: "https://images.unsplash.com/photo-1581159186721-b68b78da4ec9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "🎵 Therapeutic Features",
    title: "Music Therapy and Voice Notes",
    src: "https://images.unsplash.com/photo-1723912628184-dfde150fab82?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "📅 Daily Life & Reminders",
    title: "SMS alerts for the patient.",
    src: "https://images.unsplash.com/photo-1561395663-cfe4cf1be1e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
