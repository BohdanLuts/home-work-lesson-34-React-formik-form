import React from 'react';
import { Formik, Form } from 'formik';
import { SIGNUP_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';
import styles from './CreateForm.module.sass';
import Input from '../Input';

function CreateForm () {
  const initialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const handleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SIGNUP_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <div className={styles.inputRow}>
          <Input
            type='text'
            name='firstName'
            placeholder='First name'
            classes={classes}
            autoFocus
          />

          <Input
            type='text'
            name='lastName'
            placeholder='Last name'
            classes={classes}
          />
        </div>
        <div className={styles.inputRow}>
          <Input
            type='text'
            name='displayName'
            placeholder='Display Name'
            classes={classes}
          />
          <Input
            type='email'
            name='email'
            placeholder='Email Adress'
            classes={classes}
          />
        </div>
        <div className={styles.inputRow}>
          <Input
            type='password'
            name='password'
            placeholder='Password'
            classes={classes}
          />
          <Input
            type='password'
            name='passwordConfirmation'
            placeholder='Password Confirmation'
            classes={classes}
          />
        </div>

        <button type='submit' className={styles.createButton}>
          Create Account
        </button>
      </Form>
    </Formik>
  );
}

export default CreateForm;
