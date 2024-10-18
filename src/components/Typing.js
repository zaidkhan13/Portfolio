import React, { useState, useEffect } from "react";
import "../assets/styles/typing.css";

const TypingEffect = ({ words, speed = 150, pause = 1000 }) => {
  const [displayedText, setDisplayedText] = useState(""); // Current text being typed
  const [index, setIndex] = useState(0); // Index of the word in the array
  const [subIndex, setSubIndex] = useState(0); // Index of the letter in the word
  const [isDeleting, setIsDeleting] = useState(false); // Are we deleting text?
  const [pauseBetweenWords, setPauseBetweenWords] = useState(false); // Pause after a word

  useEffect(() => {
    if (pauseBetweenWords) return;

    // Typing interval logic
    const timeout = setTimeout(() => {
      const currentWord = words[index]; // Get the current word from the list

      // Handle typing forward
      if (!isDeleting && subIndex < currentWord.length) {
        setDisplayedText(currentWord.substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);
      }

      // Handle deleting
      else if (isDeleting && subIndex > 0) {
        setDisplayedText(currentWord.substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);
      }

      // Move to the next word after typing or deleting the word fully
      else {
        if (!isDeleting) {
          setIsDeleting(true);
          setPauseBetweenWords(true);
          setTimeout(() => setPauseBetweenWords(false), pause); // Pause after typing the word
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length); // Move to next word or loop
          setSubIndex(0); // Reset typing
        }
      }
    }, speed);

    // Clear the timeout when the component is re-rendered
    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, pauseBetweenWords, index, pause, speed, words]);

  return (
    <span className="text">
      {displayedText}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypingEffect;
