import media from '../assets/media.png'
import React from 'react';

const Card = () => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white" style={{ width: '200px' , marginLeft:'800px' , marginTop: '-205px'}}>
      <img className="w-full h-20 object-cover" src={media} alt="CEO" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">John Doe</div>
        <p className="text-gray-700 text-base">CEO</p>
      </div>
      <div className="flex items-center justify-between bg-red-200">
        {/* Social media icons, replace with your own icons */}
        <a href="#your-link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f text-blue-500 mx-2"></i>
        </a>
        <a href="#your-link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter text-blue-400 mx-2"></i>
        </a>
        <a href="#your-link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in text-blue-700 mx-2"></i>
        </a>
      </div>
    </div>
  );
};

export default Card;
