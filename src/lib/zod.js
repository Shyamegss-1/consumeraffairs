import { comment } from "postcss";
import { title } from "process";
import { number, object, string } from "zod";

export const signinSchema = object({
  username: string({
    required_error: "Email/Username is required",
  }).min(1, "Email/Username is required"),
  cpassword: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const signupSchema = object({
  firstName: string({
    required_error: "First Name is required",
  }).min(1, "First Name is required"),
  lastName: string({
    required_error: "Last Name is required",
  }).min(1, "Last Name is required"),
  // address: string({
  //   required_error: "Address is required",
  // }).min(1, "Address is required"),
  // country: string({
  //   required_error: "Country is required",
  // }).min(1, "Country is required"),
  // postalCode: string({
  //   required_error: "Postal Code is required",
  // }).min(1, "Postal Code is required"),
  // province: string({
  //   required_error: "Province is required",
  // }).min(1, "Province is required"),
  // city: string({
  //   required_error: "City is required",
  // }).min(1, "City is required"),
  email: string({
    required_error: "Email is required",
  }).email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  confirmPassword: string({
    required_error: "Confirm Password is required",
  })
    .min(1, "Confirm Password is required")
    .min(8, "Confirm Password must be more than 8 characters")
    .max(32, "Confirm Password must be less than 32 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password is not matched with confirm password.",
  path: "/signup",
});

export const reviewFormSchema = object({
  rating: number({
    required_error: "Rating is required",
  }).min(1, "Rating is required"),
  title: string({
    required_error: "Title is required",
  }).min(1, "Title is required"),
  comment: string({
    required_error: "comment is required",
  }).min(1, "comment is required"),
});
