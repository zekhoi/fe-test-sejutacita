/* eslint-disable @next/next/no-img-element */
import { HiBookmark } from "react-icons/hi";
import Link from "next/link";

type BookCardProps = {
  id: number;
  category: number;
  title: string;
  author: string;
  coverUrl: string;
};

const BookCard = ({ id, category, title, author, coverUrl }: BookCardProps) => {
  return (
    <Link href={`/explore/book?id=${id}`} passHref>
      <div className="max-w-[200px] min-h-max rounded-lg cursor-pointer mx-auto">
        <div className="relative">
          <img
            className="border rounded-lg shadow-md"
            src={coverUrl}
            alt={title}
          />
        </div>
        <div className="py-2">
          <h5 className="text-sm font-bold tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="text-xs text-gray-700">{author}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
