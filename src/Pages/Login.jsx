import React from "react";

const Login = () => {
  return (
    <div>
      <div className="main relative bg-[#090E1A] px-5 h-screen flex">
        {/* <!-- paticale animation  --> */}
        <div id="particles-js" className="fixed inset-0 w-full h-screen"></div>
        <div className="m-auto w-full max-w-md py-5 relative z-20">
          <h1 className="text-center font-bold text-indigo-600 text-3xl md:text-3xl lg:text-5xl">
            Sign up
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>
          <form
            action=""
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 bg-white shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Sign in to your account
            </p>
            <div>
              <div className="relative">
                <input
                  type="email"
                  className="outline-none w-full rounded-lg border-gray-200 p-4 pe-12 text-sm lg:text-base shadow"
                  placeholder="Email id"
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsxlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.com/svgjs"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xml:space="preserve"
                    classNamea=""
                  >
                    <g>
                      <path
                        d="M485.743 85.333H26.257C11.815 85.333 0 97.148 0 111.589V400.41c0 14.44 11.815 26.257 26.257 26.257h459.487c14.44 0 26.257-11.815 26.257-26.257V111.589c-.001-14.441-11.816-26.256-26.258-26.256zm-9.853 19.691L271.104 258.626c-3.682 2.802-9.334 4.555-15.105 4.529-5.77.026-11.421-1.727-15.104-4.529L36.109 105.024H475.89zM366.5 268.761l111.59 137.847c.112.138.249.243.368.368H33.542c.118-.131.256-.23.368-.368L145.5 268.761a9.846 9.846 0 0 0-1.464-13.851c-4.227-3.419-10.424-2.771-13.844 1.457l-110.5 136.501V117.332l209.394 157.046c7.871 5.862 17.447 8.442 26.912 8.468 9.452-.02 19.036-2.6 26.912-8.468l209.394-157.046v275.534L381.807 256.367c-3.42-4.227-9.623-4.877-13.844-1.457-4.234 3.419-4.884 9.624-1.463 13.851z"
                        fill="#000000"
                        data-original="#000000"
                        className=""
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <div className="relative">
                <input
                  type="password"
                  className="outline-none w-full rounded-lg border-gray-200 p-4 pe-12 text-sm lg:text-base shadow"
                  placeholder="Enter password"
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsxlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.com/svgjs"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 511.999 511.999"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xml:space="preserve"
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
              <div className="w-full text-right pt-3">
                <a href="#" className="text-sm text-indigo-600">
                  Forgot password
                </a>
              </div>
            </div>
            <button type="submit" className="block w-full btn-primary anim">
              Sign in
            </button>
            <p className="text-center text-sm text-gray-500">
              No account?
              <a className="underline" href="">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
