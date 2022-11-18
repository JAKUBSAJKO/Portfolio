import Image from "next/image";
import { useRouter } from "next/router";
import { routes } from "../routes/routes";

const PageNotFound = () => {
  const { push } = useRouter();
  return (
    <div className="font-sora text-slate-500 my-8 w-full h-auto flex justify-center items-center md:h-[calc(100vh_-_48px)] md:m-auto">
      <div className="flex flex-col items-center gap-6 lg:gap-12 md:flex-row">
        <Image
          src="/pageNotFound.png"
          alt="Page not found"
          width={316}
          height={316}
          priority
          className="basis-1/3"
        />
        <div className="basis-2/3 flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl font-normal md:text-4xl">Sorry!</h1>
          <p className="mx-12 text-center text-sm font-medium md:text-base md:mx-auto">
            This page is missing or has been removed.
          </p>
          <button
            onClick={() => push(routes.home)}
            className="text-sm text-steelGrey px-4 py-2 bg-limeGreen rounded-lg hover:shadow-md hover:shadow-slate-500"
          >
            Go to homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
