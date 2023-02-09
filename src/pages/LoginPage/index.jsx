import React from 'react';
import Header from '../../components/Header';
import CreateForm from '../../components/forms/CreateForm';
import GoogleSignButton from '../../components/GoogleSignButton';
import styles from './LoginPage.module.sass';

function LoginPage () {
  return (
    <div className={styles.content}>
      <section>
        <Header />
        <h2>CREATE AN ACCOUNT</h2>
        <h4>We always keep your name and email address private.</h4>
        <CreateForm />
        <p className={styles.terms}>
          By clicking this button, you agree to our{' '}
          <a href='https://www.squadhelp.com/Terms&Conditions'>
            Terms of Service
          </a>
          .
        </p>
        <GoogleSignButton />
      </section>
    </div>
  );
}

export default LoginPage;
