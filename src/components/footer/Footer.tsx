import { NextPage } from "next";

const Footer: NextPage = () => {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="px-4 bg-white md:flex md:items-center md:justify-between md:px-4 py-4">
      <div className="container flex flex-wrap justify-center items-center mx-auto">
        <span className="text-sm text-gray-500 text-center">
          © {thisYear}{" "}
          <a href="https://sejutacita.id" className="hover:underline">
            SejutaCita
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
