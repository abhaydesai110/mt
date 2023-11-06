import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getProfile,
  removeToken,
  useProfile,
  useUser,
} from "../Redux/Slices/AuthSlices";
import { useDispatch } from "react-redux";
import authHeader from "../Redux/Services/AuthHeadres";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import image from "../../src/assets/images/card9.jpg";

const Profile = () => {
  const user = useUser();
  const { profile } = useProfile();
  console.log("profile", profile);
  console.log("user", user);
  const [renderValues, setRenderValues] = useState(null);
  console.log("renderValues", renderValues);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDisable, setIsDisable] = useState(true);
  const [isEdit, setIsEdit] = useState(true);
  const [isSave, setIsSave] = useState(false);
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    username: "",
  };

  const schemaValidation = Yup.object().shape({
    fname: Yup.string().required(),
    lname: Yup.string().required(),
    email: Yup.string().required(),
    username: Yup.string().required(),
  });

  const onSubmit = (values) => {
    console.log("values", values);
  };

  const logOutUser = async () => {
    const logOut = dispatch(removeToken());
    console.log("logOut", logOut);
    navigate("/");
  };

  const getProfileDetails = async () => {
    const response = await dispatch(getProfile());
    if (response?.payload?.data?.IsSuccess) {
      const responseValues = response?.payload?.data?.Data;
      const savedValues = {
        fname: responseValues.fname,
        lname: responseValues.lname,
        email: responseValues.email,
        username:
          `${responseValues.fname}${responseValues.lname}`.toLowerCase(),
      };
      setRenderValues(savedValues);
    }
    console.log("response", response);
  };

  useEffect(() => {
    getProfileDetails();
  }, []);

  return (
    <div>
      <div className="main relative bg-[#090E1A] pt-24">
        <div id="particles-js" className="fixed inset-0 w-full h-screen"></div>

        <section className="relative px-6 xl:px-10 py-16 lg:py-24 z-20">
          <div className="text-center space-y-2 sm:space-y-4">
            <span className="text-center block uppercase text-sm md:text-lg font-semibold text-white">
              WHAT WE OFFER
            </span>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl text-white font-semibold capitalize">
              Profile
            </h2>
          </div>
          <Formik
            initialValues={renderValues || initialValues}
            validationSchema={schemaValidation}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {({ formik }) => {
              return (
                <>
                  <Form className="w-full max-w-3xl mx-auto">
                    <div className="flex flex-wrap -mx-3 mt-10 md:mt-16 xl:mt-20">
                      <div className="w-full p-3 space-y-3 pb-8">
                        <div className="w-32 h-32 border-2 border-white mx-auto rounded-full bg-[#202934] overflow-hidden relative">
                          <img
                            className="w-full h-full"
                            src={image}
                            alt="card7"
                          />
                          <input
                            className="inset-0 w-full h-full absolute opacity-0"
                            type="file"
                            // name="fname"
                          />
                        </div>
                        <h3 className="text-center text-2xl font-semibold text-white">
                          {renderValues
                            ? `${renderValues.fname} ${renderValues.lname}`
                            : null}
                        </h3>
                      </div>
                      <div className="w-full sm:w-1/2 p-3">
                        <div className="relative">
                          <Field
                            name="fname"
                            className="bg-[#202934] text-white outline-none w-full rounded-lg p-4 pe-12 text-sm lg:text-base"
                            placeholder="First Name"
                            disabled={isDisable}
                          />
                          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <svg
                              className="w-5 h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="512"
                              height="512"
                              x="0"
                              y="0"
                              viewBox="0 0 512 512.001"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <path
                                  d="M210.352 246.633c33.882 0 63.218-12.153 87.195-36.13 23.969-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.13 87.195 23.98 23.969 53.316 36.125 87.19 36.125zM144.379 57.34c18.394-18.395 39.973-27.336 65.973-27.336 25.996 0 47.578 8.941 65.976 27.336 18.395 18.398 27.34 39.98 27.34 65.972 0 26-8.945 47.579-27.34 65.977-18.398 18.399-39.98 27.34-65.976 27.34-25.993 0-47.57-8.945-65.973-27.34-18.399-18.394-27.344-39.976-27.344-65.976 0-25.993 8.945-47.575 27.344-65.973zM426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.312-10.34-7.808-20.55-13.375-30.336-5.77-10.156-12.55-19-20.16-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 0 1-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.043 5.34-10.968 0-22.086-1.797-33.043-5.34-11.21-3.622-20.3-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.754-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.609 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.063 11.476-3.457 22.363-4.149 32.363C.343 403.492 0 413.668 0 423.949c0 26.727 8.496 48.363 25.25 64.32C41.797 504.017 63.688 512 90.316 512h246.532c26.62 0 48.511-7.984 65.062-23.73 16.758-15.946 25.254-37.59 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm-44.906 72.828c-10.934 10.406-25.45 15.465-44.38 15.465H90.317c-18.933 0-33.449-5.059-44.379-15.46-10.722-10.208-15.933-24.141-15.933-42.587 0-9.594.316-19.066.95-28.16.616-8.922 1.878-18.723 3.75-29.137 1.847-10.285 4.198-19.937 6.995-28.675 2.684-8.38 6.344-16.676 10.883-24.668 4.332-7.618 9.316-14.153 14.816-19.418 5.145-4.926 11.63-8.957 19.27-11.98 7.066-2.798 15.008-4.329 23.629-4.56 1.05.56 2.922 1.626 5.953 3.602 6.168 4.02 13.277 8.606 21.137 13.625 8.86 5.649 20.273 10.75 33.91 15.152 13.941 4.508 28.16 6.797 42.273 6.797 14.114 0 28.336-2.289 42.27-6.793 13.648-4.41 25.058-9.507 33.93-15.164 8.043-5.14 14.953-9.593 21.12-13.617 3.032-1.973 4.903-3.043 5.954-3.601 8.625.23 16.566 1.761 23.636 4.558 7.637 3.024 14.122 7.059 19.266 11.98 5.5 5.262 10.484 11.798 14.816 19.423 4.543 7.988 8.208 16.289 10.887 24.66 2.801 8.75 5.156 18.398 7 28.675 1.867 10.434 3.133 20.239 3.75 29.145v.008c.637 9.058.957 18.527.961 28.148-.004 18.45-5.215 32.38-15.937 42.582zm0 0"
                                  fill="#939AA6"
                                  data-original="#939AA6"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="w-full sm:w-1/2 p-3">
                        <div className="relative">
                          <Field
                            type="text"
                            name="lname"
                            className="bg-[#202934] text-white outline-none w-full rounded-lg p-4 pe-12 text-sm lg:text-base"
                            placeholder="Enter lastname"
                            disabled={isDisable}
                          />
                          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <svg
                              className="w-5 h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="512"
                              height="512"
                              x="0"
                              y="0"
                              viewBox="0 0 512 512.001"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <path
                                  d="M210.352 246.633c33.882 0 63.218-12.153 87.195-36.13 23.969-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.13 87.195 23.98 23.969 53.316 36.125 87.19 36.125zM144.379 57.34c18.394-18.395 39.973-27.336 65.973-27.336 25.996 0 47.578 8.941 65.976 27.336 18.395 18.398 27.34 39.98 27.34 65.972 0 26-8.945 47.579-27.34 65.977-18.398 18.399-39.98 27.34-65.976 27.34-25.993 0-47.57-8.945-65.973-27.34-18.399-18.394-27.344-39.976-27.344-65.976 0-25.993 8.945-47.575 27.344-65.973zM426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.312-10.34-7.808-20.55-13.375-30.336-5.77-10.156-12.55-19-20.16-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 0 1-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.043 5.34-10.968 0-22.086-1.797-33.043-5.34-11.21-3.622-20.3-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.754-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.609 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.063 11.476-3.457 22.363-4.149 32.363C.343 403.492 0 413.668 0 423.949c0 26.727 8.496 48.363 25.25 64.32C41.797 504.017 63.688 512 90.316 512h246.532c26.62 0 48.511-7.984 65.062-23.73 16.758-15.946 25.254-37.59 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm-44.906 72.828c-10.934 10.406-25.45 15.465-44.38 15.465H90.317c-18.933 0-33.449-5.059-44.379-15.46-10.722-10.208-15.933-24.141-15.933-42.587 0-9.594.316-19.066.95-28.16.616-8.922 1.878-18.723 3.75-29.137 1.847-10.285 4.198-19.937 6.995-28.675 2.684-8.38 6.344-16.676 10.883-24.668 4.332-7.618 9.316-14.153 14.816-19.418 5.145-4.926 11.63-8.957 19.27-11.98 7.066-2.798 15.008-4.329 23.629-4.56 1.05.56 2.922 1.626 5.953 3.602 6.168 4.02 13.277 8.606 21.137 13.625 8.86 5.649 20.273 10.75 33.91 15.152 13.941 4.508 28.16 6.797 42.273 6.797 14.114 0 28.336-2.289 42.27-6.793 13.648-4.41 25.058-9.507 33.93-15.164 8.043-5.14 14.953-9.593 21.12-13.617 3.032-1.973 4.903-3.043 5.954-3.601 8.625.23 16.566 1.761 23.636 4.558 7.637 3.024 14.122 7.059 19.266 11.98 5.5 5.262 10.484 11.798 14.816 19.423 4.543 7.988 8.208 16.289 10.887 24.66 2.801 8.75 5.156 18.398 7 28.675 1.867 10.434 3.133 20.239 3.75 29.145v.008c.637 9.058.957 18.527.961 28.148-.004 18.45-5.215 32.38-15.937 42.582zm0 0"
                                  fill="#939AA6"
                                  data-original="#939AA6"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="w-full sm:w-1/2 p-3">
                        <div className="relative">
                          <Field
                            type="text"
                            className="bg-[#202934] text-white outline-none w-full rounded-lg p-4 pe-12 text-sm lg:text-base"
                            placeholder="username"
                            name="username"
                            disabled={isDisable}
                          />
                          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <svg
                              className="w-5 h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="512"
                              height="512"
                              x="0"
                              y="0"
                              viewBox="0 0 512 512.001"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <path
                                  d="M210.352 246.633c33.882 0 63.218-12.153 87.195-36.13 23.969-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.13 87.195 23.98 23.969 53.316 36.125 87.19 36.125zM144.379 57.34c18.394-18.395 39.973-27.336 65.973-27.336 25.996 0 47.578 8.941 65.976 27.336 18.395 18.398 27.34 39.98 27.34 65.972 0 26-8.945 47.579-27.34 65.977-18.398 18.399-39.98 27.34-65.976 27.34-25.993 0-47.57-8.945-65.973-27.34-18.399-18.394-27.344-39.976-27.344-65.976 0-25.993 8.945-47.575 27.344-65.973zM426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.312-10.34-7.808-20.55-13.375-30.336-5.77-10.156-12.55-19-20.16-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 0 1-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.043 5.34-10.968 0-22.086-1.797-33.043-5.34-11.21-3.622-20.3-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.754-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.609 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.063 11.476-3.457 22.363-4.149 32.363C.343 403.492 0 413.668 0 423.949c0 26.727 8.496 48.363 25.25 64.32C41.797 504.017 63.688 512 90.316 512h246.532c26.62 0 48.511-7.984 65.062-23.73 16.758-15.946 25.254-37.59 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm-44.906 72.828c-10.934 10.406-25.45 15.465-44.38 15.465H90.317c-18.933 0-33.449-5.059-44.379-15.46-10.722-10.208-15.933-24.141-15.933-42.587 0-9.594.316-19.066.95-28.16.616-8.922 1.878-18.723 3.75-29.137 1.847-10.285 4.198-19.937 6.995-28.675 2.684-8.38 6.344-16.676 10.883-24.668 4.332-7.618 9.316-14.153 14.816-19.418 5.145-4.926 11.63-8.957 19.27-11.98 7.066-2.798 15.008-4.329 23.629-4.56 1.05.56 2.922 1.626 5.953 3.602 6.168 4.02 13.277 8.606 21.137 13.625 8.86 5.649 20.273 10.75 33.91 15.152 13.941 4.508 28.16 6.797 42.273 6.797 14.114 0 28.336-2.289 42.27-6.793 13.648-4.41 25.058-9.507 33.93-15.164 8.043-5.14 14.953-9.593 21.12-13.617 3.032-1.973 4.903-3.043 5.954-3.601 8.625.23 16.566 1.761 23.636 4.558 7.637 3.024 14.122 7.059 19.266 11.98 5.5 5.262 10.484 11.798 14.816 19.423 4.543 7.988 8.208 16.289 10.887 24.66 2.801 8.75 5.156 18.398 7 28.675 1.867 10.434 3.133 20.239 3.75 29.145v.008c.637 9.058.957 18.527.961 28.148-.004 18.45-5.215 32.38-15.937 42.582zm0 0"
                                  fill="#939AA6"
                                  data-original="#939AA6"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </div>
                      </div>
                      {/* <div className="w-full sm:w-1/2 p-3">
                        <div className="relative">
                          <Field
                            
                            type="number"
                            className="bg-[#202934] text-white outline-none w-full rounded-lg p-4 pe-24 text-sm lg:text-base"
                            placeholder="Mobile Number"
                          />
                          <span className="verifynum absolute top-1/2 -translate-y-1/2 right-12 text-blue-600 font-semibold cursor-pointer">
                            Verify
                          </span>
                          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <svg
                              className="w-5 h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="512"
                              height="512"
                              x="0"
                              y="0"
                              viewBox="0 0 482.6 482.6"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <path
                                  d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                                  fill="#939AA6"
                                  data-original="#939AA6"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </div>
                      </div> */}
                      <div className="w-full sm:w-1/2 p-3">
                        <div className="relative">
                          <Field
                            type="email"
                            className="bg-[#202934] text-white outline-none w-full rounded-lg p-4 pe-12 text-sm lg:text-base"
                            placeholder="Enter email"
                            name="email"
                            disabled={isDisable}
                          />
                          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <svg
                              className="w-5 h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="512"
                              height="512"
                              x="0"
                              y="0"
                              viewBox="0 0 512 512"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <path
                                  d="M485.743 85.333H26.257C11.815 85.333 0 97.148 0 111.589V400.41c0 14.44 11.815 26.257 26.257 26.257h459.487c14.44 0 26.257-11.815 26.257-26.257V111.589c-.001-14.441-11.816-26.256-26.258-26.256zm-9.853 19.691L271.104 258.626c-3.682 2.802-9.334 4.555-15.105 4.529-5.77.026-11.421-1.727-15.104-4.529L36.109 105.024H475.89zM366.5 268.761l111.59 137.847c.112.138.249.243.368.368H33.542c.118-.131.256-.23.368-.368L145.5 268.761a9.846 9.846 0 0 0-1.464-13.851c-4.227-3.419-10.424-2.771-13.844 1.457l-110.5 136.501V117.332l209.394 157.046c7.871 5.862 17.447 8.442 26.912 8.468 9.452-.02 19.036-2.6 26.912-8.468l209.394-157.046v275.534L381.807 256.367c-3.42-4.227-9.623-4.877-13.844-1.457-4.234 3.419-4.884 9.624-1.463 13.851z"
                                  fill="#939AA6"
                                  data-original="#939AA6"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="w-full sm:w-1/2 flex p-3 space-x-4">
                        {isEdit && (
                          <>
                            <button
                              type="button"
                              className="w-1/2 my-1.5 rounded-lg hover:opacity-80 anim bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                              onClick={() => {
                                setIsEdit(false);
                                setIsSave(true);
                                setIsDisable(false);
                              }}
                            >
                              Edit
                            </button>
                          </>
                        )}
                        {isSave && (
                          <>
                            <button
                              type="submit"
                              className="w-1/2 my-1.5 rounded-lg hover:opacity-80 anim bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                              onClick={() => {
                                setIsEdit(true);
                                setIsSave(false);
                                setIsDisable(true);
                              }}
                            >
                              Save
                            </button>
                          </>
                        )}

                        <button
                          type="button"
                          className="w-1/2 my-1.5 rounded-lg hover:opacity-80 anim bg-red-600 px-5 py-3 text-sm font-medium text-white"
                          onClick={() => {
                            logOutUser();
                          }}
                        >
                          Log Out
                        </button>
                      </div>
                    </div>
                  </Form>
                </>
              );
            }}
          </Formik>
        </section>

        {/* <!-- footer  --> */}
        <footer className="relative z-20 bg-[#0D111A]">
          <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8 border-b border-gray-500">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <div className="text-teal-600">
                  <a className="block text-white text-3xl font-bold" href="/">
                    3D CANVA
                  </a>
                </div>
                <p className="max-w-xs mt-4 text-gray-300">
                  AI art tips from the finest ANN artists.
                </p>
                <ul className="flex gap-6 mt-8">
                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-white transition hover:opacity-75"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-white transition hover:opacity-75"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-white transition hover:opacity-75"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-white transition hover:opacity-75"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-white transition hover:opacity-75"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
                <div>
                  <p className="font-medium text-white text-xl xl:text-2xl">
                    Socials
                  </p>
                  <nav className="mt-6">
                    <ul className="space-y-4 text-sm">
                      <li className="relative group">
                        <a
                          href="#"
                          className="text-base xl:text-lg text-gray-400 hover:text-white anim"
                        >
                          Facebook
                        </a>
                        <span className="list_border anim"></span>
                      </li>
                      <li className="relative group">
                        <a
                          href="#"
                          className="text-base xl:text-lg text-gray-400 hover:text-white anim"
                        >
                          Twitter
                        </a>
                        <span className="list_border anim"></span>
                      </li>
                      <li className="relative group">
                        <a
                          href="#"
                          className="text-base xl:text-lg text-gray-400 hover:text-white anim"
                        >
                          Dribble
                        </a>
                        <span className="list_border anim"></span>
                      </li>
                      <li className="relative group">
                        <a
                          href="#"
                          className="text-base xl:text-lg text-gray-400 hover:text-white anim"
                        >
                          Instagram
                        </a>
                        <span className="list_border anim"></span>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div>
                  <p className="font-medium text-white text-xl xl:text-2xl">
                    Menu
                  </p>
                  <nav className="mt-6">
                    <ul className="space-y-4 text-sm">
                      <li className="relative group">
                        <a
                          href="#"
                          className="text-base xl:text-lg text-gray-400 hover:text-white anim"
                        >
                          Home
                        </a>
                        <span className="list_border anim"></span>
                      </li>
                      <li className="relative group">
                        <a
                          href="#"
                          className="text-base xl:text-lg text-gray-400 hover:text-white anim"
                        >
                          About
                        </a>
                        <span className="list_border anim"></span>
                      </li>
                      <li className="relative group">
                        <a
                          href="#"
                          className="text-base xl:text-lg text-gray-400 hover:text-white anim"
                        >
                          Services
                        </a>
                        <span className="list_border anim"></span>
                      </li>
                      <li className="relative group">
                        <a
                          href="#"
                          className="text-base xl:text-lg text-gray-400 hover:text-white anim"
                        >
                          Shop
                        </a>
                        <span className="list_border anim"></span>
                      </li>
                      <li className="relative group">
                        <a
                          href="#"
                          className="text-base xl:text-lg text-gray-400 hover:text-white anim"
                        >
                          Contacts
                        </a>
                        <span className="list_border anim"></span>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div>
                  <p className="font-medium text-white text-xl xl:text-2xl">
                    Say Hello
                  </p>
                  <nav className="mt-6">
                    <ul className="space-y-4 text-sm">
                      <li className="relative group">
                        <a
                          href="#"
                          className="text-base xl:text-lg text-gray-400 hover:text-white anim"
                        >
                          info@email.com
                        </a>
                        <span className="list_border anim"></span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="py-7 max-w-screen-xl mx-auto px-4">
            <p className="text-sm text-gray-300">
              AxiomThemes © 2023. All Rights Reserved.
            </p>
          </div>
        </footer>

        <a
          href="#"
          id="topscroll"
          className="animate-bounce inline-block p-2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-yellow-600 fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50"
        >
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="512"
            height="512"
            x="0"
            y="0"
            viewBox="0 0 24 24"
            style={{ enableBackground: "new 0 0 512 512" }}
            xmlSpace="preserve"
          >
            <g>
              <path
                d="m11 5.414-5.293 5.293a1 1 0 0 1-1.414-1.414l7-7a.999.999 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414L13 5.414V21a1 1 0 0 1-2 0z"
                fill="#000000"
                data-original="#000000"
              ></path>
            </g>
          </svg>
        </a>
      </div>

      {/* <!-- get otp  --> */}
      <div
        id="numpopup"
        className="numpopup w-full h-screen flex items-center justify-center p-6 fixed inset-0 bg-black/95 z-50 invisible scale-0 anim"
      >
        <span
          onClick="removeActive('#numpopup','open');"
          className="absolute top-8 right-8 cursor-pointer"
        >
          <svg
            className="w-7 h-7 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="512"
            height="512"
            x="0"
            y="0"
            viewBox="0 0 329.269 329"
            style={{ enableBackground: "new 0 0 512 512" }}
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
                data-original="#000000"
              ></path>
            </g>
          </svg>
        </span>
        <div className="w-full max-w-xs">
          <form action="" method="post">
            <div className="relative">
              <input
                type="number"
                className="bg-[#202934] text-white outline-none w-full rounded-lg p-4 pe-10 text-sm lg:text-base"
                placeholder="Mobile Number"
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="512"
                  height="512"
                  x="0"
                  y="0"
                  viewBox="0 0 482.6 482.6"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                      fill="#939AA6"
                      data-original="#939AA6"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
            <button
              type="button"
              className="w-full my-1.5 rounded-lg hover:opacity-80 anim bg-indigo-600 px-5 py-3 text-sm font-medium text-white mt-4"
            >
              Get Otp
            </button>
          </form>
        </div>
      </div>

      {/* <!-- enter otp  --> */}
      <div
        id="otpopup"
        className="otpopup w-full h-screen flex items-center justify-center p-6 fixed inset-0 bg-black/95 z-50 invisible scale-0"
      >
        <div className="w-full max-w-xs">
          <form action="" method="post">
            <div className="relative">
              <input
                type="text"
                className="bg-[#202934] text-white outline-none w-full rounded-lg p-4 pe-10 text-sm lg:text-base"
                placeholder="Enter Otp"
              />
            </div>
            <button
              type="submit"
              className="w-full my-1.5 rounded-lg hover:opacity-80 anim bg-indigo-600 px-5 py-3 text-sm font-medium text-white mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
