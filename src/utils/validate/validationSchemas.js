import * as yup from 'yup';

const NAME_VALIDATION_SCHEMA = yup
  .string()
  .trim()
  .min(2)
  .max(64)
  .required('Field cannot be empty');

const PASSWORD_VALIDATION_SCHEMA = yup
  .string()
  .min(8)
  .max(20)
  .matches(
    /^(?=.*[A-Z].*).{8,20}$/,
    'Password must have minimum one uppercase letter'
  )
  .matches(
    /^(?=.*[a-z].*).{8,20}$/,
    'Password must have minimum one lowercase letter'
  )
  .matches(
    /^(?=.*[!@#$%^&*.].*).{8,20}$/,
    'Password must have minimum one Special character'
  );
export const SIGNUP_VALIDATION_SCHEMA = yup.object({
  firstName: NAME_VALIDATION_SCHEMA,
  lastName: NAME_VALIDATION_SCHEMA,
  displayName: yup
    .string()
    .trim()
    .min(4, 'Display name should be more than 4 characters')
    .max(20)
    .required('Display name cannot be empty'),
  email: yup
    .string()
    .email('Please check the format of email address')
    .required('Please, сhoose security password'),
  password: PASSWORD_VALIDATION_SCHEMA.required(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please, repeate your password'),
});
