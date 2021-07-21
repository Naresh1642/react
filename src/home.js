import React from 'react';

const home = () => {
  let name = 'mario';

  const handleClick = () => {
    
  };
  return (
    <div className="home">
      <h2>Home</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default home;
