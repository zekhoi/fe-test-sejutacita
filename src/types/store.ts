import { BookState } from "@/types/book";
import { InitialCategoryState } from "@/types/category";

export interface StoreState {
  category: InitialCategoryState;
  book: BookState;
}
