import React, { useState } from 'react';

const LoginForm = () => {
  // Declare state variables to store the input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Define a function that handles the form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default browser behavior
    // Do something with the username and password, such as sending them to an API
    console.log(username, password);
  };

  // Return the JSX element that renders the form
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;