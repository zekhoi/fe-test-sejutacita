import clsx from "clsx";
import router from "next/router";
import { HiArrowLeft } from "react-icons/hi";

export const BackButton = () => {
  return (
    <button
      onClick={() => router.back()}
      className={clsx(
        "inline-flex items-center focus:outline-none rounded-md text-base py-2 px-4 text-center w-24 justify-center",

        "bg-gelap-500 hover:bg-gelap-400 text-white font-medium"
      )}
    >
      <HiArrowLeft className="w-4 h-4 mr-1" />
      Back
    </button>
  );
};
