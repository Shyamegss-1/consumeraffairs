import React from "react";

type Props = {};

const LoginForm = (props: Props) => {
  return (
    <form action="action/businesscontroller" method="post" className="mt-5">
      <div className="form-field">
        <label>Email Address*</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email or phone number"
          id="email"
          style={{
            backgroundImage: 'url("data:image/png',
            backgroundRepeat: "no-repeat",
            backgroundSize: 20,
            backgroundPosition: "97% center",
            cursor: "auto",
          }}
          data-temp-mail-org={0}
        />
      </div>
      <div className="form-field">
        <label>Password*</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          id="password"
        />
      </div>
      <div className="form-field d-flex justify-content-between">
        <div className="forgot-link">
          <a href="/business/forgot.php">Forgot password?</a>
        </div>
      </div>
      <div className="form-field">
        <button
          className="theme-btn1 px-5 login-btn"
          name="login"
          type="submit"
          id="login"
        >
          Sign In
        </button>
        <p className="mt-2">
         {" Don't have an account? "}<a href="register">Create a free account</a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
