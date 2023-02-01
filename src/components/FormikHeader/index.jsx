import React from 'react';
import styles from './FormikHeader.module.sass';
import logo from './../../img/logo.png';

function FormikHeader () {
  return (
    <div className={styles.signupHeader}>
      <div className={styles.logo}>
        <a href='#'>
          <img src={logo} alt='Logo' className={styles.logoImg} />
        </a>
      </div>
      <div className={styles.loginButton}>
        <a href='#'>Login</a>
      </div>
    </div>
  );
}

export default FormikHeader;
