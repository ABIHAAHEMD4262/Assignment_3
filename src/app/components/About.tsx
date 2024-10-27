import React from 'react';
import image from "next/link";
const About: React.FC = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-between items-center h-screen p-6">
      <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
        <h2 className="text-3xl font-bold mb-4 italic">About Us</h2>
        <p className="text-lg">
        Hello! My name is <i><b>Syeda Abiha Ahmed</b></i> I am creating a beautiful and minimalistic websites to help businesses stand out online.
        As a passionate graphic designer with a strong eye for detail and creativity,
        I specialize in creating visually compelling designs that communicate ideas and enhance user experiences.
        My expertise includes Adobe Creative Suite (Photoshop, Illustrator, InDesign), branding, typography, and 
        digital illustrations.Currently, I am expanding my skill set by learning front-end development, focusing on HTML,
        CSS, JavaScript, and frameworks like Next.js. I aim to bridge the gap between design and development by crafting visually
        stunning and functional web experiences.I am always eager to collaborate on projects that combine both design and code to 
        bring creative ideas to life.</p>
      </div>

      
  <div className="w-full sm:w-1/2 flex justify-center p-[40px] ">
    <img src="/website.webp" alt="About Us" className="w-47 h-47 rounded-md" />
  </div>
    </section>
  );
};

export default About;
