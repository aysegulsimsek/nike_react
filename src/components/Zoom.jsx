import React, { useState } from 'react';
import '../css/ZoomImage.css';

const ZoomImage = ({ src, alt }) => {
  const [transformOrigin, setTransformOrigin] = useState('50% 50%');

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  return (
    <div className='outer-container'>
    <div className="zoom-container" onMouseMove={handleMouseMove}>
      <img src={src} alt={alt} className="zoom-image" style={{ transformOrigin }} />
      </div>
      </div>
  );
};

export default ZoomImage;
