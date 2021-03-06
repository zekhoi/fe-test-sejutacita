import clsx from "clsx";
import {
  HiChevronRight,
  HiChevronLeft,
  HiDotsHorizontal,
} from "react-icons/hi";

type PaginationProps = {
  currentPage: number;
  booksPerPage: number;
  totalBooks: number;
  paginate: (page: number) => void;
};

const Pagination = ({
  currentPage,
  booksPerPage,
  totalBooks,
  paginate,
}: PaginationProps) => {
  const pages: number[] = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pages.push(i);
  }
  console.log(pages);
  return (
    <ul
      className={clsx("inline-flex items-center space-x-1", {
        ["hidden"]: totalBooks < booksPerPage,
      })}
    >
      <li>
        <a
          onClick={() => paginate(currentPage - 1)}
          className={clsx(
            "inline-flex md:px-4 md:py-2 px-3 py-1.5 text-xs md:text-sm leading-tight rounded-l-md border cursor-pointer",
            "text-gray-500 bg-white hover:bg-gelap-400 hover:text-white",
            { ["hidden"]: currentPage <= pages[0] }
          )}
        >
          <HiChevronLeft className="w-4 h-4" />
        </a>
      </li>
      <li>
        <a
          onClick={() => paginate(pages[0])}
          className={clsx(
            "inline-flex md:px-4 md:py-2 px-3 py-1.5 text-xs md:text-sm leading-tight border cursor-pointer",
            "text-gray-500 bg-white hover:bg-gelap-400 hover:text-white",
            {
              ["hidden"]: currentPage <= pages[0],
            }
          )}
        >
          <HiDotsHorizontal className="w-4 h-4" />
        </a>
      </li>

      <li>
        <a
          onClick={() => paginate(currentPage - 1)}
          className={clsx(
            "inline-flex md:px-4 md:py-2 px-3 py-1.5 text-xs md:text-sm leading-tight border cursor-pointer",
            "text-gray-500 bg-white hover:bg-gelap-400 hover:text-white",
            { ["hidden"]: currentPage === pages[0] }
          )}
        >
          {currentPage - 1}
        </a>
      </li>
      <li>
        <a
          className={clsx(
            "md:px-4 md:py-2 px-3 py-1.5 text-xs md:text-sm leading-tight border",
            "text-white bg-gelap-500",
            { ["hidden"]: totalBooks <= booksPerPage }
          )}
        >
          {currentPage}
        </a>
      </li>
      <li>
        <a
          onClick={() => paginate(currentPage + 1)}
          className={clsx(
            "inline-flex md:px-4 md:py-2 px-3 py-1.5 text-xs md:text-sm leading-tight border cursor-pointer",
            "text-gray-500 bg-white hover:bg-gelap-400 hover:text-white",
            { ["hidden"]: currentPage === pages[pages.length - 1] }
          )}
        >
          {currentPage + 1}
        </a>
      </li>
      <li>
        <a
          onClick={() => paginate(pages[pages.length - 1])}
          className={clsx(
            "inline-flex md:px-4 md:py-2 px-3 py-1.5 text-xs md:text-sm leading-tight border cursor-pointer",
            "text-gray-500 bg-white hover:bg-gelap-400 hover:text-white",
            {
              ["hidden"]: currentPage >= pages[pages.length - 1],
            }
          )}
        >
          <HiDotsHorizontal className="w-4 h-4" />
        </a>
      </li>
      <li>
        <a
          onClick={() => paginate(currentPage + 1)}
          className={clsx(
            "inline-flex md:px-4 md:py-2 px-3 py-1.5 text-xs md:text-sm leading-tight border rounded-r-md cursor-pointer",
            "text-gray-500 bg-white hover:bg-gelap-400 hover:text-white",
            {
              ["hidden"]: currentPage >= pages[pages.length - 1],
            }
          )}
        >
          <HiChevronRight className="w-4 h-4" />
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
