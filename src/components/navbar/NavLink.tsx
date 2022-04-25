import { NextRouter, useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";

type NavLinkProps = {
  url: string;
  children: React.ReactNode;
};

export default function Navlink({ url, children }: NavLinkProps) {
  const router: NextRouter = useRouter();
  const currentPath: string = router.pathname;

  return (
    <>
      <Link href={url} passHref>
        <a
          className={clsx(
            "block py-2 pr-4 pl-3 text-gelap-700 font-semibold bg-white border-b-2 hover:border-gelap-500  md:p-0",
            {
              ["border-gelap-500"]: currentPath === url,
              ["border-transparent"]: currentPath !== url,
            }
          )}
        >
          {children}
        </a>
      </Link>
    </>
  );
}
