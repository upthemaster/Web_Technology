import React, { useState, useEffect } from 'react';

const HooksDemo = () => {
  const [data, setData] = useState("Loading...");
  const [timer, setTimer] = useState(0);

  // useEffect Hook: Example of a side effect
  useEffect(() => {
    // This runs after the component renders
    const timeout = setTimeout(() => {
      setData("Hooks (useState & useEffect) are awesome!");
    }, 2000);

    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []); // Empty dependency array means it runs once on mount

  return (
    <div>
      <h2>Activity 4: Understanding Hooks Concept</h2>
      <div style={{ border: '1px solid purple', padding: '10px', margin: '10px' }}>
        <h4>useState Example:</h4>
        <p>Timer: {timer} seconds</p>
        
        <h4>useEffect Example:</h4>
        <p>Status: <strong>{data}</strong></p>
        <p><small>(The text above changes after 2 seconds using useEffect)</small></p>
      </div>
    </div>
  );
};

export default HooksDemo;