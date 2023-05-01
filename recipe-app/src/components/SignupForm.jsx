import React, { useState } from 'react';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // send the form data to the server
    fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          alert('Successfully signed up!');
        } else {
          throw new Error('Sign up failed');
        }
      })
      .catch(error => {
        alert(error.message);
      });
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <label>
        Confirm password:
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
}

export default SignupForm;
