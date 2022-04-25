/* eslint-disable @next/next/no-img-element */
import { NextRouter, useRouter } from "next/router";
import DefaultLayout from "@/layouts/DefaultLayout";
import Head from "next/head";
import { HiClock, HiBookOpen, HiBookmark, HiPlay } from "react-icons/hi";
import { Book, Section } from "@/types/book";
import { useState, useEffect } from "react";
import Detail from "@/components/skeleton/Detail";
import { addBookmark, removeBookmark } from "@/utils/bookmark";
import { BackButton } from "@/components/button/BackButton";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const router: NextRouter = useRouter();
  const { id } = router.query;
  const thisBook = useSelector((state: any) => state.book.books)[id as string];
  const [isLoading, setIsLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  useEffect(() => {
    if (!router.isReady) return;
    if (!id || !thisBook) {
      setIsLoading(true);
      router.push("/explore");
      return;
    }
    const storage = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    if (storage.some((book: Book) => book.id === thisBook.id)) {
      setIsBookmarked(true);
    }
    setIsLoading(false);
  }, [id, thisBook, router]);

  return (
    <>
      <Head>
        <title>{thisBook?.title || "Coding Technical Test"}</title>
        <meta name="description" content="Made a website using React.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <section>
          <div className="container flex flex-col px-2 mx-auto md:py-4 gap-y-4">
            <div className="w-full">
              <BackButton />
              {!isLoading ? (
                <div className="flex flex-col items-center justify-center p-4 md:items-start md:flex-row gap-x-10 gap-y-4">
                  <div className="flex flex-col items-center w-full space-y-3 md:w-auto">
                    <img
                      className="max-w-[200px] md:max-w-[300px] shadow-xl rounded mt-2 border"
                      src={thisBook?.cover_url}
                      alt={thisBook?.title}
                    />
                    <div className="flex justify-between w-full gap-x-3">
                      <button className="inline-flex items-center justify-center w-1/2 px-4 py-2 text-base font-medium text-center border rounded-md text-gelap-700 border-gelap-500 bg-gray-50 hover:text-white hover:bg-gelap-500 focus:outline-none">
                        <HiBookOpen className="w-4 h-4 mr-1" />
                        Read
                      </button>
                      {isBookmarked ? (
                        <button
                          onClick={() =>
                            removeBookmark(thisBook, () =>
                              setIsBookmarked(false)
                            )
                          }
                          className="inline-flex items-center justify-center w-1/2 px-4 py-2 text-base font-medium text-center rounded-md text-gelap-700 bg-terang-500 hover:bg-terang-400 focus:outline-none"
                        >
                          <HiBookmark className="w-4 h-4 mr-1" />
                          Remove
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            addBookmark(thisBook, () => setIsBookmarked(true))
                          }
                          className="inline-flex items-center justify-center w-1/2 px-4 py-2 text-base font-medium text-center text-white rounded-md bg-gelap-500 hover:bg-gelap-400 focus:outline-none"
                        >
                          <HiBookmark className="w-4 h-4 mr-1" />
                          Bookmark
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex-col max-w-xl space-y-4 text-gelap-700">
                    <h1 className="text-lg font-bold tracking-wider md:text-3xl">
                      {thisBook?.title}
                    </h1>
                    <div className="text-base">
                      <h1 className="font-semibold">Authors :</h1>
                      <ul className="list-disc list-inside">
                        {thisBook?.authors.map((author: any) => (
                          <li key={"author-" + author}>{author}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="inline-flex w-full py-2 space-x-5 text-sm border-y">
                      <h5 className="inline-flex items-center font-semibold">
                        <HiPlay className="w-5 h-5 mr-2" />{" "}
                        {thisBook?.sections?.length} Chapters
                      </h5>
                      <h5 className="inline-flex items-center font-semibold">
                        <HiClock className="w-5 h-5 mr-2" />
                        {Math.floor(thisBook?.audio_length / 60)} Minutes
                      </h5>
                    </div>
                    <div className="space-y-1">
                      <h5 className="text-lg font-semibold">
                        What&apos;s it about?
                      </h5>
                      <p className="text-sm">{thisBook?.description}</p>
                    </div>
                    <div className="space-y-1">
                      <h5 className="text-lg font-semibold">
                        What&apos;s inside?
                      </h5>
                      <div className="space-y-3">
                        <ol className="ml-4 list-decimal divide-y text-gelap-500 marker:font-semibold">
                          {thisBook?.sections?.map((section: Section) => (
                            <li
                              key={section?.title + section?.content}
                              className="py-2"
                            >
                              <h5 className="inline-flex ml-2 text-base font-semibold">
                                {section?.title}
                              </h5>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Detail />
              )}
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
};

export default BookDetails;
