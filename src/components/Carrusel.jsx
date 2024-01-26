import { useEffect, useState } from "react";
import "./Carrusel.css";
import auto1 from "../assets/auto1.jpg";
import auto2 from "../assets/auto2.jpg";
import auto3 from "../assets/auto3.jpg";
import auto4 from "../assets/auto4.jpg";
import auto5 from "../assets/auto5.jpg";
import auto6 from "../assets/auto6.jpg";


    const Carrusel = () => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const [isHovered, setIsHovered] = useState(false);
      
        const images = [
            auto1,
            auto2,
            auto3,
            auto4,
            auto5,
            auto6,auto1,
            auto2,
            auto3,
            auto4,
            auto5,
            auto6,auto1,
            auto2,
            auto3,
            auto4,
            auto5,
            auto6
        ];
      
        useEffect(() => {
          const intervalId = setInterval(() => {
            if (!isHovered) {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }
          }, 2000);
      
          return () => clearInterval(intervalId);
        }, [isHovered, images.length]);
      
        const handleMouseEnter = () => {
          setIsHovered(true);
        };
      
        const handleMouseLeave = () => {
          setIsHovered(false);
        };
      
        const getImageStyle = (index) => {
          const baseWidth = 25;
          const distanceFromCenter = Math.abs(index - currentIndex);
          const additionalWidth = distanceFromCenter === 3 ? 10 : Math.max(5, 0 - distanceFromCenter * 2);
          const width = `${baseWidth - additionalWidth}%`;
      
          return {
            width,
            height: 'auto',
            objectFit: 'cover',
            marginRight: '1%',
            marginLeft: index === 0 ? `-${images.length * (baseWidth + 1)}%` : '0',
            transition: 'transform 0.3s ease-in-out',
            transform: `translateX(${(index - currentIndex) * (baseWidth + 1)}%)`,
          };
        };
      
        return (
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                transition: 'transform 0.5s ease-in-out',
                transform: `translateX(${currentIndex * (30 + 1)}%)`,
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt={`Imagen ${i + 1}`}
                  style={getImageStyle(i)}
                />
              ))}
            </div>
          </div>
        );
      };
      
      export default Carrusel;