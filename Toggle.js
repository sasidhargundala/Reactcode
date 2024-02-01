import React, { useState } from 'react';

const ToggleContent = () => {
  // Declare a state variable to track the visibility of the content
  const [showContent, setShowContent] = useState(false);

  // Define a function that toggles the state variable on click
  const handleClick = () => {
    setShowContent(!showContent);
  };

  // Define the content to be displayed or hidden
  const content = (
    <div className="content">
      <p>This is some content that can be toggled.</p>
    </div>
  );

  return (
    <div className="toggle-content">
      <button onClick={handleClick}>
        {showContent ? 'Hide' : 'Show'} Content
      </button>
      {showContent && content}
    </div>
  );
};

export default ToggleContent;