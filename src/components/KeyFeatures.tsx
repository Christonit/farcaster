import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import GaianText from "./GaianText";

function KeyFeatures() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <div className="lg:flex items-end justify-between mb-[32px]">
        <div>
          <span className="text-5xl">
            <GaianText className="">Key Features</GaianText>
          </span>
          <h2 className="text-5xl font-semibold text-neutral-900">
            Key Features
          </h2>
        </div>

        <div className="lg:flex justify-between items-center hidden gap-[16px]">
          <button
            onClick={previous}
            className="px-2 w-[40px] h-[40px] flex justify-center  py-2 border-slate-900  border text-white rounded-full"
          >
            <img src="/images/arrow_back.svg" alt="Arrow Left" />
          </button>
          <button
            onClick={next}
            className="px-2 w-[40px] h-[40px] flex justify-center  py-2 border-slate-900   border text-white rounded-full"
          >
            <img src="/images/arrow_forward.svg" alt="Arrow ight" />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        <div>
          <div className="flex justify-between">
            <div className="left-block min-w-[300px] py-[24px] w-full lg:py-[32px]">
              <h3 className=" text-[24px] lg:text-[36px] font-semibold text-blue-500">
                The Power of GAIAs
              </h3>

              <img
                src="/images/the-eye.png"
                alt="Key Features"
                className="mix-blend-color-burn w-auto mx-auto "
              />
            </div>

            <div className="righ-block flex flex-col gap-[20px] max-w-[700px]">
              <div className="px-[20px] py-[20px] bg-slate-150 rounded-[12px] flex gap-[20px] flex-col">
                <h4 className="text-slate-900 text-2xl font-bold mb-0">
                  Decentralized
                </h4>
                <p className="text-lg text-slate-500">
                  Train AI agents through onchain gameplay, with compute
                  resources funded by player transactions.
                </p>
              </div>
              <div className="px-[20px] py-[20px] bg-slate-150 rounded-[12px] flex gap-[20px] flex-col">
                <h4 className="text-slate-900 text-2xl font-bold mb-0">
                  Exclusive Access
                </h4>
                <p className="text-base text-slate-500">
                  OGs NFT holders have the unique ability to create and train
                  these AI agents.
                </p>
              </div>
              <div className="px-[20px] py-[20px] bg-slate-150 rounded-[12px] flex gap-[20px] flex-col">
                <h4 className="text-slate-900 text-2xl font-bold mb-0">
                  Monetization Opportunities
                </h4>
                <p className="text-base text-slate-500">
                  Highly capable GAIAs can be monetized on the Armory
                  Marketplace (Intelligence-as-a-Service) and Foundry
                  Marketplace (Transfer Learning as a Service).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="left-block min-w-[300px] py-[24px] w-full lg:py-[32px]">
              <h3 className=" text-[24px] lg:text-[36px] font-semibold text-blue-500">
                The Power of GAIAs
              </h3>

              <img
                src="/images/the-eye.png"
                alt="Key Features"
                className="mix-blend-color-burn w-auto mx-auto "
              />
            </div>

            <div className="righ-block flex flex-col gap-[20px] max-w-[700px]">
              <div className="px-[20px] py-[20px] bg-slate-150 rounded-[12px] flex gap-[20px] flex-col">
                <h4 className="text-slate-900 text-2xl font-bold mb-0">
                  Decentralized
                </h4>
                <p className="text-lg text-slate-500">
                  Train AI agents through onchain gameplay, with compute
                  resources funded by player transactions.
                </p>
              </div>
              <div className="px-[20px] py-[20px] bg-slate-150 rounded-[12px] flex gap-[20px] flex-col">
                <h4 className="text-slate-900 text-2xl font-bold mb-0">
                  Exclusive Access
                </h4>
                <p className="text-base text-slate-500">
                  OGs NFT holders have the unique ability to create and train
                  these AI agents.
                </p>
              </div>
              <div className="px-[20px] py-[20px] bg-slate-150 rounded-[12px] flex gap-[20px] flex-col">
                <h4 className="text-slate-900 text-2xl font-bold mb-0">
                  Monetization Opportunities
                </h4>
                <p className="text-base text-slate-500">
                  Highly capable GAIAs can be monetized on the Armory
                  Marketplace (Intelligence-as-a-Service) and Foundry
                  Marketplace (Transfer Learning as a Service).
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      <div className="flex justify-between items-center lg:hidden gap-[32px]">
        <button
          onClick={previous}
          className="px-2 w-[40px] h-[40px] flex justify-center  py-2 border-slate-900  border text-white rounded-full"
        >
          <img src="/images/arrow_back.svg" alt="Arrow Left" />
        </button>
        <button
          onClick={next}
          className="px-2 w-[40px] h-[40px] flex justify-center  py-2 border-slate-900   border text-white rounded-full"
        >
          <img src="/images/arrow_forward.svg" alt="Arrow ight" />
        </button>
      </div>
    </>
  );
}

export default KeyFeatures;
