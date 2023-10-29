import { ErrorMessage, Field, Form, Formik, validateYupSchema } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const initialValues = {
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const schemaValidation = Yup.object().shape({
    fname: Yup.string().required("Require!!"),
    lname: Yup.string().required("Require!!"),
    mobile: Yup.string().required("Require!!"),
    email: Yup.string().required("Require!!"),
    password: Yup.string().required("Require!!"),
    confirmPassword: Yup.string().required("Require!!"),
  });

  const onSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <div>
      <div className="main relative bg-[#090E1A] px-5 h-screen flex">
        {/* <!-- paticale animation  --> */}
        <div id="particles-js" className="fixed inset-0 w-full h-screen"></div>
        <div className="w-full m-auto max-w-3xl py-10 relative z-20">
          <h1 className="text-center font-bold text-indigo-600 text-4xl lg:text-5xl">
            Registration
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-300 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={schemaValidation}
            onSubmit={onSubmit}
          >
            {({ formik }) => {
              return (
                <>
                  <Form className="mb-0 mt-6 space-y-4 rounded-lg p-4 bg-white shadow-lg sm:p-6 lg:p-8">
                    <div className="flex justify-center flex-wrap -mx-3">
                      <div className="w-full sm:w-1/2 p-3">
                        <div className="">
                          <div className="relative">
                            <Field
                              className="outline-none w-full rounded-lg border-gray-200 p-4 pe-12 text-sm lg:text-base shadow"
                              name="fname"
                              placeholder="First Name"
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                              <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns:svgjs="http://svgjs.com/svgjs"
                                width="512"
                                height="512"
                                x="0"
                                y="0"
                                viewBox="0 0 512 512.001"
                                //   style="enable-background:new 0 0 512 512"
                                xmlSpace="preserve"
                                classNamea
                              >
                                <g>
                                  <path
                                    d="M210.352 246.633c33.882 0 63.218-12.153 87.195-36.13 23.969-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.13 87.195 23.98 23.969 53.316 36.125 87.19 36.125zM144.379 57.34c18.394-18.395 39.973-27.336 65.973-27.336 25.996 0 47.578 8.941 65.976 27.336 18.395 18.398 27.34 39.98 27.34 65.972 0 26-8.945 47.579-27.34 65.977-18.398 18.399-39.98 27.34-65.976 27.34-25.993 0-47.57-8.945-65.973-27.34-18.399-18.394-27.344-39.976-27.344-65.976 0-25.993 8.945-47.575 27.344-65.973zM426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.312-10.34-7.808-20.55-13.375-30.336-5.77-10.156-12.55-19-20.16-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 0 1-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.043 5.34-10.968 0-22.086-1.797-33.043-5.34-11.21-3.622-20.3-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.754-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.609 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.063 11.476-3.457 22.363-4.149 32.363C.343 403.492 0 413.668 0 423.949c0 26.727 8.496 48.363 25.25 64.32C41.797 504.017 63.688 512 90.316 512h246.532c26.62 0 48.511-7.984 65.062-23.73 16.758-15.946 25.254-37.59 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm-44.906 72.828c-10.934 10.406-25.45 15.465-44.38 15.465H90.317c-18.933 0-33.449-5.059-44.379-15.46-10.722-10.208-15.933-24.141-15.933-42.587 0-9.594.316-19.066.95-28.16.616-8.922 1.878-18.723 3.75-29.137 1.847-10.285 4.198-19.937 6.995-28.675 2.684-8.38 6.344-16.676 10.883-24.668 4.332-7.618 9.316-14.153 14.816-19.418 5.145-4.926 11.63-8.957 19.27-11.98 7.066-2.798 15.008-4.329 23.629-4.56 1.05.56 2.922 1.626 5.953 3.602 6.168 4.02 13.277 8.606 21.137 13.625 8.86 5.649 20.273 10.75 33.91 15.152 13.941 4.508 28.16 6.797 42.273 6.797 14.114 0 28.336-2.289 42.27-6.793 13.648-4.41 25.058-9.507 33.93-15.164 8.043-5.14 14.953-9.593 21.12-13.617 3.032-1.973 4.903-3.043 5.954-3.601 8.625.23 16.566 1.761 23.636 4.558 7.637 3.024 14.122 7.059 19.266 11.98 5.5 5.262 10.484 11.798 14.816 19.423 4.543 7.988 8.208 16.289 10.887 24.66 2.801 8.75 5.156 18.398 7 28.675 1.867 10.434 3.133 20.239 3.75 29.145v.008c.637 9.058.957 18.527.961 28.148-.004 18.45-5.215 32.38-15.937 42.582zm0 0"
                                    fill="#000000"
                                    data-original="#000000"
                                    className
                                  ></path>
                                </g>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="text-red-600 text-sm">
                          <ErrorMessage name="fname" />
                        </div>
                      </div>
                      <div className="w-full sm:w-1/2 p-3">
                        <div className="">
                          <div className="relative">
                            <Field
                              className="outline-none w-full rounded-lg border-gray-200 p-4 pe-12 text-sm lg:text-base shadow"
                              name="lname"
                              placeholder="Last Name"
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                              <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns:svgjs="http://svgjs.com/svgjs"
                                width="512"
                                height="512"
                                x="0"
                                y="0"
                                viewBox="0 0 512 512.001"
                                //   style="enable-background:new 0 0 512 512"
                                xmlSpace="preserve"
                                classNamea
                              >
                                <g>
                                  <path
                                    d="M210.352 246.633c33.882 0 63.218-12.153 87.195-36.13 23.969-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.13 87.195 23.98 23.969 53.316 36.125 87.19 36.125zM144.379 57.34c18.394-18.395 39.973-27.336 65.973-27.336 25.996 0 47.578 8.941 65.976 27.336 18.395 18.398 27.34 39.98 27.34 65.972 0 26-8.945 47.579-27.34 65.977-18.398 18.399-39.98 27.34-65.976 27.34-25.993 0-47.57-8.945-65.973-27.34-18.399-18.394-27.344-39.976-27.344-65.976 0-25.993 8.945-47.575 27.344-65.973zM426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.312-10.34-7.808-20.55-13.375-30.336-5.77-10.156-12.55-19-20.16-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 0 1-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.043 5.34-10.968 0-22.086-1.797-33.043-5.34-11.21-3.622-20.3-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.754-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.609 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.063 11.476-3.457 22.363-4.149 32.363C.343 403.492 0 413.668 0 423.949c0 26.727 8.496 48.363 25.25 64.32C41.797 504.017 63.688 512 90.316 512h246.532c26.62 0 48.511-7.984 65.062-23.73 16.758-15.946 25.254-37.59 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm-44.906 72.828c-10.934 10.406-25.45 15.465-44.38 15.465H90.317c-18.933 0-33.449-5.059-44.379-15.46-10.722-10.208-15.933-24.141-15.933-42.587 0-9.594.316-19.066.95-28.16.616-8.922 1.878-18.723 3.75-29.137 1.847-10.285 4.198-19.937 6.995-28.675 2.684-8.38 6.344-16.676 10.883-24.668 4.332-7.618 9.316-14.153 14.816-19.418 5.145-4.926 11.63-8.957 19.27-11.98 7.066-2.798 15.008-4.329 23.629-4.56 1.05.56 2.922 1.626 5.953 3.602 6.168 4.02 13.277 8.606 21.137 13.625 8.86 5.649 20.273 10.75 33.91 15.152 13.941 4.508 28.16 6.797 42.273 6.797 14.114 0 28.336-2.289 42.27-6.793 13.648-4.41 25.058-9.507 33.93-15.164 8.043-5.14 14.953-9.593 21.12-13.617 3.032-1.973 4.903-3.043 5.954-3.601 8.625.23 16.566 1.761 23.636 4.558 7.637 3.024 14.122 7.059 19.266 11.98 5.5 5.262 10.484 11.798 14.816 19.423 4.543 7.988 8.208 16.289 10.887 24.66 2.801 8.75 5.156 18.398 7 28.675 1.867 10.434 3.133 20.239 3.75 29.145v.008c.637 9.058.957 18.527.961 28.148-.004 18.45-5.215 32.38-15.937 42.582zm0 0"
                                    fill="#000000"
                                    data-original="#000000"
                                    className
                                  ></path>
                                </g>
                              </svg>
                            </span>
                          </div>
                          <div className="text-red-600 text-sm">
                            <ErrorMessage name="lname" />
                          </div>
                        </div>
                      </div>
                      <div className="w-full sm:w-1/2 p-3">
                        <div className="">
                          <div className="relative shadow rounded-lg border-gray-200 pe-12 ">
                            <Field
                              type="text"
                              className="outline-none w-full p-4 text-sm lg:text-base"
                              name="mobile"
                              placeholder="Mobile Number"
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                              <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns:svgjs="http://svgjs.com/svgjs"
                                width="512"
                                height="512"
                                x="0"
                                y="0"
                                viewBox="0 0 482.6 482.6"
                                //   style="enable-background:new 0 0 512 512"
                                xmlSpace="preserve"
                                classNamea
                              >
                                <g>
                                  <path
                                    d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                                    fill="#000000"
                                    data-original="#000000"
                                  ></path>
                                </g>
                              </svg>
                            </span>
                          </div>
                          <div className="text-red-600 text-sm">
                            <ErrorMessage name="mobile" />
                          </div>
                        </div>
                      </div>
                      <div className="w-full sm:w-1/2 p-3">
                        <div className="">
                          <div className="relative">
                            <Field
                              type="email"
                              className="outline-none w-full rounded-lg border-gray-200 p-4 pe-12 text-sm lg:text-base shadow"
                              name="email"
                              placeholder="Email Id"
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                              <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns:svgjs="http://svgjs.com/svgjs"
                                width="512"
                                height="512"
                                x="0"
                                y="0"
                                viewBox="0 0 512 512"
                                //   style="enable-background:new 0 0 512 512"
                                xmlSpace="preserve"
                                classNamea
                              >
                                <g>
                                  <path
                                    d="M485.743 85.333H26.257C11.815 85.333 0 97.148 0 111.589V400.41c0 14.44 11.815 26.257 26.257 26.257h459.487c14.44 0 26.257-11.815 26.257-26.257V111.589c-.001-14.441-11.816-26.256-26.258-26.256zm-9.853 19.691L271.104 258.626c-3.682 2.802-9.334 4.555-15.105 4.529-5.77.026-11.421-1.727-15.104-4.529L36.109 105.024H475.89zM366.5 268.761l111.59 137.847c.112.138.249.243.368.368H33.542c.118-.131.256-.23.368-.368L145.5 268.761a9.846 9.846 0 0 0-1.464-13.851c-4.227-3.419-10.424-2.771-13.844 1.457l-110.5 136.501V117.332l209.394 157.046c7.871 5.862 17.447 8.442 26.912 8.468 9.452-.02 19.036-2.6 26.912-8.468l209.394-157.046v275.534L381.807 256.367c-3.42-4.227-9.623-4.877-13.844-1.457-4.234 3.419-4.884 9.624-1.463 13.851z"
                                    fill="#000000"
                                    data-original="#000000"
                                    className
                                  ></path>
                                </g>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="text-red-600 text-sm">
                          <ErrorMessage name="email" />
                        </div>
                      </div>
                      <div className="w-full sm:w-1/2 p-3">
                        <div className="">
                          <div className="relative">
                            <Field
                              type="password"
                              className="outline-none w-full rounded-lg border-gray-200 p-4 pe-12 text-sm lg:text-base shadow"
                              name="password"
                              placeholder="Password"
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                              <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns:svgjs="http://svgjs.com/svgjs"
                                width="512"
                                height="512"
                                x="0"
                                y="0"
                                viewBox="0 0 511.999 511.999"
                                //   style="enable-background:new 0 0 512 512"
                                xmlSpace="preserve"
                              >
                                <g>
                                  <path
                                    d="M508.745 246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818 239.784 3.249 246.035a16.896 16.896 0 0 0 0 19.923c4.569 6.257 113.557 153.206 252.748 153.206s248.174-146.95 252.748-153.201a16.875 16.875 0 0 0 0-19.922zM255.997 385.406c-102.529 0-191.33-97.533-217.617-129.418 26.253-31.913 114.868-129.395 217.617-129.395 102.524 0 191.319 97.516 217.617 129.418-26.253 31.912-114.868 129.395-217.617 129.395z"
                                    fill="#000000"
                                    data-original="#000000"
                                  ></path>
                                  <path
                                    d="M255.997 154.725c-55.842 0-101.275 45.433-101.275 101.275s45.433 101.275 101.275 101.275S357.272 311.842 357.272 256s-45.433-101.275-101.275-101.275zm0 168.791c-37.23 0-67.516-30.287-67.516-67.516s30.287-67.516 67.516-67.516 67.516 30.287 67.516 67.516-30.286 67.516-67.516 67.516z"
                                    fill="#000000"
                                    data-original="#000000"
                                  ></path>
                                </g>
                              </svg>
                            </span>
                          </div>
                          <div className="text-red-600 text-sm">
                            <ErrorMessage name="password" />
                          </div>
                        </div>
                      </div>
                      <div className="w-full sm:w-1/2 p-3">
                        <div className="">
                          <div className="relative">
                            <Field
                              type="password"
                              className="outline-none w-full rounded-lg border-gray-200 p-4 pe-12 text-sm lg:text-base shadow"
                              name="confirmPassword"
                              placeholder="Confirm Password"
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                              <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns:svgjs="http://svgjs.com/svgjs"
                                width="512"
                                height="512"
                                x="0"
                                y="0"
                                viewBox="0 0 511.999 511.999"
                                //   style="enable-background:new 0 0 512 512"
                                xmlSpace="preserve"
                              >
                                <g>
                                  <path
                                    d="M508.745 246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818 239.784 3.249 246.035a16.896 16.896 0 0 0 0 19.923c4.569 6.257 113.557 153.206 252.748 153.206s248.174-146.95 252.748-153.201a16.875 16.875 0 0 0 0-19.922zM255.997 385.406c-102.529 0-191.33-97.533-217.617-129.418 26.253-31.913 114.868-129.395 217.617-129.395 102.524 0 191.319 97.516 217.617 129.418-26.253 31.912-114.868 129.395-217.617 129.395z"
                                    fill="#000000"
                                    data-original="#000000"
                                  ></path>
                                  <path
                                    d="M255.997 154.725c-55.842 0-101.275 45.433-101.275 101.275s45.433 101.275 101.275 101.275S357.272 311.842 357.272 256s-45.433-101.275-101.275-101.275zm0 168.791c-37.23 0-67.516-30.287-67.516-67.516s30.287-67.516 67.516-67.516 67.516 30.287 67.516 67.516-30.286 67.516-67.516 67.516z"
                                    fill="#000000"
                                    data-original="#000000"
                                  ></path>
                                </g>
                              </svg>
                            </span>
                          </div>
                          <div className="text-red-600 text-sm">
                            <ErrorMessage name="confirmPassword" />
                          </div>
                        </div>
                      </div>
                      <div className="w-full sm:w-5/12 p-3">
                        <button
                          type="submit"
                          className="block w-full btn-primary anim"
                        >
                          Sign Up
                        </button>
                      </div>
                      <div className="w-full sm:w-auto text-sm text-black/70 flex items-center justify-center">
                        OR
                      </div>
                      <div className="w-full sm:w-5/12 p-3">
                        <button
                          type="submit"
                          className="flex items-center justify-center w-full rounded-lg bg-white shadow px-5 py-3 text-sm font-medium text-black/70"
                        >
                          <svg
                            className="w-5 h-5 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlns:svgjs="http://svgjs.com/svgjs"
                            width="512"
                            height="512"
                            x="0"
                            y="0"
                            viewBox="0 0 512 512"
                            // style="enable-background:new 0 0 512 512"
                            xmlSpace="preserve"
                            classNamea
                          >
                            <g>
                              <path
                                fill="#167ee6"
                                d="M472.4 213.9H281.9c-8.4 0-15.2 6.8-15.2 15.2V290c0 8.4 6.8 15.2 15.2 15.2h107.3c-11.7 30.5-33.7 56-61.6 72.2l45.7 79.2C446.6 414.2 490 339.7 490 256.4c0-11.9-.9-20.4-2.6-29.9-1.4-7.3-7.7-12.6-15-12.6z"
                                data-original="#167ee6"
                                className
                              ></path>
                              <path
                                fill="#12b347"
                                d="M256.5 396.6c-52.5 0-98.3-28.7-122.9-71.1l-79.2 45.6C94.7 441 170.2 488 256.5 488c42.4 0 82.3-11.4 116.8-31.3v-.1l-45.7-79.2c-21 12.2-45.2 19.2-71.1 19.2z"
                                data-original="#12b347"
                              ></path>
                              <path
                                fill="#0f993e"
                                d="M373.2 456.7v-.1l-45.7-79.2c-20.9 12.1-45.1 19.2-71 19.2V488c42.4 0 82.3-11.4 116.7-31.3z"
                                data-original="#0f993e"
                              ></path>
                              <path
                                fill="#ffd500"
                                d="M114.4 254.5c0-25.9 7.1-50.1 19.2-71l-79.2-45.6C34.4 172.2 23 212 23 254.5s11.4 82.3 31.4 116.6l79.2-45.6c-12.2-20.9-19.2-45.1-19.2-71z"
                                data-original="#ffd500"
                              ></path>
                              <path
                                fill="#ff4b26"
                                d="M256.5 112.4c34.2 0 65.7 12.2 90.2 32.4 6.1 5 14.9 4.6 20.4-.9l43.1-43.1c6.3-6.3 5.8-16.6-.9-22.4C368.2 42.6 314.7 21 256.5 21 170.2 21 94.7 68 54.4 137.9l79.2 45.6c24.6-42.4 70.4-71.1 122.9-71.1z"
                                data-original="#ff4b26"
                              ></path>
                              <path
                                fill="#d93f21"
                                d="M346.7 144.8c6.1 5 14.9 4.6 20.4-.9l43.1-43.1c6.3-6.3 5.8-16.6-.9-22.4C368.2 42.6 314.7 21 256.5 21v91.4c34.2 0 65.7 12.1 90.2 32.4z"
                                data-original="#d93f21"
                              ></path>
                            </g>
                          </svg>
                          Continue With Google
                        </button>
                      </div>
                    </div>
                    <p
                      onClick={() => {
                        navigate("/login");
                      }}
                      className="text-center text-sm text-gray-500"
                    >
                      No account?
                      <NavLink className="underline">Sign up</NavLink>
                    </p>
                  </Form>
                </>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
