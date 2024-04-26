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
          <h1 className="gaian-title text-center drop-shadow opacity-0">
            Onchain Gaias
          </h1>
          <h2 className="pf-title text-center drop-shadow mb-[32px] opacity-0">
            [onchain gaias]
          </h2>

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
    </div>
  );
};

export default Home;
