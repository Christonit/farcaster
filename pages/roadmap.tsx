import Image from "next/image";
import type { NextPage } from "next";
import Head from "next/head";
import { FaDiscord } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Container from "../src/components/container";
import Header from "../src/components/header";
import { useEffect } from "react";
import { getFrameMetadata } from "frog/next";
import type { Metadata } from "next";
import AnimatedBackground from "../src/components/animated-background";
import GridGallery from "../src/components/grid-gallery";
import FeaturesGrid from "../src/components/features-grid";
import Link from "next/link";
import anime from "animejs";
import SignUpComponent from "../src/components/SignUp";
import GaianText from "../src/components/GaianText";
import KeyFeatures from "../src/components/KeyFeatures";

export async function generateMetadata(): Promise<Metadata> {
  const frameTags = await getFrameMetadata(
    `${process.env.VERCEL_URL || "http://localhost:3000"}/api`
  );
  return {
    other: frameTags,
  };
}

const Home: NextPage = () => {
  useEffect(() => {
    anime.timeline().add({
      targets: ".pf-title",
      translateY: {
        value: [100, 0],
        duration: 2000,
        easing: "easeOutBack",
        delay: anime.stagger(100),
        loop: true,
      },
      delay: 500,
      opacity: {
        value: [0, 1],
        duration: 2000,
        easing: "easeInOutQuad",
        delay: anime.stagger(100),
      },
    });

    anime.timeline().add({
      targets: ".gaian-title",
      delay: 100,
      translateY: {
        value: [100, 0],
        duration: 2000,
        easing: "easeOutBack",
        delay: anime.stagger(100),
      },
      opacity: {
        value: [0, 1],
        duration: 1000,
        easing: "easeInOutQuad",
        delay: anime.stagger(100),
      },
    });

    anime.timeline().add({
      targets: ".pf-title",
      translateY: {
        value: [100, 0],
        duration: 2000,
        easing: "easeOutBack",
        delay: anime.stagger(100),
        loop: true,
      },
      delay: 500,
      opacity: {
        value: [0, 1],
        duration: 2000,
        easing: "easeInOutQuad",
        delay: anime.stagger(100),
      },
    });

    anime({
      targets: ".gaian-title",
      translateY: [0, -10],
      duration: 3000,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
      letterSpacing: [0, -2.5],
    });
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Onchain Gaias</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://www.gaias.tech/images/onchaingaias-cover.webp"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gaias.tech/" />
        <meta property="og:title" content="Onchain Gaias" />
        <meta
          property="og:description"
          content="Welcome to a new era onchain. Very early, very based and extremely optimistic."
        />
        <meta
          property="og:image"
          content="https://www.gaias.tech/images/onchaingaias-cover.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@onchaingaias" />
        <meta name="twitter:creator" content="@onchaingaias" />
        <meta name="twitter:url" content="https://www.gaias.tech/" />
        <meta name="twitter:title" content="Onchain Gaias" />
        <meta
          name="twitter:description"
          content="Welcome to a new era onchain. Very early, very based and extremely optimistic."
        />
        <meta
          name="twitter:image"
          content="https://www.gaias.tech/images/onchaingaias-cover.png"
        />
        <meta
          name="description"
          content="Welcome to a new era onchain. Very early, very based and extremely optimistic."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="icon" type="image/png" href="/apple-touch-icon.png" />
        <link
          rel="preload"
          href={`${process.env.NEXT_PUBLIC_HOSTNAME}fonts/GaianBasic.otf`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={`${process.env.NEXT_PUBLIC_HOSTNAME}fonts/PFDinDisplayPro-Regular.ttf`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      <Header />

      <section className="bg-white py-[64px] relative h-[100vh] flex flex-col justify-center">
        <Container className="relative z-[1]">
          <div className="w-full max-w-[1020px] mx-auto">
            <div className=" mb-[32px] text-center">
              <div>
                <span className="text-2xl lg:text-5xl">
                  <GaianText className="text-slate-500">
                    Unleash your inner CEO
                  </GaianText>
                </span>
                <h1 className="text-4xl lg:text-5xl font-semibold text-neutral-900">
                  Unleash your inner CEO
                </h1>
              </div>
            </div>

            <p className=" text-xl lg:text-2xl leading-normal text-slate-500 text-center mb-[24px] lg:mb-[32px]">
              Make your way from the shaved hamster to the grandmaster CEO of
              the tier-1 crypto exchange Buy upgrades, complete quests, invite
              friends and become the best
            </p>

            <div className="flex flex-wrap justify-center gap-[20px] mb-[32px]">
              <Link
                href="https://zora.co/collect/base:0x3a56ed006593740eb90e0dc9c45005933d27c8a2/2"
                target="_blank"
                className="link py-[6px] px-[20px]  w-full lg:w-auto flex flex-col justify-center rounded-[12px] shadow-lg border border-transparent font-bold bg-[#F2EDE1] hover:bg-[#ffffff] text-slate-900  min-w-[200px] py-[8px] text-center"
              >
                Play now
              </Link>

              {/* <form
                className="flex flex-col w-full lg:w-auto lg:flex-row p-[4px] tracking-tight bg-blue-500 hover:bg-blue-600 rounded-[12px] mb-[32px] lg:mb-0"
                action="https://forms.zohopublic.com/onchaingaias1/form/OnchainSignUpForm/formperma/kHYKx_lKOJ9ou1eudV_IuhfK5dUaV8TFhIJs2M80vWA/htmlRecords/submit"
                name="form"
                id="form"
                target="_blank"
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
                  className="flex flex-auto items-center gap-[8px] justify-center px-3 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-xl"
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
            <div className="flex justify-center gap-[20px]">
              <Link
                href="https://magiceden.io/collections/base/0xa449b4f43d9a33fcdcf397b9cc7aa909012709fd"
                target="_blank"
                className="bg-[#f2ede1] w-[48px] items-center flex justify-center hover:bg-white rounded-full p-[4px]"
              >
                <img
                  src="/images/icons/magic-eden-icon.svg"
                  alt="Opensea Icon"
                  className="h-[20px] drop-shadow mx-auto"
                />
              </Link>
              <Link
                href="https://warpcast.com/~/channel/ogs"
                target="_blank"
                className="bg-[#f2ede1] hover:bg-white rounded-full p-[4px]"
              >
                <img
                  src="/images/icons/warpcast-icon.svg"
                  alt="Opensea Icon"
                  className="h-[40px] drop-shadow rounded-full"
                />
              </Link>
              <Link
                href="https://twitter.com/onchaingaias"
                target="_blank"
                className="flex items-center bg-[#f2ede1] hover:bg-white w-[48px] justify-center rounded-full p-[4px]"
              >
                <img
                  src="/images/icons/x-icon.svg"
                  alt="Opensea Icon"
                  className="h-[20px] drop-shadow"
                />
              </Link>
            </div>
          </div>
        </Container>
        <img
          sizes="(max-width: 3840px) 100vw, 3840px"
          srcSet="
/images/banner/website_gaias_background_01_swj9hd_c_scale,w_360.webp 360w,
/images/banner/website_gaias_background_01_swj9hd_c_scale,w_1659.webp 1659w,
/images/banner/website_gaias_background_01_swj9hd_c_scale,w_2167.webp 2167w,
/images/banner/website_gaias_background_01_swj9hd_c_scale,w_2823.webp 2823w,
/images/banner/website_gaias_background_01_swj9hd_c_scale,w_3046.webp 3046w,
/images/banner/website_gaias_background_01_swj9hd_c_scale,w_3180.webp 3180w,
/images/banner/website_gaias_background_01_swj9hd_c_scale,w_3517.webp 3517w,
/images/banner/website_gaias_background_01_swj9hd_c_scale,w_3832.webp 3832w,
/images/banner/website_gaias_background_01_swj9hd_c_scale,w_3840.webp 3840w"
          src="/images/banner/website_gaias_background_01_swj9hd_c_scale,w_3840.webp"
          alt="banner-image"
          className="absolute top-0 left-0 bottom-0 right-0 mx-auto w-full h-[100vh] object-cover pointer-events-none z-0"
        />
      </section>

      <section className="bg-slate-900">
        <Container>
          <div className="flex mb-[32px] flex-col mx-auto max-w-[740px]">
            <div className="text-center mb-[24px]  lg:mb-[32px]">
              <span className="text-4xl lg:text-5xl">
                <GaianText className="">Roadmap</GaianText>
              </span>
              <h2 className="text-4xl lg:text-5xl  text-[#C8CDD0]">
                <b className="text-white">Roadmap </b> <br />
              </h2>
            </div>
          </div>

          <div className="flex gap-[24px] flex-col max-w-[1200px] mx-auto">
            <div className="bg-blue-600 p-4 lg:p-6 rounded-xl shadow-md flex flex-col lg:col-span-2  ">
              <div className="flex items-start flex-col gap-[16px] lg:grid lg:grid-cols-2">
                <div>
                  <span className="text-[24px] lg:text-[32px] text-[#C8CDD0]">
                    <GaianText>March </GaianText>
                  </span>
                  <h2 className="text-4xl  font-bold text-white">March 2024</h2>
                </div>
                <ul className="list-disc pl-8  text-xl">
                  <li className="text-[#fff] text-xl">Feature 1</li>
                  <li className="text-[#fff] text-xl">Feature 2</li>
                  <li className="text-[#fff] text-xl">Feature 3</li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-600 p-4 lg:p-6 rounded-xl shadow-md flex flex-col lg:col-span-2 border-l-[8px] border-[#C8CDD0] ">
              <div className="flex items-start flex-col gap-[16px] lg:grid lg:grid-cols-2">
                <div>
                  <span className="text-[24px] lg:text-[32px] text-[#C8CDD0]">
                    <GaianText>April </GaianText>
                  </span>
                  <h2 className="text-4xl  font-bold text-white">April 2024</h2>
                </div>
                <ul className="list-disc pl-8 text-[#C8CDD0] text-xl">
                  <li className="text-[#C8CDD0] text-xl">Feature 1</li>
                  <li className="text-[#C8CDD0] text-xl">Feature 2</li>
                  <li className="text-[#C8CDD0] text-xl">Feature 3</li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-600 p-4 lg:p-6 rounded-xl shadow-md flex flex-col lg:col-span-2 border-l-[8px] border-[#C8CDD0] ">
              <div className="flex items-start flex-col gap-[16px] lg:grid lg:grid-cols-2">
                <div>
                  <span className="text-[24px] lg:text-[32px] text-[#C8CDD0]">
                    <GaianText>May </GaianText>
                  </span>
                  <h2 className="text-4xl  font-bold text-white">May 2024</h2>
                </div>
                <ul className="list-disc pl-8 text-[#C8CDD0] text-xl">
                  <li className="text-[#C8CDD0] text-xl">Feature 1</li>
                  <li className="text-[#C8CDD0] text-xl">Feature 2</li>
                  <li className="text-[#C8CDD0] text-xl">Feature 3</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-900">
        <Container className="relative z-[1]">
          <div className="w-full  max-w-[912px] mx-auto">
            <h2 className="text-4xl font-semibold  text-center mb-[32px] text-white">
              Build the Future
            </h2>

            <p className="text-xl leading-normal text-[#C8CDD0] text-center mb-[32px]">
              Be part of a grassroots movement to decentralize AI technology.
              Whether you're an AI enthusiast, developer, or just curious about
              the future of intelligent systems, Onchain Gaias offers a unique
              opportunity to engage with and shape the AI landscape.
            </p>
          </div>

          <SignUpComponent className="mx-auto" />
        </Container>
      </section>

      <footer className=" pt-[12px] pb-[32px] lg:py-[12px] bg-slate-900">
        <div className="w-full  px-[20px] mx-auto">
          <div className="flex flex-wrap lg:flex-row  justify-center lg:justify-between">
            <p className="text-base text-white">
              © {new Date().getFullYear()} Onchain Gaias. All rights reserved.
            </p>

            <div className="flex gap-[16px] flex-wrap items-center">
              <Link
                href={
                  "https://zora.co/collect/base:0x3a56ed006593740eb90e0dc9c45005933d27c8a2/2"
                }
                target="_blank"
                className="text-base text-white"
              >
                Read the Whitepaper
              </Link>

              <Link
                href="https://magiceden.io/collections/base/0xa449b4f43d9a33fcdcf397b9cc7aa909012709fd"
                target="_blank"
                className="bg-[#f2ede1] w-[32px] h-[32px] items-center flex justify-center hover:bg-white rounded-full p-[4px]"
              >
                <img
                  src="/images/icons/magic-eden-icon.svg"
                  alt="Opensea Icon"
                  className="h-[20px] drop-shadow mx-auto"
                />
              </Link>
              <Link
                href="https://warpcast.com/~/channel/ogs"
                target="_blank"
                className="bg-[#f2ede1] hover:bg-white rounded-full p-[4px]"
              >
                <img
                  src="/images/icons/warpcast-icon.svg"
                  alt="Opensea Icon"
                  className="h-[28px] drop-shadow rounded-full"
                />
              </Link>
              <Link
                href="https://twitter.com/onchaingaias"
                target="_blank"
                className="flex items-center bg-[#f2ede1] hover:bg-white w-[32px] h-[32px] justify-center rounded-full p-[4px]"
              >
                <img
                  src="/images/icons/x-icon.svg"
                  alt="Opensea Icon"
                  className="h-[20px] drop-shadow"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
