import React from "react";

type Props = {
  children: React.ReactNode;
  wrapperStyle: {
    [key: string]: any;
  };
  wrapperClass: string;
  inputSyle: {
    [key: string]: any;
  };
  inputClass: string;
  error: string;
  label: string;
  value: any;
};

export const EmailInput = (props: Props) => {
  const {
    wrapperStyle,
    wrapperClass,
    inputSyle,
    inputClass,
    error,
    label,
    children,
    ...rest
  } = props;

  return (
    <div
      className={`ca-form__group js-form-group js-floating-label-input + ${wrapperClass}`}
      data-sg-init="[true]"
      style={wrapperStyle}
    >
      <label className="ca-form__label ca-form__label--cr js-label">
        {label}
      </label>
      <input
        className="ca-form__input ca-form__input--alt ca-form__input--lg js-first-name"
        placeholder="Email address"
        type="text"
        name="username"
        style={{
          backgroundImage: 'url("data:image/png',
          backgroundRepeat: "no-repeat",
          backgroundSize: 20,
          backgroundPosition: "97% center",
          cursor: "auto",
        }}
        {...rest}
        data-temp-mail-org={0}
      />
      {children}
      <ul className="ca-form__error js-errorlist">{error}</ul>
    </div>
  );
};

export const PasswordInput = (props: Props) => {
  const {
    wrapperStyle,
    wrapperClass,
    inputSyle,
    inputClass,
    error,
    label,
    children,
    ...rest
  } = props;

  return (
    <div
      className={`ca-form__group js-form-group js-floating-label-input + ${wrapperClass}`}
      data-sg-init="[true]"
      style={wrapperStyle}
    >
      <label className="ca-form__label ca-form__label--cr js-label">
        {label}
      </label>
      <input
        className="ca-form__input ca-form__input--alt ca-form__input--lg js-first-name"
        placeholder="Email address"
        type="text"
        name="username"
        style={{
          backgroundImage: 'url("data:image/png',
          backgroundRepeat: "no-repeat",
          backgroundSize: 20,
          backgroundPosition: "97% center",
          cursor: "auto",
        }}
        {...rest}
        data-temp-mail-org={0}
      />
      {children}
      <ul className="ca-form__error js-errorlist">{error}</ul>
    </div>
  );
};
