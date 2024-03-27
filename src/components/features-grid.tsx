import React from "react";

const GridComponent = () => {
  return (
    <div className="mt-[32px]lg:mt-[64px]">
      <div className="mx-auto relative max-w-[1240px] w-full lg:min-h-[1036px] overflow-hidden">
        <h2 className="w-full text-[24px] lg:text-5xl font-semibold text-neutral-900  mb-[32px] lg:mb-[64px]">
          Discover Onchain Gaias's <br className="hidden xl:block" /> Unique
          Advantages
        </h2>
        <div className="flex flex-col lg:grid grid-cols-4 justify-center gap-[20px] lg:absolute w-full lg:min-w-[1400px]">
          {/* Placeholder for the icon, replace 'IconPlaceholder' with actual icon components */}
          <div className="bg-white grid-item grid-1 rounded-[8px] border-[2px] border-slate-200  px-[16px] py-[16px] relative mt-auto mx-auto">
            <img
              src="/images/icons/transactions-1.svg"
              alt="Transaction Icon"
              className="max-w-[64px] mb-[16px] lg:mt-[64px]"
            />
            <h4 className="text-left text-xl lg:text-2xl font-semibold leading-8 text-neutral-900 mb-[16px]">
              Instant Transactions
            </h4>
            <p className="text-left">
              Experience the speed of thought with lightning-fast transactions,
              freeing you from the constraints of traditional intermediaries.
            </p>
          </div>
          <div className="bg-white grid-item grid-2  rounded-[8px] border-[2px] border-slate-200  px-[16px] py-[16px] relative mt-auto mx-auto">
            <img
              src="/images/icons/transactions-2.svg"
              alt="Transaction Icon"
              className="max-w-[64px] mb-[16px]"
            />
            <h4 className="text-left text-xl lg:text-2xl font-semibold leading-8 text-neutral-900 mb-[16px]">
              Instant Transactions
            </h4>
            <p className="text-left">
              Experience the speed of thought with lightning-fast transactions,
              freeing you from the constraints of traditional intermediaries.
            </p>
          </div>
          <div className="bg-white grid-item grid-3 rounded-[8px] border-[2px] border-slate-200  px-[16px] py-[16px] relative mx-auto">
            <img
              src="/images/icons/transactions-3.svg"
              alt="Transaction Icon"
              className="max-w-[64px] mb-[16px]"
            />
            <h4 className="text-left text-xl lg:text-2xl font-semibold leading-8 text-neutral-900 mb-[16px]">
              Instant Transactions
            </h4>
            <p className="text-left">
              Experience the speed of thought with lightning-fast transactions,
              freeing you from the constraints of traditional intermediaries.
            </p>
          </div>
          <div className="bg-white grid-item grid-4 rounded-[8px] border-[2px] border-slate-200  px-[16px] py-[16px] relative mx-auto">
            <img
              src="/images/icons/transactions-4.svg"
              alt="Transaction Icon"
              className="max-w-[64px] mb-[16px] mt-[64px]"
            />
            <h4 className="text-left text-xl lg:text-2xl font-semibold leading-8 text-neutral-900 mb-[16px]">
              Instant Transactions
            </h4>
            <p className="text-left">
              Experience the speed of thought with lightning-fast transactions,
              freeing you from the constraints of traditional intermediaries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
