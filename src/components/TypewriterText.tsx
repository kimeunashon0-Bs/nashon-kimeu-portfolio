
import { useState, useEffect } from "react";

type TypewriterProps = {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
};

const TypewriterText = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Main typewriter effect logic
    const handleTyping = () => {
      const currentText = texts[index];
      
      setIsBlinking(false);

      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        
        // Once we've typed the full text
        if (displayText.length === currentText.length) {
          setIsBlinking(true);
          // Wait before starting to delete
          timeout = setTimeout(() => {
            setIsDeleting(true);
            setIsBlinking(false);
          }, delayBetween);
          return;
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        
        // Once we've deleted the text
        if (displayText.length === 0) {
          setIsDeleting(false);
          // Move to next text
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
          return;
        }
      }

      // Set the next timeout based on whether we're typing or deleting
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(handleTyping, speed);
    };

    timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, index, isDeleting, texts, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <div className="inline-flex items-center h-8">
      <span className="text-primary font-medium">{displayText}</span>
      <span 
        className={`w-1 h-6 ml-1 bg-primary ${
          isBlinking ? "animate-cursor-blink" : ""
        }`}
      />
    </div>
  );
};

export default TypewriterText;
