"use client";
import { loginHandler, signupHandler } from "@/server-actions/authActions";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";

interface Country {
  name: string;
}

interface SignupFormProps {
  countryList: Country[];
}

const SignupForm: React.FC<SignupFormProps> = ({ countryList }) => {
  const router = useRouter();

  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("-- Select Country --");

  const handleSubmit = async (formData: FormData) => {
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    // const address = formData.get("address");
    // const zip = formData.get("zip");
    // const province = formData.get("province");
    // const city = formData.get("city");
    const email = formData.get("email");
    const password = formData.get("password1");
    const password2 = formData.get("password2");

    const data = {
      firstName: first_name ? (first_name as string) : ("" as string),
      lastName: last_name ? (last_name as string) : ("" as string),
      // address: address ? address as string: ("" as string),
      // zip: zip ? zip as string: ("" as string),
      // province: province ? province as string: ("" as string),
      // city: city ? city as string: ("" as string),
      email: email ? (email as string) : ("" as string),
      password: password ? (password as string) : ("" as string),
      confirmPassword: password2 ? (password2 as string) : ("" as string),
    };
    const toastId = toast.loading("Logging In");
    const res = await signupHandler({ ...data });
    console.log(res, "error");

    if (!res.status) {
      toast.error(res.message, {
        id: toastId,
      });
    } else {
      // await loginHandler({
      //   email: data.email,
      //   password: data.password,
      // });
      // toast.success("Signup successful", {
      //   id: toastId,
      // });
      toast.dismiss();
      Swal.fire({
        title: "Success",
        text: "Check your email to verify your account",
      });
      // router.refresh()
      redirect("/");
    }
    // await loginHandler({
    //   email: data.email,
    //   password: data.cpassword,
    // });
  };

  return (
    <form className="create ca-form" action={handleSubmit}>
      <div className="create__flds-cntr">
        <div
          className="ca-form__group js-form-group js-floating-label-input create__grp"
          data-sg-init="[true]"
        >
          <label className="ca-form__label ca-form__label--cr js-label">
            First name*
          </label>
          <input
            required={true}
            className="ca-form__input ca-form__input--alt"
            placeholder="First name*"
            type="text"
            name="first_name"
          />
          <ul className="ca-form__error js-errorlist"></ul>
        </div>
        <div
          className="ca-form__group js-form-group js-floating-label-input create__grp"
          data-sg-init="[true]"
        >
          <label className="ca-form__label ca-form__label--cr js-label">
            Last name*
          </label>
          <input
            required={true}
            className="ca-form__input ca-form__input--alt"
            placeholder="Last name*"
            type="text"
            name="last_name"
          />
          <ul className="ca-form__error js-errorlist"></ul>
        </div>
        {/* <div
          className="ca-form__group js-form-group js-floating-label-input create__grp create__grp--fll-wdth"
          data-sg-init="[true]"
        >
          <label className="ca-form__label ca-form__label--cr js-label">
            Address*
          </label>
          <input
            required={true}
            className="ca-form__input ca-form__input--alt"
            placeholder="Address*"
            type="text"
            name="address"
          />
          <ul className="ca-form__error js-errorlist"></ul>
        </div>
        <div
          className="ca-form__group js-form-group js-floating-label-input js-choices create__grp create__grp--fll-wdth"
          data-sg-init="[true]"
        >
          <label className="ca-form__label ca-form__label--cr js-label ca-form__label--visible">
            Country
          </label>
          <div
            onClick={() => setToggleDropdown(!toggleDropdown)}
            className={`ca-form__select-wrapper ${
              toggleDropdown ? "js-dropdown-is-open" : ""
            }`}
          >
            <div
              className="choices"
              data-type="select-one"
              tabIndex={0}
              role="listbox"
              //   aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="choices__inner">
                <select
                  name="country"
                  className="js-country-field ca-form__select choices__input"
                  hidden={true}
                  tabIndex={-1}
                  data-choice="active"
                >
                  <option value="">---------</option>
                </select>
                <div className="choices__list choices__list--single">
                  <div
                    className="choices__item choices__item--selectable"
                    data-item=""
                    data-id={1}
                    data-value=""
                    data-custom-properties="null"
                    aria-selected="true"
                  >
                    {country !== "" ? country : "-- Select Country --"}
                  </div>
                </div>
              </div>
              <div
                className={`choices__list choices__list--dropdown ${
                  toggleDropdown ? "is-active" : ""
                }`}
                aria-expanded="false"
              >
                <div className="choices__list" role="listbox">
                  <div
                    id="choices--country-h4-item-choice-1"
                    className={`choices__item choices__item--choice choices__item--selectable group hover:bg-[#1758A6] hover:text-white rounded-md ${
                      country === "" ? " is-highlighted" : ""
                    }`}
                    role="option"
                    aria-selected="false"
                    data-choice=""
                    data-id={1}
                    data-value=""
                    onClick={() => setCountry("")}
                    data-select-text=""
                    data-choice-selectable=""
                  >
                    <span className="group-hover:text-white">
                      -- Select Country --
                    </span>
                  </div>

                  {countryList.map((item, index) => (
                    <div
                      key={index}
                      id="choices--country-h4-item-choice-2"
                      className={`choices__item choices__item--choice choices__item--selectable group hover:bg-[#1758A6] hover:text-white rounded-md ${
                        country === item.name ? " is-highlighted" : ""
                      }`}
                      role="option"
                      aria-selected="false"
                      data-choice=""
                      data-id={2}
                      data-value={item.name}
                      onClick={() => {
                        setCountry(item.name);
                      }}
                      data-select-text=""
                      data-choice-selectable=""
                    >
                      <span className="group-hover:text-white">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <ul className="ca-form__error js-errorlist"></ul>
        </div>
        <div
          className="ca-form__group js-form-group js-floating-label-input create__grp create__grp--fll-wdth"
          data-api-host="https://my.consumeraffairs.com"
          data-sg-init="[true]"
        >
          <label className="js-zip-label ca-form__label--cr ca-form__label js-label">
            Postal Code
          </label>
          <input
            required={true}
            className="js-zip-field ca-form__input ca-form__input--alt"
            placeholder="Postal Code"
            type="text"
            name="zip"
          />
          <ul className="ca-form__error js-errorlist" />
          <div className="create__flds-cntr">
            <div
              className="js-province-field ca-form__group js-form-group js-floating-label-input create__grp"
              data-sg-init="[true]"
            >
              <label className="ca-form__label ca-form__label--cr js-label">
                State/Province
              </label>
              <input
                defaultValue=""
                className="ca-form__input ca-form__input--alt js-state-name"
                placeholder="Province*"
                type="text"
                name="province"
                required={true}
              />
              <ul className="ca-form__error js-errorlist" />
            </div>
            <div
              className="js-city-field ca-form__group js-form-group js-floating-label-input create__grp"
              data-sg-init="[true]"
            >
              <label className="ca-form__label ca-form__label--cr js-label">
                City
              </label>
              <input
                defaultValue=""
                className="ca-form__input ca-form__input--alt js-city-name"
                placeholder="City*"
                type="text"
                name="city"
                required={true}
              />
              <ul className="ca-form__error js-errorlist" />
            </div>
          </div>
        </div> */}
        <div
          className="ca-form__group js-form-group js-floating-label-input create__grp create__grp--fll-wdth"
          data-sg-init="[true]"
        >
          <label className="ca-form__label ca-form__label--cr js-label">
            Email*
          </label>
          <input
            required={true}
            className="ca-form__input ca-form__input--alt"
            placeholder="Email*"
            type="email"
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
          className="ca-form__group js-form-group js-floating-label-input js-password-strong-validation create__grp"
          data-sg-init="[true]"
        >
          <label
            className="ca-form__label ca-form__label--cr js-label"
            htmlFor="password"
          >
            Create password*
          </label>
          <input
            className="ca-form__input ca-form__input--alt"
            id="password"
            type="password"
            name="password1"
            placeholder="Create password*"
            required={true}
            pattern="^(?=.*?\d)(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^A-Za-z0-9]).{8,}$"
            data-repeat-psw-input="js-repeat-password"
          />
          <div className="ca-form__psw-check-container">
            <div className="ca-form__psw-check-container-wrapper">
              <div className="ca-form__psw-result">
                Password strength:
                <span className="ca-form__psw-result-label" />
                <div className="ca-form__psw-result-line">
                  <div className="ca-form__psw-result-line-fill ca-form__psw-result-line-fill--red"></div>
                </div>
              </div>
              <ul className="ca-form__psw-points" />
            </div>
          </div>
          <ul className="ca-form__error js-errorlist"></ul>
        </div>
        <div
          className="ca-form__group js-form-group js-floating-label-input js-repeat-password create__grp"
          data-sg-init="[true]"
        >
          <label
            className="ca-form__label ca-form__label--cr js-label"
            htmlFor="password-2"
          >
            Confirm password*
          </label>
          <input
            className="ca-form__input ca-form__input--alt"
            id="password-2"
            type="password"
            name="password2"
            placeholder="Confirm password*"
            required={true}
            pattern="^(?=.*?\d)(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^A-Za-z0-9]).{8,}$"
          />
          <ul className="ca-form__error js-errorlist"></ul>
        </div>
      </div>
      <div className="create__bot-cntr">
        {/* <div
          className="create__check ca-form__group js-form-group"
          data-sg-init="[true]"
        >
          <input
            type="checkbox"
            name="general_marketing_newsletter"
            className="ca-form__checkbox"
            id="id_general_marketing_newsletter"
          />
          <label
            htmlFor="id_general_marketing_newsletter"
            className="ca-form__checkbox-label ca-form__checkbox-label--cr"
          >
            <span className="ca-form__checkbox-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
                viewBox="10 10 20 20"
              >
                <path
                  fill="#FFF"
                  d="M28.39 16.614l-9.678 9.66c-.373.37-.954.412-1.375.127-.063-.036-.123-.083-.178-.14l-5.544-5.424c-.425-.417-.432-1.106-.013-1.53l1.347-1.37c.418-.424 1.107-.43 1.53-.013l3.44 3.37 7.577-7.562c.42-.42 1.11-.42 1.53 0l1.36 1.357c.422.422.422 1.11 0 1.53"
                />
              </svg>
            </span>
            <strong>Subscribe to our Newsletters</strong>
            <br />
            <small>Stay up to date with the top consumer news</small>
          </label>
          <ul className="ca-form__error js-errorlist"></ul>
        </div>
        <div
          className="g-recaptcha"
          data-sitekey="6LdTKiUUAAAAALIOFPJrWXWOnkCn_Cgtra15wPzx"
        >
          <div style={{ width: 304, height: 78 }}>
            <div>
              <iframe
                title="reCAPTCHA"
                width={304}
                height={78}
                role="presentation"
                name="a-s6rr0251gw6"
                frameBorder={0}
                scrolling="no"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LdTKiUUAAAAALIOFPJrWXWOnkCn_Cgtra15wPzx&co=aHR0cHM6Ly9hY2NvdW50cy5jb25zdW1lcmFmZmFpcnMuY29tOjQ0Mw..&hl=en&v=_ZpyzC9NQw3gYt1GHTrnprhx&size=normal&cb=ngdzh1beqnbk"
              />
            </div>
            <textarea
              id="g-recaptcha-response"
              name="g-recaptcha-response"
              className="g-recaptcha-response"
              style={{
                width: 250,
                height: 40,
                border: "1px solid rgb(193, 193, 193)",
                margin: "10px 25px",
                padding: 0,
                resize: "none",
                display: "none",
              }}
              defaultValue={""}
            />
          </div>
          <iframe style={{ display: "none" }} />
        </div> */}
        <button className="create__sbmt ca-btn ca-btn--thrd" type="submit">
          Create account
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
