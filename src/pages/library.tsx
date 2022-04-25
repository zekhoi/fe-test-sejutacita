/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import Head from "next/head";
import DefaultLayout from "@/layouts/DefaultLayout";
import BookCard from "@/components/card/BookCard";
import Card from "@/components/skeleton/Card";
import { useState, useEffect } from "react";

import { Book } from "@/types/book";
import { removeBookmark } from "@/utils/bookmark";
import { HiBookmark } from "react-icons/hi";

const Bookmark: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [bookmarks, setBookmarks] = useState<Book[]>([]);
  const updateBookmark = () => {
    setIsLoading(true);
    setBookmarks(JSON.parse(localStorage.getItem("bookmarks") || "[]"));
    setIsLoading(false);
  };

  useEffect(() => {
    updateBookmark();
  }, []);
  return (
    <>
      <Head>
        <title>Bookmark | Coding Technical Test</title>
        <meta name="description" content="Made a website using React.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        <section>
          <div className="container flex flex-col px-2 py-4 mx-auto gap-y-4">
            <h2 className="text-2xl font-bold 2xl:text-3xl text-gelap-700">
              My Bookmark
            </h2>
            <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              {bookmarks.length > 0 && !isLoading ? (
                bookmarks.map((book) => (
                  <div
                    key={book.id}
                    className="flex flex-col items-center justify-between"
                  >
                    <BookCard
                      id={book.id}
                      category={book.category_id}
                      title={book.title}
                      author={book.authors[0]}
                      coverUrl={book.cover_url}
                    />
                    <button
                      onClick={() =>
                        removeBookmark(book, () => updateBookmark())
                      }
                      className="inline-flex items-center justify-center w-full max-w-[200px] px-4 py-2 text-base font-medium text-center rounded-md text-gelap-700 bg-terang-500 hover:bg-terang-400 focus:outline-none"
                    >
                      <HiBookmark className="w-4 h-4 mr-1" />
                      Remove
                    </button>
                  </div>
                ))
              ) : isLoading ? (
                <>
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </>
              ) : (
                <div className="w-full col-span-6 py-6 text-center">
                  <span className="font-semibold text-center text-gelap-700 col-span-full">
                    No Item
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
};

export default Bookmark;
