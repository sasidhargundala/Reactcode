import React from 'react';

const ClickMeButton = () => {
  // Define a function that handles the button click event
  const handleClick = () => {
    alert('You clicked me!');
  };

  // Return the JSX element that renders the button
  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
};

export default ClickMeButton;