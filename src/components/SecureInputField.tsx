"use client";

import React, { useState } from 'react';

import { Input } from '@nextui-org/react';

import { ISecureInputFieldProps } from '@/interfaces/uiInterfaces/generic';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const SecureInputField: React.FC<ISecureInputFieldProps> = (props) => {

  const { name, label, variant, value, errorMessage, isRequired, isDisabled, isInvalid, onChange, onBlur } = props;

  const [showContent, setShowContent] = useState(false);

  function renderToggleVisibilityControl() {

    const toggleVisibilityControlAttributes = {
      className: "focus:outline-none",
      onClick() {
        setShowContent((_showContent) => !_showContent);
      }
    };

    const showIconAttributes = {
      icon: faEye,
      className: "text-xl text-default-400 pointer-events-none"
    };

    const hideIconAttributes = {
      icon: faEyeSlash,
      className: "text-xl text-default-400 pointer-events-none"
    };

    return (
      <button {...toggleVisibilityControlAttributes}>
        {showContent ? (
          <FontAwesomeIcon {...showIconAttributes} />
        ) : (
          <FontAwesomeIcon {...hideIconAttributes} />
        )}
      </button>
    );

  }

  const secureInputFieldAttributes = {
    label,
    name,
    value,
    type: showContent === true ? 'text' : 'password',
    errorMessage: typeof errorMessage === 'undefined' ? '' : errorMessage,
    isRequired: typeof isRequired === 'undefined' ? false : isRequired,
    isDisabled: typeof isDisabled === 'undefined' ? false : isDisabled,
    isInvalid: typeof isInvalid === 'undefined' ? false : isInvalid,
    endContent: renderToggleVisibilityControl(),
    onChange,
    onBlur
  };

  return (
    <Input {...secureInputFieldAttributes} variant={variant} />
  );

};

export default SecureInputField;