// Import React from 'react' module
import React from 'react';

// Define an array of names that you want to display
const names = ['sasi', 'ram', 'ravi', 'sam', 'raju'];

// Define a function that returns JSX code
function NameList() {
  // Return JSX code
  return (
    // Use the <ul> tag to create an unordered list element
    <ul>
       {/* Use the map function to iterate over the array of names and return a li element for each name */}
      {names.map((name) => (
        // Use curly braces to embed JavaScript expressions in JSX
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

// Export the component
export default NameList;