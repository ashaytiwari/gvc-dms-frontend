import messages from "@/constants/messages";

import { ILoginParamsModel } from "@/interfaces/models/auth";

import { validateEmail, validatePassword } from "@/utilities/formValidations";

export function validateLoginForm(values: ILoginParamsModel) {

  const errors = {} as ILoginParamsModel;

  if (!values.email) {
    errors.email = messages.required;
  } else if (validateEmail(values.email) === true) {
    errors.email = messages.invalidEmail;
  }

  if (!values.password) {
    errors.password = messages.required;
  } else if (validatePassword(values.password) === true) {
    errors.password = messages.passwordMustBe6CharLong;
  }

  return errors;
}