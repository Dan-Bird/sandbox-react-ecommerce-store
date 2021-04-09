import React, { Component } from 'react';
import styles from './ErrorBoundary.module.scss';

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    const { hasErrored } = this.state;

    if (hasErrored) {
      return (
        <div className={styles['error-image__overlay']}>
          <div
            className={styles['error-image__container']}
            style={{
              backgroundImage: `url('https://i.imgur.com/3suxlvm.png')`,
            }}
          ></div>
          <p className={styles['error-image__text']}>We tripped up!</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
