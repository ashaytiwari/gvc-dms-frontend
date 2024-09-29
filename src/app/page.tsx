"use client";

import React from 'react';
import Image from 'next/image';

import { useFormik } from 'formik';
import { Input } from "@nextui-org/react";

import SecureInputField from '@/components/SecureInputField';

import loginCoverImage from '@/assets/images/login-cover-image.png';
import appLogo from '@/assets/images/app-logo.png';

import { validateLoginForm } from './utilities';

import styles from './page.module.scss';

function LoginPage() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: validateLoginForm,
    onSubmit: () => { }
  });
  const formikValues = formik.values;
  const formikErrors = formik.errors;

  function renderLoginCoverImageSection() {

    const loginCoverImageStyle = {
      width: '100%',
      height: 'auto'
    };

    const loginCoverImageAttributes = {
      src: loginCoverImage,
      alt: 'login-cover-image',
      style: loginCoverImageStyle
    };

    return (
      <div id={styles.loginCoverImageSection}>
        <Image {...loginCoverImageAttributes} />
      </div>
    );

  }

  function renderLoginFormSection() {

    let emailError: string | undefined = '';
    let passwordError: string | undefined = '';

    if (formikErrors.email !== '' && formik.touched.email === true) {
      emailError = formikErrors.email;
    }

    if (formikErrors.password !== '' && formik.touched.password === true) {
      passwordError = formikErrors.password;
    }

    const emailInputControlAttributes = {
      type: 'email',
      label: 'Email',
      name: 'email',
      isRequired: true,
      isInvalid: emailError ? true : false,
      errorMessage: emailError,
      value: formikValues.email,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur
    };

    const secureInputFieldAttributes = {
      label: 'Password',
      name: 'password',
      variant: 'underlined',
      isRequired: true,
      isInvalid: passwordError ? true : false,
      errorMessage: passwordError,
      value: formikValues.password,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur
    };

    const loginControlAttributes = {
      className: 'application-solid-button mt-5',
      onClick() {
        formik.handleSubmit();
      }
    };

    const appLogoAttributes = {
      src: appLogo,
      className: styles.appLogo,
      alt: 'app-logo',
      style: {
        height: 'auto'
      }
    };

    return (
      <div id={styles.loginFormSection}>

        <div className={styles.formHeadingSection}>
          <Image {...appLogoAttributes} />
          <h2 className={styles.heading}>Hey, hello 👋</h2>
          <label className={styles.subHeading}>Welcome back to GVC - Data Management System</label>
        </div>

        <div className={styles.loginForm}>
          <Input {...emailInputControlAttributes} variant='underlined' />
          <SecureInputField {...secureInputFieldAttributes} />
          <button {...loginControlAttributes} type='button'>Log In</button>
        </div>

      </div>
    );

  }

  return (
    <div id={styles.loginPageMain}>
      {renderLoginCoverImageSection()}
      {renderLoginFormSection()}
    </div>
  );

}

export default LoginPage;
