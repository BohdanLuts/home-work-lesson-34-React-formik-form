import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import styles from './GoogleSignButton.module.sass';

function GoogleSignButton () {
  return (
    <div className={styles.createButtonWrapper}>
      <a
        href='https://accounts.google.com/o/oauth2/auth?response_type=code&access_type=online&client_id=78274772730-f62839c388e8b785mhfh211vr4ueva08.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.squadhelp.com%2Flogin.php&state&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&approval_prompt=auto'
        className={styles.createButton}
      >
        <FaGoogle className={styles.iconGoogle} />
        Sign up with Google
      </a>
    </div>
  );
}

export default GoogleSignButton;
