import Head from "next/head.js";
import { client } from "../../utils/ContentfulClient.js";
import Album from "../../components/album.js";
import { useState } from "react";
import ShowMoreButton from "../../components/showMoreBtn.js";

const Albums = ({ albums }) => {
  const [countAlbums, setCountAlbums] = useState(6);

  return (
    <div className="m-8 text-slate-500 font-sora md:m-16">
      <Head>
        <title>Jakub Sajko | Music Albums Collection</title>
        <link rel="icon" href="/logo.ico" type="image/x-icon" />
      </Head>
      <h1 className="text-center mt-8 mb-12 text-3xl font-bold md:text-4xl md:mx-8">
        My music albums collection
      </h1>
      <div className="px-8 flex flex-col justify-center items-center gap-12 md:flex-row md:flex-wrap md:gap-16 lg:mx-16">
        {albums.slice(0, countAlbums).map((album) => (
          <Album key={album.sys.id} album={album} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        {albums.length >= countAlbums ? (
          <ShowMoreButton onClick={() => setCountAlbums((prev) => prev + 6)} />
        ) : null}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await client.getEntries({ content_type: "album" });

  return {
    props: {
      albums: res.items,
    },
    revalidate: 1,
  };
};

export default Albums;
