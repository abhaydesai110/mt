import React from "react";

const Home = () => {
  return (
    <>
      <div id="myDiv" className="main relative bg-[#090E1A]">
        {/* <!-- paticale animation  --> */}
        <div id="particles-js" className="fixed inset-0 w-full h-screen"></div>

        {/* <!-- header  --> */}
        {/* <header className="w-full absolute inset-x-0 top-0 z-50">
          <div className="px-3 sm:px-4 md:px-6 lg:px-14">
            <div className="flex h-24 items-center justify-between">
              <div className="flex-1 md:flex md:items-center md:gap-12">
                <a
                  className="block text-white text-xl sm:text-3xl font-bold"
                  href="/"
                >
                  3D CANVA
                </a>
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
                      <a className="nav_link" href="javascript:void(0)">
                        About
                      </a>
                      <span className="list_border anim"></span>
                    </li>
                    <li className="relative group text-white text-center md:text-left">
                      <a className="nav_link" href="javascript:void(0)">
                        Careers
                      </a>
                      <span className="list_border anim"></span>
                    </li>
                    <li className="relative group text-white text-center md:text-left">
                      <a className="nav_link" href="javascript:void(0)">
                        History
                      </a>
                      <span className="list_border anim"></span>
                    </li>
                    <li className="relative group text-white text-center md:text-left">
                      <a className="nav_link" href="javascript:void(0)">
                        Services
                      </a>
                      <span className="list_border anim"></span>
                    </li>
                  </ul>
                </nav>
                <div className="space-x-3 flex">
                  <a href="registration.html" className="btn-primary anim">
                    Registration
                  </a>
                  <a href="sign-up.html" className="btn-primary anim">
                    Login
                  </a>
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
        </header> */}

        <section className="w-full px-8 lg:px-10 z-20 pt-48 lg:pt-60 relative">
          <div className="w-full h-full flex items-center">
            <span className="flex items-start -ml-4 md:ml-0 text-white">
              <span className="inline-block whitespace-nowrap text-[12.5vw] md:text-[12.8vw] 2xl:text-[13vw] font-bold">
                P
              </span>
              <span className="inline-block whitespace-nowrap text-[12.5vw] md:text-[12.8vw] 2xl:text-[13vw] font-bold">
                H
              </span>
              <span className="inline-block whitespace-nowrap text-[12.5vw] md:text-[12.8vw] 2xl:text-[13vw] font-bold">
                O
              </span>
              <span className="inline-block whitespace-nowrap text-[12.5vw] md:text-[12.8vw] 2xl:text-[13vw] font-bold">
                T
              </span>
              <span className="inline-block whitespace-nowrap text-[12.5vw] md:text-[12.8vw] 2xl:text-[13vw] font-bold">
                O
              </span>
              <span className="inline-block whitespace-nowrap text-[12.5vw] md:text-[12.8vw] 2xl:text-[13vw] font-bold">
                S
              </span>
              <span className="inline-block whitespace-nowrap text-[12.5vw] md:text-[12.8vw] 2xl:text-[13vw] font-bold">
                T
              </span>
              <span className="inline-block whitespace-nowrap text-[12.5vw] md:text-[12.8vw] 2xl:text-[13vw] font-bold">
                O
              </span>
              <span className="inline-block whitespace-nowrap text-[12.5vw] md:text-[12.8vw] 2xl:text-[13vw] font-bold">
                C
              </span>
              <span className="inline-block whitespace-nowrap text-[12.5vw] md:text-[12.8vw] 2xl:text-[13vw] font-bold">
                K
              </span>
            </span>
          </div>
        </section>

        <section className="relative px-6 lg:px-10 py-16 lg:py-28 z-20">
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="hover_card group">
                  <img
                    src="assest/images/card1.jpg"
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full"
                    alt="Creative_card"
                  />
                  <span className="block anim group-hover:translate-y-0">
                    Creative
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hover_card group">
                  <img
                    src="assest/images/card2.jpg"
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full"
                    alt="Creative_card"
                  />
                  <span className="block anim group-hover:translate-y-0">
                    Creative
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hover_card group">
                  <img
                    src="assest/images/card3.jpg"
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full"
                    alt="Creative_card"
                  />
                  <span className="block anim group-hover:translate-y-0">
                    Creative
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hover_card group">
                  <img
                    src="assest/images/card4.jpg"
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full"
                    alt="Creative_card"
                  />
                  <span className="block anim group-hover:translate-y-0">
                    Creative
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hover_card group">
                  <img
                    src="assest/images/card1.jpg"
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full"
                    alt="Creative_card"
                  />
                  <span className="block anim group-hover:translate-y-0">
                    Creative
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hover_card group">
                  <img
                    src="assest/images/card2.jpg"
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full"
                    alt="Creative_card"
                  />
                  <span className="block anim group-hover:translate-y-0">
                    Creative
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hover_card group">
                  <img
                    src="assest/images/card3.jpg"
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full"
                    alt="Creative_card"
                  />
                  <span className="block anim group-hover:translate-y-0">
                    Creative
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hover_card group">
                  <img
                    src="assest/images/card4.jpg"
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full"
                    alt="Creative_card"
                  />
                  <span className="block anim group-hover:translate-y-0">
                    Creative
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-6 xl:px-10 py-16 lg:py-28 z-20">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <span className="text-center block uppercase text-lg font-semibold text-white">
              WHAT WE OFFER
            </span>
            <h2 className="titel text-white font-semibold capitalize">
              Explore the power of AI development tools, crafted with
              brilliance, style, quality and creativity.
            </h2>
            <div className="pt-8 text-white">
              <span className="text-xl md:text-2xl text-white font-semibold block">
                Peter Bowman
              </span>
              <span className="text-base md:text-lg text-white/50 block mt-1">
                Creative Director
              </span>
            </div>
            <div className="flex flex-wrap pt-10 lg:pt-20 xl:pt-24">
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-5 py-8 anim hover:bg-[#6600FF] w_offer_card">
                <div className="mx-auto w-20 mb-7">
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
                    viewBox="0 0 64 64"
                    // style="enable-background:new 0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M60 21.2C60.112 6.898 43.021-1.264 32 7.828 20.985-1.258 3.885 6.892 4 21.2A17.148 17.148 0 0 0 7.828 32 17.145 17.145 0 0 0 4 42.8c-.112 14.302 16.979 22.464 28 13.372 11.015 9.086 28.115.936 28-13.372A17.148 17.148 0 0 0 56.172 32 17.145 17.145 0 0 0 60 21.2Zm-2 0a15.158 15.158 0 0 1-3.19 9.31A17.214 17.214 0 0 0 42.8 25.6a16.949 16.949 0 0 0-12.008 4.913A15.198 15.198 0 1 1 58 21.2ZM21.2 6a15.154 15.154 0 0 1 9.31 3.191 17.18 17.18 0 0 0-.533 23.482c.174.19.365.36.546.545a14.68 14.68 0 0 1-2.786 1.713A15.203 15.203 0 1 1 21.2 6ZM6 42.8a15.158 15.158 0 0 1 3.19-9.31 17.265 17.265 0 0 0 19.402 3.248 23.16 23.16 0 0 0 4.406-3.5A15.001 15.001 0 0 1 36.4 42.8a15.2 15.2 0 1 1-30.4 0ZM42.8 58a15.154 15.154 0 0 1-9.31-3.191 17.102 17.102 0 0 0 .002-24.02 15.291 15.291 0 0 1 20.646 1.878C62.862 42.27 55.8 58.097 42.8 58Z"
                        fill="#6600ff"
                        data-original="#000000"
                        className
                      ></path>
                    </g>
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl text-white font-semibold">
                  Excellent Support
                </h3>
                <span className="text-base lg:text-lg text-white/70 block mt-2">
                  Consectetur adipiscing elit, sed do eiusmod tempo.
                </span>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-5 py-8 anim hover:bg-[#6600FF] w_offer_card">
                <div className="mx-auto w-20 mb-7">
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
                    viewBox="0 0 64 64"
                    // style="enable-background:new 0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M39.714 11.714c-21.794.902-21.788 31.958 0 32.857a1 1 0 0 0 0-2 14.445 14.445 0 0 1-14.428-14.428c.792-19.142 28.067-19.137 28.857 0a1 1 0 0 0 2 0 16.448 16.448 0 0 0-16.43-16.43z"
                        fill="#6600ff"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M39.714 50.286C10.336 49.068 10.35 7.211 39.714 6a1 1 0 0 0 0-2 24.143 24.143 0 0 0 0 48.286 1 1 0 0 0 0-2z"
                        fill="#6600ff"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M39.714 58A29.89 29.89 0 0 1 9.857 28.143a1 1 0 0 0-2 0A31.893 31.893 0 0 0 39.714 60a1 1 0 0 0 0-2zM39.714 19.429A8.724 8.724 0 0 0 31 28.143c.457 11.553 16.974 11.549 17.429 0a8.724 8.724 0 0 0-8.715-8.714zm0 15.428A6.722 6.722 0 0 1 33 28.143c.315-8.887 13.115-8.884 13.429 0a6.723 6.723 0 0 1-6.715 6.714z"
                        fill="#6600ff"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl text-white font-semibold">
                  Reliable Experts
                </h3>
                <span className="text-base lg:text-lg text-white/70 block mt-2">
                  Consectetur adipiscing elit, sed do eiusmod tempo.
                </span>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-5 py-8 anim hover:bg-[#6600FF] w_offer_card">
                <div className="mx-auto w-20 mb-7">
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
                    viewBox="0 0 512 512"
                    // style="enable-background:new 0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M188.5 463.5a5.005 5.005 0 0 1-3.593-1.522l-135-139.5-.003-.003-.005-.006a.022.022 0 0 1-.004-.005l-.008-.008-.001-.002a4.975 4.975 0 0 1-1.383-3.316v-.015l-.001-.123V193c0-1.298.504-2.544 1.407-3.477l134.99-139.491.038-.039a4.984 4.984 0 0 1 3.372-1.489c.005-.002.01 0 .015-.001h.042c.004 0 .011.002.014 0l.12-.001h135c1.354 0 2.651.55 3.593 1.523L462.088 189.52a4.986 4.986 0 0 1 1.412 3.491V319a5.004 5.004 0 0 1-1.407 3.478L327.098 461.973l-.016.016-.001.001-.01.01-.002.002-.007.008-.004.004a.047.047 0 0 0-.01.01l-.001.001a4.99 4.99 0 0 1-3.437 1.476c0 .002-.01 0-.016 0h-.017l-.015.001h-.017c-.018 0-.034-.002-.051 0H188.5zm87.579-10h35.219L117.906 263.02l-15.851 15.498zm-45.005 0h30.902L94.904 285.509l-15.952 15.598zm-40.455 0h26.325L71.802 308.098l-11.25 11zm117.705-16.965 15.091 14.863L453.5 316.977v-22.111zm-22.606-22.266 15.48 15.248L453.5 280.893v-30.995zm-22.396-22.059 15.271 15.041L453.5 235.899v-30.958zM125.057 256.027l131.14 129.165 131.055-129.049L256.53 127.476zM58.5 276.108v31.01l190.901-186.659-15.556-15.312zm0-44.994v31.028L226.717 98.131l-15.559-15.313zM200.708 58.5l193.669 190.625 15.97-15.725L235.925 58.5zm49.34 0 167.424 167.883 15.791-15.549L280.929 58.5zM58.5 195.023v22.148l145.53-141.37-15.443-15.2zM295.072 58.5l145.317 145.317 11.071-10.902L321.381 58.5z"
                        fill="#6600ff"
                        data-original="#000000"
                        className
                      ></path>
                    </g>
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl text-white font-semibold">
                  Excellent Support
                </h3>
                <span className="text-base lg:text-lg text-white/70 block mt-2">
                  Consectetur adipiscing elit, sed do eiusmod tempo.
                </span>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-5 py-8 anim hover:bg-[#6600FF] w_offer_card">
                <div className="mx-auto w-20 mb-7">
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
                    viewBox="0 0 64 64"
                    // style="enable-background:new 0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M45.746 28.669a3.723 3.723 0 0 0 3.719-3.718v-8.42a3.723 3.723 0 0 0-3.719-3.718h-8.418a3.723 3.723 0 0 0-3.719 3.719v3.21h-3.521V7.717A3.722 3.722 0 0 0 26.37 4H9.29a3.723 3.723 0 0 0-3.72 3.718V24.8a3.723 3.723 0 0 0 3.72 3.719h9.728v6.964H9.289a3.723 3.723 0 0 0-3.719 3.719v17.08A3.723 3.723 0 0 0 9.29 60h17.08a3.722 3.722 0 0 0 3.718-3.718V44.259h9.728a3.723 3.723 0 0 0 3.72-3.719V28.67ZM35.61 16.532a1.72 1.72 0 0 1 1.72-1.719h8.417a1.72 1.72 0 0 1 1.719 1.719v8.419a1.72 1.72 0 0 1-1.719 1.718h-2.21v-3.21a3.723 3.723 0 0 0-3.72-3.718H35.61Zm0 5.21h4.207a1.72 1.72 0 0 1 1.72 1.717v3.21h-4.208a1.72 1.72 0 0 1-1.719-1.718ZM9.29 26.517a1.72 1.72 0 0 1-1.719-1.719V7.72A1.72 1.72 0 0 1 9.29 6h17.08a1.72 1.72 0 0 1 1.718 1.718v12.023h-5.352a3.723 3.723 0 0 0-3.718 3.718v3.059Zm18.799-4.777V24.8a1.72 1.72 0 0 1-1.718 1.719h-5.352v-3.059a1.72 1.72 0 0 1 1.718-1.718Zm0 34.54A1.72 1.72 0 0 1 26.37 58H9.29a1.72 1.72 0 0 1-1.72-1.718V39.2a1.72 1.72 0 0 1 1.72-1.719h9.728v3.059a3.723 3.723 0 0 0 3.718 3.718h5.352Zm0-14.022h-5.352a1.72 1.72 0 0 1-1.718-1.719v-3.058h5.352a1.72 1.72 0 0 1 1.718 1.719Zm13.447-1.719a1.72 1.72 0 0 1-1.719 1.719h-9.728V39.2a3.722 3.722 0 0 0-3.718-3.719h-5.352v-6.964h5.352a3.722 3.722 0 0 0 3.718-3.719v-3.058h3.521v3.21a3.723 3.723 0 0 0 3.72 3.718h4.206ZM54.71 44.056h-6.633a3.723 3.723 0 0 0-3.719 3.719v6.634a3.723 3.723 0 0 0 3.72 3.718h6.633a3.723 3.723 0 0 0 3.719-3.718v-6.634a3.723 3.723 0 0 0-3.72-3.719Zm1.72 10.353a1.72 1.72 0 0 1-1.72 1.718h-6.633a1.72 1.72 0 0 1-1.719-1.718v-6.634a1.721 1.721 0 0 1 1.72-1.719h6.633a1.721 1.721 0 0 1 1.719 1.719Z"
                        fill="#6600ff"
                        data-original="#000000"
                        className
                      ></path>
                    </g>
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl text-white font-semibold">
                  Excellent Support
                </h3>
                <span className="text-base lg:text-lg text-white/70 block mt-2">
                  Consectetur adipiscing elit, sed do eiusmod tempo.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-6 lg:px-10 py-16 lg:py-28 z-20">
          <img
            className="w-full h-auto absolute inset-x-0 top-0"
            src="assest/images/bg_2.jpg"
            alt="bg-2"
          />
          <div className="relative z-20 max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="titel text-white font-semibold capitalize">
                Pricing
              </h2>
            </div>
            <div className="flex text-white flex-wrap justify-center -mx-3 mt-10 lg:mt-20">
              <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
                <div className="p-8 lg:p-10 xl:p-12 bg-[#0D111A] group">
                  <span className="plan_type">Silver</span>
                  <h2 className="group-hover:text-[#5EC900] plan_price">
                    $24.00
                  </h2>
                  <span className="plan_time">Per Month</span>
                  <p className="plan_description">
                    Adipiscing elit sed do eusmod tempor incididunt labore et
                    dolore
                  </p>
                  <a href="#" className="pricing_btn anim">
                    Get Now
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
                <div className="p-8 lg:p-10 xl:p-12 bg-[#0D111A] group">
                  <span className="plan_type">Gold</span>
                  <h2 className="group-hover:text-[#5EC900] plan_price">
                    $32.00
                  </h2>
                  <span className="plan_time">Per Month</span>
                  <p className="plan_description">
                    Adipiscing elit sed do eusmod tempor incididunt labore et
                    dolore
                  </p>
                  <a href="#" className="pricing_btn anim">
                    Get Now
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
                <div className="p-8 lg:p-10 xl:p-12 bg-[#0D111A] group">
                  <span className="plan_type">Platinum</span>
                  <h2 className="group-hover:text-[#5EC900] plan_price">
                    $48.00
                  </h2>
                  <span className="plan_time">Per Month</span>
                  <p className="plan_description">
                    Adipiscing elit sed do eusmod tempor incididunt labore et
                    dolore
                  </p>
                  <a href="#" className="pricing_btn anim">
                    Get Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-6 lg:px-10 py-16 lg:py-28 z-20">
          <div className="relative z-20 max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className="titel text-white font-semibold capitalize">
                FAQs
              </h2>
            </div>
            <div className="w-full space-y-5 mt-10 lg:mt-20">
              <div className="fq-main border-l-4 border-white pl-6">
                <div className="fopen flex justify-between items-center py-2 md:py-4 cursor-pointer">
                  <h2 className="w-11/12 text-xl md:text-2xl xl:text-3xl font-semibold text-white">
                    What are my options?
                  </h2>
                  <span className="inline-block w-8 h-8 xl:w-10 xl:h-10 rotate-45 anim">
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
                </div>
                <div className="fdetails pt-2 md:pt-4">
                  <p className="text-base md:text-lg lg:text-xl text-white/80">
                    Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur. Dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas.
                  </p>
                </div>
              </div>
              <div className="fq-main border-l-4 border-white pl-6">
                <div className="fopen flex justify-between items-center py-2 md:py-4 cursor-pointer">
                  <h2 className="w-11/12 text-xl md:text-2xl xl:text-3xl font-semibold text-white">
                    Can I switch to a different plan?
                  </h2>
                  <span className="inline-block w-8 h-8 xl:w-10 xl:h-10 rotate-45 anim">
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
                </div>
                <div className="fdetails pt-2 md:pt-4">
                  <p className="text-base md:text-lg lg:text-xl text-white/80">
                    Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur. Dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas.
                  </p>
                </div>
              </div>
              <div className="fq-main border-l-4 border-white pl-6">
                <div className="fopen flex justify-between items-center py-2 md:py-4 cursor-pointer">
                  <h2 className="w-11/12 text-xl md:text-2xl xl:text-3xl font-semibold text-white">
                    Do you offer non-disclosure signature?
                  </h2>
                  <span className="inline-block w-8 h-8 xl:w-10 xl:h-10 rotate-45 anim">
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
                </div>
                <div className="fdetails pt-2 md:pt-4">
                  <p className="text-base md:text-lg lg:text-xl text-white/80">
                    Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur. Dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas.
                  </p>
                </div>
              </div>
              <div className="fq-main border-l-4 border-white pl-6">
                <div className="fopen flex justify-between items-center py-2 md:py-4 cursor-pointer">
                  <h2 className="w-11/12 text-xl md:text-2xl xl:text-3xl font-semibold text-white">
                    Do you issue refunds?
                  </h2>
                  <span className="inline-block w-8 h-8 xl:w-10 xl:h-10 rotate-45 anim">
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
                </div>
                <div className="fdetails pt-2 md:pt-4">
                  <p className="text-base md:text-lg lg:text-xl text-white/80">
                    Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur. Dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas.
                  </p>
                </div>
              </div>
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
                      <li className="relative group text-white">
                        <a
                          href="#"
                          className="text-base xl:text-lg text-gray-400 hover:text-white anim"
                        >
                          Facebook
                        </a>
                        <span className="list_border anim"></span>
                      </li>
                      <li className="relative group text-white">
                        <a
                          href="#"
                          className="text-base xl:text-lg text-gray-400 hover:text-white anim"
                        >
                          Twitter
                        </a>
                        <span className="list_border anim"></span>
                      </li>
                      <li className="relative group text-white">
                        <a
                          href="#"
                          className="text-base xl:text-lg text-gray-400 hover:text-white anim"
                        >
                          Dribble
                        </a>
                        <span className="list_border anim"></span>
                      </li>
                      <li className="relative group text-white">
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
                      <li className="relative group text-white">
                        <a
                          href="#"
                          className="text-base xl:text-lg text-gray-400 hover:text-white anim"
                        >
                          Home
                        </a>
                        <span className="list_border anim"></span>
                      </li>
                      <li className="relative group text-white">
                        <a
                          href="#"
                          className="text-base xl:text-lg text-gray-400 hover:text-white anim"
                        >
                          About
                        </a>
                        <span className="list_border anim"></span>
                      </li>
                      <li className="relative group text-white">
                        <a
                          href="#"
                          className="text-base xl:text-lg text-gray-400 hover:text-white anim"
                        >
                          Services
                        </a>
                        <span className="list_border anim"></span>
                      </li>
                      <li className="relative group text-white">
                        <a
                          href="#"
                          className="text-base xl:text-lg text-gray-400 hover:text-white anim"
                        >
                          Shop
                        </a>
                        <span className="list_border anim"></span>
                      </li>
                      <li className="relative group text-white">
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
                      <li className="relative group text-white">
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
            xmlns:svgjs="http://svgjs.com/svgjs"
            width="512"
            height="512"
            x="0"
            y="0"
            viewBox="0 0 24 24"
            // style="enable-background:new 0 0 512 512"
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
    </>
  );
};

export default Home;
