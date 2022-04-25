import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category";
import bookReducer from "./book";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    book: bookReducer,
  },
});

export { store };
