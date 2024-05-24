import GaianText from "./GaianText";
function SignUpComponent({ className }: { className?: string }) {
  return (
    <div
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

            <div className="mt-4 text-base leading-6 text-zinc-500 max-md:max-w-full">
              Discover how you can participate in the OGs project and contribute
              to a more equitable and decentralized AI-driven world.
            </div>
            <div className="flex flex-col lg:flex-row p-[4px] mt-6 tracking-tight bg-blue-600 rounded-[12px] mb-[32px] lg:mb-0">
              <input
                placeholder="Email"
                className="w-full mb-[12px] lg:mb-0 grow justify-center items-start px-3 py-2 text-base leading-6 whitespace-nowrap bg-white rounded-[8px] text-zinc-800 w-fit max-md:pr-5"
              />
              <button className="flex flex-auto items-center gap-[8px] justify-center px-3 py-2 text-white bg-blue-600 rounded-xl">
                <div className="text-base font-bold leading-6">
                  Join the Revolution
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
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="/images/sign-up-image.png"
            className="grow w-full  object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUpComponent;
