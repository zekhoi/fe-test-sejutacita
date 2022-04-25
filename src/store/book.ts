import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBooks } from "@/services/fetch";
import { BookState, Book } from "@/types/book";

const initialState: BookState = {
  books: [],
  books_to_show: [],
  isReady: true,
  pagination: {
    keyword: "",
    book_per_page: 12,
    current_page: 1,
  },
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setLoading(state) {
      if (state.isReady) {
        state.isReady = false;
      }
    },
    receive(state, action: PayloadAction<any[]>) {
      if (!state.isReady) {
        const books = action.payload;
        for (const key of books) {
          state.books[key.id] = key;
        }
        state.isReady = true;
      }
    },
    removeBooks(state) {
      state.books = [];
    },
    searchBook(state, action: PayloadAction<{ keyword: string }>) {
      state.pagination.keyword = action.payload.keyword;
      state.isReady = true;
    },
    setPage(state, action: PayloadAction<{ page: number }>) {
      state.pagination.current_page = action.payload.page;
    },
  },
});

const getAllBookBooks = async (
  dispatch: Function,
  params: {
    categoryId: number;
  }
) => {
  dispatch(setLoading());
  dispatch(removeBooks());
  const data = await fetchBooks(params);
  if (data.length > 0) {
    dispatch(receive(data));
  } else {
    dispatch(setLoading());
  }
};

const getBooks = createSelector(
  (state: any) => state.book,
  ({ books, pagination: { keyword } }) => {
    const found = books.filter((item: Book) => {
      if (keyword === "") {
        return item;
      } else if (
        item.title.toLowerCase().includes(keyword.toLowerCase()) ||
        item.authors.some((author: string) =>
          author.toLowerCase().includes(keyword.toLowerCase())
        )
      ) {
        return item;
      }
    });
    return found;
  }
);

export { getAllBookBooks, getBooks };
export const { setLoading, receive, removeBooks, searchBook, setPage } =
  bookSlice.actions;
export default bookSlice.reducer;
