import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
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
    <div className={styles['sign-in']}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          id="email"
          value={userDetails.email}
          handleChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          id="password"
          value={userDetails.password}
          handleChange={handleChange}
          label="Password"
          required
        />

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default SignIn;
