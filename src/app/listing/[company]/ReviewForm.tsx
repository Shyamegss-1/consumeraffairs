"use client";
import { reviewFormSchema } from "@/lib/zod";
import { postReviews } from "@/server-actions/postReviews";
import { log } from "console";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
type Props = {
  prevReviews: [];
};

const ReviewForm = ({ prevReviews }: Props) => {
  const [reviews, setReviews] = useState(prevReviews || []);

  return (
    <>
      <div
        className="business-profile-review-section pb-5"
        id="business-profile-review-section"
      >
        <h4 className="mb-3 title">Reviews</h4>
        <div className="underline" />
        <h4 className="px-3 no-review">No Reviews yet</h4>{" "}
      </div>
      <div className="review-new-form-box mb-5" id="review-new-form-box">
        <div>
          <h4 className="mb-3">Write A Review </h4>
          <div className="underline" />
        </div>
        <div className="mt-4">
          <form
            className="row"
            action={async (formData) => {
              const rating = formData.get("rating");
              const date = formData.get("date");
              const title = formData.get("title");
              const comment = formData.get("comment");
              const res = await postReviews({ rating, date, title, comment });
              // log
              if (res.status) {
                Swal.fire({
                  toast: true,
                  title: "Success",
                  text: "Reviews posted successfully",
                  icon: "success",
                });
              } else {
                Swal.fire({
                  toast: true,
                  title: "Error",
                  text: "Failed to post reviews",
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
                  name="date"
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
