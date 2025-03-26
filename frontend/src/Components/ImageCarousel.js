import React, { useState, useEffect } from 'react';
import './ImageCarousel.css' // Add some CSS for styling
import { useNavigate } from "react-router-dom";

const ImageCarousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (props.images.length == 0) {
      navigate("/");
    }
  }, []);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + props.images.length) % props.images.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % props.images.length;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    props.images.length && <div className="carousel-container">
      <div className="main-image">
        <button onClick={goToPrevious} className="nav-button prev">&#10094;</button>
        <div className="image-wrapper">
          <img src={`http://127.0.0.1:8002/images/${props.images[currentIndex].imageUrl}`} alt="carousel-slide" className="carousel-image" />
        </div>
        <button onClick={goToNext} className="nav-button next">&#10095;</button>
      </div>
      <div className="thumbnails">
        {props.images.map((image, index) => (
          <img 
            key={index} 
            src={`http://127.0.0.1:8002/images/${image.imageUrl}`} 
            alt={`Thumbnail ${index + 1}`} 
            className={currentIndex === index ? 'thumbnail active' : 'thumbnail'}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
