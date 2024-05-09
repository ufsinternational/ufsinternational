"use client"
import { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';

const ProfileHandler = ({ profiles }) => {
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [shouldDisplay, setShouldDisplay] = useState(Array(profiles.name.length).fill(true));
    const [transitioning, setTransitioning] = useState(false);
  
    const handleClick = (index) => {
      setTransitioning(true);
      setTimeout(() => {
        if (selectedProfile === null) {
          const newShouldDisplay = Array(profiles.name.length).fill(false);
          newShouldDisplay[index] = true;
          setSelectedProfile(index);
          setShouldDisplay(newShouldDisplay);
        } else {
          setSelectedProfile(null);
          setShouldDisplay(Array(profiles.name.length).fill(true));
        }
        setTransitioning(false);
      }, 500);
    };
  
    useEffect(() => {
      if (selectedProfile !== null) {
        setShouldDisplay(Array(profiles.name.length).fill(false));
        setShouldDisplay((prev) => {
          const newDisplay = [...prev];
          newDisplay[selectedProfile] = true;
          return newDisplay;
        });
      } else {
        setShouldDisplay(Array(profiles.name.length).fill(true));
      }
    }, [selectedProfile, transitioning]);

    return (
        <FlipMove className="pt-8 flex flex-row flex-wrap justify-center gap-10">
          {profiles.name.map((member, index) => (
            shouldDisplay[index] && (
              <div 
                key={index}
                onClick={() => handleClick(index)}
                className={`relative cursor-pointer transition-all duration-500 animate-fade-in ${selectedProfile !== null && selectedProfile !== index ? 'opacity-0 transition-opacity duration-500' : 'opacity-100 transition-opacity duration-500'}`}
              >
                <div className={`member m-2 transform transition-transform duration-500 ${selectedProfile === index ? 'px-60 scale-150 flex flex-row justify-center items-center' : 'text-center hover:scale-110'}`}>
                  <img src={profiles.image[index]} alt={member} className="rounded-full" />
                  <div className={`${selectedProfile === index ? 'px-10' : ''}`}>
                    <h3 className="font-bold text-lg">{member}</h3>
                    <p className={`${selectedProfile === index ? 'hidden' : 'text-sm'}`}>{profiles.position[index]}</p>
                    <div className={`${selectedProfile === index ? '' : 'hidden'}`}>{profiles.description[index]}</div>
                  </div>
                </div>
              </div>
            )
          ))}
        </FlipMove>
      )
};

export default ProfileHandler;