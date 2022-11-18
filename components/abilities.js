import { TiHtml5, TiCss3 } from "react-icons/ti";
import {
  SiBlender,
  SiFigma,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoReact } from "react-icons/io5";

const Abilities = () => {
  return (
    <div className="mt-16">
      <h2 className="text-center my-8 text-2xl text-aluminium">Abilities</h2>
      <div className="flex flex-col justify-center items-center gap-8 md:flex-row md:flex-wrap md:justify-around md:items-center md:px-32 lg:px-40 lg:gap-12">
        <div className="alilities-card">
          <TiHtml5 className="alilities-card-icon" />
        </div>
        <div className="alilities-card">
          <TiCss3 className="alilities-card-icon" />
        </div>
        <div className="alilities-card">
          <SiJavascript className="alilities-card-icon" />
        </div>
        <div className="alilities-card">
          <IoLogoReact className="alilities-card-icon" />
        </div>
        <div className="alilities-card">
          <TbBrandNextjs className="alilities-card-icon" />
        </div>
        <div className="alilities-card">
          <SiTailwindcss className="alilities-card-icon" />
        </div>
        <div className="alilities-card">
          <SiFigma className="alilities-card-icon" />
        </div>
        <div className="alilities-card">
          <SiBlender className="alilities-card-icon" />
        </div>
      </div>
    </div>
  );
};

export default Abilities;
