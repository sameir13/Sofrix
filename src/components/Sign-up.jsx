import React from "react";

const SignUp = () => {
  return (
    <section className="parentPaddingAndWidth  hidden lg:flex  relative bg-[#00ABE1]">
            <img src="/assets/backgrounds/skyblue.png" className=" absolute object-cover   w-full h-[100vh] inset-0" alt="" />

      <div className="  flex items-center flex-row gap-10 rounded-3xl relative z-10 ">
        <div className="  w-full md:w-[30%]  ">
          <div className=" p-5 rounded-3xl  bg-white ">
            <div className=" bg-[#00ABE1] rounded-3xl  min-h-[450px] flex items-center justify-center   ">
              <img src="/assets/QR.png" className=" overflow-hidden" alt="" />
            </div>
          </div>
        </div>
        <div className=" bg-white flex py-2  w-full md:w-[70%]  rounded-3xl ">
          <div className=" flex items-center relative">
            <img
              src="./assets/person/Person 2.png"
              className=" -translate-x-20"
              alt=""
            />
            <img
              src="./assets/person/Person 1.png"
              className="-translate-x-20"
              alt=""
            />
          </div>

          <div className="  w-full md:w-1/2  flex items-center justify-center    ">
            <p className="para  text-center md:text-left md:max-w-[90%] ">
              {" "}
              <strong >
                Sign up today
              </strong>{" "}
              and manage your portfolio like a pro with personalized assistant
              and access to a trusted tech community of 1,200 members who
              connected $150M+ of total assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
