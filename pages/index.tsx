import Image from 'next/image';
import type { NextPage } from 'next';
import Head from 'next/head';
import { FaDiscord } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';
import Container from '../src/components/container';
import Header from '../src/components/header';
import { useEffect } from 'react';
import { getFrameMetadata } from 'frog/next';
import type { Metadata } from 'next';
import AnimatedBackground from '../src/components/animated-background';
import GridGallery from '../src/components/grid-gallery';
import FeaturesGrid from '../src/components/features-grid';
import Link from 'next/link';
export async function generateMetadata(): Promise<Metadata> {
  const frameTags = await getFrameMetadata(
    `${process.env.VERCEL_URL || 'http://localhost:3000'}/api`
  );
  return {
    other: frameTags,
  };
}

const Home: NextPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Onchain Gaias Forever</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Header />

      <section className="bg-white py-[64px] relative h-[100vh] flex flex-col justify-center">
        <Container className="relative z-[1]">
          <h1 className="gaian-title text-center drop-shadow">Onchain Gaias</h1>
          <h2 className="pf-title text-center drop-shadow mb-[32px]">
            [onchain gaias]
          </h2>

          <div className="flex justify-center gap-[20px]">
            <Link href="#" target="_blank">
              <img
                src="/images/icons/opensea-icon.svg"
                alt="Opensea Icon"
                className="h-[36px] drop-shadow"
              />
            </Link>
            <Link href="#" target="_blank">
              <img
                src="/images/icons/warpcast-icon.svg"
                alt="Opensea Icon"
                className="h-[36px] drop-shadow"
              />
            </Link>
            <Link href="#" target="_blank">
              <img
                src="/images/icons/x-icon.svg"
                alt="Opensea Icon"
                className="h-[36px] drop-shadow"
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
