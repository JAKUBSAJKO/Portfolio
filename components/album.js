import Image from "next/image";
import { FaSpotify } from "react-icons/fa";

const Album = ({ album }) => {
  return (
    <div className="w-48 pb-8 border-2 border-slate-500 rounded-lg flex flex-col items-center relative overflow-hidden group md:w-52">
      <Image
        src={`http:${album.fields.frontCover.fields.file.url}`}
        alt={album.fields.frontCover.fields.file.fileName}
        width={232}
        height={232}
      />
      <h2 className="mt-6 px-2 text-center active:bg-grey-500 font-semibold md:px-0">
        {album.fields.title}
      </h2>
      <h3 className="text-center text-sm">{album.fields.band}</h3>
      <a
        href={album.fields.spotify}
        target="blank"
        className="invisible absolute md:top-0 md:left-0 md:group-hover:visible md:group-hover:top-1/3 md:group-hover:left-1/2 md:group-hover:transform md:group-hover:-translate-x-1/2 md:group-hover:-translate-y-1/3"
      >
        <FaSpotify className="text-5xl p-1 text-spotify bg-black rounded-lg" />
      </a>
    </div>
  );
};

export default Album;
