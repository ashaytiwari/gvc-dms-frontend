import React from "react";

export interface ISecureInputFieldProps {
  name: string,
  label: string,
  variant: string,
  value: string,
  errorMessage?: string,
  isRequired?: boolean,
  isDisabled?: boolean,
  isInvalid?: boolean,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onBlur: (event: any) => void
}

export interface IRootProviderProps {
  children: React.ReactNode
}