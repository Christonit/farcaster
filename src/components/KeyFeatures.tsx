import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import GaianText from "./GaianText";

function KeyFeatures() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  let sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current: any, next: React.SetStateAction<number>) =>
      setSlideIndex(next),
  };

  const next = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  const previous = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  return (
    <>
      <div className="lg:flex items-end justify-between lg:mb-[32px]">
      
{/* 
        <div className="lg:flex justify-between items-center hidden gap-[16px]">
          <button
            onClick={previous}
            className="px-3 w-[112px] h-[40px] flex justify-center gap-[12px] items-center py-2 border-slate-900 text-slate-900  border text-white rounded-full"
          >
            <img src="/images/arrow_back.svg" alt="Arrow Left" />

            <span className="text-slate-900 text-lg leading-none  top-[2px] relative">Prev</span>

          </button>
          <button
            onClick={next}
            className="px-3 w-[112px] h-[40px] flex justify-center gap-[12px] items-center py-2 border-slate-900 text-slate-900  border text-white rounded-full"
          >
            <span className="text-slate-900 text-lg leading-none top-[2px] relative">Next</span>

            <img src="/images/arrow_forward.svg" alt="Arrow ight" />

          </button>
        </div> */}
      </div>

      <div>
      <div>
          <div className="flex flex-wrap xl:flex-nowrap justify-between">
            <div className="left-block min-w-[300px] py-[24px] w-full lg:py-0">
            <span className="text-3xl lg:text-5xl">
            <GaianText className="">                Incentives and Rewards
            </GaianText>
          </span>
              <h3 className=" text-[24px] mb-[32px] lg:text-[36px] font-semibold text-blue-500">
                Incentives and Rewards
              </h3>

              <img
                src="/images/gaias_infographics_5.png"
                alt="Key Features"
                className="mix-blend-color-burn w-full mr-auto max-w-[700px] xl:mt-[64px]"
              />
            </div>

            <div className="righ-block flex flex-col md:px-[20px] xl:px-0 w-full gap-[20px] xl:max-w-[700px]  lg:pr-[32px]">
              <div className="px-[20px] py-[20px] bg-slate-150 rounded-[12px] flex gap-[20px] flex-col">
                <h4 className="text-slate-900 text-2xl font-bold mb-0">
                  Participate and Earn
                </h4>
                <p className="text-lg text-slate-500">
                  Train agents to mastery in various games and skills to earn
                  rewards.
                </p>
              </div>
              <div className="px-[20px] py-[20px] bg-slate-150 rounded-[12px] flex gap-[20px] flex-col">
                <h4 className="text-slate-900 text-2xl font-bold mb-0">
                  Governance and Control
                </h4>
                <p className="text-base text-slate-500">
                  Influence which games and agents are incentivized through
                  token ownership.
                </p>
              </div>
              <div className="px-[20px] py-[20px] bg-slate-150 rounded-[12px] flex gap-[20px] flex-col">
                <h4 className="text-slate-900 text-2xl font-bold mb-0">
                  Developer Opportunities
                </h4>
                <p className="text-base text-slate-500">
                  AI engineers and software developers can contribute new
                  models, agents, or games and earn rewards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* 
      <Slider ref={sliderRef} {...settings}>
        <div>
          <div className="flex flex-wrap xl:flex-nowrap justify-between">
            <div className="left-block min-w-[300px] py-[24px] w-full lg:py-0">
            <span className="text-3xl lg:text-5xl">
            <GaianText className="">Key Features</GaianText>
          </span>
              <h3 className=" text-[24px] lg:text-[36px] mb-[32px]  font-semibold text-blue-500">
                The Power of GAIAs
              </h3>

              <img
                src="/images/gaias_infographics_4.png"
                alt="Key Features"
                className="mix-blend-color-burn w-full mr-auto  max-w-[700px] mt-[64px]"
              />
            </div>

            <div className="righ-block flex flex-col md:px-[20px] xl:px-0 w-full gap-[20px] xl:max-w-[700px] lg:pr-[32px]">
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
        
      </Slider> */}

      {/* <div className="flex justify-center items-center lg:hidden gap-[32px] mt-[16px]">
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
      </div> */}
    </>
  );
}

export default KeyFeatures;
