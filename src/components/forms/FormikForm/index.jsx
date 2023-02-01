import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FORM_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';
import styles from './FormikForm.module.sass';
import Input from '../Input';

function FormikForm () {
  const initialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const handleSubmit = (values, formikBag) => {
    console.log('Submit form with values', values);
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
      validationSchema={FORM_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
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
        <button type='submit'>Create Account</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
