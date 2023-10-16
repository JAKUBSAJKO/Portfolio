import { motion } from "framer-motion";
import Head from "next/head";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosBasketball } from "react-icons/io";
import { IoPeopleCircle } from "react-icons/io5";
import { outsideUrls } from "../constants";

const Home = () => {
  return (
    <div className="font-sora text-slate-500 md:overflow-y-hidden">
      <Head>
        <title>Jakub Sajko | Home</title>
        <link rel="icon" href="/logo.ico" type="image/x-icon" />
      </Head>
      <div className="min-h-[calc(100vh-126px)] flex flex-col justify-center max-w-5xl mx-auto px-6 py-12 sm:px-16 sm:my-4">
        <motion.h1
          className="text-5xl mb-4 font-bold md:text-6xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hello Everyone
        </motion.h1>
        <motion.p
          className="text-md md:text-lg font-normal max-w-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I am <span className="text-limeGreen">Jakub</span>, frontend developer. I work with{" "}
          <span className="text-limeGreen">React</span> but I&apos;m open to learn any frontend framework. Look at my
          last 3 projects and <span className="text-limeGreen">choose me</span> to your team :)
        </motion.p>
        <div className="flex flex-col justify-center items-center gap-6 mt-8 md:flex-row md:gap-1 md:pb-4 md:px-auto md:-mx-12 md:mt-16 lg:gap-16 lg:px-4 lg:-mx-0">
          <motion.a
            href={outsideUrls.backTo2010NBAFinals}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs h-40 rounded-lg p-4 text-vulcan flex flex-col justify-around md:w-1/3"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              delay: 1.2,
              duration: 1,
              type: "spring",
              stiffness: 40,
            }}
          >
            <div className="w-8 h-8 bg-steelGrey flex justify-center items-center rounded-md text-white text-md">
              <IoPeopleCircle />
            </div>
            <p className="text-left font-semibold text-base text-white mt-2">My Mind</p>
            <p className="text-white text-left font-light text-xs">
              My mind is a application where you can create account and share your minds with people.
            </p>
          </motion.a>
          <motion.a
            href={outsideUrls.myShop}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs h-40 bg-steelGrey rounded-lg p-4 text-vulcan flex flex-col justify-around md:w-1/3"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              delay: 2,
              duration: 1,
              type: "spring",
              stiffness: 40,
            }}
          >
            <div className="w-8 h-8 bg-limeGreen flex justify-center items-center rounded-md text-md">
              <FaShoppingCart />
            </div>
            <p className="text-left font-semibold text-base text-white mt-2">My Shop</p>
            <p className="text-white text-left font-light text-xs">
              My Shop is a simulation of an e-commerce shop. Users can create accounts and buy products.
            </p>
          </motion.a>
          <motion.a
            href={outsideUrls.backTo2010NBAFinals}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs h-40 rounded-lg p-4 text-vulcan flex flex-col justify-around md:w-1/3"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              delay: 2.8,
              duration: 1,
              type: "spring",
              stiffness: 40,
            }}
          >
            <div className="w-8 h-8 bg-steelGrey flex justify-center items-center rounded-md text-white text-md">
              <IoIosBasketball />
            </div>
            <p className="text-left font-semibold text-base text-white mt-2">Back to 2010 NBA Final</p>
            <p className="text-white text-left font-light text-xs">
              Quiz game where user can check his knowledge about NBA and help LA Lakers to beat Boston Celtic.
            </p>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Home;
