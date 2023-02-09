import React from 'react';
import styles from './Header.module.sass';
import logo from './../../img/logo.png';

function Header () {
  return (
    <div className={styles.signupHeader}>
      <div className={styles.logo}>
        <a href='https://www.squadhelp.com/'>
          <img src={logo} alt='Logo' className={styles.logoImg} />
        </a>
      </div>
      <div className={styles.loginButton}>
        <a href='#'>Login</a>
      </div>
    </div>
  );
}

export default Header;
