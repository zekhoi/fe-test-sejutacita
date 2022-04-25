/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import Head from "next/head";
import Box from "@/components/skeleton/Box";
import { Book } from "@/types/book";
import SkeletonList from "@/components/list/SkeletonList";
import BookCard from "@/components/card/BookCard";
import Pagination from "@/components/pagination/Pagination";
import Card from "@/components/skeleton/Card";
import CategoryCard from "@/components/card/CategoryCard";

import { useDispatch, useSelector } from "react-redux";
import {
  ready,
  update,
  getAllCategory,
  currentCategory,
} from "@/store/category";
import {
  setLoading,
  searchBook,
  setPage,
  getAllBookBooks,
  getBooks,
} from "@/store/book";

import { CategoryState } from "@/types/category";

const Explore: NextPage = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state: any) => state.category);
  const {
    isReady,
    pagination: { book_per_page, current_page },
  } = useSelector((state: any) => state.book);
  const category = useSelector(currentCategory);
  const books = useSelector(getBooks);

  const indexOfLastBook = current_page * book_per_page;
  const indexOfFirstBook = indexOfLastBook - book_per_page;
  const showedBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  useEffect(() => {
    if (!categories.length) {
      getAllCategory(dispatch);
    }
  }, [categories]);
  useEffect(() => {
    if (category) {
      dispatch(setPage({ page: 1 }));
      getAllBookBooks(dispatch, { categoryId: category.id });
    }
  }, [category]);
  const changeCategory = (id: number) => {
    dispatch(ready());
    dispatch(update({ choose: id }));
  };
  const searchBooks = (e: any) => {
    dispatch(setLoading());
    dispatch(setPage({ page: 1 }));
    dispatch(searchBook({ keyword: e }));
  };
  const paginate = (page: number) => {
    dispatch(setPage({ page }));
  };
  return (
    <>
      <Head>
        <title>Explore | Coding Technical Test</title>
        <meta name="description" content="Made a website using React.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <section>
          <div className="container flex flex-col px-2 py-4 mx-auto gap-y-6">
            <div className="flex flex-col gap-y-3">
              <h2 className="font-bold md:text-xl text-gelap-700">
                Explore Category
              </h2>
              <div className="flex flex-row gap-3 overflow-x-auto no-scrollbar">
                {categories.length > 0 ? (
                  categories.map((category: CategoryState) => (
                    <CategoryCard
                      key={"categorycard" + category.id}
                      category={category}
                      select={
                        !category.isActive
                          ? () => {
                              changeCategory(category.id);
                            }
                          : undefined
                      }
                    />
                  ))
                ) : (
                  <SkeletonList name="categorybox" total={6}>
                    <Box />
                  </SkeletonList>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              <h2 className="font-bold md:text-xl text-gelap-700">
                Books in {category?.name}
              </h2>
              <input
                className="w-full h-10 p-3 text-sm bg-white border-2 rounded dark:bg-dark focus:border-gelap-500 focus:outline-none"
                type="search"
                name="search"
                placeholder="Search . . ."
                autoComplete="off"
                onChange={(e) => searchBooks(e.target.value)}
              />
              <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
                {showedBooks.length > 0 ? (
                  showedBooks.map((book: Book) => (
                    <BookCard
                      id={book.id}
                      key={book.id}
                      category={book.category_id}
                      title={book.title}
                      author={book.authors[0]}
                      coverUrl={book.cover_url}
                    />
                  ))
                ) : !isReady ? (
                  <SkeletonList name="bookcard" total={12}>
                    <Card />
                  </SkeletonList>
                ) : (
                  <div className="w-full col-span-6 py-6 text-center">
                    <span className="font-semibold text-center text-gelap-700 col-span-full">
                      No Item
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center py-2">
              {showedBooks && (
                <Pagination
                  currentPage={current_page}
                  booksPerPage={book_per_page}
                  totalBooks={books.length}
                  paginate={paginate}
                />
              )}
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
};

export default Explore;
