import React, { useState } from 'react';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleReset = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const found = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!email) return alert('Enter your email');
    if (!isValidEmail(email)) return alert('Invalid email');
    if (!found) return alert('Email not registered');
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="form-container">
      <div className="card">
        <h2>Forgot Password</h2>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleReset}>Submit</button>
      </div>
    </div>
  );
};

export default ForgotPassword;