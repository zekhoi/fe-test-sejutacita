import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Navlink from "./NavLink";
import NavButton from "./NavButton";
import Image from "next/image";
import clsx from "clsx";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="px-2 py-6 bg-white border-gray-200">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" passHref>
          <a className="flex items-center">
            <div className="relative w-32 h-12">
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/logo.png"
                className="mr-3"
                alt="Sejutacita Logo"
                priority
              />
            </div>
          </a>
        </Link>

        <div className="flex md:order-2">
          <NavButton url="/library">Library</NavButton>
          <button
            onClick={() => toggleOpen()}
            type="button"
            className="inline-flex items-center p-2 text-sm bg-gray-100 rounded-lg text-gelap-500 md:hidden focus:outline-none"
          >
            {openMenu ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
        <div
          className={clsx(
            "justify-between items-center w-full md:flex md:w-auto md:order-1",
            { ["hidden"]: !openMenu }
          )}
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Navlink url="/">Home</Navlink>
            </li>
            <li>
              <Navlink url="/explore">Explore</Navlink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
