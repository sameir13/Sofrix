import React from "react";

const Accounts = () => {
  return (
    <div className="relative">
      <img
        src="/assets/backgrounds/green.png"
        className="  absolute  inset-0 object-cover    border-red-400  "
        alt=""
      />

      <section className=" parentPaddingAndWidth  bg-[#31CE5D]">
        <div className=" flex  flex-col md:flex-row  md:gap-8  bg-white rounded-3xl  relative z-10  p-7   md:p-20 ">
          <div className="  w-full md:w-1/2  group   relative   min-h-[250px]  md:min-h-[400px]">
            <img
              src="/assets/4.png"
              className=" absolute  z-50  md:w-[90%]  md:group-hover:scale-125 transition-all duration-700   group-hover:translate-x-14   top-20     md:top-24 "
              alt=""
            />
            <img
              src="/assets/5.png"
              className=" absolute  z-20  md:w-[90%]  top-11   md:left-11  "
              alt=""
            />
            <img src="/assets/6.png" alt="" className=" w-full  md:w-[90%] " />
          </div>
          <div className="  w-full md:w-1/2  flex items-center justify-center    ">
            <p className="para  text-center md:text-left md:max-w-[70%] ">
              {" "}
              <strong>Track your net worth</strong> automatically and spend less
              time managing your personal finances. No need to update
              spreadsheets manually anymore.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accounts;
