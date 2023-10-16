import Head from "next/head";
import { useState } from "react";
import Book from "../../components/book";
import ShowMoreButton from "../../components/showMoreBtn";
import { client } from "../../utils/ContentfulClient";

const Books = ({ books }) => {
  const [countBooks, setCountBooks] = useState(8);
  return (
    <div className="m-8 text-slate-500 font-sora md:m-16">
      <Head>
        <title>Jakub Sajko | Books Collection</title>
        <link rel="icon" href="/logo.ico" type="image/x-icon" />
      </Head>
      <h1 className="text-center mt-8 mb-12 text-3xl font-bold md:text-4xl md:mx-8">My books collection</h1>
      <div>
        <div className="flex flex-wrap justify-around items-center gap-8 md:mx-8 lg:mx-auto lg:max-w-5xl">
          {books.slice(0, countBooks).map((book) => (
            <Book key={book.sys.id} book={book} />
          ))}
        </div>
        <div className="w-full flex justify-center">
          {books.length >= countBooks ? <ShowMoreButton onClick={() => setCountBooks((prev) => prev + 6)} /> : null}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await client.getEntries({ content_type: "book" });

  return {
    props: {
      books: res.items,
    },
    revalidate: 1,
  };
};

export default Books;
