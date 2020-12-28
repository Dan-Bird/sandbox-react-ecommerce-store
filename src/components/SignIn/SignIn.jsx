import React, { useState } from 'react';
import styles from './SignIn.module.scss';

const SignIn = () => {
  const [userDetails, setUserDetails] = useState({ email: '', password: '' });

  const handleSubmit = e => {
    e.preventDefault();
    setUserDetails({ email: '', password: '' });
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setUserDetails(userDetails => ({ ...userDetails, [name]: value }));
  };

  return (
    <div>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={userDetails.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={userDetails.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default SignIn;
