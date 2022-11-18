import Head from "next/head";
import { motion } from "framer-motion";
import { IoIosCloud, IoIosBasketball } from "react-icons/io";
import { SiAboutdotme } from "react-icons/si";
import { outsideUrls } from "../constants";

const Home = () => {
  return (
    <div className="font-sora text-slate-500 my-8 px-8 md:my-12 md:px-16 md:overflow-y-hidden lg:my-16">
      <Head>
        <title>Jakub Sajko | Home</title>
        <link rel="icon" href="/logo.ico" type="image/x-icon" />
      </Head>
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
        I am <span className="text-limeGreen">Jakub</span>, frontend developer.
        I work with <span className="text-limeGreen">React</span> but I&apos;m
        open to learn any frontend framework. Look at my last 3 projects and{" "}
        <span className="text-limeGreen">choose me</span> to your team :)
      </motion.p>
      <div className="flex flex-col justify-center items-center gap-6 mt-8 md:flex-row md:gap-1 md:pb-4 md:px-auto md:-mx-12 md:mt-16 lg:gap-16 lg:px-4 lg:-mx-0">
        <motion.a
          href={outsideUrls.wordcloudGame}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-40  rounded-lg p-4 text-vulcan flex flex-col justify-around md:w-1/3"
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
            <IoIosCloud />
          </div>
          <p className="text-left font-semibold text-base text-white mt-2">
            Wordcloud Game
          </p>
          <p className="text-white text-left font-light text-xs">
            A simple game where the player has to select words from a matching
            category.
          </p>
        </motion.a>
        <motion.div
          className="w-full h-40 bg-steelGrey rounded-lg p-4 text-vulcan flex flex-col justify-around md:w-1/3"
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
            <SiAboutdotme />
          </div>
          <p className="text-left font-semibold text-base text-white mt-2">
            Portfolio
          </p>
          <p className="text-white text-left font-light text-xs">
            A website dedicated to me. You can find out a few things about me
            there.
          </p>
        </motion.div>
        <motion.a
          href={outsideUrls.apiNbaApp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-40  rounded-lg p-4 text-vulcan flex flex-col justify-around md:w-1/3"
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
          <p className="text-left font-semibold text-base text-white mt-2">
            API NBA APP
          </p>
          <p className="text-white text-left font-light text-xs">
            I&apos;m a basketball fan so found the NBA API and made the app.
          </p>
        </motion.a>
      </div>
    </div>
  );
};

export default Home;
