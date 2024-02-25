import React from 'react';
import './FireAnimation.css'; // Onde você coloca o CSS

const FireAnimation = () => {
  const parts = Array.from({ length: 50 }, (_, i) => i + 1);

  return (
    <div className="fire">
      {parts.map((p) => (
        <div key={p} className="particle" style={{ animationDelay: `${1 * Math.random()}s`, left: `calc((100% - 5em) * ${(p - 1) / 50})` }}></div>
      ))}
    </div>
  );
};

export default FireAnimation;
