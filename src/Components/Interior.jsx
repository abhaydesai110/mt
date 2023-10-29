import React from "react";

const Interior = () => {
  return (
    <div>
      {" "}
      <div id="inteior" className="droplist w-full hidden">
        <form action="" id="inteiorform" name="InteiorForm" method="post">
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
                <option value="Children Bedroom">Children Bedroom</option>
                <option value="Study Room">Study Room</option>
                <option value="Home Office">Home Office</option>
                <option value="Gaming Room">Gaming Room</option>
                <option value="Home Theater">Home Theater</option>
                <option value="Home Bar">Home Bar</option>
                <option value="Home Gym">Home Gym</option>
                <option value="Sloping Roof Rooms">Sloping Roof Rooms</option>
                <option value="Meditation Room">Meditation Room</option>
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
                <option value="Office Main Cabin">Office Main Cabin</option>
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
                <option value="Mid-Century Modern">Mid-Century Modern</option>
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
                <option value="Main Entrance Door">Main Entrance Door</option>
                <option value="Main Simple Door">Main Simple Door</option>
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
    </div>
  );
};

export default Interior;
