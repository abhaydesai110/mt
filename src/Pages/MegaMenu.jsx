import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Interior from "../Components/Interior";

const MegaMenu = () => {
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
                <a className="block text-white text-3xl font-bold" href="#">
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
                    onclick="removeActive('#nav','open');"
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
                              data-original="#ffffff"
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
                  <button onclick="addActive('#nav','open');" className="anim">
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
                          data-original="#ffffff"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header> */}

        <section className="relative px-4 lg:px-10 lg:py-20 z-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-semibold capitalize text-center mb-8 xl:mb-10">
            Generator
          </h2>
          <ul id="tabs-nav" className="w-full flex flex-wrap justify-center">
            <li className="g_btn">
              <Link to="inteior" className="anim">
                Inteior
              </Link>
            </li>
            <li className="g_btn">
              <Link to="exteior" className="anim">
                Exteior
              </Link>
            </li>
            <li className="g_btn">
              <Link to="garden" className="anim">
                Garden
              </Link>
            </li>
            <li className="g_btn">
              <Link to="floorplangenration" className="anim">
                Floor plan Genration
              </Link>
            </li>
          </ul>
          <div
            id="form_div"
            className="max-w-7xl mx-auto p-5 sm:p-10 lg:p-14 py-8 rounded-2xl -mt-8"
          >
            <div className="flex flex-wrap -mx-5">
              <div className="w-full md:w-1/2 p-5 md:py-6 max-w-2xl mx-auto">
                <div id="inteior" className="droplist w-full hidden">
                  <form
                    action=""
                    id="inteiorform"
                    name="InteiorForm"
                    method="post"
                  >
                    <div className="flex justify-center flex-wrap">
                      <div className="p-2 w-full mb-5">
                        <div className="drop_img">
                          <input
                            className="absolute inset-0 w-full h-full opacity-0"
                            type="file"
                            name="upload-images"
                            id="upload-images"
                          />
                          <div className="text-center">
                            <span className="block text-white/70">
                              <svg
                                className="w-10 h-10 mx-auto fill-white/70 stroke-white/70"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlnsSvgjs="http://svgjs.com/svgjs"
                                width="512"
                                height="512"
                                x="0"
                                y="0"
                                viewBox="0 0 32 32"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g>
                                  <path
                                    d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                    fill="#292929"
                                    data-original="#000000"
                                  ></path>
                                  <path
                                    d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                    fill="#292929"
                                    data-original="#000000"
                                  ></path>
                                </g>
                              </svg>
                            </span>
                            <span className="block text-sm md:text-xl  text-white/70">
                              Drop files here
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 w-full md:w-1/2">
                        <select
                          className="p-2 md:p-3 px-4 text-sm outline-none rounded-md w-full"
                          name=""
                          id="inteior_mainlist"
                        >
                          <option disabled defaultValue value>
                            -- select an option --
                          </option>
                          <option value="Home">Home</option>
                          <option value="Commercial">Commercial</option>
                        </select>
                      </div>
                      <div className="p-2 w-full md:w-1/2">
                        <select
                          className="p-2 md:p-3 px-4 text-sm outline-none rounded-md w-full"
                          name=""
                          id="home_list"
                        >
                          <option disabled defaultValue value>
                            -- select for Home --
                          </option>
                          <option value="Living Room">Living Room</option>
                          <option value="Kitchen">Kitchen</option>
                          <option value="Dining Room">Dining Room</option>
                          <option value="Bedroom">Bedroom</option>
                          <option value="Bathroom">Bathroom</option>
                          <option value="Tv Unit">Tv Unit</option>
                          <option value="Children Bedroom">
                            Children Bedroom
                          </option>
                          <option value="Study Room">Study Room</option>
                          <option value="Home Office">Home Office</option>
                          <option value="Gaming Room">Gaming Room</option>
                          <option value="Home Theater">Home Theater</option>
                          <option value="Home Bar">Home Bar</option>
                          <option value="Home Gym">Home Gym</option>
                          <option value="Sloping Roof Rooms">
                            Sloping Roof Rooms
                          </option>
                          <option value="Meditation Room">
                            Meditation Room
                          </option>
                          <option value="Wardrobe">Wardrobe</option>
                          <option value="Side Cabinate">Side Cabinate</option>
                          <option value="Cealing">Cealing</option>
                          <option value="Door">Door</option>
                        </select>
                      </div>
                      <div className="p-2 w-full md:w-1/2">
                        <select
                          className="p-2 md:p-3 px-4 text-sm outline-none rounded-md w-full"
                          name=""
                          id="commercial_list"
                        >
                          <option disabled defaultValue value>
                            {" "}
                            -- select for Commercial --{" "}
                          </option>
                          <option value="Office Main Cabin">
                            Office Main Cabin
                          </option>
                          <option value="Reception">Reception</option>
                          <option value="Meeting Room">Meeting Room</option>
                          <option value="Staff Area">Staff Area</option>
                          <option value="Fitness Gym">Fitness Gym</option>
                          <option value="Coffee Shop">Coffee Shop</option>
                          <option value="Restaurant">Restaurant</option>
                          <option value="Clothing Store">Clothing Store</option>
                          <option value="Hotel Lobby">Hotel Lobby</option>
                          <option value="Hotel Room">Hotel Room</option>
                          <option value="Hotel Bathroom">Hotel Bathroom</option>
                          <option value="Passage Area">Passage Area</option>
                        </select>
                      </div>
                      <div className="p-2 w-full md:w-1/2">
                        <select
                          className="p-2 md:p-3 px-4 text-sm outline-none rounded-md w-full"
                          name=""
                          id="home_design_1_to_5"
                        >
                          <option disabled defaultValue value>
                            {" "}
                            -- Design style for home for 1 to 5 --{" "}
                          </option>
                          <option value="Art Deco">Art Deco</option>
                          <option value="Bohemian">Bohemian</option>
                          <option value="Coastal">Coastal</option>
                          <option value="Contemporary">Contemporary</option>
                          <option value="Eclectic">Eclectic</option>
                          <option value="Farmhouse">Farmhouse</option>
                          <option value="Industrial">Industrial</option>
                          <option value="Mid-Century Modern">
                            Mid-Century Modern
                          </option>
                          <option value="Minimalist">Minimalist</option>
                          <option value="Modern">Modern</option>
                          <option value="Rustic">Rustic</option>
                          <option value="Scandinavian">Scandinavian</option>
                          <option value="Shabby Chic">Shabby Chic</option>
                          <option value="Traditional">Traditional</option>
                          <option value="Transitional">Transitional</option>
                        </select>
                      </div>
                      <div className="p-2 w-full md:w-1/2">
                        <select
                          className="p-2 md:p-3 px-4 text-sm outline-none rounded-md w-full"
                          name=""
                          id="home_design_18"
                        >
                          <option disabled defaultValue value>
                            {" "}
                            -- Design style for home for 18 --{" "}
                          </option>
                          <option value="Living Room">Living Room</option>
                          <option value="Kitchen">Kitchen</option>
                          <option value="Dining Room">Dining Room</option>
                          <option value="Bedroom">Bedroom</option>
                          <option value="Bathroom">Bathroom</option>
                        </select>
                      </div>
                      <div className="p-2 w-full md:w-1/2">
                        <select
                          className="p-2 md:p-3 px-4 text-sm outline-none rounded-md w-full"
                          name=""
                          id="home_design_19"
                        >
                          <option disabled defaultValue value>
                            {" "}
                            -- Design style for home for 19 --{" "}
                          </option>
                          <option value="Main Entrance Door">
                            Main Entrance Door
                          </option>
                          <option value="Main Simple Door">
                            Main Simple Door
                          </option>
                          <option value="Internal Door">Internal Door</option>
                        </select>
                      </div>
                      <div className="p-2 w-full">
                        <button
                          id="generate"
                          className="btn_generate p-2.5 px-4 text-base uppercase font-medium text-white bg-[#5046E5] flex items-center justify-center mx-auto"
                          type="button"
                        >
                          Generate
                          <span className="btn-ring ml-4"></span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div id="exteior" className="droplist w-full hidden">
                  <form
                    action=""
                    id="exteiorform"
                    name="ExteiorForm"
                    method="post"
                  >
                    <div className="flex justify-center flex-wrap">
                      <div className="p-2 w-full">
                        <div className="drop_img">
                          <input
                            className="absolute inset-0 w-full h-full opacity-0"
                            type="file"
                            name="upload-images"
                            id="upload-images"
                          />
                          <div className="text-center">
                            <span className="block text-xl text-white/70">
                              <svg
                                className="w-10 h-10 mx-auto fill-white/70 stroke-white/70"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlnsSvgjs="http://svgjs.com/svgjs"
                                width="512"
                                height="512"
                                x="0"
                                y="0"
                                viewBox="0 0 32 32"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g>
                                  <path
                                    d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                    fill="#292929"
                                    data-original="#000000"
                                  ></path>
                                  <path
                                    d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                    fill="#292929"
                                    data-original="#000000"
                                  ></path>
                                </g>
                              </svg>
                            </span>
                            <span className="block text-xl  text-white/70">
                              Drop files here
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <select
                          className="p-2 md:p-3 px-4 text-sm outline-none rounded-md w-full"
                          name=""
                          id="exteior_mainlist"
                          onclick="exteior_display()"
                        >
                          <option disabled defaultValue value>
                            {" "}
                            -- select an option --{" "}
                          </option>
                          <option value="Bunglaow">Bunglow</option>
                          <option value="Apartment">Apartment</option>
                        </select>
                      </div>
                      <div className="p-2 w-full" id="bungalow_list_div">
                        <select
                          className="p-2 md:p-3 px-4 text-sm outline-none rounded-md w-full"
                          name=""
                          id="bungalow_list"
                        >
                          <option disabled defaultValue value>
                            {" "}
                            -- select for bungalow --{" "}
                          </option>
                          <option value="Modern">Modern</option>
                          <option value="Heavy Elevations">
                            Heavy Elevations
                          </option>
                          <option value="Typical">Typical</option>
                          <option value="Kerala">Kerala</option>
                          <option value="classNameical">classNameical</option>
                          <option value="Brutalist">Brutalist</option>
                          <option value="Art Deco">Art Deco</option>
                          <option value="Wood Cottages">Wood Cottages</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Contemporary">Contemporary</option>
                          <option value="Rajasthani">Rajasthani</option>
                          <option value="Gujarati">Gujarati</option>
                          <option value="Sliding Gates">Sliding Gates</option>
                          <option value="Compound Elevation">
                            Compound Elevation
                          </option>
                        </select>
                      </div>
                      <div className="p-2 w-full" id="apartment_list_div">
                        <select
                          className="p-2 md:p-3 px-4 text-sm outline-none rounded-md w-full"
                          name=""
                          id="apartment_list"
                        >
                          <option disabled defaultValue value>
                            {" "}
                            -- select for apartment --{" "}
                          </option>
                          <option value="Modern">Modern</option>
                          <option value="classNameical Elevation">
                            classNameical Elevation
                          </option>
                          <option value="Brutalist">Brutalist</option>
                          <option value="Industrial">Industrial</option>
                          <option value="Rustic">Rustic</option>
                          <option value="Minimalist">Minimalist</option>
                          <option value="Art Deco Elevation">
                            Art Deco Elevation
                          </option>
                          <option value="Entrance Gate">Entrance Gate</option>
                          <option value="Hires Apartment exterior">
                            Hires Apartment exterior
                          </option>
                        </select>
                      </div>
                      <div className="p-2 w-full text-center">
                        <button
                          className="p-2.5 px-4 text-base uppercase font-medium text-white bg-[#5046E5]"
                          type="submit"
                        >
                          Generate
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div id="garden" className="droplist w-full hidden">
                  <form
                    action=""
                    id="gardenform"
                    name="GardenForm"
                    method="post"
                  >
                    <div className="flex justify-center flex-wrap">
                      <div className="p-2 w-full">
                        <div className="drop_img">
                          <input
                            className="absolute inset-0 w-full h-full opacity-0"
                            type="file"
                            name="upload-images"
                            id="upload-images"
                          />
                          <div className="text-center">
                            <span className="block text-xl text-white/70">
                              <svg
                                className="w-10 h-10 mx-auto fill-white/70 stroke-white/70"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlnsSvgjs="http://svgjs.com/svgjs"
                                width="512"
                                height="512"
                                x="0"
                                y="0"
                                viewBox="0 0 32 32"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g>
                                  <path
                                    d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                    fill="#292929"
                                    data-original="#000000"
                                  ></path>
                                  <path
                                    d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                    fill="#292929"
                                    data-original="#000000"
                                  ></path>
                                </g>
                              </svg>
                            </span>
                            <span className="block text-xl  text-white/70">
                              Drop files here
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <select
                          className="p-2 md:p-3 px-4 text-sm outline-none rounded-md w-full"
                          name=""
                          id=""
                        >
                          <option disabled defaultValue value>
                            {" "}
                            -- select for garden --{" "}
                          </option>
                          <option value="Garden">Garden</option>
                          <option value="Apartment Garden">
                            Apartment Garden
                          </option>
                          <option value="Patio">Patio</option>
                          <option value="Terrace">Terrace</option>
                          <option value="Back Yard">Back Yard</option>
                          <option value="Pool Area">Pool Area</option>
                          <option value="Luxury Designs">Luxury Designs</option>
                          <option value="Balcony">Balcony</option>
                          <option value="Cottage Gardens">
                            Cottage Gardens
                          </option>
                          <option value="Beach Gardens">Beach Gardens</option>
                        </select>
                      </div>
                      <div className="p-2 w-full text-center">
                        <button
                          className="p-2.5 px-4 text-base uppercase font-medium text-white bg-[#5046E5]"
                          type="submit"
                        >
                          Generate
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div id="floorplangenration" className="droplist w-full hidden">
                  <form
                    action=""
                    id="floorplangenrationform"
                    name="FloorPlanGenrationForm"
                    method="post"
                  >
                    <div className="flex justify-center flex-wrap">
                      <div className="p-2 w-full">
                        <div className="drop_img">
                          <input
                            className="absolute inset-0 w-full h-full opacity-0"
                            type="file"
                            name="upload-images"
                            id="upload-images"
                          />
                          <div className="text-center">
                            <span className="block text-xl text-white/70">
                              <svg
                                className="w-10 h-10 mx-auto fill-white/70 stroke-white/70"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlnsSvgjs="http://svgjs.com/svgjs"
                                width="512"
                                height="512"
                                x="0"
                                y="0"
                                viewBox="0 0 32 32"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g>
                                  <path
                                    d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                    fill="#292929"
                                    data-original="#000000"
                                  ></path>
                                  <path
                                    d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                    fill="#292929"
                                    data-original="#000000"
                                  ></path>
                                </g>
                              </svg>
                            </span>
                            <span className="block text-xl  text-white/70">
                              Drop files here
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <select
                          className="p-2 md:p-3 px-4 text-sm outline-none rounded-md w-full"
                          name=""
                          id=""
                        >
                          <option disabled defaultValue value>
                            {" "}
                            -- select for Floor Plan Genration --{" "}
                          </option>
                          <option value="Bunglaow">Bunglaow</option>
                          <option value="Apartment">Apartment</option>
                          <option value="Farm house">Farm house</option>
                        </select>
                      </div>
                      <div className="p-2 w-full text-center">
                        <button
                          className="p-2.5 px-4 text-base uppercase font-medium text-white bg-[#5046E5]"
                          type="submit"
                        >
                          Generate
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* <!-- privew section  --> */}
              <div
                id="preview"
                className="w-full md:w-1/2 p-5 md:py-6 max-w-2xl mx-auto md:border-l-4 border-[#5046E5] hidden"
              >
                <div className="w-full max-w-xs mx-auto rounded-lg overflow-hidden">
                  <img
                    src="assest/images/card1.jpg"
                    className="w-full"
                    alt="contects3"
                  />
                </div>
                <div className="w-full max-w-xs mx-auto rounded-lg overflow-hidden mt-4">
                  <img
                    src="assest/images/card1.jpg"
                    className="w-full"
                    alt="contects3"
                  />
                </div>
                <div className="text-center space-x-5 mt-6 flex justify-center">
                  <button
                    type="submit"
                    className="w-40 my-1.5 rounded-lg hover:opacity-80 anim bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                  >
                    Save
                  </button>
                  <button
                    type="submit"
                    className="w-40 my-1.5 rounded-lg hover:opacity-80 anim bg-red-600 px-5 py-3 text-sm font-medium text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-6 lg:px-10 py-16 lg:py-28 z-20">
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="hover_card group">
                  <img
                    src="assest/images/card1.jpg"
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full h-full"
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
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full h-full"
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
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full h-full"
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
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full h-full"
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
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full h-full"
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
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full h-full"
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
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full h-full"
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
                    className="anim group-hover:scale-105 group-hover:opacity-70 w-full h-full"
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
                fill="#ffffff"
                data-original="#ffffff"
              ></path>
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default MegaMenu;
