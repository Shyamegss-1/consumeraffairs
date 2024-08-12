"use client";
import React, { useState } from "react";

const SignupForm = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [country, setCountry] = useState("-- Select Country --");

  return (
    <form className="create ca-form" method="post" action="">
      <input
        type="hidden"
        name="csrfmiddlewaretoken"
        defaultValue="ThOQv8b4ZDAcqJDx14t6SIl7AQC5kk17Ym40cHTFCMg9SbGDrxQca0uuK3bxPdsT"
      />
      <input
        type="hidden"
        name="next"
        defaultValue="https://accounts.consumeraffairs.com/"
      />
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
        <div
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
        </div>
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
        <div
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
        </div>
        <button className="create__sbmt ca-btn ca-btn--thrd" type="submit">
          Create account
        </button>
      </div>
      <input
        type="hidden"
        name="xxTrustedFormCertUrl"
        defaultValue="https://cert.trustedform.com/ec5dc34bfac94dd1784fe3881aa6c3d0173209ee"
        id="xxTrustedFormCertUrl_0"
      />
      <input
        type="hidden"
        name="xxTrustedFormToken"
        defaultValue="https://cert.trustedform.com/ec5dc34bfac94dd1784fe3881aa6c3d0173209ee"
        id="xxTrustedFormToken_0"
      />
      <input
        type="hidden"
        name="xxTrustedFormPingUrl"
        defaultValue="https://ping.trustedform.com/0.ZRuATxMjoqVJ-D1SuXidek24_CeoHnFuR-MYlFWAYY6kdao71sTicSwV_4FCkKLkzLfrPcA.YXplHq6gKKiDCOY3xaDR-Q.JAPEKf05WfMIOO0nmGocUQ"
        id="xxTrustedFormPingUrl_0"
      />
    </form>
  );
};

export default SignupForm;

export const countryList = [
  { name: "Afghanistan", code: "AF" },
  { name: "Åland Islands", code: "AX" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "AndorrA", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Bouvet Island", code: "BV" },
  { name: "Brazil", code: "BR" },
  { name: "British Indian Ocean Territory", code: "IO" },
  { name: "Brunei Darussalam", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cape Verde", code: "CV" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Christmas Island", code: "CX" },
  { name: "Cocos (Keeling) Islands", code: "CC" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo", code: "CG" },
  { name: "Congo, The Democratic Republic of the", code: "CD" },
  { name: "Cook Islands", code: "CK" },
  { name: "Costa Rica", code: "CR" },
  { name: "Cote D'Ivoire", code: "CI" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Ethiopia", code: "ET" },
  { name: "Falkland Islands (Malvinas)", code: "FK" },
  { name: "Faroe Islands", code: "FO" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "French Guiana", code: "GF" },
  { name: "French Polynesia", code: "PF" },
  { name: "French Southern Territories", code: "TF" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Grenada", code: "GD" },
  { name: "Guadeloupe", code: "GP" },
  { name: "Guam", code: "GU" },
  { name: "Guatemala", code: "GT" },
  { name: "Guernsey", code: "GG" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Heard Island and Mcdonald Islands", code: "HM" },
  { name: "Holy See (Vatican City State)", code: "VA" },
  { name: "Honduras", code: "HN" },
  { name: "Hong Kong", code: "HK" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran, Islamic Republic Of", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Isle of Man", code: "IM" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jersey", code: "JE" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Korea, Democratic People'S Republic of", code: "KP" },
  { name: "Korea, Republic of", code: "KR" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Lao People'S Democratic Republic", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libyan Arab Jamahiriya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Macao", code: "MO" },
  { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Martinique", code: "MQ" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mayotte", code: "YT" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia, Federated States of", code: "FM" },
  { name: "Moldova, Republic of", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montserrat", code: "MS" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "Netherlands Antilles", code: "AN" },
  { name: "New Caledonia", code: "NC" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "Niue", code: "NU" },
  { name: "Norfolk Island", code: "NF" },
  { name: "Northern Mariana Islands", code: "MP" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Palestinian Territory, Occupied", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Pitcairn", code: "PN" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Qatar", code: "QA" },
  { name: "Reunion", code: "RE" },
  { name: "Romania", code: "RO" },
  { name: "Russian Federation", code: "RU" },
  { name: "RWANDA", code: "RW" },
  { name: "Saint Helena", code: "SH" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Pierre and Miquelon", code: "PM" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia and Montenegro", code: "CS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", code: "GS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Svalbard and Jan Mayen", code: "SJ" },
  { name: "Swaziland", code: "SZ" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syrian Arab Republic", code: "SY" },
  { name: "Taiwan, Province of China", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania, United Republic of", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tokelau", code: "TK" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Turks and Caicos Islands", code: "TC" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "United States Minor Outlying Islands", code: "UM" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela", code: "VE" },
  { name: "Viet Nam", code: "VN" },
  { name: "Virgin Islands, British", code: "VG" },
  { name: "Virgin Islands, U.S.", code: "VI" },
  { name: "Wallis and Futuna", code: "WF" },
  { name: "Western Sahara", code: "EH" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
];