import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import styles from './SignIn.module.scss';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userDetails, setUserDetails] = useState({ email: '', password: '' });

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = userDetails;

    emailSignInStart(email, password);
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

        <div className={styles['button-container']}>
          <CustomButton type="submit">Submit Form</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
