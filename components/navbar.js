import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { outsideUrls } from "../constants";
import { routes } from "../routes/routes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full h-12 flex justify-between items-center px-8 py-4 text-slate-500 border-b border-slate-900 md:px-16 ">
      <div className="flex justify-center items-center">
        <div>
          <Image
            src="/logo.png"
            alt="logo"
            width={24}
            height={24}
            className="mr-2"
          />
        </div>
        <p className="font-semibold">Jakub Sajko</p>
      </div>
      {isOpen ? (
        <div className="absolute z-40 w-screen h-screen top-0 left-0 bg-steelGrey">
          <div className="w-full h-full relative">
            <IoClose
              onClick={() => setIsOpen((prev) => !prev)}
              className="absolute text-4xl top-4 right-4"
            />
          </div>
        </div>
      ) : null}
      <ul
        className={`absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold flex flex-col justify-center items-center gap-8 cursor-pointer ${
          isOpen ? "visible" : "collapse"
        } transition-opacity md:visible md:relative md:pr-10 md:flex-row md:gap-4 md:text-xs md:font-semibold md:-translate-y-0 md:top-auto`}
      >
        <Link
          href={routes.home}
          onClick={() => setIsOpen(false)}
          className="relative"
        >
          <li className="nav-animation">Home</li>
        </Link>
        <Link
          href={routes.aboutMe}
          onClick={() => setIsOpen(false)}
          className="relative"
        >
          <li className="nav-animation">About Me</li>
        </Link>
        <Link
          href={routes.portfolio}
          onClick={() => setIsOpen(false)}
          className="relative"
        >
          <li className="nav-animation">Portfolio</li>
        </Link>
        <a
          href={outsideUrls.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
        >
          <SiGithub className="md:text-lg md:ml-4 md:transition md:duration-700 md:easy-out md:hover:text-limeGreen" />
        </a>
        <a
          href={outsideUrls.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
        >
          <SiLinkedin className="md:text-lg md:transition md:duration-700 md:easy-out md:hover:text-limeGreen" />
        </a>
      </ul>
      <div>
        <HiMenu
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-2xl text-limeGreen cursor-pointer md:opacity-0"
        />
      </div>
    </nav>
  );
};

export default Navbar;
