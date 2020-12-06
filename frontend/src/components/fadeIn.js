import React, { useState, useRef } from 'react';
import '../styles/fadein.css';

const FadeIn = props => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    let c = domRef.current;
    observer.observe(c);
    return () => observer.unobserve(c);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeIn;
