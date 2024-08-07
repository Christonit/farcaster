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
            <h1 className="text-3xl lg:text-5xl leading-narrow  text-slate-900 text-center font-bold mb-[24px] lg:mb-[32px] ">
              Welcome to the <br />
              Onchain General Intelligence Network
            </h1>

            <p className=" text-xl lg:text-2xl leading-normal text-slate-500 text-center mb-[24px] lg:mb-[32px]">
              A revolutionary art project pushing technological boundaries and
              redefining ownership in the world of digital art and agentic AI
            </p>

            <div className="flex flex-wrap justify-center gap-[20px] mb-[32px]">
              <Link
                href="https://zora.co/collect/base:0x3a56ed006593740eb90e0dc9c45005933d27c8a2/2"
                target="_blank"
                className="link py-[6px] px-[20px]  w-full lg:w-auto flex flex-col justify-center rounded-[12px] shadow-lg border border-transparent font-bold bg-[#F2EDE1] hover:bg-[#ffffff] text-slate-900  min-w-[200px] py-[8px] text-center"
              >
                Learn More
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

      <section className="bg-slate-900 join-the-rev">
        <Container>
          <div className="flex mb-[32px] flex-col mx-auto max-w-[740px]">
            <div className="text-center mb-[24px]  lg:mb-[32px]">
              <span className="text-2xl lg:text-4xl">
                <GaianText className="">Build the Future</GaianText>
              </span>
              <h2 className="text-2xl lg:text-4xl  text-[#C8CDD0]">
                <b className="text-white">Build the Future </b> <br />
                of Decentralized AI with <br className="block lg:hidden" />{" "}
                Onchain Gaias (OGs)
              </h2>
            </div>

            <p className="text-base text-[#C8CDD0] text-center">
              Onchain Gaias aims to make advanced AI technology widely
              accessible through a decentralized network of intelligent agents
              called General Artificial Intelligence Agents (GAIAs)
            </p>
          </div>

          <div className="text-white  grid lg:grid-cols-3 grid-rows-2 gap-[20px] max-w-[1024px] mx-auto">
            {/* First Item: Spans 2 columns and 2 rows */}
            <div className="bg-slate-600 p-6 rounded-lg shadow-md lg:col-span-1  lg:row-span-2 flex flex-col">
              <div className="flex items-center mb-4 gap-[16px]">
                <div className="w-[120px] rounded-full flex items-center justify-center">
                  <img src="/images/gaias_infographics_1.png" />
                </div>

                <div className="block lg:hidden">
                  <span className="text-[20px] lg:text-[24px] text-[#C8CDD0]">
                    <GaianText>Innovative AI Integration</GaianText>
                  </span>
                  <h2 className="text-lg font-bold">
                    Innovative AI Integration
                  </h2>
                </div>
              </div>

              <div className="hidden lg:block">
                <span className="text-[20px] lg:text-[24px] text-[#C8CDD0]">
                  <GaianText>Innovative AI Integration</GaianText>
                </span>
                <h2 className="text-lg font-bold mb-2">
                  Innovative AI Integration
                </h2>
              </div>

              <p className="text-[#C8CDD0]">
                GAIAs are AI agents that can be trained by anyone through
                onchain gameplay, with compute resources funded by player
                transactions. OGs NFT holders have the exclusive ability to
                create these agents and benefit from community training.
              </p>
            </div>

            {/* Second Item: Normal size */}
            <div className="bg-slate-600 p-6 rounded-lg shadow-md flex flex-col lg:col-span-2">
              <div className="flex items-center mb-4 gap-[16px]">
                <div className="w-[120px] rounded-full flex items-center justify-center">
                  <img src="/images/gaias_infographics_2.png" />
                </div>

                <div>
                  <span className="text-[20px] lg:text-[24px] text-[#C8CDD0]">
                    <GaianText>Decentralized Network</GaianText>
                  </span>
                  <h2 className="text-lg font-bold ">Decentralized Network</h2>
                </div>
              </div>

              <p className="text-[#C8CDD0]">
                The system incentivizes widespread participation through rewards
                in the form of XP, directly translatable to future token
                rewards. XP is earned by training agents in various games and
                skills.
              </p>
            </div>

            {/* Third Item: Normal size */}
            <div className="bg-slate-600 p-6 rounded-lg shadow-md flex flex-col lg:col-span-2">
              <div className="flex items-center mb-4 gap-[16px]">
                <div className="w-[120px] rounded-full flex items-center justify-center">
                  <img src="/images/gaias_infographics_3.png" />
                </div>

                <div>
                  <span className="text-[20px] lg:text-[24px] text-[#C8CDD0]">
                    <GaianText>Forward-Thinking</GaianText>
                  </span>
                  <h2 className="text-lg font-bold">Forward-Thinking</h2>
                </div>
              </div>

              <p className="text-[#C8CDD0]">
                Highly capable GAIAs trained on the OGs network will be able to
                be used for a variety of use-cases, and potentially can be
                monetized directly when used by others as a service.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#EDEFEA]">
        <Container>
          <KeyFeatures />
        </Container>

        <div className="mx-auto max-w-[1536px]">
          <hr className="border-slate-300 border-1" />
        </div>
      </section>
      <section className="selling-points bg-[#EDEFEA]">
        <Container className="mx-auto w-full max-w-[912px] ">
          <div className=" mb-[32px] text-center">
            <div>
              <span className="text-2xl lg:text-5xl">
                <GaianText className="">Get Started with OGs</GaianText>
              </span>
              <h2 className="text-4xl lg:text-5xl font-semibold text-neutral-900">
                Get Started with OGs
              </h2>
            </div>
          </div>

          <div className="px-[20px] py-[20px] lg:py-[32px] lg:px-[40px] bg-slate-150 rounded-[12px] flex flex-wrap lg:flex-nowrap  lg:gap-[32px] mb-[32px]">
            <div className="block-image max-w-[180px] lg:max-w-auto lg:min-w-[252px] mx-auto mb-[12px] lg:mb-0">
              <img src="/images/gaias_infographics_6.png" className="  " />
            </div>

            <div className="flex flex-col gap-[16px]">
              <div className="title-block">
                <span className="text-[24px] lg:text-[32px]">
                  <GaianText>How It Works</GaianText>
                </span>
                <h3 className="text-[24px] lg:text-[32px] font-bold">
                  How It Works
                </h3>
              </div>
              <div>
                <h4 className="text-blue-500 text-xl  mb-0">
                  Cutting-Edge AI Research
                </h4>
                <p className="text-lg text-slate-500">
                  Leverage the latest advancements in multi-agent systems and
                  decentralized computing.
                </p>
              </div>
              <div>
                <h4 className="text-blue-500 text-xl  mb-0">
                  Community Collaboration
                </h4>
                <p className="text-lg text-slate-500">
                  Foster collaboration on AI training an unprecedented scale,
                  decentralizing high-compute models.
                </p>
              </div>
              <div>
                <h4 className="text-blue-500 text-xl  mb-0">Open Access</h4>
                <p className="text-lg text-slate-500">
                  Make the frontier of agentic AI accessible to anyone with a
                  computer and a dream.
                </p>
              </div>
            </div>
          </div>
          <div className="px-[20px] py-[20px] lg:py-[32px] lg:px-[40px] bg-slate-150 rounded-[12px] flex flex-wrap lg:flex-nowrap lg:gap-[32px] ">
            <div className="flex flex-col ">
              <div className="title-block">
                <span className="text-[24px] lg:text-[32px]">
                  <GaianText>The Gaian Way</GaianText>
                </span>
                <h3 className="text-[24px] lg:text-[32px] font-bold">
                  The Gaian Way
                </h3>
              </div>

              <div>
                <h4 className="text-blue-500 text-xl  mb-0">
                  AI Agent Training
                </h4>
                <p className="text-lg text-slate-500">
                  Engage in onchain games to train your AI agents, contributing
                  to the decentralized compute network.
                </p>
              </div>
              <div>
                <h4 className="text-blue-500 text-xl  mb-0">
                  Earn and Innovate
                </h4>
                <p className="text-lg text-slate-500">
                  Benefit from training rewards and the potential revenue from
                  deploying your agents in the marketplace.
                </p>
              </div>
            </div>

            <div className="block-image min-w-[252px]">
              <img src="/images/gaias_infographics_7.png" className="" />
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
