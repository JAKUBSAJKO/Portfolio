import Link from "next/link";

import { BsArrowRightShort } from "react-icons/bs";

const HobbiesButton = ({
  href = "/home",
  title = "Hobbies Button",
  isVisible = true,
}) => {
  const visible =
    "mt-8 border-2 border-limeGreen text-xs text-limeGreen rounded-lg py-2 flex justify-center items-center md:mt-12 md:px-4 md:text-center lg:text-left lg:px-auto lg:text-base";

  const inVisible = `${visible} invisible`;

  return (
    <Link href={href} className={isVisible ? visible : inVisible}>
      <p>{title}</p>
      <BsArrowRightShort className="text-xl lg:text-2xl" />
    </Link>
  );
};

export default HobbiesButton;
