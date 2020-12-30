import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import styles from './SignIn.module.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';

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
      <h2 className={styles.title}>I already have an account</h2>
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

        <CustomButton type="submit">Submit Form</CustomButton>
        <CustomButton onClick={signInWithGoogle}>
          Sign in with Google
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
