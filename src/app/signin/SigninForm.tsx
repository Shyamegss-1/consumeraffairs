"use client";
import { loginHandler } from "@/server-actions/authActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const SigninForm = () => {
  const router: any = useRouter();
  const error = router.query;
  return (
    <form
      className="ca-form"
      action={async (formData) => {
        const email = formData.get("email");
        const password = formData.get("password");
        const toastId = toast.loading("Logging In");
        if (!email) {
          return toast.error("Email Address is required", {
            id: toastId,
          });
        }
        if (!password) {
          return toast.error("Password is required", {
            id: toastId,
          });
        }

        const res = await loginHandler({
          email: email ? (email as string) : "",
          password: password ? (password as string) : "",
        });
        console.log(res, "error");

        if (res.status) {
          toast.success("Login successful", {
            id: toastId,
          });
          router.refresh();
        } else {
          toast.error(res.message, {
            id: toastId,
          });
        }
      }}
    >
      <input
        type="hidden"
        name="csrfmiddlewaretoken"
        defaultValue="2vkTQP837Zb0ZEamopDXgzO4RbuLGlzl7AA3xoQEK8RXr6dsOS03yRXr1o3dbe07"
      />
      <div
        className="ca-form__group js-form-group js-floating-label-input"
        data-sg-init="[true]"
      >
        <label className="ca-form__label ca-form__label--cr js-label">
          Email address
        </label>
        <input
          className="ca-form__input ca-form__input--alt ca-form__input--lg js-first-name"
          placeholder="Email address"
          type="text"
          name="email"
          style={{
            backgroundImage: 'url("data:image/png',
            backgroundRepeat: "no-repeat",
            backgroundSize: 20,
            backgroundPosition: "97% center",
            cursor: "auto",
          }}
          data-temp-mail-org={0}
        />
        <ul className="ca-form__error js-errorlist"></ul>
      </div>
      <div
        className="ca-form__group js-form-group js-floating-label-input"
        data-sg-init="[true]"
      >
        <label className="ca-form__label ca-form__label--cr js-label">
          Password
        </label>
        <input
          className="ca-form__input ca-form__input--alt ca-form__input--lg js-first-name"
          placeholder="Password"
          type="password"
          name="password"
          style={{
            backgroundImage: 'url("data:image/png',
            backgroundRepeat: "no-repeat",
            backgroundSize: 20,
            backgroundPosition: "97% center",
            cursor: "auto",
          }}
          data-temp-mail-org={0}
        />
        <ul className="ca-form__error js-errorlist"></ul>
      </div>
      <input
        type="hidden"
        name="next"
        defaultValue="https://www.consumeraffairs.com/"
      />
      <input type="hidden" name="jwt" defaultValue="" />
      <input type="hidden" name="is_authenticated_on_sp" defaultValue="" />
      <input type="hidden" name="from_login_flow_start" defaultValue={1} />
      <div className="login__btns">
        <button className="ca-btn ca-btn--thrd crd__btn" type="submit">
          Continue
        </button>
        <p className="login__lnk-or">or login with </p>
        <button
          type="button"
          className="ca-btn crd__btn login__btn login__btn--ggl ca-btn--wh-lght js-login-popup"
          data-url="/social-login/google-oauth2/?secondary_redirect=https%3A%2F%2Fwww.consumeraffairs.com%2F&in_popup=1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
            <g fill="none" fillRule="evenodd">
              <path
                className="ca-icon__colored-fill"
                d="M11.2 9v4.2h6a5 5 0 01-2.2 3.3v2.8h3.7c2-2 3.3-4.7 3.3-8 0-.8 0-1.6-.2-2.3H11.2z"
              />
              <path
                className="ca-icon__colored-fill"
                d="M1.2 13v3c1.9 3.5 5.7 6 10 6 3 0 5.6-1 7.5-2.7L15 16.5a6.8 6.8 0 01-10-3.4H1.2z"
              />
              <path
                className="ca-icon__colored-fill"
                d="M1.2 6a10.7 10.7 0 000 10L5 13a6.4 6.4 0 01-.4-2c0-.7.2-1.4.4-2V6H1.2z"
              />
              <path
                className="ca-icon__colored-fill"
                d="M1.2 6L5 9a6.7 6.7 0 016.2-4.6c1.7 0 3.2.6 4.3 1.6L18.7 3c-2-1.8-4.4-2.8-7.5-2.8C7 0 3.1 2.5 1.2 6z"
              />
            </g>
          </svg>
          Google
        </button>
        <p>
          Looking for{" "}
          <button
            type="button"
            className="ca-a ca-btn--link ca-a--cr login__lnk--mrgn-bot js-tooltip"
            data-tooltip-options='{ "content": "\u003Cp\u003EWe’ve recently updated our accounts and no longer support Facebook, Twitter or Yahoo social logins.\u003C/p\u003E\u003Cp\u003ETo access your account, use our \u003Ca href\u003D\u0022/forgot\u002Dpassword/\u0022\u003Epassword reset form\u003C/a\u003E and enter the email address associated with your social login or \u003Ca href\u003D\u0022https://www.consumeraffairs.com/about/contact\u0022 target\u003D\u0022_blank\u0022\u003Econtact our Consumer Engagement Team\u003C/a\u003E for assistance.\u003C/p\u003E", "showOn": "click" }'
          >
            Facebook, Twitter or Yahoo?
          </button>
        </p>
        <Link className="login__lnk ca-a--cr" href="/forgot-password/">
          Forgot password
        </Link>
        <Link className="login__lnk ca-a--cr" href="/signup">
          Not a member yet?{" "}
          <span className="text-blue-600 underline">Create an account</span>
        </Link>
      </div>
    </form>
  );
};

export default SigninForm;
