import React from "react";

const Accounts = () => {
  return (
    <section className=" parentPaddingAndWidth bg-[#3994E9] relative">
            <img src="/assets/backgrounds/blue.png" className=" absolute object-cover   w-full  inset-0 " alt="" />


      <div className=" flex  flex-col-reverse md:flex-row  md:gap-8 relative z-10  bg-white rounded-3xl   p-7   md:p-20 ">
        <div className="  w-full md:w-1/2  flex items-center  ">
          <p className="para  text-center md:text-left md:max-w-[70%] ">
            {" "}
            <strong className="  text-[18px] md:text-[21px]">
              Connect your brokerage accounts
            </strong>{" "}
            and get access to trading ideas, aggregated stats and discussions in
            your tech investing community right away.
          </p>
        </div>
        <div className="  w-full md:w-1/2  group   relative   min-h-[250px]  md:min-h-[400px]">
          <img
            src="/assets/1.png"
            className=" absolute  z-50   md:group-hover:scale-125 transition-all duration-700  md:group-hover:translate-x-12  top-14     md:top-24 "
            alt=""
          />
          <img src="/assets/2.png" className=" absolute  z-20   " alt="" />
          <img src="/assets/3.png" alt="" className=" w-full" />
        </div>
      </div>
    </section>
  );
};

export default Accounts;
