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
            <h1 className="text-5xl leading-narrow  text-slate-900 text-center font-bold mb-[32px] ">
              Welcome to the <br />
              Onchain General Intelligence Network
            </h1>

            <p className="text-2xl leading-normal text-slate-500 text-center mb-[32px]">
              Onchain Gaias (OGs) is not just an art project; it's a
              groundbreaking initiative designed to democratize access to
              advanced AI technology.
            </p>

            <div className="flex justify-center gap-[20px] mb-[32px]">
              <Link
                href="https://zora.co/collect/base:0x3a56ed006593740eb90e0dc9c45005933d27c8a2/2"
                target="_blank"
                className="link py-[6px] px-[20px] rounded-[12px] shadow-lg border border-transparent font-bold bg-blue-500 text-white py-[8px] hover:bg-blue-600"
              >
                Join the Revolution
              </Link>
              <Link
                href="https://zora.co/collect/base:0x3a56ed006593740eb90e0dc9c45005933d27c8a2/2"
                target="_blank"
                className="link py-[6px] px-[20px] rounded-[12px] shadow-lg border border-transparent font-bold bg-white text-slate-900  min-w-[200px] py-[8px] text-center"
              >
                Learn More
              </Link>
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
            <div className="text-center  mb-[32px]">
              <span className="text-4xl">
                <GaianText className="">Join the Revolution</GaianText>
              </span>
              <h2 className="text-4xl  text-[#C8CDD0]">
                <b className="text-white">Join the Revolution </b> <br />
                of Decentralized AI with Onchain Gaias (OGs)
              </h2>
            </div>

            <p className="text-base text-[#C8CDD0] text-center">
              Onchain Gaias (OGs) is not just an art project; it's a
              groundbreaking initiative designed to democratize access to
              advanced AI technology. Through a unique blend of NFT ownership
              and decentralized AI agent training, OGs aims to make a
              significant impact on the world. Be part of this transformative
              journey and unlock the potential of AI in a decentralized network.
            </p>
          </div>

          <div className="text-white  grid grid-cols-3 grid-rows-2 gap-[20px] max-w-[1024px] mx-auto">
            {/* First Item: Spans 2 columns and 2 rows */}
            <div className="bg-slate-600 p-6 rounded-lg shadow-md col-span-1  row-span-2 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  {/* Replace with your icon */}
                  <img src="/images/icon-1.svg" />
                </div>
              </div>

              <span className="text-[20px] lg:text-[24px] text-[#C8CDD0]">
                <GaianText>Innovative AI Integration</GaianText>
              </span>
              <h2 className="text-lg font-bold mb-2">
                Innovative AI Integration
              </h2>
              <p className="text-[#C8CDD0]">
                OGs NFTs aren't just digital art; they provide exclusive access
                to creating and training General Artificial Intelligence Agents
                (GAIAs).
              </p>
            </div>

            {/* Second Item: Normal size */}
            <div className="bg-slate-600 p-6 rounded-lg shadow-md flex flex-col col-span-2">
              <div className="flex items-center mb-4 gap-[16px]">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <img src="/images/icon-2.svg" />
                </div>

                <div>
                  <span className="text-[20px] lg:text-[24px] text-[#C8CDD0]">
                    <GaianText>Decentralized Network</GaianText>
                  </span>
                  <h2 className="text-lg font-bold ">Decentralized Network</h2>
                </div>
              </div>

              <p className="text-[#C8CDD0]">
                Engage with a system that leverages decentralized, massively
                scaled compute resources, pushing the boundaries of AI
                capabilities.
              </p>
            </div>

            {/* Third Item: Normal size */}
            <div className="bg-slate-600 p-6 rounded-lg shadow-md flex flex-col col-span-2">
              <div className="flex items-center mb-4 gap-[16px]">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <img src="/images/icon-3.svg" />
                </div>

                <div>
                  <span className="text-[20px] lg:text-[24px] text-[#C8CDD0]">
                    <GaianText>Community-Driven</GaianText>
                  </span>
                  <h2 className="text-lg font-bold">Community-Driven</h2>
                </div>
              </div>

              <p className="text-[#C8CDD0]">
                Participate in a project that prioritizes egalitarian access and
                community involvement.
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
        <Container className="mx-auto max-w-[912px] ">
          <div className=" mb-[32px] text-center">
            <div>
              <span className="text-5xl">
                <GaianText className="">Get Started with OGs</GaianText>
              </span>
              <h2 className="text-5xl font-semibold text-neutral-900">
                Get Started with OGs
              </h2>
            </div>
          </div>

          <div className="px-[20px] py-[20px] lg:py-[32px] lg:px-[40px] bg-slate-150 rounded-[12px] flex gap-[32px] mb-[32px]">
            <div className="block-image min-w-[252px]">
              <img
                src="/images/get-started-1.png"
                className="mix-blend-color-burn"
              />
            </div>

            <div className="flex flex-col gap-[16px]">
              <div className="title-block">
                <span className="text-[24px] lg:text-[32px]">
                  <GaianText>Unique Selling Points</GaianText>
                </span>
                <h3 className="text-[24px] lg:text-[32px] font-bold">
                  Unique Selling Points
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
                  Foster innovation and collaboration on an unprecedented scale,
                  challenging the monopolistic practices of tech giants.
                </p>
              </div>
              <div>
                <h4 className="text-blue-500 text-xl  mb-0">Open Access</h4>
                <p className="text-lg text-slate-500">
                  Make AI technology openly accessible to all, promoting a more
                  equitable future.
                </p>
              </div>
            </div>
          </div>
          <div className="px-[20px] py-[20px] lg:py-[32px] lg:px-[40px] bg-slate-150 rounded-[12px] flex gap-[32px] ">
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
                  Minting and Ownership
                </h4>
                <p className="text-lg text-slate-500">
                  Each OGs NFT initially serves as a Degen's Golden Ticket,
                  representing ownership in this revolutionary project.
                </p>
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
              <img
                src="/images/get-started-2.png"
                className="mix-blend-color-burn"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#CDC7B5]">
        <Container className="relative z-[1]">
          <div className="w-full  max-w-[912px] mx-auto">
            <h2 className="text-4xl font-semibold text-neutral-900 text-center mb-[32px]">
              Join the OGs Revolution
            </h2>

            <p className="text-xl leading-normal text-slate-500 text-center mb-[32px]">
              Be part of a grassroots movement to decentralize AI technology.
              Whether you're an AI enthusiast, developer, or just curious about
              the future of intelligent systems, Onchain Gaias offers a unique
              opportunity to engage with and shape the AI landscape.
            </p>
          </div>

          <SignUpComponent className="mx-auto" />
        </Container>
      </section>
    </div>
  );
};

export default Home;
