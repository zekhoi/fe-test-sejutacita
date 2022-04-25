import type { NextPage } from "next";
import { HiSearch } from "react-icons/hi";
import Head from "next/head";
import DefaultLayout from "@/layouts/DefaultLayout";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coding Technical Test</title>
        <meta name="description" content="Made a website using React.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        <section>
          <div className="container flex flex-col items-center justify-center px-5 py-12 mx-auto md:py-24 md:flex-row">
            <div className="flex flex-col items-center mb-8 text-center md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
              <h1 className="mb-4 text-6xl font-bold 2xl:text-7xl text-gelap-700">
                Find Your
                <br /> Favorite <br />
                <span className="relative w-full left-0 after:content-[' '] after:w-full after:absolute after:left-1 after:bottom-4 after:z-[-1] after:bg-terang-500 after:h-1/4">
                  Book
                </span>
              </h1>
              <p className="max-w-lg mb-6 text-sm leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita eum, soluta accusamus obcaecati distinctio ullam ut
                unde facilis! Veniam deserunt sapiente blanditiis vitae cum
                voluptatibus quia ullam consectetur minima consequatur!
              </p>
              <div className="flex justify-center">
                <Link href="/explore" passHref>
                  <a className="text-white inline-flex items-center bg-gelap-500 hover:bg-gelap-400 focus:outline-none font-medium rounded-md text-base py-2 px-4 md:px-5 md:py-2.5 text-center mr-3 md:mr-0">
                    <HiSearch className="w-5 h-5 mr-1 -ml-1" /> Explore
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
              <div className="relative min-w-max w-full h-[360px] 2xl:h-[512px] min-h-max">
                <Image
                  layout="fill"
                  objectFit="contain"
                  className="rounded"
                  alt="Reading book hero image"
                  src="/images/hero-book.png"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
};

export default Home;
