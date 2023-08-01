import React, { useState, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"; // import these at the top of your file
import "./Home.css";

const TypewriterText = ({ text, delay = 100, onComplete }) => {
  const [typewriterText, setTypewriterText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (typewriterText.length < text.length) {
        setTypewriterText(text.substr(0, typewriterText.length + 1));
      } else {
        clearInterval(intervalId);
        if (onComplete) {
          onComplete();
        }
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [typewriterText, text, delay, onComplete]);

  return <>{typewriterText}</>;
};

const Home = () => {
  const [isNameTyped, setIsNameTyped] = useState(false);
  const [isProfessionTyped, setIsProfessionTyped] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (isProfessionTyped) {
      setTimeout(() => setShowSummary(true), 1000);
      setTimeout(() => setShowButton(true), 2000);
    }
  }, [isProfessionTyped]);

  return (
    <div id="home" className="content-section">
      <h2>
        <TypewriterText
          text="Hi, my name is"
          delay={25}
          onComplete={() => setIsNameTyped(true)}
        />
      </h2>
      {isNameTyped && (
        <h1>
          <TypewriterText
            text="Jared Cusick"
            delay={50}
            onComplete={() => setIsProfessionTyped(true)}
          />
        </h1>
      )}
      {isProfessionTyped && (
        <h3>
          <TypewriterText text="Junior Software Developer" delay={100} />
        </h3>
      )}
      {showSummary && (
        <p className="fade-in">
          I'm a software engineer based in the midwestern city of Cincinnati,
          Ohio. During my career I've developed many different types of software from front end to 
          backend. My passion for innovation and agile coding practices have led me to create digital experiences 
          that are aesthetically pleasing but also user oriented. I strive to deliver comprehensive solutions that drive engagement and exceed expectations.
        </p>
      )}
      {showButton && (
        <div className="contact-container fade-in">
          <a href="mailto:jaredmcusick@gmail.com">
            <button>Contact me</button>
          </a>
          <div className="social-icons">
            <a
              href="https://github.com/JaredCusick"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.instagram.com/jared.cusick/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/jared-cusick-604154194/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
