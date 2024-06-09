"use client"
import { useState } from 'react';
import { Button } from './button-provider';

const ButtonHandler = ({ buttonStyle, buttons }) => {
    const [activeButton, setActiveButton] = useState(null);
    const [displayText, setDisplayText] = useState('');
    const [isFading, setIsFading] = useState(false);
  
    const handleClick = (buttonName, text) => {
        setActiveButton(buttonName); 
        setIsFading(true);
        setTimeout(() => {
            setDisplayText(text);
            setIsFading(false);
        }, 500); // Delay equal to the transition duration
    }
  
    return (
      <div>
        {buttons.map(button => (
          <Button 
            className={activeButton === button.name ? `${buttonStyle} bg-purple-900` : buttonStyle}
            active={activeButton === button.name}
            onClick={() => handleClick(button.name, button.displayText)}
          >
            {button.text}
          </Button>
        ))}
        <p className={`pt-10 transition-opacity duration-500 ${isFading || !Object.keys(displayText).length ? 'opacity-0' : 'opacity-100'}`}>
        {Object.entries(displayText).map(([key, value], index) => {
            return <span key={index}>{value.split('\n').map((line, i) => 
            <span key={i}>
                {line.split('\b').map((part, j) => 
                <span key={j} className={j % 2 !== 0 ? 'boldUnderline' : ''}>
                    {part}
                </span>
                )}
                {i < value.split('\n').length - 1 ? <br /> : null}
            </span>
            )}</span>
        })}
        </p>
        </div>
    );
  }
  
  export default ButtonHandler;