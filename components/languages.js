import Image from "next/image";

import Poland from "../public/lang-pl.png";
import England from "../public/lang-eng.png";

const Languages = () => {
  return (
    <div className="mt-16">
      <h2 className="text-center m-12 text-2xl text-aluminium">Languages</h2>
      <div className="flex flex-col justify-center items-center gap-8 md:flex-row">
        <div className="lang-card">
          <div>
            <Image
              src={Poland}
              alt="polish language"
              width={64}
              height={64}
              className="shadow-2xl"
            />
          </div>
          <h3 className="mt-2">Polish Language</h3>
          <h4>Native</h4>
        </div>
        <div className="lang-card">
          <div>
            <Image
              src={England}
              alt="english language"
              width={64}
              height={64}
              className="shadow-2xl"
            />
          </div>
          <h3 className="mt-2">English Language</h3>
          <h4>B2</h4>
        </div>
      </div>
    </div>
  );
};

export default Languages;
