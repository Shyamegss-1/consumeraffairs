import { comment } from "postcss";
import { title } from "process";
import { literal, number, object, string } from "zod";

export const signinSchema = object({
  email: string({
    required_error: "Email is required",
  }).min(1, "Email is required"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  userType: string({
    required_error: "User Type is required",
  }).min(1, "User Type is required"),
});
export const changePasswordSchema = object({
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

export const businessUserSchema = object({
  name: string({
    required_error: "Name is required",
  }).min(1, "Name is required"),
  jobTitle: string({
    required_error: "Job Title is required",
  }).min(1, "Job Title is required"),
  email: string({
    required_error: "Email is required",
  }).email("Invalid email"),
  website: string({
    required_error: "Website is required",
  }),
  businessName: string({
    required_error: "Business Name is required",
  }).min(1, "Business Name is required"),
  phoneNumber: string({
    required_error: "Phone Number is required",
  }).min(1, "Phone Number is required"),
  userType: string({
    required_error: "User Type is required",
  }),
});




// Define the validation schema with required fields
export const blogValidationSchema = object({
  title: string().min(1, { message: "Title is required" }),  // required string
  businessCategory: number({ invalid_type_error: "Business category must be a number" }).min(1, { message: "Business category is required" }),  // required number
  blogCategory: number({ invalid_type_error: "Blog category must be a number" }).min(1, { message: "Blog category is required" }),  // required number
  tags: string().optional().or(literal("")),  // required string
  slug: string().optional().or(literal("")),
  blogImage: string().min(1, { message: "Blog image is required" }),  // required string
  blogImageAlt: string().min(1, { message: "Blog image alt text is required" }),  // required string
  blogContent: string().min(1, { message: "Blog content is required" }),  // required string
  metaTitle: string().min(1, { message: "Meta title is required" }),  // required string
  metaKeywords: string().optional().or(literal("")),
  metaDescription: string().min(1, { message: "Meta description is required" }),  // required string
});