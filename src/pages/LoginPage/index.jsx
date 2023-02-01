import React from 'react';
import FormikHeader from '../../components/FormikHeader';
import FormikForm from '../../components/forms/FormikForm';
import styles from './../../styles/styles.module.sass';

function LoginPage () {
  return (
    <div className={styles.content}>
      <section>
        <FormikHeader />
        <h1>CREATE AN ACCOUNT</h1>
        <h2>We always keep your name and email address private.</h2>
        <FormikForm />
        <p>
          By clicking this button, you agree to our{' '}
          <a href='#'>Terms of Service</a>.
        </p>
      </section>
    </div>
  );
}

export default LoginPage;
