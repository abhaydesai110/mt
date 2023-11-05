import React from "react";

const Floorplangenration = () => {
  return (
    <div>
      {" "}
      <h1 className="text-4xl my-5 font-bold text-center  text-white">
        FLOOR PLAN GENRATION
      </h1>
      <div id="floorplangenration" className="droplist w-full ">
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
  );
};

export default Floorplangenration;
