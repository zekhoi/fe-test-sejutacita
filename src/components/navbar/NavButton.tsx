import { NextRouter, useRouter } from "next/router";
import { HiLibrary } from "react-icons/hi";
import Link from "next/link";
import clsx from "clsx";

type NavButtonkProps = {
  url: string;
  children: React.ReactNode;
};

const NavButton = ({ url, children }: NavButtonkProps) => {
  const router: NextRouter = useRouter();
  const currentPath: string = router.pathname;
  return (
    <Link href="/library" passHref>
      <a
        className={clsx(
          "inline-flex items-center focus:outline-none rounded-md text-sm py-1.5 px-3 md:px-5 md:py-2.5 text-center mr-3 md:mr-0",
          {
            ["bg-gelap-500 hover:bg-gelap-400 text-white font-medium"]:
              currentPath !== url,
            ["bg-terang-500 text-gelap-500 font-bold"]: currentPath === url,
          }
        )}
      >
        <HiLibrary className="w-5 h-5 md:mr-1" />
        <span className="hidden md:inline-flex">{children}</span>
      </a>
    </Link>
  );
};

export default NavButton;
