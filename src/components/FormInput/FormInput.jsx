import React from 'react';
import styles from './FormInput.module.scss';

const FormInput = ({ handleChange, label, value, ...otherProps }) => {
  return (
    <div className={styles.group}>
      <input
        className={styles['form-input']}
        onChange={handleChange}
        {...otherProps}
      />
      {label && (
        <label
          className={`${value.length ? styles.shrink : ''} ${
            styles['form-input-label']
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
