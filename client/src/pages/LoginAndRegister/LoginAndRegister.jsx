import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import styles from './LoginAndRegister.module.scss';

const LoginAndRegister = () => {
  return (
    <div className={styles['form-container']}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default LoginAndRegister;
