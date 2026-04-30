import React from 'react';

// Child component receiving props
const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid blue', padding: '10px', margin: '10px' }}>
      <h4>User: {props.name}</h4>
      <p>Role: {props.role}</p>
    </div>
  );
};

const PropsDemo = () => {
  return (
    <div>
      <h2>Activity 2: Understanding Props</h2>
      <p>Passing data from Parent (PropsDemo) to Child (UserProfile):</p>
      <UserProfile name="Aayan Mujawar" role="Full Stack Developer" />
      <UserProfile name="John Doe" role="React Specialist" />
    </div>
  );
};

export default PropsDemo;