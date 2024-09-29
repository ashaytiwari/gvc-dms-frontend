/**
 * Form Validations directory norms
 * true: value is invalid
 * false: valid is valid
 */

export function validatePassword(password: string) {

  if (password.length >= 6) {
    return false;
  }

  return true;

}

export function validateEmail(email: string) {

  if (
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  ) {
    return false;
  }

  return true;

}