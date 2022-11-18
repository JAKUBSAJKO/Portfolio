import { BsArrowBarDown } from "react-icons/bs";

const ShowMoreButton = (props) => {
  return (
    <button
      {...props}
      className="mt-12 flex flex-col justify-center items-center text-xs text-white font-light"
    >
      show more
      <BsArrowBarDown className="text-lg" />
    </button>
  );
};

export default ShowMoreButton;
