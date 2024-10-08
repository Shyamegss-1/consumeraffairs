import React from "react";
import "../signin/Module.css";
import SignupForm from "./SignupForm";
import AuthLayout from "../../components/Layouts/authLayout/AuthLayout";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Logo } from "@/components/icons/Icons";

const countryList: { name: string; code: string }[] = [
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

const page = async () => {
  const session = await auth();

  // console.log(session?.user, "hfghfgf");

  if (session?.user?.userType === "USER") {
    return redirect("/");
  }

  return (
    <AuthLayout>
      <div className="bnr-cnt ca-bg-pttrn-hxgn ca-bg-pttrn-hxgn--bttm-rght ca-bg-pttrn-hxgn--lg">
        <div className="crd login crd--fll">
          <Link
            href="/"
            className="crd__lg mb-10"
            aria-label="ConsumerTales"
            data-uapi-link="header_logo"
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 51.1 57.5"
              xmlSpace="preserve"
            >
              <path
                fill="#2976D1"
                d="M23 .7c1.5-.9 3.5-.9 5 0l20.5 11.9c1.5.9 2.5 2.5 2.5 4.3v23.7c0 1.8-1 3.4-2.5 4.3L28 56.8c-1.5.9-3.5.9-5 0L2.5 44.9C1 44 0 42.4 0 40.6V16.9c0-1.8 1-3.4 2.5-4.3L23 .7z"
              />
              <path
                fill="#FFF"
                d="m25.5 16 3.3 7.7 8.3.8-6.2 5.5 1.8 8.2-7.2-4.2-7.2 4.3 1.8-8.2-6.3-5.6 8.3-.8 3.4-7.7z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 443 44">
              <path
                className="ca-icon__colored-fill"
                d="M329.789 41.882l1.395-.349c1.906-.448 2.074-.729 2.074-2.915V15.865h-3.7v-.448l3.7-1.569v-2.131c0-6.728 4.148-11.1 10.876-11.1 3.531 0 5.55 1.514 5.55 3.42A2.357 2.357 0 01347.1 6.5c-1.738 0-2.522-.784-2.915-3.083-.168-1.121-.392-1.738-1.289-1.738-2.13 0-3.812 2.13-3.812 7.568V13.9h9.025l.004-2.744C348.113 4.261 353.047 0 359.718 0c3.588 0 5.663 1.458 5.663 3.532a2.52 2.52 0 01-2.747 2.579c-1.738 0-2.524-.785-2.972-3.2-.224-1.177-.392-1.794-1.346-1.794-2.242 0-4.372 2.074-4.372 7.513v5.27h5.83l-.224 1.962h-5.606v22.821c0 2.017.168 2.354 1.738 2.69l2.523.561v.56h-13.623v-.56l1.518-.334c1.849-.45 2.017-.73 2.017-2.915v-22.82h-9.025v22.761c0 2.131.168 2.467 1.738 2.8l2.355.5v.56h-13.396v.008h-14.861v-.616l1.29-.28c1.849-.45 2.242-1.178 2.242-2.3a12.225 12.225 0 00-.729-3.251l-2.466-7.625h-12l-2.187 6.391a13.7 13.7 0 00-.953 4.26c0 1.346.616 2.019 2.354 2.467l1.514.337v.616h-9.978l.003-.615.953-.28c1.962-.561 2.3-1.234 4.148-6.392l11.492-31.561h3.028L324.8 35.879c1.514 4.317 2.186 5.326 3.811 5.719l1.178.28zM0 23.378C0 9.362 10.2 2.972 22.985 2.972c3.723-.086 7.44.348 11.044 1.289l1.178 13.51h-.842a105.033 105.033 0 00-6.614-9.866c-1.963-2.523-3.084-3.42-4.71-3.42-3.868 0-5.325 4.2-5.325 17.772 0 15.3 2.074 19.4 5.942 19.4 2.3 0 3.644-1.4 5.494-4.036a81.641 81.641 0 005.662-9.81h.841l-.785 13.23a36.779 36.779 0 01-13.006 2.13C8.018 43.167 0 35.936 0 23.378zm38.175 4.429c0-11.6 8.97-15.642 17.267-15.642 8.465 0 17.21 4.878 17.21 15.417 0 11.6-8.689 15.585-17.21 15.585-8.914 0-17.267-4.877-17.267-15.36zM55.554 41.6c1.738 0 2.411-1.626 2.411-13.455 0-12.782-.673-14.408-2.635-14.408-1.626 0-2.411 1.626-2.411 13.454 0 12.781.729 14.409 2.635 14.409zm17.32.894v-.9l.168-.057c2.8-.953 2.915-1.009 2.915-3.588V19.9c0-2.971 0-3.027-2.186-4.653l-.9-.673v-.617l16.874-1.794.448.337-.055 4.429h.112c3.139-2.635 7.063-4.766 11.212-4.766 4.653 0 7.961 2.859 7.961 7.513v18.277c0 2.524.168 2.692 2.746 3.532l.337.113v.9h-19.45v-.9l.336-.113c1.29-.448 1.626-.785 1.626-3.083V21.92c0-2.747-1.009-3.756-3.028-3.756a6.656 6.656 0 00-1.626.225V38.4c0 2.3.225 2.746 1.514 3.083l.393.113v.9zm49.778-8.294c-7.96-2.3-9.81-6.11-9.81-11.492 0-6.055 4.541-10.54 14.464-10.54a32.713 32.713 0 018.745 1.122l.505 8.409h-.617a69.041 69.041 0 00-4.2-4.821c-2.3-2.411-3.531-3.084-5.494-3.084a2.926 2.926 0 00-3.251 2.915c0 1.794 1.234 2.8 5.438 4.148 7.68 2.524 10.315 5.439 10.315 10.821 0 6.783-4.821 11.492-15.249 11.492a42.383 42.383 0 01-10.039-1.07l-.449-9.531h.617a43.151 43.151 0 005.1 6.055c2.186 2.3 3.868 2.915 5.662 2.915 2.354 0 3.363-1.233 3.363-3.195.002-1.792-1.119-2.969-5.1-4.144zm38.232-14.354c0-2.915 0-3.083-1.906-4.541l-.954-.729v-.617l16.931-1.794.337.28v23.546c0 2.972.168 3.252 2.074 3.925l.9.336v.728l-16.874 2.187-.392-.336.056-4.261h-.112c-3.532 3.2-6.559 4.6-10.708 4.6-4.205 0-8.3-2.467-8.3-7.961V19.846c0-2.915-.057-2.915-2.131-4.541l-.953-.729v-.617l17.155-1.794.336.28v20.576c0 3.2.841 4.259 2.915 4.259.556.02 1.11-.075 1.626-.28zm56.899 2.074c0-2.747-1.01-3.756-2.859-3.756a6.6 6.6 0 00-1.514.168c.083.707.12 1.419.112 2.131v18.163c0 2.074.168 2.467 1.4 2.859l.336.113v.9h-17.881v-.9l.336-.113c1.289-.448 1.4-.785 1.4-2.859V21.92c0-2.747-1.009-3.756-2.858-3.756a5.79 5.79 0 00-1.458.168v20.294c0 2.074.224 2.467 1.458 2.859l.336.113v.9h-19.284v-.9l.168-.057c2.859-.953 2.916-1.009 2.916-3.588V19.9c0-3.027-.057-3.027-2.187-4.653l-.9-.673v-.617l16.874-1.794.449.28-.057 4.486h.113c3.139-2.635 7.12-4.766 10.931-4.766 3.7 0 6.5 1.57 7.456 4.766h.113c3.139-2.635 7.456-4.766 11.268-4.766 4.653 0 7.792 2.859 7.792 7.513v18.277c0 2.524.112 2.635 2.747 3.532l.337.113v.9h-19.282v-.9l.336-.113c1.29-.448 1.4-.785 1.4-2.859zm17.488 6.167c0-9.026 6.615-15.922 16.761-15.922 9.027 0 14.128 4.093 14.576 13.623h-17.322c.056 9.194 3.083 11.549 9.361 11.549a16.085 16.085 0 006.785-1.57v.841c-2.3 3.251-6.728 6.559-14.3 6.559-9.975 0-15.861-4.877-15.861-15.08zm14.015-3.645l4.2-.5c0-8.073-.392-10.259-2.074-10.259-1.622-.004-2.126 2.07-2.126 10.759zm20.235-4.542c0-2.971 0-3.027-2.186-4.653l-.9-.673v-.617l16.874-1.794.449.337-.056 4.653h.112c1.906-2.747 4.709-4.933 8.017-4.933 3.588 0 6 2.3 6 6.278 0 3.812-2.41 6-5.774 6-2.8 0-4.6-1.233-5.943-4.148-.616-1.346-.841-1.739-1.457-1.739a.989.989 0 00-.729.337v19c0 2.524.224 2.635 3.027 3.477l.561.168v.9h-21.078v-.9l.168-.057c2.86-.953 2.915-1.009 2.915-3.588zm34.25 7.178h11.044l-5.269-16.145h-.168zm56.841 9.25c0-5.158 4.318-6.559 8.578-7.681l7.4-1.85v-6.11c0-4.149-.336-6.559-4.877-6.559-2.523 0-3.083.728-3.42 2.578-.28 2.915-1.177 3.868-3.195 3.868-1.85 0-2.86-1.009-2.86-2.635 0-3.531 5.439-4.989 10.484-4.989 6.727 0 9.7 2.523 9.7 7.4v17.379c0 1.738.391 2.467 1.121 2.916a5.5 5.5 0 002.915.728v.448a9.339 9.339 0 01-4.821 1.346c-2.915 0-4.429-1.177-4.766-3.531h-.171a10.184 10.184 0 01-7.9 3.588c-5.048 0-8.188-2.579-8.188-6.896zm15.978 2.018v-9.923l-3.251.56c-4.485.786-6.783 2.187-6.783 6.335 0 3.365 1.681 5.327 4.764 5.327a6.194 6.194 0 005.27-2.299zm10.31 3.588l1.571-.393c1.906-.448 2.074-.673 2.074-2.858V18.837c0-2.074-.28-2.242-2.187-3.195L386.9 14.8v-.449l9.419-1.234.281.112c-.057.954-.225 2.916-.225 6.5v18.95c0 2.185.28 2.41 2.242 2.858l1.458.393v.56H386.9zm6.335-39.523a3.3 3.3 0 013.42 3.308 3.422 3.422 0 11-3.42-3.308zm7.85 39.523l1.57-.393c1.907-.448 2.074-.729 2.074-2.915V18.837c0-2.074-.224-2.242-2.13-3.252l-1.4-.784v-.449l9.027-1.234.336.225-.056 4.036h.111c2.187-2.018 5.1-4.429 7.961-4.429 2.3 0 3.588 1.289 3.588 3.42a2.873 2.873 0 01-2.971 3.14 3.017 3.017 0 01-2.916-2.074c-.391-.954-.56-1.234-1.289-1.234-.953 0-2.859 1.121-4.428 2.3v20.124c0 1.962.224 2.522 1.906 2.859l2.41.449v.56h-13.793zm21.862-.168l-.169-8.185h.618c.9 1.85 1.569 3.308 2.354 4.6 1.457 2.69 3.14 3.756 6.391 3.756 3.364 0 5.438-2.075 5.438-5.214 0-3.028-1.794-4.429-6.615-6.335-5.1-2.018-7.9-4.372-7.9-8.97 0-4.989 4.037-8.465 10.2-8.465a20.79 20.79 0 017.343 1.289l.169 7.065h-.617c-.953-1.851-1.737-3.308-2.467-4.429a5.266 5.266 0 00-5.044-2.747c-3.476 0-5.439 2.074-5.439 4.765 0 2.859 2.074 4.26 6.728 6.11 5.1 2.075 8.409 4.2 8.409 8.97 0 5.046-3.813 9.082-10.708 9.082a27.9 27.9 0 01-8.691-1.292z"
                fillRule="evenodd"
              />
            </svg> */}
            <Logo />
          </Link>
          <h4 className="create__ttl text-heading-2 font-heading-2">
            Create an Account
          </h4>
          <SignupForm countryList={countryList} />
          <div className="create__lnk-wrp">
            <Link className="underline text-blue-600" href="/signin">
              Signin
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default page;
