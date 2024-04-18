import React from "react";

const Notify = () => {
  return (
    <section className="parentPaddingAndWidth  bg-[#9F73C2] relative">
      <img src="/assets/backgrounds/purple.png" className=" absolute  w-full  md:h-[100vh] object-cover  inset-0   " alt="" />

      <div className=" bg-white flex flex-col  md:flex-row  justify-between  relative  rounded-3xl    ">
        <div className=" ParentDiv  ">
          <img
            src="/assets/Investor/bg.png"
            className="backgroundImage  "
            alt=""
          />

          <div className="ImagesOverlay">
            <div className=" imagesChildOverLay">
              <img
                src="/assets/Investor/IR-1.png"
                className="ir_image_one"
                alt=""
              />
              <img
                src="/assets/Investor/IR-2.png"
                className="ir_image_two"
                alt=""
              />
              <img
                src="/assets/Investor/IR-2.png"
                className="ir_image_animation"
                alt=""
              />

              <img
                src="/assets/Investor/IR-3.png"
                className="ir_image_three"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="  w-full md:w-1/2  flex items-center  justify-center  p-7    md:p-20 ">
          <p className="para  text-center md:text-left md:max-w-[70%] ">
            {" "}
            <strong className="  text-[18px] md:text-[21px]">
            Receive personalized investor reports
            </strong>{" "}
             and understand how your trading activities contribute to your overall wealth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Notify;
