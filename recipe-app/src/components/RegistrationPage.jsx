import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function RegistrationPage() {
  return (
    <div>
      <h1>Registration</h1>
      <div>
        <LoginForm />
        <SignupForm />
      </div>
    </div>
  );
}

export default RegistrationPage;
