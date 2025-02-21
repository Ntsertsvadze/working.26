import React from 'react';
import myImage from '../assets/chiatura.jpg'; 

const About: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img src={myImage} alt="Description" className="w-full h-full object-cover" />
    </div>
  );
};

export default About;

