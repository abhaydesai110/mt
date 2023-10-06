import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="w-full absolute  inset-x-0 top-0 z-50">
        <div className="px-3 sm:px-4 md:px-6 lg:px-14">
          <div className="flex h-24 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link
                className="block text-white text-xl sm:text-3xl font-bold"
                to="/"
              >
                3D CANVA
              </Link>
            </div>
            <div className="flex items-center gap-3 sm:gap-6">
              <nav
                aria-label="Site Nav"
                id="nav"
                className="scale-0 anim bg-[#131622]/90 py-20 p-10 fixed inset-0 w-full h-full md:py-0 md:p-0 flex items-center justify-center md:scale-100 md:bg-transparent md:relative md:block"
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
                    xmlns:svgjs="http://svgjs.com/svgjs"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 28 28"
                    //   style="enable-background:new 0 0 512 512"
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
                  <li className="relative group text-white text-white text-center md:text-left">
                    <Link className="nav_link" to="chat">
                      Chat
                    </Link>
                    <span className="list_border anim"></span>
                  </li>
                  <li className="relative group text-white text-white text-center md:text-left">
                    <Link className="nav_link" to="gallery">
                      Gallery
                    </Link>
                    <span className="list_border anim"></span>
                  </li>
                  <li className="relative group text-white text-center md:text-left">
                    <Link className="nav_link" to="contactus">
                      Contact Us
                    </Link>
                    <span className="list_border anim"></span>
                  </li>
                  <li className="relative group text-white text-center md:text-left">
                    <Link className="nav_link" to="profile">
                      Profile
                    </Link>
                    <span className="list_border anim"></span>
                  </li>
                  <li className="relative group text-white text-center md:text-left">
                    <Link className="nav_link" to="megamenu">
                      Mega Menu
                    </Link>
                    <span className="list_border anim"></span>
                  </li>
                </ul>
              </nav>
              <div className="space-x-3 flex">
                <Link to="register" className="btn-primary anim">
                  Registration
                </Link>
                <Link to="login" className="btn-primary anim">
                  Login
                </Link>
              </div>
              <div className="block md:hidden">
                <button onClick="addActive('#nav','open');" className="anim">
                  <svg
                    className="w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.com/svgjs"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    //   style="enable-background:new 0 0 512 512"
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
      </header>
    </div>
  );
};

export default Navbar;
