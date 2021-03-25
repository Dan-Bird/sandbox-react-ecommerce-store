import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import styles from './SignUp.module.scss';
import { signUpStart } from '../../redux/user/user.actions';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = ({ signUpStart }) => {
  const [userDetails, setUserDetails] = useState(initialState);
  const { displayName, email, password, confirmPassword } = userDetails;

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUserDetails(userDetails => ({ ...userDetails, [name]: value }));
  };

  return (
    <div className={styles['sign-up']}>
      <h2 className={styles.title}>I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form className={styles['sign-up-form']} onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
