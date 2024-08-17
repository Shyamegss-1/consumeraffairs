"use client";
import { auth, signIn } from "@/auth";
import { loginHandler, signupHandler } from "@/server-actions/authActions";
import { postReviews } from "@/server-actions/postReviews";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
type Props = {
  prevReviews: any;
  companyId: number;
  userId: number | null;
};
type LoginFormResult = {
  username: string;
  password: string;
};

const ReviewForm = ({ prevReviews, companyId, userId }: Props) => {
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const [reviews, setReviews] = useState(prevReviews);
  console.log(reviews, "jghfgh");

  return (
    <>
      <div
        className="business-profile-review-section pb-5"
        id="business-profile-review-section"
      >
        <h4 className="mb-3 title">Reviews</h4>
        <div className="underline" />
        {reviews ? (
          reviews?.map((item: any, index: number) => (
            <div key={item.id} className="business-review-single-box mt-4">
              <div className="business-review-profile-box">
                <div className="business-review-profile-info flex items-center">
                  <div className="business-review-logo">
                    <p
                      style={{
                        height: 60,
                        margin: "auto",
                        fontSize: "26px !important",
                        color: "#fff",
                        width: 60,
                        lineHeight: 60,
                        textAlign: "center",
                        borderRadius: "50%",
                        backgroundColor: "green",
                      }}
                    >
                      {`${item.user.firstName
                        .charAt(0)
                        .toUpperCase()} ${item.user.lastName
                        .charAt(0)
                        .toUpperCase()}`}
                    </p>
                  </div>
                  <div className="business-user-name ms-2">
                    <h4>{`${item.user.firstName} ${item.user.lastName}`}</h4>
                    <p></p>
                  </div>
                </div>
                <div className="business-review-rating-box">
                  <div className="business-ratings-icons">
                    <i className="fa fa-star me-1" />
                    <i className="fa fa-star me-1" />
                    <i className="fa fa-star me-1" />
                    <i className="fa fa-star me-1" />
                    <i className="fa fa-star me-1" />{" "}
                    <span
                      className="fa fa-flag-o ms-2 fs-3 text-dark report-button"
                      data-id={210}
                    />
                  </div>
                  <div className="business-review-added-on">
                    <p>
                      <span>Added On : </span>
                      August 6, 2024{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="business-review-input-box mt-2">
                <h5>Almost 100 bucks for a certificate nobody cares </h5>
                <p>
                  Almost 100 bucks for a certificate nobody cares about is way
                  too much. The php-tutorial is bad. The questions are redundant
                  and too easy.{" "}
                </p>
              </div>
              <div className="business-review-date-of-experience mt-2">
                <p className="m-0">
                  <span>Date of Experience :</span>
                  2024-07-28{" "}
                </p>
              </div>
            </div>
          ))
        ) : (
          <h4 className="px-3 no-review">No Reviews yet</h4>
        )}
      </div>
      <div className="review-new-form-box mb-5" id="review-new-form-box">
        <div>
          <h4 className="mb-3 text-heading-3 font-heading-3">
            Write A Review{" "}
          </h4>
          <div className="underline" />
        </div>
        <div className="mt-4">
          <form
            className="row"
            action={async (formData) => {
              const rating = formData.get("rating");
              const dateOfExperience = formData.get("dateOfExperience");
              const title = formData.get("title");
              const comment = formData.get("comment");
              const data = {
                rating: rating as any,
                dateOfExperience: dateOfExperience
                  ? (dateOfExperience as string)
                  : "",
                title: title ? (title as string) : "",
                comment: comment ? (comment as string) : "",
              };
              if (userId) {
                const res: any = await postReviews({
                  ...data,
                  companyId,
                  userId,
                });
                // log
                if (res.status) {
                  Swal.fire({
                    title: "Success",
                    text: "Reviews posted successfully",
                    icon: "success",
                    didClose() {
                      console.log(res.reviews);
                      if (res.reviews) {
                        setReviews([res.reviews, ...reviews]);
                      }
                    },
                  });
                } else {
                  Swal.fire({
                    title: "Error",
                    text: res.error,
                    icon: "error",
                  });
                }
              } else {
                Swal.fire({
                  title: "Restricted",
                  text: "Please login to post reviews",
                  icon: "error",
                  focusConfirm: false,
                  confirmButtonText: "Login",
                  showCancelButton: true,
                  cancelButtonText: "Cancel",
                  allowOutsideClick: false,
                }).then((result) => {
                  if (result.isConfirmed) {
                    let emailInput: HTMLInputElement;
                    let passwordInput: HTMLInputElement;
                    let firstName: HTMLInputElement;
                    let lastName: HTMLInputElement;
                    let c_email: HTMLInputElement;
                    let createPassword: HTMLInputElement;
                    let comfirmPassword: HTMLInputElement;
                    let activeForm = "signin";
                    Swal.fire<LoginFormResult>({
                      allowOutsideClick: false,
                      title: "Account",
                      html: `
                    <button id="google-login" class="mx-auto p-2 ring-2 ring-primary_dark text-white rounded bg-primary_dark" style="display: flex; align-items: center; justify-content: center;">
                      <i class="google-icon" style="margin-right: 8px;"></i> Sign in with Google
                    </button>
                    <button id="signup_btn" class="mx-auto my-4 underline text-blue-600 " style="display: flex; align-items: center; justify-content: center;">
                      Create Account
                    </button>
                    <button id="signin_btn" class="mx-auto my-4 " style="display: flex; align-items: center; justify-content: center;">
                      Already have account <span class="text-blue-600 underline ml-2">Signin</span>
                    </button>
                    <hr />
                    <h1 id="form-heading" class="text-gray-600 text-heading-1 font-heading-1 mt-2">Signin</h1>
                    <div id="signin" class="w-full">
                      <input id="email" type="text" class="swal2-input" placeholder="Email">
                      <input id="password" type="password" class="swal2-input" placeholder="Password">
                    </div>
                    <div id="signup" class="w-full">
                      <input id="firstName" type="text" class="swal2-input" placeholder="First Name" required>
                      <input id="lastName" type="text" class="swal2-input" placeholder="Last Name" required>
                      <input id="c_email" type="text" class="swal2-input" placeholder="Email" required>
                      <input id="createPassword" type="password" class="swal2-input" placeholder="Create Password" required>
                      <input id="comfirmPassword" type="password" class="swal2-input" placeholder="Confirm Password" required>
                   </div>
                  `,
                      didOpen: () => {
                        const heading = document.getElementById(
                          "form-heading"
                        ) as HTMLInputElement;
                        const signupForm = document.getElementById(
                          "signup"
                        ) as HTMLInputElement;
                        const signinForm = document.getElementById(
                          "signin"
                        ) as HTMLInputElement;
                        const signin_btn = document.getElementById(
                          "signin_btn"
                        ) as HTMLInputElement;
                        const signup_btn = document.getElementById(
                          "signup_btn"
                        ) as HTMLInputElement;
                        if (
                          signupForm &&
                          signinForm &&
                          signin_btn &&
                          signup_btn
                        ) {
                          signupForm.style.display = "none";
                          signin_btn.style.display = "none";
                        }
                        document
                          .getElementById("signup_btn")
                          ?.addEventListener("click", () => {
                            if (
                              signupForm &&
                              signinForm &&
                              signin_btn &&
                              signup_btn &&
                              heading
                            ) {
                              signupForm.style.display = "block";
                              signinForm.style.display = "none";
                              signup_btn.style.display = "none";
                              signin_btn.style.display = "block";
                              heading.innerText = "Signup";
                              activeForm = "signup";
                            }
                          });
                        document
                          .getElementById("signin_btn")
                          ?.addEventListener("click", () => {
                            if (
                              signupForm &&
                              signinForm &&
                              signin_btn &&
                              signup_btn &&
                              heading
                            ) {
                              signupForm.style.display = "none";
                              signinForm.style.display = "block";
                              signin_btn.style.display = "none";
                              signup_btn.style.display = "block";
                              heading.innerText = "Signin";
                              activeForm = "signin";
                            }
                          });
                        // document
                        //   .getElementById("signin_btn")
                        //   ?.addEventListener("click", () => {
                        //     if (signupForm) {
                        //       signupForm.style.display = "block";
                        //     }
                        //   });
                        // document.getElementById("signup").style.display="none"
                        document
                          .getElementById("google-login")
                          ?.addEventListener("click", () => {
                            signIn("google");
                          });

                        // emailInput.onkeyup = (event) =>
                        //   event.key === "Enter" && Swal.clickConfirm();
                        // passwordInput.onkeyup = (event) =>
                        //   event.key === "Enter" && Swal.clickConfirm();
                      },
                      preConfirm: async () => {
                        const popup = Swal.getPopup()!;
                        // for signup
                        firstName = popup.querySelector(
                          "#firstName"
                        ) as HTMLInputElement;
                        lastName = popup.querySelector(
                          "#lastName"
                        ) as HTMLInputElement;
                        c_email = popup.querySelector(
                          "#c_email"
                        ) as HTMLInputElement;
                        createPassword = popup.querySelector(
                          "#createPassword"
                        ) as HTMLInputElement;
                        comfirmPassword = popup.querySelector(
                          "#comfirmPassword"
                        ) as HTMLInputElement;
                        // for signin
                        emailInput = popup.querySelector(
                          "#email"
                        ) as HTMLInputElement;
                        passwordInput = popup.querySelector(
                          "#password"
                        ) as HTMLInputElement;

                        if (activeForm === "signin") {
                          const email: string = emailInput.value;
                          const password: string = passwordInput.value;
                          if (!email || !password) {
                            Swal.showValidationMessage(
                              `Please enter email and password`
                            );
                          } else {
                            const res = await loginHandler({
                              email: email ? (email as string) : "",
                              password: password ? (password as string) : "",
                            });
                            console.log(res);

                            if (res.status) {
                              await router.refresh();
                              const _res: any = await postReviews({
                                ...data,
                                companyId,
                                userId: null,
                              });
                              // log
                              if (_res.status) {
                                Swal.fire({
                                  title: "Success",
                                  text: "Reviews posted successfully, Your review is under moderation.",
                                  icon: "success",
                                  didClose() {
                                    // console.log(res.reviews);
                                    if (_res.reviews) {
                                      setReviews([_res.reviews, ...reviews]);
                                    }
                                  },
                                });
                              } else {
                                Swal.fire({
                                  title: "Error",
                                  text: _res.error,
                                  icon: "error",
                                });
                              }
                            } else {
                              Swal.showValidationMessage(String(res.message));
                            }
                          }
                        } else {
                          console.log(c_email, "c_email.value");

                          const _email: string = c_email.value;
                          const _password: string = createPassword.value;
                          const _confirmPassword: string =
                            comfirmPassword.value;
                          const _firstName: string = firstName.value;
                          const _lastName: string = lastName.value;
                          if (
                            !_email ||
                            !_password ||
                            !_confirmPassword ||
                            !_lastName ||
                            !_firstName
                          ) {
                            Swal.showValidationMessage(
                              `All fields are required`
                            );
                          } else {
                            const res = await signupHandler({
                              email: _email ? (_email as string) : "",
                              password: _password ? (_password as string) : "",
                              confirmPassword: _confirmPassword
                                ? (_confirmPassword as string)
                                : "",
                              firstName: _firstName
                                ? (_firstName as string)
                                : "",
                              lastName: _lastName ? (_lastName as string) : "",
                            });

                            if (res.status) {
                              await loginHandler({
                                email: _email,
                                password: _password,
                              });
                              const _res: any = await postReviews({
                                ...data,
                                companyId,
                                userId: Number(res.userId),
                              });
                              // log
                              if (_res.status) {
                                Swal.fire({
                                  title: "Success",
                                  text: "Reviews posted successfully, Your review is under moderation.",
                                  icon: "success",
                                  didClose() {
                                    // console.log(res.reviews);
                                    if (_res.reviews) {
                                      // console.log();

                                      setReviews([_res.reviews, ...reviews]);
                                    }
                                  },
                                });
                              } else {
                                Swal.fire({
                                  title: "Error",
                                  text: _res.error,
                                  icon: "error",
                                });
                              }
                            } else {
                              Swal.showValidationMessage(String(res.message));
                            }
                          }
                        }
                      },
                      focusConfirm: false,
                      confirmButtonText: "Next",
                      showCancelButton: true,
                      cancelButtonText: "Cancel",
                      showLoaderOnConfirm: true,
                    }).then((result) => {
                      if (result.isConfirmed) {
                        // login logic here

                        console.log(result, "login");
                      }
                    });
                  }
                });
              }
            }}
          >
            <div className="col-lg-5">
              <div className="form-field">
                <label htmlFor="">Ratings*</label>
                <div className="listing-ratings-stars">
                  <div className="rating">
                    <input
                      type="radio"
                      id="star5"
                      className="fs-2 mx-2 starts"
                      name="rating"
                      defaultValue={5}
                      required={false}
                    />
                    <label htmlFor="star5" />
                    <input
                      type="radio"
                      id="star4"
                      className="fs-2 mx-2 starts"
                      name="rating"
                      defaultValue={4}
                      required={false}
                    />
                    <label htmlFor="star4" />
                    <input
                      type="radio"
                      id="star3"
                      className="fs-2 mx-2 starts"
                      name="rating"
                      defaultValue={3}
                      required={false}
                    />
                    <label htmlFor="star3" />
                    <input
                      type="radio"
                      id="star2"
                      className="fs-2 mx-2 starts"
                      name="rating"
                      defaultValue={2}
                      required={false}
                    />
                    <label htmlFor="star2" />
                    <input
                      type="radio"
                      id="star1"
                      className="fs-2 mx-2 starts"
                      name="rating"
                      defaultValue={1}
                      required={false}
                    />
                    <label htmlFor="star1" />
                  </div>
                  <div
                    id="ratingError"
                    className="error-message"
                    style={{ display: "none", color: "#fff" }}
                  >
                    Please select a rating.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="form-field">
                <label htmlFor="">Date Of Experience</label>
                <input
                  type="date"
                  id="date"
                  name="dateOfExperience"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-12 mt-4">
              <div className="form-field">
                <label htmlFor="">Review Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="form-control"
                  placeholder="Good Experience"
                />
              </div>
            </div>
            <div className="col-lg-12 mt-4">
              <div className="form-field">
                <label htmlFor="">
                  Please let us know about your experience with the
                  company/software*
                </label>
                <textarea
                  name="comment"
                  id="textInput"
                  placeholder="Enter the review description here..."
                  rows={5}
                  className="form-control"
                  defaultValue={""}
                  required={true}
                />
              </div>
            </div>
            <div className="col-lg-12 mt-4">
              <div className="form-field">
                <button className="theme-btn1 w-100" type="submit">
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReviewForm;
