import React from "react";

const Exterior = () => {
  return (
    <div>
      {" "}
      <h1 className="text-4xl my-5 font-bold text-center  text-white">EXTERIOR</h1>
      <div id="exteior" className="droplist w-full ">
        <form action="" id="exteiorform" name="ExteiorForm" method="post">
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
                <option value="Heavy Elevations">Heavy Elevations</option>
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
                <option value="Compound Elevation">Compound Elevation</option>
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
                <option value="Art Deco Elevation">Art Deco Elevation</option>
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
    </div>
  );
};

export default Exterior;
