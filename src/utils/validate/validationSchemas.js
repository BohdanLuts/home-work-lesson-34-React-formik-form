import * as yup from 'yup';

export const FORM_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2)
    .max(64)
    .required('Field cannot be empty'),
  lastName: yup
    .string()
    .trim()
    .min(2)
    .max(64)
    .required('Field cannot be empty'),
  displayName: yup
    .string()
    .trim()
    .min(4, 'Display name should be more than 4 characters')
    .max(20)
    .required(),
  email: yup.string().email('Please check the format of email address'),
  // password: yup
  //   .min(8)
  //   .max(20)
  //   .matches(/^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*_].*).{8,32}$/)
  //   .required(),
  // passwordConfirmation: yup
  //   .min(8)
  //   .max(20)
  //   .matches(
  //     /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*_].*).{8,32}$/,
  //     'Password confirmation needs to match original password'
  //   )
  //   .required()
});
