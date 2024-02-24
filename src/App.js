import logo from './logo.svg';
import './App.css';
import { FaDiscord } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { useEffect } from 'react';
import { Container } from './components/container';
import Header from './components/header';

function App() {


  useEffect(() => {

    const container = document.querySelector('.animated-background');
    const numberOfTiles = 20; // Adjust based on the container size and tile size

    for (let i = 0; i < numberOfTiles; i++) {
      const tile = document.createElement('div');
      tile.className = 'tile';
      // Randomize the animation delay for each tile for a more dynamic effect
      tile.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(tile);
    }
  }, [])

  return (
    <div className="App">

      <Header />

      <section className='bg-white py-[64px]' id='hero-banner'>
        <div className='animated-background'></div>
        <div className='container lg:container mx-auto relative z-1'>

          <div className="flex flex-col items-start px-5 text-lg leading-6 max-w-[805px]">
            <div className="flex gap-px px-5 py-2.5 text-base bg-white rounded-3xl border border-solid border-zinc-100 text-neutral-900 max-md:flex-wrap max-md:pr-5 max-md:max-w-full text-left">
              👋 We're hiring self-motivated people to join the team.
            </div>
            <h1 className=" mt-4 lg:text-7xl font-semibold text-neutral-900 text-4xl text-left">
              Unlocking the Future of Finance with Ljubljana
            </h1>
            <p className="mt-2.5 text-left leading-[139%] text-zinc-500 max-md:max-w-full">
              Explore a new era of decentralized possibilities where security meets innovation. Ljubljana is your gateway to borderless transactions, financial empowerment, and a world without limits.</p>
            <form>
              <div
                role="group"
                aria-label="Actions"
                className="flex gap-4 justify-center mt-12 text-base font-medium whitespace-nowrap max-md:mt-10"
              >
                <button className="flex gap-2.5 justify-between px-5 py-3 bg-blue-500 rounded-[100px] text-[#ffffff]">
                  Free Download

                </button>
                <button className="flex gap-2 items-center px-5 py-3 text-black bg-white border-neutral-100 border-[1px] rounded-[100px]">
                  <label htmlFor="shop-input" >
                    Go To Shop
                  </label>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/85aab849a9ef6606738d89d1fc525bd1455106187391fac2e9eb3a66dfd099af?apiKey=da983b91ec1d46989670bd2839624a11&"
                    className="w-6 aspect-[1.04]"
                  />
                </button>
              </div>
            </form>

          </div>

        </div>

        <div className='container lg:container mx-auto mt-[32px] lg:mt-[124px] relative z-1'>

          <div className="flex flex-col px-5">
            <p className="self-center text-base leading-5 text-zinc-500 max-md:max-w-full">
              This is supposed to be a fucking looped carousel. We've transformed the financial journey for countless teams
            </p>
            <section className="py-12 mt-7 w-full rounded-3xl bg-slate-900 px-[20px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-row max-md:ml-0 max-md:w-full overflow-auto flex w-full justify-center gap-[32px] flex-wrap lg:gap-[96px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe935e7c9603a9850d1b834674a1d7afbf8b2217aeb30595378fef7fa0c2d36b?apiKey=da983b91ec1d46989670bd2839624a11&"
                    className="aspect-[3.7] w-[93px]"
                    alt=""
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/118b850bf400e93071986a22dff555f9d64c1e1dfce1df16004c9c964a4f0329?apiKey=da983b91ec1d46989670bd2839624a11&"
                    className="aspect-[3.13] w-[79px]"
                    alt=""
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/005d43fc71e61e88a2a74046fced020d32cae6baf4cd5442371c2140a734078f?apiKey=da983b91ec1d46989670bd2839624a11&"
                    className="w-24 aspect-[3.85]"
                    alt=""
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/00ec412242d5bee9ef3b789b037788c6419d62d68184e321c5aa18c988a9d1ce?apiKey=da983b91ec1d46989670bd2839624a11&"
                    className="aspect-[3.7] w-[93px]"
                    alt=""
                  />

                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc2ef1dfbfd0e8ed7b9f900e2675a54b3e7960f6d54c748bc99714323dcb71bb?apiKey=da983b91ec1d46989670bd2839624a11&"
                    className="aspect-[3.7] w-[93px]"
                    alt=""
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/64d25aac6eb9d532f731db4d08693b45a50c447e51951e695b4bd06103f997aa?apiKey=da983b91ec1d46989670bd2839624a11&"
                    className="aspect-[3.13] w-[77px]"
                    alt=""
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c245158d9f810515cd76c10ab6050e274c02527c4d5d3d7194f4f795faf0cce6?apiKey=da983b91ec1d46989670bd2839624a11&"
                    className="aspect-[3.13] w-[77px]"
                    alt=""
                  />
                </div>
              </div>
            </section>
          </div>

        </div >
      </section >

      <Container>
        <div className="flex   flex-wrap lg:flex-nowrap xl:flex-row gap-[32px] items-center justify-center">

          <figure>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5e08886a40bbb0ad2ccad3e0219f73eaa6ccf1e95213ff8ca99b02dc0ed52f2c?apiKey=da983b91ec1d46989670bd2839624a11&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e08886a40bbb0ad2ccad3e0219f73eaa6ccf1e95213ff8ca99b02dc0ed52f2c?apiKey=da983b91ec1d46989670bd2839624a11&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e08886a40bbb0ad2ccad3e0219f73eaa6ccf1e95213ff8ca99b02dc0ed52f2c?apiKey=da983b91ec1d46989670bd2839624a11&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e08886a40bbb0ad2ccad3e0219f73eaa6ccf1e95213ff8ca99b02dc0ed52f2c?apiKey=da983b91ec1d46989670bd2839624a11&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e08886a40bbb0ad2ccad3e0219f73eaa6ccf1e95213ff8ca99b02dc0ed52f2c?apiKey=da983b91ec1d46989670bd2839624a11&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e08886a40bbb0ad2ccad3e0219f73eaa6ccf1e95213ff8ca99b02dc0ed52f2c?apiKey=da983b91ec1d46989670bd2839624a11&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e08886a40bbb0ad2ccad3e0219f73eaa6ccf1e95213ff8ca99b02dc0ed52f2c?apiKey=da983b91ec1d46989670bd2839624a11&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e08886a40bbb0ad2ccad3e0219f73eaa6ccf1e95213ff8ca99b02dc0ed52f2c?apiKey=da983b91ec1d46989670bd2839624a11&" className="w-full aspect-[1.01] max-w-[675px]"
              alt="Image description"
            />
          </figure>

          <div className='block flex flex-col gap-[20px] lg:gap-[16px] text-left max-w-[560px]'>
            <h3 className='text-2xl lg:text-5xl '>Empowering Tomorrow's Innovations with Ljubljana Blockchain</h3>

            <p className='text-base'>Step into the world of Ljubljana Blockchain – where decentralization, transparency, and efficiency converge to create a foundation for groundbreaking applications.</p>

            <div className='rounded-[8px] border-[2px] border-slate-200 text-base px-[16px] py-[16px]'>
              <b>Immutable Supply Chain Tracking</b>
              <p>Utilize Ljubljana Blockchain to ensure transparency and traceability throughout supply chains, minimizing fraud and enhancing accountability.</p>
            </div>
          </div>

        </div>
      </Container>

      <Container>
        <div className="flex   flex-wrap lg:flex-nowrap xl:flex-row gap-[32px] items-center justify-center">

          <div className='block flex flex-col gap-[20px] lg:gap-[16px] text-left max-w-[560px]'>
            <h3 className='text-2xl lg:text-5xl '>Empowering Tomorrow's Innovations with Ljubljana Blockchain</h3>

            <p className='text-base'>Step into the world of Ljubljana Blockchain – where decentralization, transparency, and efficiency converge to create a foundation for groundbreaking applications.</p>

            <div className='rounded-[8px] border-[2px] border-slate-200 text-base px-[16px] py-[16px]'>
              <b>Immutable Supply Chain Tracking</b>
              <p>Utilize Ljubljana Blockchain to ensure transparency and traceability throughout supply chains, minimizing fraud and enhancing accountability.</p>
            </div>
          </div>

          <figure>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5e08886a40bbb0ad2ccad3e0219f73eaa6ccf1e95213ff8ca99b02dc0ed52f2c?apiKey=da983b91ec1d46989670bd2839624a11&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e08886a40bbb0ad2ccad3e0219f73eaa6ccf1e95213ff8ca99b02dc0ed52f2c?apiKey=da983b91ec1d46989670bd2839624a11&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e08886a40bbb0ad2ccad3e0219f73eaa6ccf1e95213ff8ca99b02dc0ed52f2c?apiKey=da983b91ec1d46989670bd2839624a11&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e08886a40bbb0ad2ccad3e0219f73eaa6ccf1e95213ff8ca99b02dc0ed52f2c?apiKey=da983b91ec1d46989670bd2839624a11&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e08886a40bbb0ad2ccad3e0219f73eaa6ccf1e95213ff8ca99b02dc0ed52f2c?apiKey=da983b91ec1d46989670bd2839624a11&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e08886a40bbb0ad2ccad3e0219f73eaa6ccf1e95213ff8ca99b02dc0ed52f2c?apiKey=da983b91ec1d46989670bd2839624a11&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e08886a40bbb0ad2ccad3e0219f73eaa6ccf1e95213ff8ca99b02dc0ed52f2c?apiKey=da983b91ec1d46989670bd2839624a11&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e08886a40bbb0ad2ccad3e0219f73eaa6ccf1e95213ff8ca99b02dc0ed52f2c?apiKey=da983b91ec1d46989670bd2839624a11&" className="w-full aspect-[1.01] max-w-[675px]"
              alt="Image description"
            />
          </figure>

        </div>
      </Container>

      <Container>
        <h2 className="w-full text-3xl lg:text-5xl font-semibold text-neutral-900  mb-[32px] lg:mb-[64px]">
          Discover Ljubljana's Unique Advantages
        </h2>
        <div className="mt-7 w-full max-md:max-w-full">
          <div className="flex gap-[32px] md:flex-nowrap flex-wrap">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start">
                <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_72_2888)">
                    <path d="M1.875 39.375L17.1464 42.4293C19.098 42.8196 20.4048 44.6665 20.1233 46.6368L17.335 66.1553C17.071 68.0028 15.4888 69.375 13.6226 69.375H1.875V39.375Z" stroke="#0D0D0D" stroke-width="3.86866" />
                    <path d="M20.625 46.875C20.625 46.875 25.9375 45 31.875 45C37.8125 45 41.2092 49.095 48.75 50.625C56.8359 52.2656 61.875 54.1406 61.875 58.125C61.875 62.1094 55.7812 64.1016 35.625 58.125" stroke="#0D0D0D" stroke-width="3.86866" />
                    <path d="M61.875 60C61.875 60 74.0625 56.25 78.75 56.25C83.4375 56.25 88.125 58.125 88.125 61.875C81.7187 64.6875 59.375 76.875 50.625 76.875C41.875 76.875 18.75 65.625 18.75 65.625" stroke="#0D0D0D" stroke-width="3.86866" />
                    <path d="M69.375 35.625C75.5882 35.625 80.625 30.5882 80.625 24.375C80.625 18.1618 75.5882 13.125 69.375 13.125C63.1618 13.125 58.125 18.1618 58.125 24.375C58.125 30.5882 63.1618 35.625 69.375 35.625Z" stroke="#0152ff" stroke-width="3.86866" />
                    <path d="M58.7931 20.6923C58.5677 20.6788 58.3539 20.625 58.125 20.625C51.9118 20.625 46.875 25.6618 46.875 31.875C46.875 38.0882 51.9118 43.125 58.125 43.125C63.0409 43.125 67.1759 39.9518 68.7069 35.5577" stroke="#0152ff" stroke-width="3.86866" />
                  </g>
                  <defs>
                    <clipPath id="clip0_72_2888">
                      <rect width="90" height="90" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <h4 className="text-left text-2xl font-medium leading-8 text-neutral-900">
                  Instant Transactions
                </h4>
                <p className='text-left'>
                  Experience the speed of thought with
                  lightning-fast transactions, freeing you
                  from the constraints of traditional
                  intermediaries.
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow">
                <svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M47.5 76.6459C64.7014 76.6459 78.6458 62.7014 78.6458 45.5C78.6458 28.2987 64.7014 14.3542 47.5 14.3542C30.2986 14.3542 16.3542 28.2987 16.3542 45.5C16.3542 62.7014 30.2986 76.6459 47.5 76.6459Z" stroke="#0D0D0D" stroke-width="3.86866" />
                  <path d="M16.3542 44.1459C22.1094 44.1459 22.6454 49.0829 24.4792 50.9167C26.3129 52.7505 29.8958 51.1424 29.8958 53.625C29.8958 56.1077 27.1875 57.1797 27.1875 60.3959C27.1875 63.612 27.1875 69.1173 27.1875 69.1173" stroke="#0D0D0D" stroke-width="3.86866" />
                  <path d="M76.247 33.4939C76.247 33.4939 70.7959 40.3584 69.1667 38.7292C67.5374 37.0999 63.8346 35.1745 65.1042 38.7292C66.3737 42.2839 70.5208 45.5 70.5208 45.5C70.5208 45.5 66.4583 49.9857 66.4583 52.2708C66.4583 54.556 63.75 54.0059 63.75 57.6875C63.75 61.3692 56.9792 63.1042 56.9792 63.1042C56.9792 63.1042 54.2708 60.0996 54.2708 57.6875C54.2708 55.2754 55.625 55.8255 55.625 53.625C55.625 51.4245 54.2708 50.6205 54.2708 48.2083C54.2708 45.7962 46.696 45.5 44.7917 45.5C42.8874 45.5 40.7292 44.6537 40.7292 42.7917C40.7292 40.9297 39.8616 38.2425 42.0833 36.0208C44.305 33.7992 47.8385 33.3125 50.2083 33.3125C53.8476 33.3125 52.832 34.6667 56.9792 34.6667C61.1263 34.6667 65.1042 35.2168 65.1042 31.9583C65.1042 28.6999 58.5026 27.8958 54.2708 27.8958C50.039 27.8958 48.1348 30.6042 44.7917 30.6042C42.972 28.7845 45.8496 25.3568 48.8542 23.8333C51.8587 22.3099 51.7295 21.125 50.2083 19.7708C52.1338 17.8454 60.785 17.3221 60.785 17.3221" stroke="#0D0D0D" stroke-width="3.86866" />
                  <path d="M91.9658 14.8561L87.6804 23.4269L79.1096 19.1415" stroke="#0152ff" stroke-width="3.86866" />
                  <path d="M66.2535 2C78.0884 2.03771 86.2074 12.1778 87.6804 23.4269" stroke="#0152ff" stroke-width="3.86866" />
                  <path d="M2 79.1231L6.28537 70.5523L14.8561 74.8377" stroke="#0152ff" stroke-width="3.86866" />
                  <path d="M27.7122 91.9792C15.8773 91.9415 7.75827 81.8014 6.28534 70.5523" stroke="#0152ff" stroke-width="3.86866" />
                </svg>

                <h4 className="text-left text-2xl font-medium leading-8 text-neutral-900">
                  Instant Transactions
                </h4>
                <p className='text-left'>
                  Experience the speed of thought with
                  lightning-fast transactions, freeing you
                  from the constraints of traditional
                  intermediaries.
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow">
                <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_72_2935)">
                    <path d="M58.2172 50.625H7.5C4.3934 50.625 1.875 48.1066 1.875 45V26.25C1.875 23.1434 4.3934 20.625 7.5 20.625H75C78.1066 20.625 80.625 23.1434 80.625 26.25V34.3207" stroke="#0D0D0D" stroke-width="3.86866" />
                    <path d="M41.0613 27.4713V43.7787" stroke="#0D0D0D" stroke-width="3.86866" />
                    <path d="M48.1226 31.5482L34 39.7018" stroke="#0D0D0D" stroke-width="3.86866" />
                    <path d="M34 31.5482L48.1226 39.7018" stroke="#0D0D0D" stroke-width="3.86866" />
                    <path d="M18.0613 27.4713V43.7787" stroke="#0D0D0D" stroke-width="3.86866" />
                    <path d="M25.1226 31.5482L11 39.7018" stroke="#0D0D0D" stroke-width="3.86866" />
                    <path d="M11 31.5482L25.1226 39.7018" stroke="#0D0D0D" stroke-width="3.86866" />
                    <path d="M73.125 69.375C86.25 63.2609 88.125 59.0829 88.125 46.5489V36.7663L73.125 31.875L58.125 36.7663V46.5489C58.125 59.0829 60 63.2609 73.125 69.375Z" stroke="#0152ff" stroke-width="3.86866" />
                    <path d="M80.625 50.625C80.3613 56.0372 79.0288 58.0112 73.125 61.0405V50.6254L80.625 50.625Z" stroke="#0152ff" stroke-width="3.86866" stroke-linejoin="round" />
                    <path d="M65.625 50.625V42.2095L73.125 39.7632V50.6254L65.625 50.625Z" stroke="#0152ff" stroke-width="3.86866" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_72_2935">
                      <rect width="90" height="90" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <h4 className="text-left text-2xl font-medium leading-8 text-neutral-900">
                  Instant Transactions
                </h4>
                <p className='text-left'>
                  Experience the speed of thought with
                  lightning-fast transactions, freeing you
                  from the constraints of traditional
                  intermediaries.
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-5">
                <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_72_2975)">
                    <path d="M36.9 50.5667H61.5" stroke="#0D0D0D" stroke-width="3.86866" />
                    <path d="M20.5 17.7667H42.3667" stroke="#0D0D0D" stroke-width="3.86866" />
                    <path d="M20.5 34.1666H61.5" stroke="#0D0D0D" stroke-width="3.86866" />
                    <path d="M20.5 42.3666H61.5" stroke="#0D0D0D" stroke-width="3.86866" />
                    <path d="M20.5 25.9666H61.5" stroke="#0D0D0D" stroke-width="3.86866" />
                    <path d="M20.5 72.4348C23.575 70.193 27.4188 66.9232 27.3333 62.8666C27.2727 59.985 26.539 58.811 24.6 58.7706C22.55 58.7279 21.8156 60.9453 21.8667 62.8666C21.9948 67.6918 26.3938 72.4348 28.7 72.4348C31.0063 72.4348 31.7018 66.9691 32.8 66.9691C33.8982 66.9691 35.2527 72.4348 36.9 72.4348C38.5473 72.4348 45.1 64.2362 45.1 64.2362" stroke="#0152ff" stroke-width="3.86866" stroke-linejoin="round" />
                    <path d="M12.3 5.46664V76.5333C12.3 78.7977 14.1356 80.6333 16.4 80.6333H65.6C67.8644 80.6333 69.7 78.7977 69.7 76.5333V17.7666L53.3 1.36664H16.4C14.1356 1.36664 12.3 3.20227 12.3 5.46664Z" stroke="#0D0D0D" stroke-width="3.86866" />
                    <path d="M53.3 1.36664V13.6666C53.3 15.931 55.1356 17.7666 57.4 17.7666H69.7" stroke="#0D0D0D" stroke-width="3.86866" />
                  </g>
                  <defs>
                    <clipPath id="clip0_72_2975">
                      <rect width="82" height="82" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <h4 className="text-left text-2xl font-medium leading-8 text-neutral-900">
                  Instant Transactions
                </h4>
                <p className='text-left'>
                  Experience the speed of thought with
                  lightning-fast transactions, freeing you
                  from the constraints of traditional
                  intermediaries.
                </p>
              </div>
            </div>
          </div>
        </div>

      </Container>



      <section className='py-[64px] bg-slate-100'>
        <div className='lg:container mx-auto px-[16px] lg:px-0'>

          <div className="flex flex-col justify-center items-start px-20 py-[136px] text-base leading-6 bg-blue-500 rounded-[44px] max-md:px-5 cta-container">
            <div className='max-w-[660px] flex flex-col gap-[24px]'>
              <h3 className="text-5xl font-semibold leading-[62.4px] text-left text-white"> Seize Your Future with Ljubljana </h3>
              <p className="text-neutral-900 text-left text-white"> Empower yourself today for a brighter tomorrow. Embrace Ljubljana's decentralized universe – where innovation meets security, and possibilities are endless.</p>
              <button className='text-center bg-[#fff] rounded-[32px] p-[12px] text-black block max-w-[200px]'>Free download</button>
            </div>
          </div>
        </div>
      </section>


      <footer className='mt-[64px]'>
        <div className="w-full py-[32px]">
          <div className="px-[16px] lg:px-[24px] flex lg:flex-nowrap flex-wrap">
            <div className="flex flex-col w-full max-w-[400px] mb-[32px] lg:mb-0">
              <div className="flex flex-col">
                <h3 className="text-left text-4xl font-semibold mb-[24px]">Empowering Dreams, One Dollar at a Time</h3>
                <div className="flex gap-3 self-start  mb-[24px] text-2xl leading-7 whitespace-nowrap text-neutral-900">
                  <span className='bg-blue-500 rounded-[32px] p-[12px]'>
                    <FaArrowRight size={24} className='text-white' />
                  </span>
                  <a
                    href="mailto:hello@wedoflow.com"
                    className="grow my-auto"
                    aria-label="Email"
                  >
                    hello@wedoflow.com
                  </a>
                </div>

                <div className='flex gap-[12px]'>

                  <FaSquareXTwitter size={32} />

                  <FaDiscord size={32} />

                </div>

              </div>
            </div>
            <div className=" grid grid-cols-2 gap-[24px] lg:flex justify-between w-full max-w-[660px] ml-auto lg:flex-nowrap flex-wrap flex-col lg:flex-row">
              <div className=" text-left">
                <h4 className="font-semibold text-black uppercase leading-[153%]">
                  Pages
                </h4>
                <div className="mt-7">Demo (Sales)</div>
                <div className="mt-4">Home</div>
                <div className="mt-5">Features</div>
                <div className="mt-5">About</div>
                <div className="mt-5">Insights</div>
                <div className="mt-4">Shop</div>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-black uppercase leading-[153%]">
                  utilities
                </h4>
                <div className="mt-8">404</div>
                <div className="mt-5">Password</div>
                <div className="mt-5">Checkout</div>
                <div className="mt-5">Blog Details</div>
                <div className="mt-4">Shop Details</div>
              </div>
              <div className=" text-left">
                <h4 className="font-semibold text-black uppercase leading-[153%]">
                  Utility
                </h4>
                <div className="mt-8">Style Guide</div>
                <div className="mt-4">Licencing</div>
                <div className="mt-4">Change Log</div>
                <div className="mt-4">Instructions</div>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-black uppercase leading-[153%]">
                  Help
                </h4>
                <div className="mt-8">All Templates</div>
                <div className="mt-4">Support</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between px-[24px] py-[32px] w-full text-lg leading-6 border-t border-solid border-t-slate-300 text-zinc-500 max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f366d2705bc3bd492734b6363eedb3e6dda85dd6ff4326e46641d8b53b524c92?apiKey=da983b91ec1d46989670bd2839624a11&"
            className="max-w-full aspect-[4] w-[120px]"
            alt=""
          />
          <div className="justify-center self-start py-1 max-md:max-w-full">
            © 2024 - Powered by Webflow with 💙 by Azwedo & Wedoflow
          </div>
        </div>

      </footer>
    </div >
  );
}

export default App;
