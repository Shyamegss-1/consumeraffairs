"use client";
import { reviewFormSchema } from "@/lib/zod";
import { postReviews } from "@/server-actions/postReviews";
import { log } from "console";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
type Props = {
  prevReviews: any;
  companyId: number;
};

const ReviewForm = ({ prevReviews, companyId }: Props) => {
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
              const res: any = await postReviews({
                ...data,
                companyId,
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
