import React from "react";


const Chat = () => {
  return (
    <div>
      <div className="main relative bg-[#090E1A] pt-24">
        {/* <!-- paticale animation  --> */}
        <div id="particles-js" className="fixed inset-0 w-full h-screen"></div>

        {/* <!-- header  --> */}
        {/* <header className="w-full absolute inset-x-0 top-0 z-50">
          <div className="px-4 sm:px-6 lg:px-14">
            <div className="flex h-24 items-center justify-between">
              <div className="flex-1 md:flex md:items-center md:gap-12">
                <a className="block text-white text-3xl font-bold" href="/">
                  3D CANVA
                </a>
              </div>
              <div className="md:flex md:items-center md:gap-12">
                <nav
                  aria-label="Site Nav"
                  id="nav"
                  className="scale-0 anim bg-[#131622]/90 py-20 p-10 fixed inset-0 w-full h-full md:scale-100 md:py-0 md:p-0 flex items-center justify-center md:bg-transparent md:relative md:block"
                >
                  <span
                    onClick="removeActive('#nav','open');"
                    id="close_pop"
                    className="absolute top-7 right-7 inline-block md:hidden w-8 h-8 anim z-20"
                  >
                    <svg
                      className="w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlnsSvgjs="http://svgjs.com/svgjs"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 28 28"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <switch>
                          <g>
                            <path
                              d="m15.4 14 8.3-8.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L14 12.6 5.7 4.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l8.3 8.3-8.3 8.3c-.4.4-.4 1 0 1.4s1 .4 1.4 0l8.3-8.3 8.3 8.3c.4.4 1 .4 1.4 0s.4-1 0-1.4z"
                              fill="#ffffff"
                              data-original="#000000"
                              className
                            ></path>
                          </g>
                        </switch>
                      </g>
                    </svg>
                  </span>
                  <ul className="md:flex items-center space-y-6 md:space-y-0 md:gap-8 text-sm">
                    <li className="relative group text-center md:text-left">
                      <a className="nav_link" href="javascript:void(0)">
                        About
                      </a>
                      <span className="list_border anim"></span>
                    </li>
                    <li className="relative group text-center md:text-left">
                      <a className="nav_link" href="javascript:void(0)">
                        Careers
                      </a>
                      <span className="list_border anim"></span>
                    </li>
                    <li className="relative group text-center md:text-left">
                      <a className="nav_link" href="javascript:void(0)">
                        History
                      </a>
                      <span className="list_border anim"></span>
                    </li>
                    <li className="relative group text-center md:text-left">
                      <a className="nav_link" href="javascript:void(0)">
                        Services
                      </a>
                      <span className="list_border anim"></span>
                    </li>
                  </ul>
                </nav>
                <div className="block md:hidden">
                  <button onClick="addActive('#nav','open');" className="anim">
                    <svg
                      className="w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlnsSvgjs="http://svgjs.com/svgjs"
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
                          fill="#ffffff"
                          fillRule="evenodd"
                          d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"
                          clipRule="evenodd"
                          data-original="#000000"
                          className
                        ></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header> */}

        {/* <!-- chat seaction  --> */}
        <section className="relative px-6 lg:px-10 pb-10 z-20">
          <div id="chat_holder" className="chat_holder max-w-7xl mx-auto">
            <span
              className="dropcover anim"
              // onClick="removeActive('#chat_holder','open');"
            ></span>
            {/* <!-- char left-bar  --> */}
            <div className="sidebar anim">
              <span
                // onClick="removeActive('#chat_holder','open');"
                id="close_pop"
                className="absolute top-3 right-3 md:top-6 md:right-6 inline-block lg:hidden w-6 h-6 anim z-50 cursor-pointer"
              >
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlnsSvgjs="http://svgjs.com/svgjs"
                  width="512"
                  height="512"
                  x="0"
                  y="0"
                  viewBox="0 0 28 28"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <switch>
                      <g>
                        <path
                          d="m15.4 14 8.3-8.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L14 12.6 5.7 4.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l8.3 8.3-8.3 8.3c-.4.4-.4 1 0 1.4s1 .4 1.4 0l8.3-8.3 8.3 8.3c.4.4 1 .4 1.4 0s.4-1 0-1.4z"
                          fill="#000000"
                          data-original="#000000"
                          className
                        ></path>
                      </g>
                    </switch>
                  </g>
                </svg>
              </span>
              <div className="w-full px-5 space-y-5">
                {/* <!-- profile user  --> */}
                <div className="w-24 h-24 mx-auto rounded-full border-2 border-white overflow-hidden">
                  <img
                    src="assest/images/card1.jpg"
                    className="w-full h-full object-cover"
                    alt="profile-img"
                  />
                </div>
                {/* <!-- search bar  --> */}
                <div className="w-full flex items-center p-2 px-3 rounded-md bg-slate-100">
                  <input
                    className="w-full outline-none bg-transparent text-base"
                    type="text"
                    placeholder="Search"
                  />
                  <span className="inline-block w-7 h-7 pl-2">
                    <svg
                      className="w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlnsSvgjs="http://svgjs.com/svgjs"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 612.01 612.01"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          d="M606.209 578.714 448.198 423.228C489.576 378.272 515 318.817 515 253.393 514.98 113.439 399.704 0 257.493 0S.006 113.439.006 253.393s115.276 253.393 257.487 253.393c61.445 0 117.801-21.253 162.068-56.586l158.624 156.099c7.729 7.614 20.277 7.614 28.006 0a19.291 19.291 0 0 0 .018-27.585zM257.493 467.8c-120.326 0-217.869-95.993-217.869-214.407S137.167 38.986 257.493 38.986c120.327 0 217.869 95.993 217.869 214.407S377.82 467.8 257.493 467.8z"
                          fill="#000000"
                          data-original="#000000"
                          className
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="w-full h-[calc(100%-120px)] overflow-y-auto py-3 space-y-4">
                <div className="flex items-center justify-end space-x-3 px-5 sticky top-0 w-full">
                  <a
                    href="jacascript:void(0)"
                    className="hover:opacity-80 py-1.5 px-2 rounded text-xs text-white font-semibold bg-green-500"
                  >
                    Add
                  </a>
                  <a
                    href="jacascript:void(0)"
                    className="hover:opacity-80 py-1.5 px-2 rounded text-xs text-white font-semibold bg-red-500"
                  >
                    Remove
                  </a>
                </div>
                <div className="w-full flex items-center px-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="assest/images/card9.jpg" alt="user_img" />
                  </div>
                  <div className="w-[calc(100%-48px)] pl-3">
                    <span className="user_name">John Lewis</span>
                    <p className="user_chline">
                      Consectetur adipiscing elit, sed do eiusmod tempo.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center px-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="assest/images/card9.jpg" alt="user_img" />
                  </div>
                  <div className="w-[calc(100%-48px)] pl-3">
                    <span className="user_name">John Lewis</span>
                    <p className="user_chline">
                      Consectetur adipiscing elit, sed do eiusmod tempo.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center px-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="assest/images/card9.jpg" alt="user_img" />
                  </div>
                  <div className="w-[calc(100%-48px)] pl-3">
                    <span className="user_name">John Lewis</span>
                    <p className="user_chline">
                      Consectetur adipiscing elit, sed do eiusmod tempo.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center px-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="assest/images/card9.jpg" alt="user_img" />
                  </div>
                  <div className="w-[calc(100%-48px)] pl-3">
                    <span className="user_name">John Lewis</span>
                    <p className="user_chline">
                      Consectetur adipiscing elit, sed do eiusmod tempo.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center px-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="assest/images/card9.jpg" alt="user_img" />
                  </div>
                  <div className="w-[calc(100%-48px)] pl-3">
                    <span className="user_name">John Lewis</span>
                    <p className="user_chline">
                      Consectetur adipiscing elit, sed do eiusmod tempo.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center px-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="assest/images/card9.jpg" alt="user_img" />
                  </div>
                  <div className="w-[calc(100%-48px)] pl-3">
                    <span className="user_name">John Lewis</span>
                    <p className="user_chline">
                      Consectetur adipiscing elit, sed do eiusmod tempo.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center px-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="assest/images/card9.jpg" alt="user_img" />
                  </div>
                  <div className="w-[calc(100%-48px)] pl-3">
                    <span className="user_name">John Lewis</span>
                    <p className="user_chline">
                      Consectetur adipiscing elit, sed do eiusmod tempo.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center px-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="assest/images/card9.jpg" alt="user_img" />
                  </div>
                  <div className="w-[calc(100%-48px)] pl-3">
                    <span className="user_name">John Lewis</span>
                    <p className="user_chline">
                      Consectetur adipiscing elit, sed do eiusmod tempo.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center px-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="assest/images/card9.jpg" alt="user_img" />
                  </div>
                  <div className="w-[calc(100%-48px)] pl-3">
                    <span className="user_name">John Lewis</span>
                    <p className="user_chline">
                      Consectetur adipiscing elit, sed do eiusmod tempo.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center px-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="assest/images/card9.jpg" alt="user_img" />
                  </div>
                  <div className="w-[calc(100%-48px)] pl-3">
                    <span className="user_name">John Lewis</span>
                    <p className="user_chline">
                      Consectetur adipiscing elit, sed do eiusmod tempo.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center px-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="assest/images/card9.jpg" alt="user_img" />
                  </div>
                  <div className="w-[calc(100%-48px)] pl-3">
                    <span className="user_name">John Lewis</span>
                    <p className="user_chline">
                      Consectetur adipiscing elit, sed do eiusmod tempo.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center px-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="assest/images/card9.jpg" alt="user_img" />
                  </div>
                  <div className="w-[calc(100%-48px)] pl-3">
                    <span className="user_name">John Lewis</span>
                    <p className="user_chline">
                      Consectetur adipiscing elit, sed do eiusmod tempo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- char right-bar  --> */}
            <div className="rightbar">
              {/* <!-- chat header  --> */}
              <div className="sticky top-0 w-full bg-white flex items-center py-5">
                <div className="flex items-center">
                  <div className="block lg:hidden mr-2">
                    <button
                      // onClick="addActive('#chat_holder','open');"
                      className="anim"
                    >
                      <svg
                        className="w-8 h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlnsSvgjs="http://svgjs.com/svgjs"
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
                            fill="#000000"
                            fillRule="evenodd"
                            d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"
                            clipRule="evenodd"
                            data-original="#000000"
                            className
                          ></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="assest/images/card9.jpg" alt="user_img" />
                  </div>
                  <span className="user_name pl-4 text-xl lg:text-2xl">
                    John Lewis
                  </span>
                </div>
                <span className="inline-block w-7 h-7 relative ml-auto">
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-0.5 h-full bg-black"></span>
                  <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnsSvgjs="http://svgjs.com/svgjs"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 100 100"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M64.521 50c0-7.324-5.405-13.361-12.426-14.458V15.5c0-1.893-2.201-2.937-3.671-1.745L23.639 33.95h-7.348c-4.554 0-8.259 3.705-8.259 8.259v15.583c0 4.554 3.705 8.259 8.259 8.259h7.348l24.785 20.194c1.462 1.19 3.671.156 3.671-1.745V64.458C59.116 63.361 64.521 57.324 64.521 50zM22.19 61.55h-5.899a3.763 3.763 0 0 1-3.759-3.759V42.208a3.763 3.763 0 0 1 3.759-3.759h5.899zm25.405 18.214L26.69 62.731V37.269l20.905-17.033zM60.021 50c0 4.837-3.398 8.88-7.926 9.914V40.086c4.528 1.034 7.926 5.077 7.926 9.914zM71.262 13.747c-2.551-1.522-4.861 2.351-2.294 3.87 11.411 6.766 18.5 19.176 18.5 32.388 0 13.206-7.083 25.611-18.485 32.379-2.539 1.508-.276 5.397 2.297 3.87 12.76-7.575 20.688-21.464 20.688-36.249 0-14.793-7.934-28.687-20.706-36.258z"
                        fill="#000000"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M78.245 50c0-10.629-5.887-20.29-15.365-25.211-2.621-1.374-4.722 2.618-2.074 3.993C68.787 32.927 73.745 41.057 73.745 50s-4.958 17.073-12.939 21.218c-2.664 1.383-.531 5.353 2.074 3.993C72.358 70.29 78.245 60.629 78.245 50z"
                        fill="#000000"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>

              {/* <!-- chat area  --> */}
              <div className="w-full py-2 px-5">
                <div className="left-chat flex items-center w-full py-1">
                  <div>
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src="assest/images/card9.jpg" alt="user_img" />
                    </div>
                  </div>
                  <div className="chat-text p-2.5 px-5 rounded-xl md:rounded-full rounded-bl-none">
                    <p
                      id="question"
                      className="text-xs sm:text-sm font-medium"
                    ></p>
                  </div>
                  <div className="flex">
                    <span className="inline-block w-5 h-5 relative ml-auto">
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-0.5 h-full bg-black"></span>
                      <svg
                        className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlnsSvgjs="http://svgjs.com/svgjs"
                        width="512"
                        height="512"
                        x="0"
                        y="0"
                        viewBox="0 0 100 100"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                      >
                        <g>
                          <path
                            d="M64.521 50c0-7.324-5.405-13.361-12.426-14.458V15.5c0-1.893-2.201-2.937-3.671-1.745L23.639 33.95h-7.348c-4.554 0-8.259 3.705-8.259 8.259v15.583c0 4.554 3.705 8.259 8.259 8.259h7.348l24.785 20.194c1.462 1.19 3.671.156 3.671-1.745V64.458C59.116 63.361 64.521 57.324 64.521 50zM22.19 61.55h-5.899a3.763 3.763 0 0 1-3.759-3.759V42.208a3.763 3.763 0 0 1 3.759-3.759h5.899zm25.405 18.214L26.69 62.731V37.269l20.905-17.033zM60.021 50c0 4.837-3.398 8.88-7.926 9.914V40.086c4.528 1.034 7.926 5.077 7.926 9.914zM71.262 13.747c-2.551-1.522-4.861 2.351-2.294 3.87 11.411 6.766 18.5 19.176 18.5 32.388 0 13.206-7.083 25.611-18.485 32.379-2.539 1.508-.276 5.397 2.297 3.87 12.76-7.575 20.688-21.464 20.688-36.249 0-14.793-7.934-28.687-20.706-36.258z"
                            fill="#000000"
                            data-original="#000000"
                          ></path>
                          <path
                            d="M78.245 50c0-10.629-5.887-20.29-15.365-25.211-2.621-1.374-4.722 2.618-2.074 3.993C68.787 32.927 73.745 41.057 73.745 50s-4.958 17.073-12.939 21.218c-2.664 1.383-.531 5.353 2.074 3.993C72.358 70.29 78.245 60.629 78.245 50z"
                            fill="#000000"
                            data-original="#000000"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full py-2 px-5 bg-slate-100">
                <div className="left-chat flex items-center w-full py-1">
                  <div>
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src="assest/images/card9.jpg" alt="user_img" />
                    </div>
                  </div>
                  <div className="chat-text p-2.5 px-5 rounded-xl md:rounded-full rounded-bl-none">
                    <p className="text-xs sm:text-sm font-medium">
                      Dicta sunt explicabo. Nemo enim ipsam voluptatem Dicta
                      sunt explicabo. Nemo enim ipsam voluptatemDicta sunt
                      explicabo. Nemo enim ipsam voluptatemDicta sunt explicabo.
                      Nemo enim ipsam voluptatemDicta sunt explicabo. Nemo enim
                      ipsam voluptatemDicta sunt explicabo. Nemo enim ipsam
                      voluptatem
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <span className="inline-block w-5 h-5 relative ml-auto">
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-0.5 h-full bg-black"></span>
                      <svg
                        className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlnsSvgjs="http://svgjs.com/svgjs"
                        width="512"
                        height="512"
                        x="0"
                        y="0"
                        viewBox="0 0 100 100"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                      >
                        <g>
                          <path
                            d="M64.521 50c0-7.324-5.405-13.361-12.426-14.458V15.5c0-1.893-2.201-2.937-3.671-1.745L23.639 33.95h-7.348c-4.554 0-8.259 3.705-8.259 8.259v15.583c0 4.554 3.705 8.259 8.259 8.259h7.348l24.785 20.194c1.462 1.19 3.671.156 3.671-1.745V64.458C59.116 63.361 64.521 57.324 64.521 50zM22.19 61.55h-5.899a3.763 3.763 0 0 1-3.759-3.759V42.208a3.763 3.763 0 0 1 3.759-3.759h5.899zm25.405 18.214L26.69 62.731V37.269l20.905-17.033zM60.021 50c0 4.837-3.398 8.88-7.926 9.914V40.086c4.528 1.034 7.926 5.077 7.926 9.914zM71.262 13.747c-2.551-1.522-4.861 2.351-2.294 3.87 11.411 6.766 18.5 19.176 18.5 32.388 0 13.206-7.083 25.611-18.485 32.379-2.539 1.508-.276 5.397 2.297 3.87 12.76-7.575 20.688-21.464 20.688-36.249 0-14.793-7.934-28.687-20.706-36.258z"
                            fill="#000000"
                            data-original="#000000"
                          ></path>
                          <path
                            d="M78.245 50c0-10.629-5.887-20.29-15.365-25.211-2.621-1.374-4.722 2.618-2.074 3.993C68.787 32.927 73.745 41.057 73.745 50s-4.958 17.073-12.939 21.218c-2.664 1.383-.531 5.353 2.074 3.993C72.358 70.29 78.245 60.629 78.245 50z"
                            fill="#000000"
                            data-original="#000000"
                          ></path>
                        </g>
                      </svg>
                    </span>
                    <span
                      className="inline-block cursor-pointer w-5 h-5"
                      // onClick="addActive('#delete','open'); addActive('#edit','close');"
                      id="edit"
                    >
                      <svg
                        className="w-full h-full fill-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlnsSvgjs="http://svgjs.com/svgjs"
                        width="512"
                        height="512"
                        x="0"
                        y="0"
                        viewBox="0 0 401.523 401"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                      >
                        <g>
                          <path
                            d="M370.59 250.973c-5.524 0-10 4.476-10 10v88.789c-.02 16.562-13.438 29.984-30 30H50c-16.563-.016-29.98-13.438-30-30V89.172c.02-16.559 13.438-29.98 30-30h88.79c5.523 0 10-4.477 10-10 0-5.52-4.477-10-10-10H50c-27.602.031-49.969 22.398-50 50v260.594c.031 27.601 22.398 49.968 50 50h280.59c27.601-.032 49.969-22.399 50-50v-88.793c0-5.524-4.477-10-10-10zm0 0"
                            data-original="#000000"
                          ></path>
                          <path
                            d="M376.629 13.441c-17.574-17.574-46.067-17.574-63.64 0L134.581 191.848a9.997 9.997 0 0 0-2.566 4.402l-23.461 84.7a9.997 9.997 0 0 0 12.304 12.308l84.7-23.465a9.997 9.997 0 0 0 4.402-2.566l178.402-178.41c17.547-17.587 17.547-46.055 0-63.641zM156.37 198.348 302.383 52.332l47.09 47.09-146.016 146.016zm-9.406 18.875 37.62 37.625-52.038 14.418zM374.223 74.676 363.617 85.28l-47.094-47.094 10.61-10.605c9.762-9.762 25.59-9.762 35.351 0l11.739 11.734c9.746 9.774 9.746 25.59 0 35.36zm0 0"
                            data-original="#000000"
                          ></path>
                        </g>
                      </svg>
                    </span>
                    <div className="space-x-2 hidden" id="delete">
                      <span
                        className="inline-block cursor-pointer w-5 h-5"
                        // onClick="removeActive('#delete','open'); removeActive('#edit','close');"
                      >
                        <svg
                          className="w-full h-full fill-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xmlnsSvgjs="http://svgjs.com/svgjs"
                          width="512"
                          height="512"
                          x="0"
                          y="0"
                          viewBox="0 0 469.333 469.333"
                          style={{ enableBackground: "new 0 0 512 512" }}
                          xmlSpace="preserve"
                        >
                          <g>
                            <path
                              d="M466.208 88.458 380.875 3.125c-2-2-4.708-3.125-7.542-3.125H42.667C19.146 0 0 19.135 0 42.667v384c0 23.531 19.146 42.667 42.667 42.667h384c23.521 0 42.667-19.135 42.667-42.667V96a10.665 10.665 0 0 0-3.126-7.542zM106.667 21.333h234.667v128c0 11.76-9.563 21.333-21.333 21.333H128c-11.771 0-21.333-9.573-21.333-21.333v-128zM384 448H85.333V256H384v192zm64-21.333c0 11.76-9.563 21.333-21.333 21.333h-21.333V245.333a10.66 10.66 0 0 0-10.667-10.667h-320A10.66 10.66 0 0 0 64 245.333V448H42.667c-11.771 0-21.333-9.573-21.333-21.333v-384c0-11.76 9.563-21.333 21.333-21.333h42.667v128C85.333 172.865 104.479 192 128 192h192c23.521 0 42.667-19.135 42.667-42.667v-128h6.25L448 100.417v326.25z"
                              data-original="#000000"
                            ></path>
                            <path
                              d="M266.667 149.333h42.667a10.66 10.66 0 0 0 10.667-10.667V53.333a10.66 10.66 0 0 0-10.667-10.667h-42.667A10.66 10.66 0 0 0 256 53.333v85.333a10.66 10.66 0 0 0 10.667 10.667zM277.333 64h21.333v64h-21.333V64z"
                              data-original="#000000"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      <span className="inline-block cursor-pointer w-5 h-5">
                        <svg
                          className="w-full h-full fill-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xmlnsSvgjs="http://svgjs.com/svgjs"
                          width="512"
                          height="512"
                          x="0"
                          y="0"
                          viewBox="0 0 427 427.001"
                          style={{ enableBackground: "new 0 0 512 512" }}
                          xmlSpace="preserve"
                        >
                          <g>
                            <path
                              d="M232.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zM114.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0"
                              data-original="#000000"
                            ></path>
                            <path
                              d="M28.398 127.121V373.5c0 14.563 5.34 28.238 14.668 38.05A49.246 49.246 0 0 0 78.796 427H268a49.233 49.233 0 0 0 35.73-15.45c9.329-9.812 14.668-23.487 14.668-38.05V127.121c18.543-4.922 30.559-22.836 28.079-41.863-2.485-19.024-18.692-33.254-37.88-33.258h-51.199V39.5a39.289 39.289 0 0 0-11.539-28.031A39.288 39.288 0 0 0 217.797 0H129a39.288 39.288 0 0 0-28.063 11.469A39.289 39.289 0 0 0 89.398 39.5V52H38.2C19.012 52.004 2.805 66.234.32 85.258c-2.48 19.027 9.535 36.941 28.078 41.863zM268 407H78.797c-17.098 0-30.399-14.688-30.399-33.5V128h250v245.5c0 18.813-13.3 33.5-30.398 33.5zM109.398 39.5a19.25 19.25 0 0 1 5.676-13.895A19.26 19.26 0 0 1 129 20h88.797a19.26 19.26 0 0 1 13.926 5.605 19.244 19.244 0 0 1 5.675 13.895V52h-128zM38.2 72h270.399c9.941 0 18 8.059 18 18s-8.059 18-18 18H38.199c-9.941 0-18-8.059-18-18s8.059-18 18-18zm0 0"
                              data-original="#000000"
                            ></path>
                            <path
                              d="M173.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0"
                              data-original="#000000"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- chat area end--> */}

              {/* <!-- message sand input--> */}
              <div className="flex items-center space-x-5 sticky bottom-0 w-full mt-auto py-5 bg-white">
                <div className="w-full flex items-center p-2 px-3 rounded-md bg-slate-100">
                  <input
                    className="w-full outline-none bg-transparent text-base"
                    type="text"
                    placeholder="Type..."
                    name="Search"
                    id="search"
                  />
                  <span className="inline-block w-7 h-7 pl-2 cursor-pointer">
                    <svg
                      className="w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlnsSvgjs="http://svgjs.com/svgjs"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 250.189 250.189"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          d="M214.408 119.658c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5c0 40.976-33.337 74.313-74.313 74.313s-74.313-33.338-74.313-74.313c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5c0 46.722 36.062 85.173 81.813 88.995v26.536H84.188a7.5 7.5 0 0 0-7.5 7.5 7.5 7.5 0 0 0 7.5 7.5h81.813a7.5 7.5 0 0 0 7.5-7.5 7.5 7.5 0 0 0-7.5-7.5h-33.407v-26.536c45.751-3.822 81.814-42.273 81.814-88.995z"
                          fill="#000000"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M125.094 168.064c26.692 0 48.407-21.715 48.407-48.406V48.406C173.501 21.715 151.786 0 125.094 0 98.403 0 76.688 21.715 76.688 48.406v71.252c0 26.692 21.715 48.406 48.406 48.406zM91.688 48.406c0-18.42 14.986-33.406 33.406-33.406 18.421 0 33.407 14.986 33.407 33.406v71.252c0 18.42-14.986 33.406-33.407 33.406-18.42 0-33.406-14.986-33.406-33.406V48.406z"
                          fill="#000000"
                          data-original="#000000"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
                <button
                  type="button"
                  className="inline-block w-7 h-7 relative ml-auto cursor-pointer"
                >
                  <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnsSvgjs="http://svgjs.com/svgjs"
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
                        d="M1.305 3.542A1.844 1.844 0 0 1 3.92 1.445l17.81 8.905a1.844 1.844 0 0 1 0 3.3L3.92 22.555a1.844 1.844 0 0 1-2.615-2.097L3.42 12 1.305 3.542zm1.455-.363 2.16 8.639c.03.12.03.244 0 .364l-2.16 8.639a.347.347 0 0 0 .489.393l17.81-8.906a.343.343 0 0 0 0-.616L3.249 2.786a.346.346 0 0 0-.489.393z"
                        fill="#000000"
                        data-original="#000000"
                        className
                      ></path>
                      <path
                        d="M4.369 12.75a.75.75 0 0 1 0-1.5h8.5a.75.75 0 0 1 0 1.5z"
                        fill="#000000"
                        data-original="#000000"
                        className
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
              <div id="error" className="errorslist"></div>
            </div>
          </div>
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
            xmlnsSvgjs="http://svgjs.com/svgjs"
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
                className
              ></path>
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Chat;
