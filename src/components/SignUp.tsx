import GaianText from "./GaianText";
function SignUpComponent({ className }: { className?: string }) {
  return (
    <div
      id="sign-up"
      className={`px-10 py-12 bg-white rounded-xl shadow-sm max-w-[913px] max-md:px-5 ${className}`}
    >
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[71%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow py-1 max-md:mt-10 max-md:max-w-full">
            <div>
              <span className="text-2xl ">
                <GaianText>Ready to Unlock the Future of AI</GaianText>
              </span>
              <h3 className="text-3xl font-bold tracking-tighter text-zinc-800 max-md:max-w-full leading-narrow  lg:leading-normal">
                Ready to Unlock the Future of AI?
              </h3>
            </div>

            <div id="zf_div_ZEFo5wgHW_Jb-foQSlp_KnhT6uek-RNyU-gpUhN2HLM"></div>

            <div className="mt-4 text-base leading-6 text-zinc-500 max-md:max-w-full">
              Discover how you can participate in the OGs project and contribute
              to a better, more decentralized AI-driven world.
            </div>

            <a
              href="https://zora.co/collect/base:0x3a56ed006593740eb90e0dc9c45005933d27c8a2/2"
              target="_blank"
              className="flex max-w-[240px] mt-[12px] flex-auto items-center gap-[8px] justify-center px-3 py-2 text-white bg-blue-600 rounded-xl"
            >
              <div className="text-base font-bold leading-6">
                Build the Future
              </div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0.320312L13.6797 7L7 13.6797L5.82812 12.5078L10.4766 7.82031H0.320312V6.17969H10.4766L5.82812 1.49219L7 0.320312Z"
                  fill="white"
                />
              </svg>
            </a>
            {/* <form
              className="flex flex-col lg:flex-row p-[4px] mt-6 tracking-tight bg-blue-600 rounded-[12px] mb-[32px] lg:mb-0"
              action="https://forms.zohopublic.com/onchaingaias1/form/OnchainSignUpForm/formperma/kHYKx_lKOJ9ou1eudV_IuhfK5dUaV8TFhIJs2M80vWA/htmlRecords/submit"
              name="form"
              target="_blank"
              id="form"
              method="POST"
              acceptCharset="UTF-8"
              encType="multipart/form-data"
            >
              <input type="hidden" name="zf_referrer_name" value="" />
              <input type="hidden" name="zf_redirect_url" value="" />
              <input type="hidden" name="zc_gad" value="" />
              <input
                type="text"
                name="Email"
                maxLength={Number("255")}
                placeholder="Email"
                className="w-full lg:w-auto mb-[12px] lg:mb-0 grow justify-center items-start px-3 py-2 text-base leading-6 whitespace-nowrap bg-white rounded-[8px] text-zinc-800 w-fit max-md:pr-5"
              />
              <button
                type="submit"
                className="flex flex-auto items-center gap-[8px] justify-center px-3 py-2 text-white bg-blue-600 rounded-xl"
              >
                <div className="text-base font-bold leading-6">
                  Build the Future
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0.320312L13.6797 7L7 13.6797L5.82812 12.5078L10.4766 7.82031H0.320312V6.17969H10.4766L5.82812 1.49219L7 0.320312Z"
                    fill="white"
                  />
                </svg>
              </button>
            </form> */}
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="/images/gaias_infographics_legend.png"
            className=" w-full   max-w-[200px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUpComponent;
