import React, { useState } from 'react';

const StateDemo = () => {
  // Example 1: Counter (Numeric State)
  const [count, setCount] = useState(0);

  // Example 2: Toggle Visibility (Boolean State)
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h2>Activity 3: Understanding State (2 Examples)</h2>
      
      <div style={{ border: '1px solid green', padding: '10px', margin: '10px' }}>
        <h4>Example 1: Counter App</h4>
        <p>Current Count: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
        <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>Reset</button>
      </div>

      <div style={{ border: '1px solid orange', padding: '10px', margin: '10px' }}>
        <h4>Example 2: Toggle Message</h4>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? 'Hide' : 'Show'} Secret Message
        </button>
        {isVisible && (
          <p style={{ color: 'red', fontWeight: 'bold' }}>
            This is a secret message toggled using React State!
          </p>
        )}
      </div>
    </div>
  );
};

export default StateDemo;