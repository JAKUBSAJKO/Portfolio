import { useState } from "react";

import { IoBasketballSharp } from "react-icons/io5";
import { HiMusicNote } from "react-icons/hi";
import { ImBooks } from "react-icons/im";
import HobbiesButton from "./hobbiesBtn";
import { routes } from "../routes/routes";
import { outsideUrls } from "../constants";

const Hobbies = () => {
  const [hobby, setHobby] = useState("music");

  return (
    <div className="mt-16 lg:max-w-5xl mx-auto">
      <h2 className="text-center mt-12 text-2xl text-aluminium">Hobbies</h2>
      <div className="flex flex-col md:flex-row">
        <div className="basis-3/5 py-8 text-white md:p-8">
          <h3 className="text-3xl font-semibold lg:text-4xl">
            My interests outside of creating web applications
          </h3>
          {hobby === "music" ? (
            <div className="hobbies-left-col">
              <p className="hobbies-left-col-text">
                I am a singer and guitarist in the{" "}
                <a
                  href={outsideUrls.band}
                  className="text-limeGreen cursor-pointer"
                >
                  Peron 18.
                </a>{" "}
                band. I also compose and write lyrics for this band. To improve
                my vocal skills, I attend vocal classes.
              </p>
              <HobbiesButton
                href={routes.album}
                title="Check out my music albums collection"
              />
            </div>
          ) : hobby === "basketball" ? (
            <div className="hobbies-left-col">
              <p className="hobbies-left-col-text">
                Since I was 12 years old I interest of basketball. I am a fan of{" "}
                <span className="text-limeGreen">Los Angeles Lakers</span> and{" "}
                <span className="text-limeGreen">Trefl Sopot</span>.{" "}
                <span className="text-limeGreen">Kobe Bryant</span> is and
                always will be my favorite basketball player.
              </p>
              <HobbiesButton isVisible={false} />
            </div>
          ) : (
            <div className="hobbies-left-col">
              <p className="hobbies-left-col-text">
                My favorite genre is definitely{" "}
                <span className="text-limeGreen">crime novels</span>.{" "}
                <span className="text-limeGreen">Ruth Ware</span> and{" "}
                <span className="text-limeGreen">Stephen King</span> are my
                favorite authors whose style suits me. If I don&apos;t have time
                for books, I try to choose audiobooks.
              </p>
              <HobbiesButton
                href={routes.books}
                title="Check out my books collection"
              />
            </div>
          )}
        </div>
        <div className="basis-2/5 flex flex-col justify-center gap-4 text-lg font-medium text-white md:px-8">
          <div
            className={
              hobby === "music" ? "group bg-aluminium rounded-xl" : "group"
            }
            onClick={() => setHobby("music")}
          >
            <div className="hobbies-card group">
              <div className="hobbies-card-icon">
                <HiMusicNote className="hobbies-card-icon-detail" />
              </div>
              <p>Music</p>
            </div>
          </div>
          <div
            className={
              hobby === "basketball" ? "group bg-aluminium rounded-xl" : "group"
            }
            onClick={() => setHobby("basketball")}
          >
            <div className="hobbies-card group">
              <div className="hobbies-card-icon">
                <IoBasketballSharp className="hobbies-card-icon-detail" />
              </div>
              <p>Basketball</p>
            </div>
          </div>
          <div
            className={
              hobby === "books" ? "group bg-aluminium rounded-xl" : "group"
            }
            onClick={() => setHobby("books")}
          >
            <div className="hobbies-card group">
              <div className="hobbies-card-icon">
                <ImBooks className="hobbies-card-icon-detail" />
              </div>
              <p>Books</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
