"use client";
import React, { useEffect, useState } from "react";
import { CategoryOptions } from "../add-business/CategoryOptions";

type Props = {};

const UpdateBusinessProfile = (props: Props) => {
  const [options, setOptins] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [logo, setLogo] = useState<string | null>(null);

  useEffect(() => {
    const options = async () => {
      let res = await CategoryOptions();
      console.log(res,"ressssssssssss");
      
      setOptins(res);
    };
    options();
  }, []);
  return (
    <form
      method="post"
      className="relative"
    >
      <div className="edit-profile-main-box">
        <div className="edit-profile-logo-box flex items-center">
          {/* <div className="logo-box">
            <label htmlFor="" className="w-full">
              Logo
            </label>
            <img src="assets/img/aaaa.png" width="180px" alt="" id="prevlogo">
            <img
              src="../admin/upload/1725271347images.jpg"
              width="180px"
              alt=""
              id="prevlogo"
            />{" "}
          </div> */}
          <div className="upload-btn-box ml-1">
            <p className="m-0">
              <b>Recommended size - </b> 200px x 200px.
            </p>
            <p className="m-0">
              <b>Maximum file size - </b> 2MB.
            </p>
            <label htmlFor="logo" className="edit-logo-field mt-2">
              <button className="upload-btn">Upload</button>
              <input
                type="file"
                name="logo"
                id="profile-browse"
                className="businesslogo"
              />
              <input
                type="hidden"
                name="oldlogo"
                defaultValue="1725271347images.jpg"
              />
            </label>
          </div>
        </div>
        <div className="form-field w-full">
          <label htmlFor="">Business Name</label>
          <input
            type="text"
            className="form-control"
            name="businees_name"
            defaultValue="Wolf Wolf Inc"
          />
        </div>
        <div className="form-field w-full">
          <label htmlFor="">Job Role</label>
          <input
            type="text"
            className="form-control"
            name="job_title"
            defaultValue="Fugit voluptate vol"
          />
        </div>
        <div className="form-field w-full">
          <label htmlFor="">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            defaultValue="gddfgdf"
          />
        </div>
        <div className="form-field w-full">
          <label htmlFor="">Email ID 1</label>
          <input
            type="text"
            className="form-control"
            name="purpose"
            defaultValue=""
            placeholder="Enter the purpose of your email"
            style={{
              backgroundImage: 'url("data:image/png',
              backgroundRepeat: "no-repeat",
              backgroundSize: 20,
              backgroundPosition: "97% center",
              cursor: "auto",
            }}
            data-temp-mail-org={0}
          />
          <input
            type="text"
            className="form-control mt-1"
            name="email"
            defaultValue="kimibe5116@amxyy.com"
            style={{
              backgroundImage: 'url("data:image/png',
              backgroundRepeat: "no-repeat",
              backgroundSize: 20,
              backgroundPosition: "97% center",
              cursor: "auto",
            }}
            data-temp-mail-org={1}
          />
        </div>
        <div className="form-field w-full">
          <label htmlFor="">Email ID 2</label>
          <input
            type="text"
            className="form-control"
            name="purpose_2"
            id="purpose_2"
            defaultValue=""
            placeholder="Enter the purpose of your email"
            style={{
              backgroundImage: 'url("data:image/png',
              backgroundRepeat: "no-repeat",
              backgroundSize: 20,
              backgroundPosition: "97% center",
              cursor: "auto",
            }}
            data-temp-mail-org={2}
          />
          <input
            type="text"
            className="form-control mt-1"
            name="email_2"
            id="email_2"
            defaultValue=""
            placeholder="Enter Email ID 2"
            style={{
              backgroundImage: 'url("data:image/png',
              backgroundRepeat: "no-repeat",
              backgroundSize: 20,
              backgroundPosition: "97% center",
              cursor: "auto",
            }}
            data-temp-mail-org={3}
          />
        </div>
        <div className="form-field w-full">
          <label htmlFor="">Email ID 3</label>
          <input
            type="text"
            className="form-control"
            name="purpose_3"
            defaultValue=""
            placeholder="Enter the purpose of your email"
            style={{
              backgroundImage: 'url("data:image/png',
              backgroundRepeat: "no-repeat",
              backgroundSize: 20,
              backgroundPosition: "97% center",
              cursor: "auto",
            }}
            data-temp-mail-org={4}
          />
          <input
            type="text"
            className="form-control mt-1"
            name="email_3"
            defaultValue=""
            placeholder="Enter Email ID 3"
            style={{
              backgroundImage: 'url("data:image/png',
              backgroundRepeat: "no-repeat",
              backgroundSize: 20,
              backgroundPosition: "97% center",
              cursor: "auto",
            }}
            data-temp-mail-org={5}
          />
        </div>
        <div className="form-field w-full">
          <label htmlFor="">Phone</label>
          <br />
        </div>
        <div className="form-field w-full">
          <label htmlFor="">Business Category</label>
          <select name="category" className="form-control">
            <option value="">Select Category</option>
            {options?.map((item, index) => (
              <option key={index} value={item.cid}>
                {item.category_name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field w-full">
          <label htmlFor="">About</label>
          <textarea
            name="about"
            id=""
            className="form-control"
            rows={5}
            defaultValue={"Error commodi omnis                         "}
          />
        </div>
        <div className="form-field w-full">
          <label htmlFor="">Meta Title</label>
          <br />
          <input
            type="text"
            className="form-control"
            defaultValue=""
            name="meta_title"
          />
        </div>
        <div className="form-field w-full">
          <label htmlFor="">Meta Keywords</label>
          <br />
          <input
            type="text"
            className="form-control"
            defaultValue=""
            name="meta_keywords"
          />
        </div>
        <div className="form-field w-full">
          <label htmlFor="">Meta Description</label>
          <br />
          <input
            type="text"
            className="form-control"
            defaultValue=""
            name="meta_description"
          />
        </div>
        <div className="edit-profile-logo-box d-flex align-items-center mt-3">
          <div className="logo-box">
            <label htmlFor="" className="w-full">
              Banner
            </label>
            <img
              src="assets/banner/banner.png"
              alt=""
              width="180px"
              height="100px"
            />
          </div>
          <div className="upload-btn-box ml-1">
            <p className="m-0">
              <b>Recommended size - </b> 1920px x 300px.
            </p>
            <p className="m-0">
              <b>Maximum file size - </b> 2MB.
            </p>
            <label htmlFor="logo" className="edit-logo-field mt-2">
              <button className="upload-btn">Upload</button>
              <input type="file" id="logo" className="banner" name="banner" />
              <input type="hidden" name="oldbanner" defaultValue="" />{" "}
            </label>
          </div>
        </div>
        <div className="form-field w-full">
          <label htmlFor="">Social Links( Optional )</label>
          <input
            type="text"
            className="form-control mb-2"
            name="facebook"
            defaultValue=""
            placeholder="Facebook"
          />
          <input
            type="text"
            className="form-control mb-2"
            name="instagram"
            defaultValue=""
            placeholder="Instagram"
          />
          <input
            type="text"
            className="form-control mb-2"
            name="twitter"
            defaultValue=""
            placeholder="Twitter"
          />
          <input
            type="text"
            className="form-control mb-2"
            name="linkedin"
            defaultValue=""
            placeholder="Linkedin"
          />
        </div>
        <button
          className="theme-btn1 w-50"
          type="submit"
          name="updatebusiness"
          id="updatebusiness"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdateBusinessProfile;
