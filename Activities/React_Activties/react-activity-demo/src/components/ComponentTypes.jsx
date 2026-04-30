import React from 'react';

// 1. Functional Component
function FunctionalComponent() {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>Functional Component</h3>
      <p>This is a simple functional component.</p>
    </div>
  );
}

// 2. Class Component
class ClassComponent extends React.Component {
  render() {
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
        <h3>Class Component</h3>
        <p>This is a standard class-based component.</p>
      </div>
    );
  }
}

const ComponentTypes = () => {
  return (
    <div>
      <h2>Activity 1: Types of Components</h2>
      <FunctionalComponent />
      <ClassComponent />
    </div>
  );
};

export default ComponentTypes;