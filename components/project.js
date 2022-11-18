import Image from "next/image";

import { SiGithub } from "react-icons/si";

const Project = ({ project }) => {
  return (
    <div className="relative h-36 mx-8 mb-24 rounded-lg group md:h-96 md:mx-auto md:last:mb-0 lg:mx-32 lg:mb-24 lg::last:mb-4 xl:h-[28rem]">
      <Image
        src={`http:${project.fields.photo.fields.file.url}`}
        alt={project.fields.title}
        fill
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="absolute text-center w-full -bottom-8 text-white overflow-auto lg:w-auto lg:px-8 lg:py-4 lg:rounded-lg lg:bg-steelGrey lg:bottom-4 lg:left-12 lg:text-xs lg:font-normal lg:uppercase lg:invisible lg:group-hover:visible">
        {project.fields.title}
      </div>
      <a
        href={project.fields.github}
        className="absolute  left-1/2 -translate-x-1/2 -bottom-16 text-2xl text-white overflow-auto lg:left-auto lg:p-2 lg:rounded-lg lg:bg-steelGrey lg:text-white lg:bottom-4 lg:right-12 lg:text-xl lg:font-normal lg:invisible lg:group-hover:visible"
      >
        <SiGithub />
      </a>
    </div>
  );
};

export default Project;
