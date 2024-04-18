import React from "react";

const Notify = () => {
  return (
    <section className="parentPaddingAndWidth  bg-[#FBBC12] relative border border-red-400">
      <img src="/assets/backgrounds/yellow.png" className=" absolute top-0 w-full object-cover  h-[100vh] left-0 " alt="" />
      <div className=" bg-white flex flex-col-reverse  md:flex-row items-center  relative  rounded-3xl    border border-red-300">
        <div className="  w-full md:w-1/2  flex items-center  p-7    md:p-20 ">
          <p className="para  text-center md:text-left md:max-w-[70%] ">
            {" "}
            <strong >
              Automate monitoring
            </strong>{" "}
            of your trading accounts 24/7. Control your risks and manage your
            portfolio like a PRO.
          </p>
        </div>
        <div className="  md:scale-105  relative   flex items-center justify-center  mt-10  md:mt-0  mx-10">
          <img src="/assets/notify/bg.png" className="   w-[55%]  md:w-full h-full  max-w-full  md:max-w-[400px] " alt="" />

          <div className=" absolute   flex flex-col items-center justify-center inset-0 w-full h-full group">
            <img
              src="/assets/notify/Milestone 5.png"
              className="  mt-7 md:mt-20 mb-4  w-[50%]  md:w-full  scale-105  group-hover:scale-125 transition-all duration-700"
              alt=""
            />
            <img
              src="/assets/notify/Stock .png"
              className="mb-4 scale-105  w-[50%]   md:w-full"
              alt=""
            />
            <img
              src="/assets/notify/Trading .png"
              className="mb-2 scale-105  w-[50%]   md:w-full"
              alt=""
            />
            <img src="/assets/notify/input.png" className="px-2  w-[50%]  md:w-full" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notify;
