import Image from "next/image";

const Book = ({ book }) => {
  return (
    <div className="w-96 flex border-2 border-slate-500">
      <Image
        src={`http:${book.fields.bookCover.fields.file.url}`}
        alt={book.fields.title}
        width={128}
        height={264}
        className="basis-1/3 border-2 border-r-4 border-slate-500"
      />
      <div className="basis-2/3 flex flex-col justify-center items-center p-2 md:p-4">
        <h2 className="text-center font-semibold text-sm md:text-base">
          {book.fields.title}
        </h2>
        <h3 className="mt-2 text-center text-xs md:text-sm">
          {book.fields.author}
        </h3>
      </div>
    </div>
  );
};

export default Book;
