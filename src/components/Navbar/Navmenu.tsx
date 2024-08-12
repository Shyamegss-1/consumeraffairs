"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navmenu = () => {
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <header
      className={`ca-hdr h-bg-bfr js-ca-hdr js-scroll-controller-sticky-el ${
        toggleSearch ? "ca-hdr--open-srch" : ""
      }`}
      id="ca-hdr"
    >
      <div className="ca-hdr__wrp">
        <div className="ca-hdr__bar">
          <div className="ca-hdr__bar-aside">
            <button
              className="js-ca-hdr-menu-btn ca-hdr__menu-btn ca-hdr__fcsbl"
              aria-label="Toggle menu"
            >
              <div className="ca-hdr__menu-btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 21"
                >
                  <path
                    stroke="currentColor"
                    className="ca-icon__colored-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M1.875 15.502h16.25M1.875 10.502h16.25M1.875 5.502h16.25"
                  />
                </svg>
              </div>
              <div
                className="ca-hdr__close-srch-icon"
                data-uapi-event-name="mobile-hamburger"
                data-uapi-event='{"action": "close"}'
                data-uapi-event-binded="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                  <g id="Live_Stroke" data-name="Live Stroke">
                    <path
                      className="ca-icon__colored-stroke"
                      strokeWidth={2}
                      d="M1.7 1.7l32.6 32.6M34.3 1.7L1.7 34.3"
                    />
                  </g>
                </svg>
              </div>
            </button>
          </div>
          <nav
            className="ca-hdr__main-nav ca-hdr__main-nav--dsk"
            aria-label="Main Menu"
          >
            <div className="ca-hdr__main-nav-ul">
              <div
                className="ca-hdr__nav-item ca-hdr__nav-item--trending ca-hdr__nav-item--lvl-1 ca-hdr__nav-item-prt js-menu-item ca-hdr__nav-item--lvl-1-single"
                data-custom-uapi-event="trending_dropdown"
              >
                <button
                  className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-1 ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                  data-uapi-link="header_trending_dropdown"
                >
                  Trending
                </button>
                <div className="ca-hdr__sub-menu-wrp ca-hdr__sub-menu ca-hdr__sub-menu--full ca-hdr__sub-menu--lvl-1 js-sub-menu">
                  <div className="ca-hdr__sub-menu-col-wpr">
                    <div className="ca-hdr__sub-menu-col">
                      <div
                        className="ca-hdr__nav-item ca-hdr__nav-item--lvl-2 js-menu-item ca-hdr__sub-menu-itm"
                        role="menu"
                      >
                        <span className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-2 ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl">
                          Trending
                        </span>
                        <ul className="ca-hdr__nav-item-lst-wpr" role="group">
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu ca-hdr__sub-menu--lvl-2-single"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/pets/pet-insurance/"
                                data-uapi-link="buyers_guides_dropdown_best_pet_insurance_companies"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Best Pet Insurance Companies
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu ca-hdr__sub-menu--lvl-2-single"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/finance/tax-relief/"
                                data-uapi-link="buyers_guides_dropdown_best_tax_relief_companies"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Best Tax Relief Companies
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu ca-hdr__sub-menu--lvl-2-single"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/homeowners/aaa_pest_control.html"
                                data-uapi-link="buyers_guides_dropdown_best_pest_control_companies"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Best Pest Control Companies
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu ca-hdr__sub-menu--lvl-2-single"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/finance/gold-ira/"
                                data-uapi-link="buyers_guides_dropdown_best_gold_ira_companies"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Best Gold IRA Companies
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu ca-hdr__sub-menu--lvl-2-single"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/solar-energy/how-much-do-solar-panels-cost.html"
                                data-uapi-link="buyers_guides_dropdown_solar_panel_cost"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Solar Panel Cost
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu ca-hdr__sub-menu--lvl-2-single"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/homeowners/safest-states-in-the-us.html"
                                data-uapi-link="buyers_guides_dropdown_safest_us_states"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Safest US States
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu ca-hdr__sub-menu--lvl-2-single"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/finance/most-expensive-cities-in-the-us.html"
                                data-uapi-link="buyers_guides_dropdown_most_expensive_cities"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Most Expensive Cities
                              </Link>
                            </div>
                          </li>
                          <li className="ca-hdr__nav-item-lst" role="none">
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a">
                              <Link
                                href="https://www.consumeraffairs.com/resources/"
                                data-uapi-link="buyers_guides_dropdown_trending"
                                className="ca-hdr__sub-menu-a ca-hdr__sub-menu-a--all ca-hdr__fcsbl js-view-all"
                                role="menuitem"
                              >
                                <span className="ca-hdr__nav-item-undl">
                                  View all Topics
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 25 20"
                                >
                                  <path
                                    className="ca-icon__colored-stroke"
                                    d="M24.3424 10L0.658203 10M24.3424 10L15.4608 19M24.3424 10L15.4608 1"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="ca-hdr__nav-item ca-hdr__nav-item--buyers_guides ca-hdr__nav-item--lvl-1 ca-hdr__nav-item-prt js-menu-item"
                data-custom-uapi-event="buyers_guides_dropdown"
              >
                <button
                  className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-1 ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                  data-uapi-link="header_buyers_guides_dropdown"
                >
                  Buyers Guides
                </button>
                <div className="ca-hdr__sub-menu-wrp ca-hdr__sub-menu ca-hdr__sub-menu--full ca-hdr__sub-menu--lvl-1 js-sub-menu">
                  <div className="ca-hdr__sub-menu-col-wpr">
                    <div className="ca-hdr__sub-menu-col">
                      <div
                        className="ca-hdr__nav-item ca-hdr__nav-item--lvl-2 js-menu-item ca-hdr__sub-menu-itm"
                        role="menu"
                      >
                        <span className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-2 ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl">
                          Auto
                        </span>
                        <ul className="ca-hdr__nav-item-lst-wpr" role="group">
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/auto_warranty/"
                                data-uapi-link="buyers_guides_dropdown_best_extended_car_warranties"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Best Extended Car Warranties
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/automotive/auto-transport/"
                                data-uapi-link="buyers_guides_dropdown_best_car_shipping"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Best Car Shipping
                              </Link>
                            </div>
                          </li>
                          <li className="ca-hdr__nav-item-lst" role="none">
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a">
                              <Link
                                href="https://www.consumeraffairs.com/automotive/automotive.htm"
                                data-uapi-link="buyers_guides_dropdown_auto"
                                className="ca-hdr__sub-menu-a ca-hdr__sub-menu-a--all ca-hdr__fcsbl js-view-all"
                                role="menuitem"
                              >
                                <span className="ca-hdr__nav-item-undl">
                                  View all Auto
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 25 20"
                                >
                                  <path
                                    className="ca-icon__colored-stroke"
                                    d="M24.3424 10L0.658203 10M24.3424 10L15.4608 19M24.3424 10L15.4608 1"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ca-hdr__sub-menu-col">
                      <div
                        className="ca-hdr__nav-item ca-hdr__nav-item--lvl-2 js-menu-item ca-hdr__sub-menu-itm"
                        role="menu"
                      >
                        <span className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-2 ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl">
                          Home
                        </span>
                        <ul className="ca-hdr__nav-item-lst-wpr" role="group">
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/homeowners/aaa_warranties.html"
                                data-uapi-link="buyers_guides_dropdown_best_home_warranties"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Best Home Warranties
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/solar-energy/"
                                data-uapi-link="buyers_guides_dropdown_best_solar_companies"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Best Solar Companies
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/movers/"
                                data-uapi-link="buyers_guides_dropdown_best_movers"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Best Movers
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/homeowners/aaa_alarm_systems.html"
                                data-uapi-link="buyers_guides_dropdown_best_home_security_systems"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Best Home Security Systems
                              </Link>
                            </div>
                          </li>
                          <li className="ca-hdr__nav-item-lst" role="none">
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a">
                              <Link
                                href="https://www.consumeraffairs.com/homeowners/"
                                data-uapi-link="buyers_guides_dropdown_home"
                                className="ca-hdr__sub-menu-a ca-hdr__sub-menu-a--all ca-hdr__fcsbl js-view-all"
                                role="menuitem"
                              >
                                <span className="ca-hdr__nav-item-undl">
                                  View all Home
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 25 20"
                                >
                                  <path
                                    className="ca-icon__colored-stroke"
                                    d="M24.3424 10L0.658203 10M24.3424 10L15.4608 19M24.3424 10L15.4608 1"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ca-hdr__sub-menu-col">
                      <div
                        className="ca-hdr__nav-item ca-hdr__nav-item--lvl-2 js-menu-item ca-hdr__sub-menu-itm"
                        role="menu"
                      >
                        <span className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-2 ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl">
                          Finance
                        </span>
                        <ul className="ca-hdr__nav-item-lst-wpr" role="group">
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/finance/personal-loans/"
                                data-uapi-link="buyers_guides_dropdown_best_personal_loans"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Best Personal Loans
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/finance/finance__companies.htm"
                                data-uapi-link="buyers_guides_dropdown_best_mortgage_lenders"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Best Mortgage Lenders
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/finance/heloc/"
                                data-uapi-link="buyers_guides_dropdown_best_heloc_lenders"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Best HELOC Lenders
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/finance/gold-dealers/"
                                data-uapi-link="buyers_guides_dropdown_best_gold_dealers"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Best Gold Dealers
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/finance/debt-settlement/"
                                data-uapi-link="buyers_guides_dropdown_best_debt_settlement"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Best Debt Settlement
                              </Link>
                            </div>
                          </li>
                          <li className="ca-hdr__nav-item-lst" role="none">
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a">
                              <Link
                                href="https://www.consumeraffairs.com/finance/financial_services.htm"
                                data-uapi-link="buyers_guides_dropdown_finance"
                                className="ca-hdr__sub-menu-a ca-hdr__sub-menu-a--all ca-hdr__fcsbl js-view-all"
                                role="menuitem"
                              >
                                <span className="ca-hdr__nav-item-undl">
                                  View all Finance
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 25 20"
                                >
                                  <path
                                    className="ca-icon__colored-stroke"
                                    d="M24.3424 10L0.658203 10M24.3424 10L15.4608 19M24.3424 10L15.4608 1"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ca-hdr__sub-menu-col">
                      <div
                        className="ca-hdr__nav-item ca-hdr__nav-item--lvl-2 js-menu-item ca-hdr__sub-menu-itm"
                        role="menu"
                      >
                        <span className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-2 ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl">
                          Senior
                        </span>
                        <ul className="ca-hdr__nav-item-lst-wpr" role="group">
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/homeowners/walk-in-bathtubs/"
                                data-uapi-link="buyers_guides_dropdown_best_walk-in_tubs"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Best Walk-in Tubs
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/homeowners/walk-in-showers/"
                                data-uapi-link="buyers_guides_dropdown_best_walk-in_showers"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Best Walk-in Showers
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/medical-alert-systems/"
                                data-uapi-link="buyers_guides_dropdown_best_medical_alert_systems"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Best Medical Alert Systems
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/homeowners/stairlifts/"
                                data-uapi-link="buyers_guides_dropdown_best_stair_lifts"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Best Stair Lifts
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/reverse-mortgages/"
                                data-uapi-link="buyers_guides_dropdown_best_reverse_mortgages"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Best Reverse Mortgages
                              </Link>
                            </div>
                          </li>
                          <li className="ca-hdr__nav-item-lst" role="none">
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a">
                              <Link
                                href="https://www.consumeraffairs.com/elder-care-planning/"
                                data-uapi-link="buyers_guides_dropdown_senior"
                                className="ca-hdr__sub-menu-a ca-hdr__sub-menu-a--all ca-hdr__fcsbl js-view-all"
                                role="menuitem"
                              >
                                <span className="ca-hdr__nav-item-undl">
                                  View all Senior
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 25 20"
                                >
                                  <path
                                    className="ca-icon__colored-stroke"
                                    d="M24.3424 10L0.658203 10M24.3424 10L15.4608 19M24.3424 10L15.4608 1"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="ca-hdr__nav-item ca-hdr__nav-item--customer_reviews ca-hdr__nav-item--lvl-1 ca-hdr__nav-item-prt js-menu-item"
                data-custom-uapi-event="customer_reviews_dropdown"
              >
                <button
                  className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-1 ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                  data-uapi-link="header_customer_reviews_dropdown"
                >
                  <span className="ca-hdr__nav-item-custom-hide">Customer</span>{" "}
                  Reviews
                </button>
                <div className="ca-hdr__sub-menu-wrp ca-hdr__sub-menu ca-hdr__sub-menu--full ca-hdr__sub-menu--lvl-1 js-sub-menu">
                  <div className="ca-hdr__sub-menu-col-wpr">
                    <div className="ca-hdr__sub-menu-col">
                      <div
                        className="ca-hdr__nav-item ca-hdr__nav-item--lvl-2 js-menu-item ca-hdr__sub-menu-itm"
                        role="menu"
                      >
                        <span className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-2 ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl">
                          Auto
                        </span>
                        <ul className="ca-hdr__nav-item-lst-wpr" role="group">
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/auto_warranty/endurance-warranty.html"
                                data-uapi-link="buyers_guides_dropdown_endurance_warranty_reviews"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Endurance Warranty Reviews
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/auto_warranty/carshield.html"
                                data-uapi-link="buyers_guides_dropdown_carshield_reviews"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                CarShield Reviews
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/auto_warranty/carchex.html"
                                data-uapi-link="buyers_guides_dropdown_carchex_reviews"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                CARCHEX Reviews
                              </Link>
                            </div>
                          </li>
                          <li className="ca-hdr__nav-item-lst" role="none">
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a">
                              <Link
                                href="https://www.consumeraffairs.com/automotive/automotive.htm"
                                data-uapi-link="buyers_guides_dropdown_auto"
                                className="ca-hdr__sub-menu-a ca-hdr__sub-menu-a--all ca-hdr__fcsbl js-view-all"
                                role="menuitem"
                              >
                                <span className="ca-hdr__nav-item-undl">
                                  View all Auto
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 25 20"
                                >
                                  <path
                                    className="ca-icon__colored-stroke"
                                    d="M24.3424 10L0.658203 10M24.3424 10L15.4608 19M24.3424 10L15.4608 1"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ca-hdr__sub-menu-col">
                      <div
                        className="ca-hdr__nav-item ca-hdr__nav-item--lvl-2 js-menu-item ca-hdr__sub-menu-itm"
                        role="menu"
                      >
                        <span className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-2 ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl">
                          Home
                        </span>
                        <ul className="ca-hdr__nav-item-lst-wpr" role="group">
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/solar-energy/sunpower.html"
                                data-uapi-link="buyers_guides_dropdown_sunpower_reviews"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                SunPower Reviews
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/solar-energy/sunrun.html"
                                data-uapi-link="buyers_guides_dropdown_sunrun_reviews"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Sunrun Reviews
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/insurance/am_home.html"
                                data-uapi-link="buyers_guides_dropdown_american_home_shield_reviews"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                American Home Shield Reviews
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/homeowners/choice_home_warranty.html"
                                data-uapi-link="buyers_guides_dropdown_choice_home_warranty_reviews"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Choice Home Warranty Reviews
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/homeowners/adt.htm"
                                data-uapi-link="buyers_guides_dropdown_adt_reviews"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                ADT Reviews
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/homeowners/apx_alarm.html"
                                data-uapi-link="buyers_guides_dropdown_vivint_smart_home_reviews"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Vivint Smart Home Reviews
                              </Link>
                            </div>
                          </li>
                          <li className="ca-hdr__nav-item-lst" role="none">
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a">
                              <Link
                                href="https://www.consumeraffairs.com/homeowners/"
                                data-uapi-link="buyers_guides_dropdown_home"
                                className="ca-hdr__sub-menu-a ca-hdr__sub-menu-a--all ca-hdr__fcsbl js-view-all"
                                role="menuitem"
                              >
                                <span className="ca-hdr__nav-item-undl">
                                  View all Home
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 25 20"
                                >
                                  <path
                                    className="ca-icon__colored-stroke"
                                    d="M24.3424 10L0.658203 10M24.3424 10L15.4608 19M24.3424 10L15.4608 1"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ca-hdr__sub-menu-col">
                      <div
                        className="ca-hdr__nav-item ca-hdr__nav-item--lvl-2 js-menu-item ca-hdr__sub-menu-itm"
                        role="menu"
                      >
                        <span className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-2 ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl">
                          Finance
                        </span>
                        <ul className="ca-hdr__nav-item-lst-wpr" role="group">
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/finance/rocket-mortgage.html"
                                data-uapi-link="buyers_guides_dropdown_rocket_mortgage_reviews"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Rocket Mortgage Reviews
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/finance/quicken_loans_mortgage.html"
                                data-uapi-link="buyers_guides_dropdown_quicken_loans_reviews"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Quicken Loans Reviews
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/finance/new-american-funding.html"
                                data-uapi-link="buyers_guides_dropdown_new_american_funding_reviews"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                New American Funding Reviews
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/finance/patriot-gold.html"
                                data-uapi-link="buyers_guides_dropdown_patriot_gold_group_reviews"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Patriot Gold Group Reviews
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/finance/amerisave_mortgage.html"
                                data-uapi-link="buyers_guides_dropdown_amerisave_mortgage_reviews"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                AmeriSave Mortgage Reviews
                              </Link>
                            </div>
                          </li>
                          <li className="ca-hdr__nav-item-lst" role="none">
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a">
                              <Link
                                href="https://www.consumeraffairs.com/finance/financial_services.htm"
                                data-uapi-link="buyers_guides_dropdown_finance"
                                className="ca-hdr__sub-menu-a ca-hdr__sub-menu-a--all ca-hdr__fcsbl js-view-all"
                                role="menuitem"
                              >
                                <span className="ca-hdr__nav-item-undl">
                                  View all Finance
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 25 20"
                                >
                                  <path
                                    className="ca-icon__colored-stroke"
                                    d="M24.3424 10L0.658203 10M24.3424 10L15.4608 19M24.3424 10L15.4608 1"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ca-hdr__sub-menu-col">
                      <div
                        className="ca-hdr__nav-item ca-hdr__nav-item--lvl-2 js-menu-item ca-hdr__sub-menu-itm"
                        role="menu"
                      >
                        <span className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-2 ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl">
                          Senior
                        </span>
                        <ul className="ca-hdr__nav-item-lst-wpr" role="group">
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/homeowners/safe-step-walk-in-tubs.html"
                                data-uapi-link="buyers_guides_dropdown_safe_step_walk-in_tubs_reviews"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Safe Step Walk-in Tubs Reviews
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/homeowners/american-standard-walk-in-baths.html"
                                data-uapi-link="buyers_guides_dropdown_american_standard_walk-in_baths_reviews"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                American Standard Walk-in Baths Reviews
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/medical-alert-systems/adt.html"
                                data-uapi-link="buyers_guides_dropdown_adt_medical_alert_reviews"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                ADT Medical Alert Reviews
                              </Link>
                            </div>
                          </li>
                          <li
                            className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2 js-sub-menu"
                            role="none"
                          >
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                              <Link
                                href="https://www.consumeraffairs.com/medical-alert-systems/medical-guardian.html"
                                data-uapi-link="buyers_guides_dropdown_medical_guardian_reviews"
                                className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                                role="menuitem"
                              >
                                Medical Guardian Reviews
                              </Link>
                            </div>
                          </li>
                          <li className="ca-hdr__nav-item-lst" role="none">
                            <div className="ca-hdr__nav-item ca-hdr__nav-item-a">
                              <Link
                                href="https://www.consumeraffairs.com/elder-care-planning/"
                                data-uapi-link="buyers_guides_dropdown_senior"
                                className="ca-hdr__sub-menu-a ca-hdr__sub-menu-a--all ca-hdr__fcsbl js-view-all"
                                role="menuitem"
                              >
                                <span className="ca-hdr__nav-item-undl">
                                  View all Senior
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 25 20"
                                >
                                  <path
                                    className="ca-icon__colored-stroke"
                                    d="M24.3424 10L0.658203 10M24.3424 10L15.4608 19M24.3424 10L15.4608 1"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ca-hdr__nav-item-prt ca-hdr__nav-item ca-hdr__nav-item--no-arw">
                <Link
                  href="https://www.consumeraffairs.com/news04/"
                  className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-1 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                  data-uapi-link="header_news"
                >
                  News
                </Link>
              </div>
              <div className="ca-hdr__nav-item-rvw ca-hdr__nav-item-prt">
                <div className="ca-hdr__nav-frm">
                  <Link
                    className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-1 ca-hdr__review-btn ca-hdr__mb-btn ca-hdr__mb-btn--rev ca-hdr__fcsbl ca-a ca-btn--link ca-a--bld-no-undln"
                    href="https://www.consumeraffairs.com/review/write/"
                    data-uapi-link="header_write_review"
                  >
                    <span className="ca-hdr__nav-item-undl">
                      Write a review
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="ca-hdr__lgn-btns">
              <Link
                className="ca-hdr__lgn-btn ca-hdr__lgn-btn--drk ca-btn"
                href="https://accounts.consumeraffairs.com/?next=https%3A//www.consumeraffairs.com/"
                target="_blank"
                data-uapi-link="header_login"
                rel="noopener"
              >
                Log in
              </Link>
              <p className="ca-hdr__lgn-or">or sign up</p>
              <Link
                className="ca-hdr__lgn-btn ca-hdr__lgn-btn--ggl ca-btn"
                href="https://accounts.consumeraffairs.com/social-login/google-oauth2/?secondary_redirect=https%3A//www.consumeraffairs.com/"
                rel="noopener"
                data-uapi-link="header_signup_google"
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
                <span className="ca-hdr__lgn-txt">Continue with Google</span>
              </Link>
              <Link
                className="ca-hdr__lgn-btn ca-btn"
                href="https://accounts.consumeraffairs.com/create/?next=https%3A//www.consumeraffairs.com/"
                rel="noopener"
                data-uapi-link="header_signup_email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    className="ca-icon__colored-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.299"
                    d="M1.206 3.619h15.588v11.134H1.206V3.619Z"
                  />
                  <path
                    stroke="currentColor"
                    className="ca-icon__colored-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.299"
                    d="m16.542 4.027-6.045 4.65a2.455 2.455 0 0 1-2.994 0l-6.045-4.65"
                  />
                </svg>
                <span className="ca-hdr__lgn-txt">Continue with email</span>
              </Link>
            </div>
          </nav>
          <div className="ca-hdr__logo">
            <Link
              href="https://www.consumeraffairs.com/"
              aria-label="ConsumerAffairs"
              data-uapi-link="header_logo"
              className="ca-hdr__logo-lnk ca-hdr__fcsbl"
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x={0}
                y={0}
                viewBox="0 0 329 48"
                xmlSpace="preserve"
              >
                <path
                  fill="#2976d1"
                  d="M21.3 1.6c1.7-1 3.8-1 5.5 0l15.3 8.9c1.7 1 2.7 2.8 2.7 4.7v17.7c0 1.9-1 3.7-2.7 4.7l-15.3 8.9c-1.7 1-3.8 1-5.5 0L5.9 37.6c-1.7-1-2.7-2.8-2.7-4.7V15.1c0-1.9 1-3.7 2.7-4.7l15.4-8.8z"
                />
                <path
                  fill="#fff"
                  d="m24.1 14.2 2.7 6.3 6.8.6-5.1 4.5 1.5 6.7-5.8-3.5-5.8 3.5 1.5-6.7-5.1-4.5 6.8-.6 2.5-6.3z"
                />
                <g>
                  <path
                    className="ca-icon__colored-fill"
                    d="M72.1 33.6c-1.2 1.6-2 2.5-3.4 2.5-2.4 0-3.7-2.5-3.7-12 0-8.4.9-11 3.3-11 1 0 1.7.6 2.9 2.1.9 1.2 2.7 3.8 4.1 6.1h.5l-.7-8.4c-1.7-.6-4-.8-6.8-.8C60.3 12 54 16 54 24.7c0 7.8 5 12.3 13.6 12.2 3 0 5.8-.4 8.1-1.3l.5-8.1h-.5c-1.2 2.2-2.3 4.3-3.6 6.1zM88.4 17.8c-5.1 0-10.7 2.5-10.7 9.7 0 6.5 5.1 9.6 10.7 9.6 5.3 0 10.7-2.5 10.7-9.7 0-6.6-5.4-9.6-10.7-9.6zm.1 18.2c-1.2 0-1.7-1-1.6-8.9 0-7.4.5-8.4 1.5-8.4 1.2 0 1.6 1 1.6 8.9 0 7.4-.4 8.4-1.5 8.4zM121.9 33.8V22.3c0-2.9-2-4.7-5-4.7-2.5 0-5 1.4-6.9 3h-.1l.1-2.7-.2-.2-10.5 1.1v.3l.6.4c1.4 1.1 1.4 1.1 1.4 2.9v11.2c0 1.6-.1 1.6-1.8 2.2l-.3.2v.5h12v-.6l-.2-.1c-.8-.2-.9-.5-.9-1.9V21.5c.2-.1.6-.1 1-.1 1.2 0 1.9.7 1.9 2.4V34c0 1.4-.2 1.7-1 1.9l-.2.1v.6h12V36l-.2-.1c-1.6-.5-1.7-.6-1.7-2.1zM133.7 23.1c-2.6-.8-3.4-1.4-3.4-2.5 0-1 .7-1.8 2-1.8 1.2 0 2 .4 3.4 1.9.8.8 1.7 1.8 2.6 3h.4l-.3-5.2c-1.6-.4-3.4-.7-5.4-.7-6.2 0-9 2.7-9 6.5 0 3.4 1.1 5.7 6.1 7.1 2.4.7 3.2 1.5 3.2 2.5 0 1.2-.6 2-2.1 2-1.1 0-2.2-.4-3.5-1.8-1.2-1.2-2-2.2-3.2-3.8h-.4l.2 5.9c1.7.5 4 .7 6.2.7 6.5 0 9.4-2.9 9.4-7.1.2-3.4-1.5-5.2-6.2-6.7zM164.6 35.1l-.6-.2c-1.2-.4-1.3-.6-1.3-2.4V17.9l-.2-.2-10.5 1.2v.4l.6.4c1.2.9 1.2 1 1.2 2.8h-.1v10.7c-.2.1-.6.2-1 .2-1.3 0-1.8-.7-1.8-2.7V17.9l-.2-.2-10.7 1.1v.4l.6.4c1.2 1 1.3 1 1.3 2.8V32c0 3.4 2.5 5 5.1 5 2.5 0 4.5-.9 6.6-2.9h.1l-.1 2.7.2.2 10.5-1.4v-.5z"
                  />
                  <path
                    className="ca-icon__colored-fill"
                    d="M197.9 33.8V22.4c0-2.9-1.9-4.7-4.8-4.7-2.4 0-5.1 1.4-7 3h-.1c-.6-2-2.4-3-4.7-3-2.4 0-4.8 1.4-6.8 3h-.1l.1-2.8-.2-.2-10.5 1.1v.3l.6.4c1.3 1.1 1.4 1.1 1.4 2.9v11.2c0 1.6 0 1.6-1.8 2.2l-.1.1v.6h12V36l-.2-.1c-.8-.2-.9-.5-.9-1.8V21.5c.2-.1.7-.1.9-.1 1.2 0 1.8.7 1.8 2.4v10.4c0 1.3-.1 1.6-.9 1.8l-.2.1v.6h11.1V36l-.2-.1c-.7-.2-.9-.5-.9-1.8V22.8c0-.6 0-1.1-.1-1.3.2-.1.7-.1.9-.1 1.2 0 1.8.7 1.8 2.4h-.1v10.4c0 1.3-.1 1.6-.9 1.8v.6h11.8V36l-.2-.1c-1.6-.5-1.7-.6-1.7-2.1zM208.7 26.2h10.7c-.3-5.9-3.5-8.4-9.1-8.4-6.3 0-10.4 4.3-10.4 9.9 0 6.3 3.7 9.4 9.9 9.3 4.7 0 7.4-2 8.9-4.1v-.5c-1.2.6-2.7 1-4.2 1-3.8-.1-5.7-1.5-5.8-7.2zm1.3-7.6c1.1 0 1.3 1.4 1.3 6.4l-2.6.3c0-5.3.3-6.6 1.3-6.7zM238.7 21.7c0-2.5-1.5-3.9-3.7-3.9-2 0-3.8 1.4-5 3l.1-2.9-.2-.2-10.5 1.1v.3l.6.4c1.4 1.1 1.4 1.1 1.4 2.9h-.1v11.3c0 1.6 0 1.6-1.8 2.2l-.1.1v.6h13.1V36l-.4-.1c-1.7-.6-1.9-.6-1.9-2.2V22c.1-.1.2-.2.4-.2.4 0 .6.2.9 1.1.8 1.8 1.9 2.5 3.7 2.5 2 0 3.5-1.3 3.5-3.7zM273.6 15.5c0-3.4 1.4-4.7 2.7-4.7.6 0 .7.4.8 1.1.3 1.5.8 2 1.9 2 1 0 1.7-.7 1.7-1.6 0-1.2-1.3-2.2-3.5-2.2-4.2 0-7.2 2.7-7.2 6.9v1.8h-5.6V16c0-3.4 1.1-4.7 2.4-4.7.6 0 .7.4.8 1.1.2 1.4.7 1.9 1.8 1.9 1 0 1.6-.6 1.6-1.6 0-1.2-1.2-2.1-3.4-2.1-4.2 0-6.8 2.7-6.8 6.9v1.3l-2.3 1v.2h2.3v14.1c0 1.4-.1 1.6-1.3 1.8l-.9.2V36l-.7-.2c-1-.2-1.4-.9-2.4-3.5l-6.9-20h-1.9L239.6 32c-1.1 3.2-1.3 3.6-2.5 4l-.6.2h-.1v.3h6.2v-.4l-.9-.2c-1.1-.3-1.5-.7-1.5-1.6 0-.6.2-1.4.6-2.7l1.4-4h7.4l1.6 4.7c.2.6.4 1.6.4 2 0 .7-.2 1.2-1.4 1.4l-.8.2v.4h9.1v.1h8.4V36l-1.5-.3c-.9-.2-1.1-.4-1.1-1.7V20h5.6v14.2c0 1.4-.1 1.6-1.2 1.8l-.9.2v.4h8.4v-.4l-1.6-.4c-.9-.2-1.1-.4-1.1-1.7V20h3.5l.1-1.2h-3.6v-3.3zM242.5 27l3.4-10h.1l3.3 10h-6.8z"
                  />
                  <path
                    className="ca-icon__colored-fill"
                    d="M291.3 33.6V22.8c0-3-1.9-4.6-6-4.6-3.2 0-6.5.9-6.5 3.1 0 1 .7 1.6 1.8 1.6 1.2 0 1.8-.6 2-2.4.2-1.2.6-1.6 2.1-1.6 2.9 0 3 1.6 3 4.1v3.8l-4.6 1.2c-2.7.7-5.3 1.6-5.3 4.8 0 2.7 2 4.3 5 4.2 2.2 0 3.9-1.1 4.9-2.2h.1c.2 1.4 1.2 2.2 3 2.2 1.3 0 2.5-.4 3-.8V36c-.7 0-1.3-.1-1.8-.4-.5-.5-.7-1-.7-2zm-3.6.3c-.6.8-1.7 1.4-3.3 1.4-1.9 0-3-1.2-3-3.3 0-2.5 1.4-3.4 4.2-3.9l2-.4v6.2zM299.9 34.2V22.5c0-2.2.1-3.4.1-4l-.2-.1-5.8.7v.2l.9.5c1.2.6 1.4.7 1.4 2v12.3c0 1.4-.1 1.6-1.3 1.8l-1 .2v.4h8.2v-.4l-.9-.2c-1.2-.2-1.4-.3-1.4-1.7zM298 15.8c1.2 0 2.1-.8 2.1-2s-.9-2-2.1-2-2.1.9-2.1 2c0 1.2.8 2 2.1 2zM313.7 18.2c-1.8 0-3.6 1.5-5 2.7h-.1l.1-2.5-.2-.1-5.6.7v.2l.9.5c1.2.7 1.3.7 1.3 2V34c0 1.4-.1 1.6-1.3 1.8l-1 .2v.3h8.6v-.4l-1.5-.2c-1.1-.2-1.2-.6-1.2-1.8V21.6c.9-.7 2.1-1.4 2.7-1.4.4 0 .6.1.8.7.3.7.7 1.3 1.8 1.3s1.9-.7 1.9-1.9c.1-1.3-.7-2.1-2.2-2.1zM323.2 25.8c-2.9-1.1-4.2-2-4.2-3.8 0-1.7 1.2-3 3.3-3 1.6 0 2.4.5 3.1 1.7.5.7.9 1.6 1.6 2.7h.4l-.1-4.4c-1.2-.4-2.7-.8-4.5-.8-3.8 0-6.3 2.2-6.3 5.3 0 2.9 1.7 4.3 4.9 5.6 3 1.2 4.1 2 4.1 3.9s-1.2 3.2-3.4 3.2c-2 0-3-.7-4-2.4-.5-.8-.9-1.7-1.5-2.9h-.4l.1 5.1c1.4.4 3.2.8 5.4.9 4.3 0 6.6-2.5 6.6-5.6.1-2.9-1.9-4.2-5.1-5.5z"
                  />
                </g>
              </svg>
            </Link>
          </div>
          <div className="js-srch-wrapper ca-hdr__rght">
            <div className="ca-hdr__rev-dsk">
              <div className="ca-hdr__nav-frm">
                <Link
                  className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-1 ca-hdr__review-btn ca-hdr__mb-btn ca-hdr__mb-btn--rev ca-hdr__fcsbl ca-a ca-btn--link ca-a--bld-no-undln"
                  href="https://www.consumeraffairs.com/review/write/"
                  data-uapi-link="header_write_review"
                >
                  <span className="ca-hdr__nav-item-undl">Write a review</span>
                </Link>
              </div>
            </div>
            <div className="ca-hdr__srch-box js-srch-box">
              <form className="js-ca-srch ca-form">
                <div
                  className="ca-form__group ca-form__group--xs js-form-group"
                  role="searchbox"
                  aria-label="Search"
                >
                  <div className="ca-form__input-icon-wrapper">
                    <div
                      className={`choices ${
                        toggleSearch ? "is-open is-focused" : ""
                      }`}
                      data-type="select-one"
                      tabIndex={-1}
                      role="combobox"
                      aria-controls="combobox"
                      aria-autocomplete="list"
                      aria-haspopup="true"
                      aria-expanded={toggleSearch}
                    >
                      <div className="choices__autocomplete">
                        <select
                          className="ca-autocomplete js-search js-ca-srch__inp choices__input"
                          data-source="https://www.consumeraffairs.com/api/site_search/?q="
                          hidden
                          aria-label="Search" // Changed 'label' to 'aria-label' for accessibility
                          tabIndex={-1}
                          data-choice="active"
                        />
                        <div className="choices__list choices__list--single" />
                      </div>
                      <div
                        className={`choices__list choices__list--dropdown choices__list--search choices__list--empty ${
                          toggleSearch ? "is-active" : ""
                        }`}
                        aria-expanded="false"
                      >
                        <input
                          type="text"
                          className="choices__input choices__input--cloned"
                          autoComplete="off"
                          autoCapitalize="off"
                          spellCheck="false"
                          role="textbox"
                          aria-autocomplete="list"
                          placeholder="search..."
                          aria-label="Search" // Changed 'label' to 'aria-label' for accessibility
                        />
                        <div className="choices__list" role="listbox">
                          <div className="choices__item choices__item--choice has-no-choices">
                            <div className="has-no-results">
                              <p>Sorry no results found</p>
                              <p>
                                - Check the spelling or try alternate spelling
                              </p>
                              <p>
                                - Try more general search, e.g. {"home"}, instead
                                of {"room"}
                              </p>
                            </div>
                            <strong className="ca-srch__title">
                              Search Suggestions
                            </strong>
                            <ul className="ca-srch__list">
                              <li
                                className="ca-srch__item js-search-suggestions"
                                data-href="https://www.consumeraffairs.com/homeowners/home_improvements.htm"
                                data-page-type="topic"
                              >
                                Home Improvement
                              </li>
                              <li
                                className="ca-srch__item js-search-suggestions"
                                data-href="https://www.consumeraffairs.com/moving-checklist/"
                                data-page-type="topic"
                              >
                                Moving
                              </li>
                              <li
                                className="ca-srch__item js-search-suggestions"
                                data-href="https://www.consumeraffairs.com/elder-care-planning/"
                                data-page-type="topic"
                              >
                                Elder Care Planning
                              </li>
                              <li
                                className="ca-srch__item js-search-suggestions"
                                data-href="https://www.consumeraffairs.com/education/"
                                data-page-type="topic"
                              >
                                College Career Planning
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="ca-srch__icon ca-form__input-icon js-search-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 16 17"
                          >
                            <g
                              stroke="currentColor"
                              className="ca-icon__colored-stroke"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.306"
                              clipPath="url(#a)"
                            >
                              <path d="M1.125 9.386a5.919 5.919 0 1 0 10.894-4.63 5.919 5.919 0 0 0-10.894 4.63ZM10.757 11.256l4.59 4.59" />
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path
                                  fill="#fff"
                                  className="ca-icon__colored-fill"
                                  d="M0 .5h16v16H0z"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="ca-srch__icon ca-form__input-icon js-search-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 17"
                      >
                        <g
                          stroke="currentColor"
                          className="ca-icon__colored-stroke"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.306"
                          clipPath="url(#a)"
                        >
                          <path d="M1.125 9.386a5.919 5.919 0 1 0 10.894-4.63 5.919 5.919 0 0 0-10.894 4.63ZM10.757 11.256l4.59 4.59" />
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path
                              fill="#fff"
                              className="ca-icon__colored-fill"
                              d="M0 .5h16v16H0z"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <nav className="ca-hdr__prf-box">
              <div className="ca-hdr__srch-btn">
                <button
                  className="ca-hdr__srch-icon ca-hdr__close-srch-icon js-ca-hdr-close-srch-btn ca-hdr__fcsbl"
                  aria-label="Close search"
                  onClick={() => setToggleSearch(!toggleSearch)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                    <g id="Live_Stroke" data-name="Live Stroke">
                      <path
                        className="ca-icon__colored-stroke"
                        strokeWidth={2}
                        d="M1.7 1.7l32.6 32.6M34.3 1.7L1.7 34.3"
                      />
                    </g>
                  </svg>
                </button>
                <button
                  className="ca-hdr__srch-icon ca-hdr__open-srch-icon js-ca-hdr-open-srch-btn ca-hdr__fcsbl"
                  aria-label="Search"
                  onClick={() => setToggleSearch(!toggleSearch)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 17"
                  >
                    <g
                      stroke="currentColor"
                      className="ca-icon__colored-stroke"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.306"
                      clipPath="url(#a)"
                    >
                      <path d="M1.125 9.386a5.919 5.919 0 1 0 10.894-4.63 5.919 5.919 0 0 0-10.894 4.63ZM10.757 11.256l4.59 4.59" />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path
                          fill="#fff"
                          className="ca-icon__colored-fill"
                          d="M0 .5h16v16H0z"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <div
                  className="ca-hdr__load-icon js-ca-hdr-load-srch-btn"
                  aria-label="Loading search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path
                      className="ca-icon__colored-fill"
                      d="M44 25.1a18.7 18.7 0 10-37.4 0h4a14.6 14.6 0 0129.3 0h4z"
                    >
                      <animateTransform
                        attributeType="xml"
                        attributeName="transform"
                        type="rotate"
                        from="0 25 25"
                        to="360 25 25"
                        dur="0.6s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </svg>
                </div>
              </div>
              <Link
                className="ca-hdr__login-link ca-hdr__fcsbl"
                href="/signin"
                data-uapi-link="header_login"
                aria-label="Login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 .5A4.313 4.313 0 1 0 8 9.127 4.313 4.313 0 0 0 8 .5Zm0 1.125a3.185 3.185 0 0 1 3.188 3.188A3.185 3.185 0 0 1 8 8a3.185 3.185 0 0 1-3.188-3.187A3.185 3.185 0 0 1 8 1.625Zm0 9a8.595 8.595 0 0 0-7.444 4.332.563.563 0 0 0 .225.768.529.529 0 0 0 .281.075.544.544 0 0 0 .488-.28A7.423 7.423 0 0 1 8 11.75a7.476 7.476 0 0 1 6.469 3.77c.15.262.506.355.768.205a.574.574 0 0 0 .207-.768A8.595 8.595 0 0 0 8 10.625Z"
                    className="ca-icon__colored-fill"
                  />
                </svg>
              </Link>
            </nav>
          </div>
        </div>
        <nav
          className="ca-hdr__main-nav ca-hdr__main-nav--mb"
          aria-label="Main Menu"
        >
          <div className="ca-hdr__main-nav-ul">
            <div
              className="ca-hdr__nav-item ca-hdr__nav-item--trending ca-hdr__nav-item--lvl-1-mb ca-hdr__nav-item-prt js-menu-item ca-hdr__nav-item--lvl-1-single"
              data-custom-uapi-event="trending_dropdown"
            >
              <button
                className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-1-mb ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                data-uapi-link="header_trending_dropdown"
              >
                Trending
              </button>
              <div className="ca-hdr__sub-menu-wrp ca-hdr__sub-menu ca-hdr__sub-menu--full ca-hdr__sub-menu--lvl-1-mb js-sub-menu">
                <div className="ca-hdr__sub-menu-col-wpr">
                  <div className="ca-hdr__sub-menu-col">
                    <div
                      className="ca-hdr__nav-item ca-hdr__nav-item--lvl-2-mb js-menu-item ca-hdr__sub-menu-itm ca-hdr__nav-item--no-arw"
                      role="menu"
                    >
                      <ul className="ca-hdr__nav-item-lst-wpr" role="group">
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu ca-hdr__sub-menu--lvl-2-single"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/pets/pet-insurance/"
                              data-uapi-link="buyers_guides_dropdown_best_pet_insurance_companies"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Best Pet Insurance Companies
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu ca-hdr__sub-menu--lvl-2-single"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/finance/tax-relief/"
                              data-uapi-link="buyers_guides_dropdown_best_tax_relief_companies"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Best Tax Relief Companies
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu ca-hdr__sub-menu--lvl-2-single"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/homeowners/aaa_pest_control.html"
                              data-uapi-link="buyers_guides_dropdown_best_pest_control_companies"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Best Pest Control Companies
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu ca-hdr__sub-menu--lvl-2-single"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/finance/gold-ira/"
                              data-uapi-link="buyers_guides_dropdown_best_gold_ira_companies"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Best Gold IRA Companies
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu ca-hdr__sub-menu--lvl-2-single"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/solar-energy/how-much-do-solar-panels-cost.html"
                              data-uapi-link="buyers_guides_dropdown_solar_panel_cost"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Solar Panel Cost
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu ca-hdr__sub-menu--lvl-2-single"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/homeowners/safest-states-in-the-us.html"
                              data-uapi-link="buyers_guides_dropdown_safest_us_states"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Safest US States
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu ca-hdr__sub-menu--lvl-2-single"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/finance/most-expensive-cities-in-the-us.html"
                              data-uapi-link="buyers_guides_dropdown_most_expensive_cities"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Most Expensive Cities
                            </Link>
                          </div>
                        </li>
                        <li className="ca-hdr__nav-item-lst" role="none">
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a">
                            <Link
                              href="https://www.consumeraffairs.com/resources/"
                              data-uapi-link="buyers_guides_dropdown_trending"
                              className="ca-hdr__sub-menu-a ca-hdr__sub-menu-a--all ca-hdr__fcsbl js-view-all"
                              role="menuitem"
                            >
                              <span className="ca-hdr__nav-item-undl">
                                View all Topics
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25 20"
                              >
                                <path
                                  className="ca-icon__colored-stroke"
                                  d="M24.3424 10L0.658203 10M24.3424 10L15.4608 19M24.3424 10L15.4608 1"
                                  fill="none"
                                  stroke="#000"
                                  strokeWidth="1.25"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ca-hdr__nav-item ca-hdr__nav-item--buyers_guides ca-hdr__nav-item--lvl-1-mb ca-hdr__nav-item-prt js-menu-item"
              data-custom-uapi-event="buyers_guides_dropdown"
            >
              <button
                className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-1-mb ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                data-uapi-link="header_buyers_guides_dropdown"
              >
                Buyers Guides
              </button>
              <div className="ca-hdr__sub-menu-wrp ca-hdr__sub-menu ca-hdr__sub-menu--full ca-hdr__sub-menu--lvl-1-mb js-sub-menu">
                <div className="ca-hdr__sub-menu-col-wpr">
                  <div className="ca-hdr__sub-menu-col">
                    <div
                      className="ca-hdr__nav-item ca-hdr__nav-item--lvl-2-mb js-menu-item ca-hdr__sub-menu-itm"
                      role="menu"
                    >
                      <button className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-2-mb ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl">
                        Auto
                      </button>
                      <ul className="ca-hdr__nav-item-lst-wpr" role="group">
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/auto_warranty/"
                              data-uapi-link="buyers_guides_dropdown_best_extended_car_warranties"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Best Extended Car Warranties
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/automotive/auto-transport/"
                              data-uapi-link="buyers_guides_dropdown_best_car_shipping"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Best Car Shipping
                            </Link>
                          </div>
                        </li>
                        <li className="ca-hdr__nav-item-lst" role="none">
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a">
                            <Link
                              href="https://www.consumeraffairs.com/automotive/automotive.htm"
                              data-uapi-link="buyers_guides_dropdown_auto"
                              className="ca-hdr__sub-menu-a ca-hdr__sub-menu-a--all ca-hdr__fcsbl js-view-all"
                              role="menuitem"
                            >
                              <span className="ca-hdr__nav-item-undl">
                                View all Auto
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25 20"
                              >
                                <path
                                  className="ca-icon__colored-stroke"
                                  d="M24.3424 10L0.658203 10M24.3424 10L15.4608 19M24.3424 10L15.4608 1"
                                  fill="none"
                                  stroke="#000"
                                  strokeWidth="1.25"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ca-hdr__sub-menu-col">
                    <div
                      className="ca-hdr__nav-item ca-hdr__nav-item--lvl-2-mb js-menu-item ca-hdr__sub-menu-itm"
                      role="menu"
                    >
                      <button className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-2-mb ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl">
                        Home
                      </button>
                      <ul className="ca-hdr__nav-item-lst-wpr" role="group">
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/homeowners/aaa_warranties.html"
                              data-uapi-link="buyers_guides_dropdown_best_home_warranties"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Best Home Warranties
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/solar-energy/"
                              data-uapi-link="buyers_guides_dropdown_best_solar_companies"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Best Solar Companies
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/movers/"
                              data-uapi-link="buyers_guides_dropdown_best_movers"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Best Movers
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/homeowners/aaa_alarm_systems.html"
                              data-uapi-link="buyers_guides_dropdown_best_home_security_systems"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Best Home Security Systems
                            </Link>
                          </div>
                        </li>
                        <li className="ca-hdr__nav-item-lst" role="none">
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a">
                            <Link
                              href="https://www.consumeraffairs.com/homeowners/"
                              data-uapi-link="buyers_guides_dropdown_home"
                              className="ca-hdr__sub-menu-a ca-hdr__sub-menu-a--all ca-hdr__fcsbl js-view-all"
                              role="menuitem"
                            >
                              <span className="ca-hdr__nav-item-undl">
                                View all Home
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25 20"
                              >
                                <path
                                  className="ca-icon__colored-stroke"
                                  d="M24.3424 10L0.658203 10M24.3424 10L15.4608 19M24.3424 10L15.4608 1"
                                  fill="none"
                                  stroke="#000"
                                  strokeWidth="1.25"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ca-hdr__sub-menu-col">
                    <div
                      className="ca-hdr__nav-item ca-hdr__nav-item--lvl-2-mb js-menu-item ca-hdr__sub-menu-itm"
                      role="menu"
                    >
                      <button className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-2-mb ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl">
                        Finance
                      </button>
                      <ul className="ca-hdr__nav-item-lst-wpr" role="group">
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/finance/personal-loans/"
                              data-uapi-link="buyers_guides_dropdown_best_personal_loans"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Best Personal Loans
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/finance/finance__companies.htm"
                              data-uapi-link="buyers_guides_dropdown_best_mortgage_lenders"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Best Mortgage Lenders
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/finance/heloc/"
                              data-uapi-link="buyers_guides_dropdown_best_heloc_lenders"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Best HELOC Lenders
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/finance/gold-dealers/"
                              data-uapi-link="buyers_guides_dropdown_best_gold_dealers"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Best Gold Dealers
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/finance/debt-settlement/"
                              data-uapi-link="buyers_guides_dropdown_best_debt_settlement"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Best Debt Settlement
                            </Link>
                          </div>
                        </li>
                        <li className="ca-hdr__nav-item-lst" role="none">
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a">
                            <Link
                              href="https://www.consumeraffairs.com/finance/financial_services.htm"
                              data-uapi-link="buyers_guides_dropdown_finance"
                              className="ca-hdr__sub-menu-a ca-hdr__sub-menu-a--all ca-hdr__fcsbl js-view-all"
                              role="menuitem"
                            >
                              <span className="ca-hdr__nav-item-undl">
                                View all Finance
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25 20"
                              >
                                <path
                                  className="ca-icon__colored-stroke"
                                  d="M24.3424 10L0.658203 10M24.3424 10L15.4608 19M24.3424 10L15.4608 1"
                                  fill="none"
                                  stroke="#000"
                                  strokeWidth="1.25"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ca-hdr__sub-menu-col">
                    <div
                      className="ca-hdr__nav-item ca-hdr__nav-item--lvl-2-mb js-menu-item ca-hdr__sub-menu-itm"
                      role="menu"
                    >
                      <button className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-2-mb ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl">
                        Senior
                      </button>
                      <ul className="ca-hdr__nav-item-lst-wpr" role="group">
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/homeowners/walk-in-bathtubs/"
                              data-uapi-link="buyers_guides_dropdown_best_walk-in_tubs"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Best Walk-in Tubs
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/homeowners/walk-in-showers/"
                              data-uapi-link="buyers_guides_dropdown_best_walk-in_showers"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Best Walk-in Showers
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/medical-alert-systems/"
                              data-uapi-link="buyers_guides_dropdown_best_medical_alert_systems"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Best Medical Alert Systems
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/homeowners/stairlifts/"
                              data-uapi-link="buyers_guides_dropdown_best_stair_lifts"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Best Stair Lifts
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/reverse-mortgages/"
                              data-uapi-link="buyers_guides_dropdown_best_reverse_mortgages"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Best Reverse Mortgages
                            </Link>
                          </div>
                        </li>
                        <li className="ca-hdr__nav-item-lst" role="none">
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a">
                            <Link
                              href="https://www.consumeraffairs.com/elder-care-planning/"
                              data-uapi-link="buyers_guides_dropdown_senior"
                              className="ca-hdr__sub-menu-a ca-hdr__sub-menu-a--all ca-hdr__fcsbl js-view-all"
                              role="menuitem"
                            >
                              <span className="ca-hdr__nav-item-undl">
                                View all Senior
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25 20"
                              >
                                <path
                                  className="ca-icon__colored-stroke"
                                  d="M24.3424 10L0.658203 10M24.3424 10L15.4608 19M24.3424 10L15.4608 1"
                                  fill="none"
                                  stroke="#000"
                                  strokeWidth="1.25"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ca-hdr__nav-item ca-hdr__nav-item--customer_reviews ca-hdr__nav-item--lvl-1-mb ca-hdr__nav-item-prt js-menu-item"
              data-custom-uapi-event="customer_reviews_dropdown"
            >
              <button
                className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-1-mb ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                data-uapi-link="header_customer_reviews_dropdown"
              >
                <span className="ca-hdr__nav-item-custom-hide">Customer</span>{" "}
                Reviews
              </button>
              <div className="ca-hdr__sub-menu-wrp ca-hdr__sub-menu ca-hdr__sub-menu--full ca-hdr__sub-menu--lvl-1-mb js-sub-menu">
                <div className="ca-hdr__sub-menu-col-wpr">
                  <div className="ca-hdr__sub-menu-col">
                    <div
                      className="ca-hdr__nav-item ca-hdr__nav-item--lvl-2-mb js-menu-item ca-hdr__sub-menu-itm"
                      role="menu"
                    >
                      <button className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-2-mb ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl">
                        Auto
                      </button>
                      <ul className="ca-hdr__nav-item-lst-wpr" role="group">
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/auto_warranty/endurance-warranty.html"
                              data-uapi-link="buyers_guides_dropdown_endurance_warranty_reviews"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Endurance Warranty Reviews
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/auto_warranty/carshield.html"
                              data-uapi-link="buyers_guides_dropdown_carshield_reviews"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              CarShield Reviews
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/auto_warranty/carchex.html"
                              data-uapi-link="buyers_guides_dropdown_carchex_reviews"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              CARCHEX Reviews
                            </Link>
                          </div>
                        </li>
                        <li className="ca-hdr__nav-item-lst" role="none">
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a">
                            <Link
                              href="https://www.consumeraffairs.com/automotive/automotive.htm"
                              data-uapi-link="buyers_guides_dropdown_auto"
                              className="ca-hdr__sub-menu-a ca-hdr__sub-menu-a--all ca-hdr__fcsbl js-view-all"
                              role="menuitem"
                            >
                              <span className="ca-hdr__nav-item-undl">
                                View all Auto
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25 20"
                              >
                                <path
                                  className="ca-icon__colored-stroke"
                                  d="M24.3424 10L0.658203 10M24.3424 10L15.4608 19M24.3424 10L15.4608 1"
                                  fill="none"
                                  stroke="#000"
                                  strokeWidth="1.25"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ca-hdr__sub-menu-col">
                    <div
                      className="ca-hdr__nav-item ca-hdr__nav-item--lvl-2-mb js-menu-item ca-hdr__sub-menu-itm"
                      role="menu"
                    >
                      <button className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-2-mb ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl">
                        Home
                      </button>
                      <ul className="ca-hdr__nav-item-lst-wpr" role="group">
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/solar-energy/sunpower.html"
                              data-uapi-link="buyers_guides_dropdown_sunpower_reviews"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              SunPower Reviews
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/solar-energy/sunrun.html"
                              data-uapi-link="buyers_guides_dropdown_sunrun_reviews"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Sunrun Reviews
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/insurance/am_home.html"
                              data-uapi-link="buyers_guides_dropdown_american_home_shield_reviews"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              American Home Shield Reviews
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/homeowners/choice_home_warranty.html"
                              data-uapi-link="buyers_guides_dropdown_choice_home_warranty_reviews"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Choice Home Warranty Reviews
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/homeowners/adt.htm"
                              data-uapi-link="buyers_guides_dropdown_adt_reviews"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              ADT Reviews
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/homeowners/apx_alarm.html"
                              data-uapi-link="buyers_guides_dropdown_vivint_smart_home_reviews"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Vivint Smart Home Reviews
                            </Link>
                          </div>
                        </li>
                        <li className="ca-hdr__nav-item-lst" role="none">
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a">
                            <Link
                              href="https://www.consumeraffairs.com/homeowners/"
                              data-uapi-link="buyers_guides_dropdown_home"
                              className="ca-hdr__sub-menu-a ca-hdr__sub-menu-a--all ca-hdr__fcsbl js-view-all"
                              role="menuitem"
                            >
                              <span className="ca-hdr__nav-item-undl">
                                View all Home
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25 20"
                              >
                                <path
                                  className="ca-icon__colored-stroke"
                                  d="M24.3424 10L0.658203 10M24.3424 10L15.4608 19M24.3424 10L15.4608 1"
                                  fill="none"
                                  stroke="#000"
                                  strokeWidth="1.25"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ca-hdr__sub-menu-col">
                    <div
                      className="ca-hdr__nav-item ca-hdr__nav-item--lvl-2-mb js-menu-item ca-hdr__sub-menu-itm"
                      role="menu"
                    >
                      <button className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-2-mb ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl">
                        Finance
                      </button>
                      <ul className="ca-hdr__nav-item-lst-wpr" role="group">
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/finance/rocket-mortgage.html"
                              data-uapi-link="buyers_guides_dropdown_rocket_mortgage_reviews"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Rocket Mortgage Reviews
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/finance/quicken_loans_mortgage.html"
                              data-uapi-link="buyers_guides_dropdown_quicken_loans_reviews"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Quicken Loans Reviews
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/finance/new-american-funding.html"
                              data-uapi-link="buyers_guides_dropdown_new_american_funding_reviews"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              New American Funding Reviews
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/finance/patriot-gold.html"
                              data-uapi-link="buyers_guides_dropdown_patriot_gold_group_reviews"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Patriot Gold Group Reviews
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/finance/amerisave_mortgage.html"
                              data-uapi-link="buyers_guides_dropdown_amerisave_mortgage_reviews"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              AmeriSave Mortgage Reviews
                            </Link>
                          </div>
                        </li>
                        <li className="ca-hdr__nav-item-lst" role="none">
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a">
                            <Link
                              href="https://www.consumeraffairs.com/finance/financial_services.htm"
                              data-uapi-link="buyers_guides_dropdown_finance"
                              className="ca-hdr__sub-menu-a ca-hdr__sub-menu-a--all ca-hdr__fcsbl js-view-all"
                              role="menuitem"
                            >
                              <span className="ca-hdr__nav-item-undl">
                                View all Finance
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25 20"
                              >
                                <path
                                  className="ca-icon__colored-stroke"
                                  d="M24.3424 10L0.658203 10M24.3424 10L15.4608 19M24.3424 10L15.4608 1"
                                  fill="none"
                                  stroke="#000"
                                  strokeWidth="1.25"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ca-hdr__sub-menu-col">
                    <div
                      className="ca-hdr__nav-item ca-hdr__nav-item--lvl-2-mb js-menu-item ca-hdr__sub-menu-itm"
                      role="menu"
                    >
                      <button className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-2-mb ca-hdr__nav-item-btn ca-a ca-a--no-undln-hv ca-hdr__fcsbl">
                        Senior
                      </button>
                      <ul className="ca-hdr__nav-item-lst-wpr" role="group">
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/homeowners/safe-step-walk-in-tubs.html"
                              data-uapi-link="buyers_guides_dropdown_safe_step_walk-in_tubs_reviews"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Safe Step Walk-in Tubs Reviews
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/homeowners/american-standard-walk-in-baths.html"
                              data-uapi-link="buyers_guides_dropdown_american_standard_walk-in_baths_reviews"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              American Standard Walk-in Baths Reviews
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/medical-alert-systems/adt.html"
                              data-uapi-link="buyers_guides_dropdown_adt_medical_alert_reviews"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              ADT Medical Alert Reviews
                            </Link>
                          </div>
                        </li>
                        <li
                          className="ca-hdr__sub-menu ca-hdr__sub-menu--lvl-2-mb js-sub-menu"
                          role="none"
                        >
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a ca-hdr__nav-item--no-arw">
                            <Link
                              href="https://www.consumeraffairs.com/medical-alert-systems/medical-guardian.html"
                              data-uapi-link="buyers_guides_dropdown_medical_guardian_reviews"
                              className="ca-hdr__sub-menu-a ca-hdr__fcsbl ca-hdr__nav-item-a--lvl-3-mb ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                              role="menuitem"
                            >
                              Medical Guardian Reviews
                            </Link>
                          </div>
                        </li>
                        <li className="ca-hdr__nav-item-lst" role="none">
                          <div className="ca-hdr__nav-item ca-hdr__nav-item-a">
                            <Link
                              href="https://www.consumeraffairs.com/elder-care-planning/"
                              data-uapi-link="buyers_guides_dropdown_senior"
                              className="ca-hdr__sub-menu-a ca-hdr__sub-menu-a--all ca-hdr__fcsbl js-view-all"
                              role="menuitem"
                            >
                              <span className="ca-hdr__nav-item-undl">
                                View all Senior
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25 20"
                              >
                                <path
                                  className="ca-icon__colored-stroke"
                                  d="M24.3424 10L0.658203 10M24.3424 10L15.4608 19M24.3424 10L15.4608 1"
                                  fill="none"
                                  stroke="#000"
                                  strokeWidth="1.25"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ca-hdr__nav-item-prt ca-hdr__nav-item ca-hdr__nav-item--no-arw ca-hdr__nav-item-nws">
              <Link
                href="https://www.consumeraffairs.com/news04/"
                className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-1 ca-a ca-a--no-undln-hv ca-hdr__fcsbl"
                data-uapi-link="header_news"
              >
                News
              </Link>
            </div>
            <div className="ca-hdr__nav-item-rvw ca-hdr__nav-item-prt">
              <div className="ca-hdr__nav-frm">
                <Link
                  className="ca-hdr__nav-item-a ca-hdr__nav-item-a--lvl-1 ca-hdr__review-btn ca-hdr__mb-btn ca-hdr__mb-btn--rev ca-hdr__fcsbl ca-a ca-btn--link ca-a--bld-no-undln"
                  href="https://www.consumeraffairs.com/review/write/"
                  data-uapi-link="header_write_review"
                >
                  <span className="ca-hdr__nav-item-undl">Write a review</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="ca-hdr__lgn-btns">
            <Link
              className="ca-hdr__lgn-btn ca-hdr__lgn-btn--drk ca-btn"
              href="https://accounts.consumeraffairs.com/?next=https%3A//www.consumeraffairs.com/"
              target="_blank"
              data-uapi-link="header_login"
              rel="noopener"
            >
              Log in
            </Link>
            <p className="ca-hdr__lgn-or">or sign up</p>
            <Link
              className="ca-hdr__lgn-btn ca-hdr__lgn-btn--ggl ca-btn"
              href="https://accounts.consumeraffairs.com/social-login/google-oauth2/?secondary_redirect=https%3A//www.consumeraffairs.com/"
              rel="noopener"
              data-uapi-link="header_signup_google"
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
              <span className="ca-hdr__lgn-txt">Continue with Google</span>
            </Link>
            <Link
              className="ca-hdr__lgn-btn ca-btn"
              href="https://accounts.consumeraffairs.com/create/?next=https%3A//www.consumeraffairs.com/"
              rel="noopener"
              data-uapi-link="header_signup_email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  className="ca-icon__colored-stroke"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.299"
                  d="M1.206 3.619h15.588v11.134H1.206V3.619Z"
                />
                <path
                  stroke="currentColor"
                  className="ca-icon__colored-stroke"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.299"
                  d="m16.542 4.027-6.045 4.65a2.455 2.455 0 0 1-2.994 0l-6.045-4.65"
                />
              </svg>
              <span className="ca-hdr__lgn-txt">Continue with email</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navmenu;
